// instrumentation.js — runs once when the Next.js server starts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { startNewsletterScheduler } = await import('./lib/newsletterScheduler');
    startNewsletterScheduler();
  }
}
