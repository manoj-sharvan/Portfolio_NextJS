import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/icons";
import Hire from "@/Components/Hire";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/Components/TransitionEffect";
export default function Home() {
  return (
    <>
      <Head>
        <title>Manoj | Home</title>
        <meta name="description" content="Home" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full d-flex items-center justify-evenly">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-[350px] h-[350px] border border-solid border-dark rounded-full xl:w-[400px] xl:h-[400px] lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xs:w-[100px] xs:h-[100px] lg:hidden md:inline-block"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col itmes-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled front-end developer, I am dedicated to turning
                ideas into innovative web applications.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                {/* <Link
                  href={'/dummy.pdf'}
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light dark:text-dark hover:dark:border-light md:p-2 md:px-4 md:text-base '
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link> */}
                <Link
                  href={"mailto:manojsharvan@gmail.com"}
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hire />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="Theme" className="w-full" />
        </div>
      </main>
    </>
  );
}
