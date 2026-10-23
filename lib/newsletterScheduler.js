// lib/newsletterScheduler.js
// Runs inside the Next.js Node server (started from instrumentation.js).
import cron from 'node-cron';
import { sendDailyNewsletter } from '@/lib/newsletter';

export function startNewsletterScheduler() {
  if (global._rmaNewsletterJob) return; // avoid duplicates on hot reload

  // Default: every day at 08:00. Change with NEWSLETTER_CRON (cron syntax) + NEWSLETTER_TZ
  const expression = process.env.NEWSLETTER_CRON || '0 8 * * *';
  const timezone = process.env.NEWSLETTER_TZ || 'America/New_York';

  if (!cron.validate(expression)) {
    console.error(`[newsletter] invalid NEWSLETTER_CRON "${expression}"`);
    return;
  }

  global._rmaNewsletterJob = cron.schedule(
    expression,
    () => {
      sendDailyNewsletter().catch((err) => console.error('[newsletter] run failed:', err));
    },
    { timezone }
  );
  console.log(`[newsletter] scheduled "${expression}" (${timezone})`);
}
