import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ Position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
      role="listitem" // ARIA role for semantic meaning
      aria-label={`${Position} at ${company}, ${time}: ${work}`} // ARIA label for accessibility
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          id={`position-${Position}`}
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
        >
          {Position}&nbsp;
          {company && (
            <a
              href={companyLink}
              className="text-primary capitalize"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${company}`} // ARIA label for accessibility
            >
              @{company}
            </a>
          )}
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm"
          aria-label={`Duration: ${time}, Location: ${address}`} // ARIA label for accessibility
        >
          {time} | {address}
        </span>
        <p
          className="font-medium w-full md:text-sm"
          aria-label="Work Description"
        >
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        role="list"
        aria-label="Experience"
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:text-dark dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            Position="Software Developer"
            company="Zlendo"
            companyLink="https://www.zlendo.com"
            time="Oct 2022 - present"
            address="Madurai, India"
            work="Frontend Developer at Zlendo, specializing in React, Redux, API integration, SPFx, SharePoint, and 
            scalable solutions for contract management and leave systems."
          />
          <Details
            Position="Software Developer"
            company=""
            companyLink=""
            time="Jan 2022 - Sept 2022"
            address="Freelance"
            work="Designed and developed responsive web applications using React.js, HTML5, CSS3, JavaScript, ensuring interactive interfaces and cross-browser compatibility."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
