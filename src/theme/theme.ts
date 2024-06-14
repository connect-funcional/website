import { themeKeys } from '@/config';
import { setCookieFromClient } from '@/lib';

export const setHtmlThemeParam = (theme: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  document.documentElement.setAttribute('data-theme', theme);
};

export const setThemeFromClient = (theme: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  setCookieFromClient(themeKeys.STORAGE_KEY, theme, undefined, '/');
  setHtmlThemeParam(theme);
};

export const getThemeFromClient = () => {
  if (typeof document === 'undefined') {
    return null;
  }

  const theme = document.documentElement.getAttribute('data-theme');

  return theme;
};
