export const COOKIE_NAME = 'roadmap-nexus-site-access';
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const ACCESS_MESSAGE = 'roadmap-nexus-site-access-granted';

export function isSiteAccessEnabled(): boolean {
  return Boolean(process.env.SITE_ACCESS_PASSWORD?.trim());
}

export function getSiteAccessSecret(): string | undefined {
  return process.env.SITE_ACCESS_SECRET?.trim() || process.env.NEXTAUTH_SECRET?.trim();
}

async function hmacSign(secret: string, message: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function createAccessToken(secret: string): Promise<string> {
  return hmacSign(secret, ACCESS_MESSAGE);
}

export async function verifyAccessToken(token: string, secret: string): Promise<boolean> {
  const expected = await createAccessToken(secret);

  if (token.length !== expected.length) {
    return false;
  }

  let mismatch = 0;

  for (let index = 0; index < token.length; index += 1) {
    mismatch |= token.charCodeAt(index) ^ expected.charCodeAt(index);
  }

  return mismatch === 0;
}

export function timingSafeEqual(left: string, right: string): boolean {
  if (left.length !== right.length) {
    return false;
  }

  let mismatch = 0;

  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return mismatch === 0;
}
