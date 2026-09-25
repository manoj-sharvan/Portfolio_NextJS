import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
      aria-label={`${type} at ${place}, ${time}: ${info}`} // ARIA label for accessibility
      role="listitem" // ARIA role for semantic meaning
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <p className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time && `${time} | `} {place}
        </p>
        <p className="font-medium w-full md:text-sm  ">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        role="list"
        aria-label="Education Timeline"
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light md:w-0.5 md:left-7.5 xs:left-5"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Full Stack Web Development Certification"
            // time="2021 – 2022"
            place="Apollo Computer Education"
            info="Comprehensive training in React.js, JavaScript (ES6+), HTML5, CSS3, SQL database systems, and modern web application development."
          />
          <Details
            type="Bachelor of Engineering — Electrical & Electronics Engineering"
            // time="2015 – 2019"
            place="Gnanamani College of Technology, Tamil Nadu, India"
            info="Graduated with a strong foundation in core engineering, systems design, analytical problem solving, and computational logic."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
