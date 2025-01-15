/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/Components/AnimatedText';
import Layout from '@/Components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profile from '../../public/images/profile/developer-pic-2.jpg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/Components/Skills';
import Experience from '@/Components/Experience';
import Education from '@/Components/Education';
import TransitionEffect from "@/Components/TransitionEffect";

const AnimatedNumbers = ({ value, isDecimal }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest <= value) {
        if (isDecimal) {
          ref.current.textContent = latest.toFixed(1);
        } else {
          ref.current.textContent = latest.toFixed(0);
        }
      }
    });
  }, [springValue, value, isDecimal]);

  return <span ref={ref} aria-live="polite"></span>;
};

const calculateYearsOfExperience = (careerStartDate) => {
  const startDate = new Date(careerStartDate);
  const currentDate = new Date();

  const differenceInMillis = currentDate - startDate;

  const yearsOfExperience = differenceInMillis / (1000 * 60 * 60 * 24 * 365);

  return yearsOfExperience.toFixed(1);
};

const careerStartDate = new Date('2022-01-10');
const yearsOfExperience = Number(calculateYearsOfExperience(careerStartDate));


const about = () => {
  return (
    <>
      <Head>
        <title>Manoj | About Page</title>
        <meta name='description' content={`Hi, I'm Manoj, a Front end developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With ${yearsOfExperience} years of experience in the field. I am always looking
                for new and innovative ways to bring my clients' visions to
                life.`} />
      </Head>
      <TransitionEffect />
      <main
        className='flex w-full flex-col items-center justify-center text-dark dark:text-light'
        role="main"
        aria-labelledby="main-heading"
      >
        <h1 id="main-heading" className="sr-only">
          About Me
        </h1>
        <Layout className='pt-16'>
          <AnimatedText
            text='Passion Fuels Purpose! '
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl '
            aria-label="Passion Fuels Purpose"
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biography
              </h2>
              <div className='biography-content' tabIndex={0}>
                <p className='font-medium'>
                  Hello, I'm Manoj, a web developer who is also well-versed
                  in accessibility practices. With over {yearsOfExperience} years of experience,
                  my goal is to craft visually appealing, functional, and
                  inclusively designed digital experiences that can be
                  seamlessly accessed by blind users.
                </p>
                <p className='my-4 font-medium'>
                  I possess a deep understanding of accessibility standards, ensuring
                  that my creations are usable and enjoyable for everyone, including
                  those who rely on screen readers and assistive technologies.
                  In my view, design extends beyond aesthetics – it
                  involves problem-solving and creating seamless, enjoyable
                  interactions for users.
                </p>
                <p className='font-medium'>
                  Whether I'm immersed in a website project or championing accessibility,
                  I approach each endeavor with enthusiasm. I'm excited about the chance to
                  contribute my expertise and enthusiasm to your upcoming project, making
                  sure that it's not only visually stunning but also technically accessible.
                </p>
              </div>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              {/* Decorative Background */}
              <div
                className='absolute top-0 -right-3  -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '
                aria-hidden="true"
              />
              {/* Profile Image */}
              <Image
                src={profile}
                alt='Manoj S - Web Developer'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw'
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span
                  className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'
                  aria-live="polite"
                >
                  <AnimatedNumbers value={5} isDecimal={false} />
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  <span id="projects-completed-label">Projects Completed</span>
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span
                  className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'
                  aria-live="polite"
                >
                  <AnimatedNumbers value={yearsOfExperience} isDecimal={true} />
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  <span id="years-of-experience-label">Years of Experience</span>
                </h2>
              </div>
            </div>

          </div>
          {/* Skills Section */}
          <div aria-labelledby="skills-heading">
            <Skills />
            <h2 id="skills-heading" className="sr-only">
              Skills
            </h2>
          </div>

          {/* Experience Section */}
          <div aria-labelledby="experience-heading">
            <Experience />
            <h2 id="experience-heading" className="sr-only">
              Experience
            </h2>
          </div>

          {/* Education Section */}
          <div aria-labelledby="education-heading">
            <Education />
            <h2 id="education-heading" className="sr-only">
              Education
            </h2>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
