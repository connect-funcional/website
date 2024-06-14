'use client';

import type { Metadata } from 'next';

/**
 * NOTE: "global-error.tsx" must be client component
 */

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      nocache: true,
    },
  },
  title: 'Error',
};

export default function GlobalErrorPage() {
  //   {
  //   // error,
  //   reset,
  // }: {
  //   // error: Error;
  //   reset: () => void;
  //     }
  return (
    <html lang="pt" className="html">
      <head>
        <title>Error</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow, nocache" />
        <meta name="googlebot" content="noindex, follow, nocache" />
        <style>{`.html {display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;}.body {display: flex;justify-content: center;align-items: center;flex-direction: column;flex: 1;height: 100%;margin: 0 auto;padding: 16px;gap: 40px;font-family: "Poppins", "Nunito Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;font-size: 1.15rem;color-scheme: dark;color: #efefef;background: #1f2023;}.controls-container {display: flex;flex-direction: row;align-items: center;gap: 20px;}.button {display: inline-flex;align-items: center;justify-content: center;vertical-align: middle;appearance: none;min-height: 38px;min-width: 38px;width: fit-content;height: fit-content;gap: 8px;padding: 0.15rem 0.8rem;border: none;border-radius: 6px;font-size: 1.15rem;box-shadow: none;text-decoration: none;cursor: pointer;background-color: #4a5158;color: #ffffff;}.button:hover {filter: brightness(1.08);}.button::active {filter: brightness(1.15);}.link {text-decoration: none;color: #dac2e3;cursor: pointer;}.link:hover {filter: brightness(1.2);}.link:active {filter: brightness(1.15);}`}</style>
      </head>

      <body className="body">
        <h2>Algo deu errado!</h2>

        <div className="controls-container">
          <a href="/" className="link">
            Ir à página inicial
          </a>

          {/* <button type="button" className="button" onClick={() => reset()}>
            Tentar novamente
          </button> */}
        </div>
      </body>
    </html>
  );
}
