// lib/newsletter.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import { getDb } from '@/lib/mongodb';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.read-more-about.com').replace(/\/$/, '');
const SITE_NAME = 'Read More About';

// "DD/MM/YYYY" → Date
function parseDate(str) {
  if (!str) return new Date(0);
  if (str.includes('/')) {
    const [d, m, y] = str.split('/');
    return new Date(Number(y), Number(m) - 1, Number(d));
  }
  return new Date(str);
}

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Read the JSON from disk at send time so newly added articles are picked up
export function getLatestArticle() {
  const file = path.join(process.cwd(), 'public', 'data', 'articles.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

  const all = Object.entries(data).flatMap(([category, posts]) =>
    posts.map((p) => ({ ...p, category: p.category || category, _date: parseDate(p.date) }))
  );
  if (!all.length) return null;

  all.sort((a, b) => b._date - a._date || (b.id || 0) - (a.id || 0));
  const a = all[0];

  return {
    slug: a.slug,
    title: a.title,
    description: a.excerpt || a.metaDescription || '',
    image: a.image ? `${SITE_URL}${a.image}` : null,
    imageAlt: a.imageAlt || a.title,
    url: `${SITE_URL}/${a.category}/${a.slug}/`,
    category: a.category,
    date: a.date,
  };
}

function buildEmail(article, subscriber) {
  const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe/?token=${subscriber.unsubscribeToken}`;
  const name = esc(subscriber.name || 'there');

  const html = `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="padding:20px 24px;text-align:center;border-bottom:3px solid #dc2626;">
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:bold;color:#dc2626;">ReadMore</span>
        </td></tr>
        <tr><td style="padding:20px 24px 0;color:#4b5563;font-size:14px;">Hi ${name}, here is today&rsquo;s latest story:</td></tr>
        ${
          article.image
            ? `<tr><td style="padding:16px 24px 0;"><a href="${esc(article.url)}"><img src="${esc(article.image)}" alt="${esc(article.imageAlt)}" width="552" style="display:block;width:100%;max-width:552px;height:auto;border-radius:6px;border:0;"></a></td></tr>`
            : ''
        }
        <tr><td style="padding:16px 24px 0;">
          <span style="font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:#dc2626;">${esc(article.category)}</span>
          <h1 style="margin:6px 0 0;font-size:24px;line-height:1.3;color:#111827;"><a href="${esc(article.url)}" style="color:#111827;text-decoration:none;">${esc(article.title)}</a></h1>
        </td></tr>
        <tr><td style="padding:12px 24px 0;font-size:15px;line-height:1.6;color:#374151;">${esc(article.description)}</td></tr>
        <tr><td style="padding:20px 24px 28px;">
          <a href="${esc(article.url)}" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:12px 24px;border-radius:6px;">READ FULL ARTICLE</a>
        </td></tr>
        <tr><td style="padding:16px 24px;background:#f9fafb;font-size:12px;color:#6b7280;text-align:center;">
          You&rsquo;re receiving this because you subscribed at ${SITE_NAME}.<br>
          <a href="${esc(unsubscribeUrl)}" style="color:#6b7280;">Unsubscribe</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = `Hi ${subscriber.name || 'there'},\n\n${article.title}\n\n${article.description}\n\nRead the full article: ${article.url}\n\nUnsubscribe: ${unsubscribeUrl}`;
  return { html, text };
}

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Missing SMTP_HOST / SMTP_USER / SMTP_PASS environment variables.');
  }
  const port = Number(SMTP_PORT || 587);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

/**
 * Welcome / confirmation email sent right after someone subscribes.
 * Never throws — a mail failure must not break the subscription itself.
 */
