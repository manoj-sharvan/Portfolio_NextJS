import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import SEO from "@/Components/SEO";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TransitionEffect from "@/Components/TransitionEffect";
import { GithubIcon } from "@/Components/icons";

const FeaturedProject = ({ type, title, summary, link, github, technology, highlights }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      role="article"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%]
       rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-3xl"
      />

      <div className="w-1/2 flex flex-col justify-center items-start pr-6 lg:w-full lg:pr-0">
        <div className="w-full h-64 sm:h-48 rounded-xl bg-linear-to-br from-primary/10 via-dark/5 to-primary/20 dark:from-primaryDark/20 dark:via-light/5 dark:to-primaryDark/10 border border-dark/20 dark:border-light/20 flex flex-col items-center justify-center p-6 text-center shadow-inner">
          <span className="text-primary dark:text-primaryDark font-semibold text-sm tracking-wider uppercase mb-2">
            {type}
          </span>
          <h3 className="text-2xl font-bold text-dark dark:text-light sm:text-xl">
            {title}
          </h3>
          {technology && (
            <p className="mt-3 text-xs font-medium text-dark/70 dark:text-light/70 bg-light/80 dark:bg-dark/80 px-3 py-1.5 rounded-full border border-dark/10 dark:border-light/10">
              {technology}
            </p>
          )}
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-semibold text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-2xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark/90 dark:text-light/90 text-base sm:text-sm">
          {summary}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="my-3 space-y-1 text-sm text-dark/80 dark:text-light/80 list-disc list-inside">
            {highlights.map((item, idx) => (
              <li key={idx} className="leading-snug">{item}</li>
            ))}
          </ul>
        )}

        {technology && (
          <div className="my-2 flex flex-wrap gap-1.5">
            {technology.split("|").map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-2.5 py-1 rounded-md bg-dark/10 dark:bg-light/10 text-dark dark:text-light"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-4">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="w-10 hover:scale-110 transition duration-150"
              aria-label="GitHub Repository"
            >
              <GithubIcon />
            </Link>
          )}
          {false && link && link !== "/" && (
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark text-light p-2 px-6 text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition duration-150"
              role="button"
            >
              Visit Project
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, link, github, technology, highlights }) => {
  return (
    <article
      className="w-full h-full flex flex-col justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
      role="article"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
      rounded-4xl bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-3xl"
      />

      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary font-medium text-lg dark:text-primaryDark lg:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-xl">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark/90 dark:text-light/90 text-sm">
          {summary}
        </p>

        {highlights && highlights.length > 0 && (
          <ul className="my-2 space-y-1 text-xs text-dark/80 dark:text-light/80 list-disc list-inside">
            {highlights.map((item, idx) => (
              <li key={idx} className="leading-snug">{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-full mt-4">
        {technology && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technology.split("|").map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold px-2 py-0.5 rounded bg-dark/10 dark:bg-light/10 text-dark dark:text-light"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-dark/10 dark:border-light/10">
          {github ? (
            <Link
              href={github}
              target="_blank"
              className="w-8 hover:scale-110 transition duration-150"
              aria-label="GitHub Repository"
            >
              <GithubIcon />
            </Link>
          ) : (
            <span className="text-xs font-medium text-dark/50 dark:text-light/50">Production SaaS</span>
          )}
          {false && link && link !== "/" ? (
            <Link
              href={link}
              target="_blank"
              className="flex items-center bg-dark text-light p-2 px-4 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light transition duration-150"
              role="button"
            >
              Visit
            </Link>
          ) : (
            <span className="text-xs font-semibold text-primary dark:text-primaryDark">Enterprise Client</span>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <SEO
        title="Full Stack & AI Projects"
        description="Explore full stack web applications and AI-enabled projects built by Manoj S, including AI JIRA Storyboard (SSE Streaming), 3D Real Estate Visualization, and Enterprise SaaS platforms."
        path="/projects"
      />
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:text-7xl! sm:mb-8 sm:text-6xl! xs:text-4xl!"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* Featured AI Project: AI JIRA Storyboard */}
            <div className="col-span-12">
              <FeaturedProject
                title="AI JIRA Storyboard — Agile Development Assistant"
                summary="An AI-powered software planning assistant that ingests natural-language specifications and orchestrates LLM API calls to generate structured epics, user stories, acceptance criteria, and technical subtasks."
                type="Featured AI & Full Stack Project"
                technology="React.js | TypeScript | LLM APIs | SSE Streaming | Server-Sent Events"
                highlights={[
                  "Engineered an asynchronous streaming UI leveraging Server-Sent Events (SSE) and readable streams for real-time incremental token rendering.",
                  "Designed conversational refinement loops, debounced search filters, modal portals, and resilient error recovery.",
                  "Accelerated agile user story breakdown and ticket drafting by over 50% for engineering teams.",
                ]}
                github="https://github.com/Manoj-sharvan"
              />
            </div>

            {/* Featured 3D/Canvas Project: ZRealty */}
            <div className="col-span-12">
              <FeaturedProject
                title="ZRealty — 3D Real Estate Visualization Platform"
                summary="An interactive 2D/3D real-estate visualization web application integrating React, TypeScript, Konva.js, and Three.js for synchronized canvas-based floor-plan editing and dynamic 3D spatial property walkthroughs."
                type="3D & Canvas Visualization"
                technology="React.js | TypeScript | Konva.js | Three.js | REST APIs"
                highlights={[
                  "Architected modular canvas manipulation pipelines, object transformation matrices, and interactive viewport state.",
                  "Synchronized viewport state with asynchronous property catalog API endpoints.",
                  "Delivered resilient client-side state architectures unifying 2D coordinate layouts with 3D scene rendering (35% increase in buyer engagement).",
                ]}
                link="https://www.zlendo.com"
              />
            </div>

            {/* Project: AI Wellness Conversational Assistant */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI Wellness Conversational Assistant"
                summary="A responsive conversational AI application in React and TypeScript featuring streaming LLM message streams, resilient chat state management, and optimistic UI transitions."
                type="Conversational AI"
                technology="React.js | TypeScript | LLM APIs | Real-Time State"
                highlights={[
                  "Engineered streaming LLM message streams with low-latency rendering and auto-scroll locks.",
                  "Built modular conversation components, adaptive viewport layouts, and accessibility-compliant keyboard navigation.",
                ]}
                github="https://github.com/Manoj-sharvan"
              />
            </div>

            {/* Project: Clife Contract Management System */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Clife — Contract Management System"
                summary="Enterprise SaaS platform featuring dynamic clause/template builders and role-tailored dashboards across 50+ enterprise tenants."
                type="Enterprise SaaS"
                technology="React.js | TypeScript | TanStack Query | OnlyOffice | RBAC"
                highlights={[
                  "Reduced contract configuration cycle time by 30% through dynamic clause builders and reusable workflow modules.",
                  "Embedded OnlyOffice for real-time document collaboration and version history tracking.",
                  "Integrated TanStack Query for server-state caching and enforced JWT & RBAC permission controls.",
                ]}
                link="https://www.zlendo.com"
              />
            </div>

            {/* Project: ZSuite HRMS Platform */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ZSuite — HRMS Platform"
                summary="Enterprise HRMS platform serving 10K+ daily active users with custom design tokens, Razorpay subscription billing, and route-based code splitting."
                type="Enterprise SaaS & Design System"
                technology="React.js | TypeScript | Material UI | Jest | Cypress | Razorpay"
                highlights={[
                  "Created a centralized Material UI component library with Storybook, accelerating team UI velocity by 25%.",
                  "Optimized initial page load performance by 40% for 10K+ DAU via route splitting and lazy loading.",
                  "Achieved 85% test coverage across unit and E2E suites, reducing production regressions by 30%.",
                ]}
                link="https://www.zlendo.com"
              />
            </div>

            {/* Project: RisePage SharePoint Intranet Portal */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="RisePage — SharePoint Intranet Portal"
                summary="Suite of 15+ interactive SPFx (SharePoint Framework) React modules delivering real-time corporate announcements, event calendars, and employee spotlights."
                type="Corporate Portal & SPFx"
                technology="React.js | TypeScript | SPFx | Bootstrap | WAI-ARIA"
                highlights={[
                  "Built 15+ reusable SharePoint modules with responsive UI and full keyboard accessibility support.",
                  "Conducted cross-browser audits across modern browsers, boosting employee engagement by 40%.",
                ]}
                link="https://www.zlendo.com"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
