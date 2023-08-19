import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.button
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      initial={{ x: 0, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{ outline: 'none', boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      aria-label={`Skill: ${name}`}
    >
      {name}
    </motion.button>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80]vh sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.button
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileFocus={{ outline: 'none', boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
          aria-label='Web'
        >
          web
        </motion.button>
        <Skill name='HTML' x='-22vw' y='2vw' />
        <Skill name='CSS' x='-5vw' y='-10vw' />
        <Skill name='Javascript' x='20vw' y='6vw' />
        <Skill name='ReactJS' x='0vw' y='12vw' />
        <Skill name='NextJS' x='-28vw' y='-8vw' />
        <Skill name='Node' x='15vw' y='-12vw' />
        <Skill name='Mongo DB' x='32vw' y='-5vw' />
        <Skill name='Firebase' x='0vw' y='-20vw' />
        <Skill name='Tailwind CSS' x='-25vw' y='-18vw' />
        <Skill name='SPFX' x='18vw' y='18vw' />
      </div>
    </>
  );
};

export default Skills;
