// app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import { getCurrentUser, addSubscriber } from '@/lib/auth';
import { sendWelcomeEmail } from '@/lib/newsletter';

export const dynamic = 'force-dynamic';

export async function POST() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { message: 'Please log in or sign up to subscribe.' },
        { status: 401 }
      );
    }

    // name + email always come from the logged-in account (never from the request body)
    const { created, unsubscribeToken } = await addSubscriber({
      name: user.username,
      email: user.email,
      userId: user.id,
    });

    // New subscriber → send "successfully subscribed" confirmation email
    if (created) {
      await sendWelcomeEmail({ name: user.username, email: user.email, unsubscribeToken });
    }

    return NextResponse.json({ success: true, alreadySubscribed: !created });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ message: 'Server error. Please try again.' }, { status: 500 });
  }
}
