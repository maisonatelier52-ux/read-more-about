// app/api/auth/signup/route.js
import { NextResponse } from 'next/server';
import { registerUser, createSession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    const result = await registerUser(username, email, password);

    if (result.error) {
      return NextResponse.json({ message: result.error }, { status: 400 });
    }

    await createSession(result.user);
    return NextResponse.json({ success: true, user: result.user });
  } catch (err) {
    console.error('Signup error:', err);
    return NextResponse.json({ message: 'Server error during sign up.' }, { status: 500 });
  }
}
