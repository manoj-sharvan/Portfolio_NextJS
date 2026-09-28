import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './Layout';
import { GithubIcon, LinkedInIcon, NextjsIcon } from './icons';

const MailIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const PhoneIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
      clipRule="evenodd"
    />
  </svg>
);

const LocationIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-solid border-dark/15 dark:border-light/15 bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <Layout className="py-8 lg:py-6 sm:py-5">
        {/* 4-Column Grid: Desktop-first layout */}
        <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-6 sm:gap-6 pb-6">
          {/* Col 1: Bio, Status & Social */}
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="text-lg font-bold tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-dark dark:bg-light text-light dark:text-dark flex items-center justify-center text-xs font-black">
                MS
              </span>
              <span>Manoj S</span>
            </Link>

            <div className="inline-flex items-center gap-1.5 w-max px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Opportunities
            </div>

            <p className="text-xs text-dark/70 dark:text-light/70 leading-relaxed">
              Full Stack Software Engineer specializing in React.js, TypeScript, performant backend APIs, and AI applications.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <motion.a
                href="https://github.com/Manoj-sharvan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-7 h-7 rounded-full flex items-center justify-center bg-dark/5 dark:bg-light/10 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors p-1.5"
                aria-label="Manoj S GitHub profile"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/manoj-sharvan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-7 h-7 rounded-full flex items-center justify-center bg-dark/5 dark:bg-light/10 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white transition-colors p-1.5"
                aria-label="Manoj S LinkedIn profile"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="mailto:manojsharvan@gmail.com"
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-7 h-7 rounded-full flex items-center justify-center bg-dark/5 dark:bg-light/10 hover:bg-primary hover:text-light dark:hover:bg-primaryDark dark:hover:text-dark transition-colors p-1.5"
                aria-label="Email Manoj S"
              >
                <MailIcon className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] uppercase tracking-wider font-bold text-dark/50 dark:text-light/50">
              Navigation
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary dark:hover:text-primaryDark transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary dark:hover:text-primaryDark transition-colors inline-block"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary dark:hover:text-primaryDark transition-colors inline-block"
                >
                  Projects & Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:manojsharvan@gmail.com"
                  className="hover:text-primary dark:hover:text-primaryDark transition-colors inline-block"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Technical Specialties */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] uppercase tracking-wider font-bold text-dark/50 dark:text-light/50">
              Technical Focus
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-dark/80 dark:text-light/80">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primaryDark shrink-0"></span>
                <span>React 19 & Next.js SSR/SSG</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primaryDark shrink-0"></span>
                <span>TypeScript & Clean Code</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primaryDark shrink-0"></span>
                <span>AI Streaming & LLM Prompts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primaryDark shrink-0"></span>
                <span>Node.js, Express & APIs</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-primaryDark shrink-0"></span>
                <span>Three.js & 3D Interactive UI</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordinates & Direct Contact */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] uppercase tracking-wider font-bold text-dark/50 dark:text-light/50">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-dark/80 dark:text-light/80">
              <li className="flex items-center gap-2">
                <MailIcon className="w-3.5 h-3.5 text-primary dark:text-primaryDark shrink-0" />
                <a
                  href="mailto:manojsharvan@gmail.com"
                  className="hover:underline hover:text-primary dark:hover:text-primaryDark break-all transition-colors"
                >
                  manojsharvan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-3.5 h-3.5 text-primary dark:text-primaryDark shrink-0" />
                <a
                  href="tel:+918667671121"
                  className="hover:underline hover:text-primary dark:hover:text-primaryDark transition-colors"
                >
                  +91 8667671121
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LocationIcon className="w-3.5 h-3.5 text-primary dark:text-primaryDark shrink-0" />
                <span>Chennai & Madurai, India</span>
              </li>
            </ul>
            <div className="mt-1">
              <Link
                href="mailto:manojsharvan@gmail.com"
                className="inline-flex items-center gap-1.5 bg-dark text-light dark:bg-light dark:text-dark px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-light hover:text-dark hover:border-dark border border-transparent dark:hover:bg-dark dark:hover:text-light dark:hover:border-light transition duration-150"
              >
                <span>Say Hello</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-4 border-t border-solid border-dark/10 dark:border-light/10 flex items-center justify-between sm:flex-col sm:text-center gap-3 text-xs text-dark/70 dark:text-light/70 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Manoj S. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="w-4 inline-block mx-0.5">
              <NextjsIcon className="dark:fill-white" />
            </span>
            <span>Next.js, React & Tailwind CSS</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-primary dark:hover:text-primaryDark transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 font-bold">
              &uarr;
            </span>
          </button>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
