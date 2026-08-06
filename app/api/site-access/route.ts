import { NextResponse } from 'next/server';

import {
  COOKIE_MAX_AGE,
  COOKIE_NAME,
  createAccessToken,
  getSiteAccessSecret,
  isSiteAccessEnabled,
  timingSafeEqual,
} from '@/lib/site-access';

export async function POST(request: Request) {
  if (!isSiteAccessEnabled()) {
    return NextResponse.json({ error: 'Site access lock is not enabled.' }, { status: 503 });
  }

  const secret = getSiteAccessSecret();

  if (!secret) {
    return NextResponse.json(
      { error: 'Site access is misconfigured. Set SITE_ACCESS_SECRET or NEXTAUTH_SECRET.' },
      { status: 503 },
    );
  }

  let password = '';

  try {
    const body = (await request.json()) as { password?: string };
    password = body.password ?? '';
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const expectedPassword = process.env.SITE_ACCESS_PASSWORD ?? '';

  if (!timingSafeEqual(password, expectedPassword)) {
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  const token = await createAccessToken(secret);
  const response = NextResponse.json({ success: true });

  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });

  return response;
}
