// app/api/newsletter/unsubscribe/route.js
import { getDb } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

const page = (msg) =>
  new Response(
    `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Unsubscribe</title></head><body style="font-family:Arial,sans-serif;text-align:center;padding:60px 16px;"><h1 style="font-family:Georgia,serif;color:#dc2626;">ReadMore</h1><p style="color:#374151;font-size:16px;">${msg}</p><a href="/" style="color:#dc2626;">Back to site</a></body></html>`,
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  );

export async function GET(req) {
  const token = new URL(req.url).searchParams.get('token');
  if (!token) return page('Invalid unsubscribe link.');
  try {
    const db = await getDb();
    const { deletedCount } = await db.collection('subscribers').deleteOne({ unsubscribeToken: token });
    return page(deletedCount ? 'You have been unsubscribed.' : 'This link is invalid or you are already unsubscribed.');
  } catch (err) {
    console.error('Unsubscribe error:', err);
    return page('Something went wrong. Please try again later.');
  }
}
