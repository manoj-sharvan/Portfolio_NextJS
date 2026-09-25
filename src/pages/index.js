import Layout from "@/Components/Layout";
import SEO from "@/Components/SEO";
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
      <SEO
        title="Home"
        description="Full Stack Software Engineer with 3+ years of professional experience in React.js, TypeScript, Node.js, AI applications, and interactive 2D/3D visualizations."
        path="/"
      />
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full flex items-center justify-evenly">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-87.5 h-87.5 flex items-center justify-evenly border border-solid border-dark rounded-3xl xl:w-100 xl:h-100 lg:w-75 lg:h-75 md:w-50 md:h-50 sm:w-37.5 sm:h-37.5 xs:w-25 xs:h-25 lg:hidden md:inline-block"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col itmes-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Modern Architecture."}
                className="text-6xl! text-left! xl:text-5xl! lg:text-center! lg:text-6xl! md:text-5xl! sm:text-3xl!"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Full Stack Software Engineer with 3+ years of professional experience engineering high-performance web applications across the full lifecycle using React.js, TypeScript, Node.js, and LLM-powered streaming user experiences.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/projects"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light dark:text-dark hover:dark:border-light md:p-2 md:px-4 md:text-base transition duration-200"
                >
                  View Work <LinkArrow className={"w-6 ml-1"} />
                </Link>
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
