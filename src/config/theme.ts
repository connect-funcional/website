export const themeKeys = {
  STORAGE_KEY: 'theme',
  DEFAULT_THEME: 'dark',
  AUTO_THEME: 'auto', // media feature: "prefers-color-scheme"
  DARK_THEME: 'dark',
  LIGHT_THEME: 'light',
  ALL_THEMES: ['dark', 'light'],
} as const;

export type Theme = (typeof themeKeys.ALL_THEMES)[number];
