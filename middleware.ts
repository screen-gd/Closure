import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import {
  COOKIE_NAME,
  getSiteAccessSecret,
  isSiteAccessEnabled,
  verifyAccessToken,
} from '@/lib/site-access';

export async function middleware(request: NextRequest) {
  if (!isSiteAccessEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === '/gate' || pathname.startsWith('/api/site-access')) {
    return NextResponse.next();
  }

  const secret = getSiteAccessSecret();
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (secret && token && (await verifyAccessToken(token, secret))) {
    return NextResponse.next();
  }

  const gateUrl = request.nextUrl.clone();
  gateUrl.pathname = '/gate';
  gateUrl.searchParams.set('from', `${pathname}${request.nextUrl.search}`);

  return NextResponse.redirect(gateUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|brand/).*)'],
};
