import type { Viewport } from 'next';
import { Nunito_Sans as nunitoSansFont } from 'next/font/google';
import { cookies } from 'next/headers';

import { themeKeys, appConfig, locale } from '@/config';
import '@/theme/global.scss';

export const dynamic = 'force-dynamic';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  applicationName: `${appConfig.APP_NAME}`,
  description: `${appConfig.APP_DESCRIPTION}`,
  keywords: [`${appConfig.APP_NAME}`],
  icons: {
    icon: [
      {
        rel: 'icon',
        sizes: 'any',
        url: '/favicon.ico',
      },
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#ff6f00',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  title: {
    default: `${appConfig.APP_NAME}`,
    template: `%s | ${appConfig.APP_NAME}`,
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

const defaultFont = nunitoSansFont({
  weight: ['400', '500', '800'],
  variable: '--font-family-default',
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps) {
  const nextCookies = cookies();
  const theme = nextCookies.get(themeKeys.STORAGE_KEY);

  return (
    <html
      lang={locale.DEFAULT_LOCALE}
      className={defaultFont.variable}
      data-theme={theme?.value || themeKeys.DEFAULT_THEME}
    >
      <head />
      {children}
    </html>
  );
}
