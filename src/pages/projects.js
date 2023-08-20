import AnimatedText from '@/Components/AnimatedText';
import Layout from '@/Components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import EmerlandImage from '../../public/images/projects/Emerland.png';
import TransitionEffect from "@/Components/TransitionEffect";
const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4' role='article'>

      <div className='absolute top-0 -right-3  -z-10 w-[101%] h-[103%]
       rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '
      >
        <Image src={img} alt={title} className='w-full h-auto ' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link
            href={link}
            target={'_blank'}
            className='ml-r rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light
            dark:text-dark sm:px-4 sm:text-base'
            role='button'
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, summary, technology }) => {
  return (
    <article className='w-full flex flex-col items-center
     justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
      dark:bg-dark dark:border-light xs:p-4'  role='article' >
      <div className='absolute top-0 -right-3  -z-10 w-[101%] h-[103%] 
      rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />

      {img && <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto ' />
      </Link>}
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark cursor-default lg:text-lg md:text-base'>
          {type}
        </span>
        {link !== '/' ? (
          <Link
            href={link}
            target='_blank'
            className='hover:underline underline-offset-2'
          >
            <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className='my-2 w-full text-left text-3xl font-bold cursor-default md:text-base'>
            {title}
          </h2>
        )}
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

        <div className='mt-2 flex items-center'>
          {link !== '/' && (
            <Link
              href={link}
              target={'_blank'}
              className='flex items-center bg-dark text-light
               p-2.5  rounded-lg text-sm font-semibold hover hover:scale-105  border-2 border-solid border-transparent duration-150 transition ease-in-out '
              role='button'
            >
              Visit
            </Link>
          )}
        </div>
        {technology &&
          <div className="flex sm:flex-col items-center sm:items-start gap-x-2">
            <div className="text-sm sm:text-base">Technology used: </div><div className='flex items-center
             bg-dark text-primary dark:text-primaryDark  rounded-lg text-sm font-semibold
               sm:ml-0 sm:text-base ' role='note'>{technology}</div>
          </div>}
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Manoj | Projects</title>
        <meta name='description' content='Projects' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Emerland Online Shopping'
                summary='Online Shopping website created using React,Tailwind,Firebase auth'
                img={EmerlandImage}
                link='https://emerlandonlineshopping.web.app/'
                type='Featured Project'
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Leave Management System'
                summary='Employee would able to apply their leave and  we can able to check
                 individual employee Leave Details.
                 we also export the particular employee leave Details , Current Month Employee Taken Leave Details'
                img={""}
                link='/'
                type='Internal Project'
                technology="React,SPFX,Tailwind CSS"
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Invoice Application'
                summary="I'm in the part of Product Creation and Dashbaord Creation and Integration"
                img={""}
                link='/'
                type='Internal Project'
                technology="React,Redux,Tailwind CSS"
              />
            </div>
            <div className='col-span-12'>
              <Project
                title='HRMS'
                summary="I'm in the part of Employee Profile and Employee related settings page creation"
                img={""}
                link='/'
                type='Internal Project'
                technology="React,Material UI"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
