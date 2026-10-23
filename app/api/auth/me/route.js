// app/api/auth/me/route.js
import { NextResponse } from 'next/server';
import { getCurrentUser, isSubscribed } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ authenticated: false, user: null });
  }
  const subscribed = await isSubscribed(user.email).catch(() => false);
  return NextResponse.json({ authenticated: true, user: { ...user, isSubscribed: subscribed } });
}
