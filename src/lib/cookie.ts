export function parseCookie(cookies: string, name: string) {
  const cookie = cookies.split(';').find((c) => c.startsWith(name));

  if (cookie) {
    return cookie.split('=')[1];
  }

  return null;
}

export function getCookieFromClient(name: string) {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookies = document.cookie;

  if (cookies) {
    return parseCookie(cookies, name);
  }
}

export function setCookieFromClient(
  name: string,
  value: string,
  days?: number,
  path?: string,
) {
  if (typeof document === 'undefined') {
    return null;
  }

  let expires = '';
  let pathStr = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }

  if (path) {
    pathStr = `; path=${path}`;
  }

  document.cookie = `${name}=${value || ''}${expires}${pathStr}`;
}
