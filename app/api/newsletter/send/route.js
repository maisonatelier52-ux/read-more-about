// app/api/newsletter/send/route.js
// Optional manual / external-cron trigger.
//   curl -X POST https://your-site.com/api/newsletter/send/ -H "Authorization: Bearer $CRON_SECRET"
import { NextResponse } from 'next/server';
import { sendDailyNewsletter } from '@/lib/newsletter';

export const dynamic = 'force-dynamic';

async function handle(req) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    return NextResponse.json({ success: true, ...(await sendDailyNewsletter()) });
  } catch (err) {
    console.error('Newsletter send error:', err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export const GET = handle;
export const POST = handle;
