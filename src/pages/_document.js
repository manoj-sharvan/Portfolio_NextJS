import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1b1b1b" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <body>
        <Script id='theme-switcher' strategy="beforeInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches))
          {document.documentElement.classList.add('dark')} else
          {document.documentElement.classList.remove('dark')}`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
