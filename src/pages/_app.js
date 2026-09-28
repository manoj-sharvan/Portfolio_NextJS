import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from "framer-motion";
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from "next/router";
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Manoj S - Full Stack Software Engineer specializing in React.js, TypeScript, Node.js, and AI applications."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
