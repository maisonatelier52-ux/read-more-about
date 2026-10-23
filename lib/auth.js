// lib/auth.js
import crypto from 'crypto';
import { cookies } from 'next/headers';
import { getDb } from '@/lib/mongodb';

const SESSION_COOKIE = 'rma_session';
const SESSION_DAYS = 30;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Password hashing (scrypt + random salt) ────────────────────────────────
export function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password, stored) {
  try {
    const [scheme, salt, hash] = String(stored).split('$');
    if (scheme !== 'scrypt' || !salt || !hash) return false;
    const expected = Buffer.from(hash, 'hex');
    const actual = crypto.scryptSync(password, salt, expected.length);
    return crypto.timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}

const sha256 = (v) => crypto.createHash('sha256').update(v).digest('hex');

// ── Users ──────────────────────────────────────────────────────────────────
export async function registerUser(username, email, password) {
  const cleanUsername = String(username || '').trim();
  const cleanEmail = String(email || '').trim().toLowerCase();
  const pass = String(password || '');

  if (cleanUsername.length < 3) return { error: 'Username must be at least 3 characters.' };
  if (!EMAIL_RE.test(cleanEmail)) return { error: 'Please enter a valid email address.' };
  if (pass.length < 6) return { error: 'Password must be at least 6 characters.' };

  const db = await getDb();
  const users = db.collection('users');
  await users.createIndex({ email: 1 }, { unique: true });

  if (await users.findOne({ email: cleanEmail })) {
    return { error: 'An account with this email already exists.' };
  }

  const user = {
    username: cleanUsername,
    email: cleanEmail,
    passwordHash: hashPassword(pass),
    createdAt: new Date(),
  };

  try {
    const { insertedId } = await users.insertOne(user);
    return { user: { id: String(insertedId), username: user.username, email: user.email } };
  } catch (err) {
    if (err?.code === 11000) return { error: 'An account with this email already exists.' };
    throw err;
  }
}

export async function verifyUser(email, password) {
  const cleanEmail = String(email || '').trim().toLowerCase();
  const db = await getDb();
  const user = await db.collection('users').findOne({ email: cleanEmail });
  if (!user || !verifyPassword(String(password || ''), user.passwordHash)) return null;
  return { id: String(user._id), username: user.username, email: user.email };
}

// ── Sessions (HTTP-only cookie, token hash stored in MongoDB) ──────────────
export async function createSession(user) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  const db = await getDb();
  const sessions = db.collection('sessions');
  await sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 });
  await sessions.insertOne({
    tokenHash: sha256(token),
    userId: user.id,
    username: user.username,
    email: user.email,
    createdAt: new Date(),
    expiresAt,
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  });
}

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return null;

    const db = await getDb();
    const session = await db.collection('sessions').findOne({
      tokenHash: sha256(token),
      expiresAt: { $gt: new Date() },
    });
    if (!session) return null;

    return { id: session.userId, username: session.username, email: session.email };
  } catch (err) {
    console.error('getCurrentUser error:', err);
    return null;
  }
}

export async function destroySession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (token) {
      const db = await getDb();
      await db.collection('sessions').deleteOne({ tokenHash: sha256(token) });
    }
    cookieStore.delete(SESSION_COOKIE);
  } catch (err) {
    console.error('destroySession error:', err);
  }
}

// ── Subscribers ────────────────────────────────────────────────────────────
export async function isSubscribed(email) {
  const db = await getDb();
  const sub = await db.collection('subscribers').findOne({ email: String(email).trim().toLowerCase() });
  return !!sub;
}

export async function addSubscriber({ name, email, userId }) {
  const cleanEmail = String(email).trim().toLowerCase();
  const db = await getDb();
  const subs = db.collection('subscribers');
  await subs.createIndex({ email: 1 }, { unique: true });

  const result = await subs.updateOne(
    { email: cleanEmail },
    {
      $setOnInsert: {
        name,
        email: cleanEmail,
        userId,
        unsubscribeToken: crypto.randomBytes(24).toString('hex'),
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );
  const doc = await subs.findOne({ email: cleanEmail }, { projection: { unsubscribeToken: 1 } });
  return { created: result.upsertedCount > 0, unsubscribeToken: doc?.unsubscribeToken };
}
