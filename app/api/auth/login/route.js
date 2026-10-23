// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import { verifyUser, createSession, isSubscribed } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    const user = await verifyUser(email, password);
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    await createSession(user);
    const subscribed = await isSubscribed(user.email);
    return NextResponse.json({ success: true, user: { ...user, isSubscribed: subscribed } });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ message: 'Server error during login.' }, { status: 500 });
  }
}
