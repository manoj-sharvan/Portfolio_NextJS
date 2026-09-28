import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ Position, company, companyLink, time, address, work, subProjects }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
      role="listitem"
      aria-label={`${Position} at ${company}, ${time}`}
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
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
              aria-label={`Visit ${company}`}
            >
              @{company}
            </a>
          )}
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm block mb-2"
          aria-label={`Duration: ${time}, Location: ${address}`}
        >
          {time} | {address}
        </span>
        {work && (
          <p className="font-medium w-full text-base mb-4 md:text-sm text-dark/90 dark:text-light/90">
            {work}
          </p>
        )}

        {subProjects && subProjects.length > 0 && (
          <div className="space-y-4 mt-3">
            {subProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-dark/20 dark:border-light/20 bg-dark/5 dark:bg-light/5"
              >
                <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                  <h4 className="font-bold text-lg text-primary dark:text-primaryDark sm:text-base">
                    {proj.name}
                  </h4>
                  {proj.tech && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-dark/10 dark:bg-light/10 text-dark/80 dark:text-light/80">
                      {proj.tech}
                    </span>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm font-medium text-dark/80 dark:text-light/80">
                  {proj.points.map((point, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
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

  const zlendoProjects = [
    {
      name: "ZRealty — 3D Real Estate Visualization",
      tech: "React.js | TypeScript | Konva.js | Three.js | REST APIs",
      points: [
        "Engineered an interactive 2D/3D real-estate visualization web application integrating React, TypeScript, Konva.js, and Three.js for synchronized canvas floor-plan editing and dynamic 3D property walkthroughs.",
        "Architected modular canvas manipulation pipelines, object transformation matrices, and interactive viewport state synchronized with asynchronous property catalog API endpoints.",
        "Built reusable frontend state architectures for synchronized 2D floor-plan and 3D spatial rendering, directly driving a verified 35% increase in buyer engagement.",
      ],
    },
    {
      name: "Clife — Multi-Tenant Contract Management System",
      tech: "React.js | TypeScript | TanStack Query | OnlyOffice | REST APIs",
      points: [
        "Designed configurable client-server frontend architecture with dynamic clause/template builders and role-tailored dashboards, reducing contract configuration time by 30% across 50+ enterprise tenants.",
        "Integrated OnlyOffice document servers for real-time collaborative document editing and revision tracking within enterprise tenant sandboxes.",
        "Integrated TanStack Query for server-state caching and background data refetching; enforced client-side JWT authentication and RBAC multi-role authorization pipelines.",
      ],
    },
    {
      name: "RisePage — SharePoint Enterprise Intranet Portal",
      tech: "React.js | TypeScript | SPFx | REST APIs | Bootstrap",
      points: [
        "Built 15+ interactive SPFx enterprise modules consuming Microsoft Graph and SharePoint REST endpoints to deliver real-time corporate announcements, event calendars, and employee spotlights.",
        "Implemented accessible interfaces leveraging semantic HTML5, WAI-ARIA roles, and full keyboard navigation, contributing to a 40% increase in employee engagement.",
      ],
    },
    {
      name: "ZSuite — Enterprise HRMS SaaS Platform",
      tech: "React.js | TypeScript | Material UI | Jest | Cypress | Webhooks",
      points: [
        "Engineered a centralized Material UI component library with custom design tokens and Storybook, accelerating UI feature delivery by 25% across 3 engineering teams.",
        "Optimized frontend performance by 40% faster initial page loads for 10K+ DAU via route-based code splitting, lazy loading, and Web Vitals audits.",
        "Integrated Razorpay payment gateway workflows and webhook-driven subscription events across 500+ enterprise clients; established test suites achieving 85% test coverage and 30% fewer production regressions.",
      ],
    },
    {
      name: "Leadership & Contributions",
      tech: "Code Reviews | Mentorship | Engineering Standards",
      points: [
        "Conducted 80+ technical design and code reviews enforcing TypeScript type safety, API contract hygiene, component reusability, and modern engineering standards.",
        "Mentored 3 junior software engineers on modern React/TypeScript patterns, client-server data synchronization, automated testing, and development workflows.",
      ],
    },
  ];

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
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:text-dark dark:bg-light md:w-0.5 md:left-7.5 xs:left-5"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            Position="Frontend Software Engineer (Full Stack Application Scope)"
            company="Zlendo Technology Pvt Ltd"
            companyLink="https://www.zlendo.com"
            time="October 2022 – June 2026"
            address="Madurai, India"
            work="Spearheaded full application lifecycle engineering across multiple flagship enterprise SaaS platforms, architecting API-driven client-server workflows, server-state caching, secure JWT/RBAC authorization, and LLM streaming workflows."
            subProjects={zlendoProjects}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