export async function sendWelcomeEmail({ name, email, unsubscribeToken }) {
  try {
    const transporter = createTransport();
    const from = process.env.MAIL_FROM || process.env.SMTP_USER;
    const safeName = esc(name || 'there');
    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe/?token=${unsubscribeToken}`;
    const subject = `You're subscribed to ${SITE_NAME}!`;

    const html = `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
        <tr><td style="padding:24px;text-align:center;border-bottom:3px solid #dc2626;">
          <span style="font-family:Georgia,'Times New Roman',serif;font-size:34px;font-weight:bold;color:#dc2626;">ReadMore</span>
        </td></tr>
        <tr><td style="padding:32px 28px 8px;text-align:center;">
          <div style="display:inline-block;width:56px;height:56px;line-height:56px;border-radius:50%;background:#dcfce7;color:#16a34a;font-size:30px;font-weight:bold;">&#10003;</div>
          <h1 style="margin:16px 0 0;font-size:26px;color:#111827;">Successfully subscribed!</h1>
        </td></tr>
        <tr><td style="padding:12px 28px 0;font-size:15px;line-height:1.7;color:#374151;text-align:center;">
          Hi ${safeName}, thank you for subscribing to <strong>${SITE_NAME}</strong>.<br>
          You&rsquo;re now on our list &mdash; every day we&rsquo;ll send the latest news article straight to this inbox.
        </td></tr>
        <tr><td style="padding:20px 28px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:6px;">
            <tr><td style="padding:16px 20px;font-size:14px;line-height:1.9;color:#374151;">
              <span style="color:#16a34a;font-weight:bold;">&#10003;</span>&nbsp; One top story delivered daily<br>
              <span style="color:#16a34a;font-weight:bold;">&#10003;</span>&nbsp; Politics, business, technology, world &amp; more<br>
              <span style="color:#16a34a;font-weight:bold;">&#10003;</span>&nbsp; Unsubscribe anytime with one click
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 28px 32px;text-align:center;">
          <a href="${SITE_URL}/" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:12px 28px;border-radius:6px;">VISIT READMORE</a>
        </td></tr>
        <tr><td style="padding:16px 24px;background:#f9fafb;font-size:12px;color:#6b7280;text-align:center;">
          You received this email because you subscribed at ${SITE_NAME}.<br>
          <a href="${esc(unsubscribeUrl)}" style="color:#6b7280;">Unsubscribe</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

    const text = `Hi ${name || 'there'},\n\nYou have successfully subscribed to ${SITE_NAME}!\nEvery day we'll send the latest news article to this inbox.\n\nVisit us: ${SITE_URL}/\n\nUnsubscribe: ${unsubscribeUrl}`;

    await transporter.sendMail({ from: `"${SITE_NAME}" <${from}>`, to: email, subject, html, text });
    return true;
  } catch (err) {
    console.error('[newsletter] welcome email failed:', err.message);
    return false;
  }
}

// Date key (YYYY-MM-DD) in the newsletter timezone, used to send max once per day
function todayKey() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: process.env.NEWSLETTER_TZ || 'America/New_York',
  }).format(new Date());
}

/**
 * Sends the latest article to every subscriber.
 * - once per subscriber per day
 * - skips a subscriber if they already received this exact article
 *   (set NEWSLETTER_ALLOW_REPEAT=true to resend the same article)
 */
export async function sendDailyNewsletter() {
  const article = getLatestArticle();
  if (!article) return { sent: 0, skipped: 0, failed: 0, reason: 'no articles' };

  const db = await getDb();
  const subs = await db.collection('subscribers').find({}).toArray();
  if (!subs.length) return { sent: 0, skipped: 0, failed: 0, article: article.slug };

  const transporter = createTransport();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const day = todayKey();
  const allowRepeat = process.env.NEWSLETTER_ALLOW_REPEAT === 'true';

  let sent = 0, skipped = 0, failed = 0;

  for (const sub of subs) {
    if (sub.lastSentDay === day || (!allowRepeat && sub.lastSentSlug === article.slug)) {
      skipped++;
      continue;
    }
    try {
      const { html, text } = buildEmail(article, sub);
      await transporter.sendMail({
        from: `"${SITE_NAME}" <${from}>`,
        to: sub.email,
        subject: article.title,
        html,
        text,
      });
      await db.collection('subscribers').updateOne(
        { _id: sub._id },
        { $set: { lastSentDay: day, lastSentSlug: article.slug, lastSentAt: new Date() } }
      );
      sent++;
    } catch (err) {
      failed++;
      console.error(`[newsletter] failed for ${sub.email}:`, err.message);
    }
  }

  await db.collection('newsletter_logs').insertOne({
    article: article.slug, day, sent, skipped, failed, createdAt: new Date(),
  });
  console.log(`[newsletter] ${article.slug} → sent ${sent}, skipped ${skipped}, failed ${failed}`);
  return { sent, skipped, failed, article: article.slug };
}
