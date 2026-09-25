import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.button
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      initial={{ x: 0, y: 0 }}
      whileHover={{ scale: 1.08 }}
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

const skillCategories = [
  {
    title: "Frontend Architecture & Web Core",
    description: "Component hierarchies, responsive design & accessibility",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Next.js (SSR / SSG)",
      "React Hooks & Router",
      "HTML5 & Semantic Web",
      "CSS3 & Responsive Design",
      "Accessibility (WCAG / WAI-ARIA)",
    ],
  },
  {
    title: "Backend, APIs & Authorization",
    description: "Scalable microservices, auth workflows & webhook handlers",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs & API Design",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Webhooks & Subscription Lifecycles",
      "API Integration & Middleware",
    ],
  },
  {
    title: "AI Engineering & LLM Systems",
    description: "Streaming interfaces, prompt engineering & conversational UI",
    skills: [
      "LLM APIs (OpenAI / Gemini)",
      "Streaming Responses (SSE)",
      "Conversational UI & Chat State",
      "Prompt Engineering",
      "Structured JSON AI Outputs",
      "RAG Fundamentals",
    ],
  },
  {
    title: "State Management & Caching",
    description: "Client & server state synchronization with high cache hit rates",
    skills: [
      "TanStack Query (React Query)",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "Server-State Management",
      "Optimistic UI & Cache Invalidation",
    ],
  },
  {
    title: "Databases & Data Modeling",
    description: "Relational and document storage schemas",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "SQL & Query Optimization",
      "Data Modeling",
      "Indexing & Aggregation",
    ],
  },
  {
    title: "3D & Interactive Canvas Graphics",
    description: "Interactive canvas viewports & spatial visualization",
    skills: [
      "Three.js (3D Walkthroughs)",
      "Konva.js (2D Floor Plans)",
      "Canvas Rendering",
      "Interactive Viewports",
      "Coordinate Transformations",
    ],
  },
  {
    title: "UI Engineering & Design Systems",
    description: "Consistent, tokenized enterprise component libraries",
    skills: [
      "Tailwind CSS",
      "Material UI (MUI)",
      "Storybook Component Library",
      "Design Systems & Tokens",
      "Styled Components",
      "Bootstrap",
    ],
  },
  {
    title: "Cloud, DevOps & Tooling",
    description: "Automated pipelines, cloud hosting & modern bundlers",
    skills: [
      "AWS (S3 & Cognito)",
      "Docker",
      "GitHub Actions & CI/CD",
      "Git & GitHub Workflows",
      "Vite",
      "Webpack",
      "SPFx (SharePoint Framework)",
    ],
  },
  {
    title: "Testing & Code Quality",
    description: "Comprehensive test coverage preventing production regressions",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress (E2E)",
      "Unit Testing",
      "Integration Testing",
      "Code Reviews & Mentorship",
    ],
  },
  {
    title: "Performance & Enterprise Integrations",
    description: "Web Vitals optimization and specialized business platforms",
    skills: [
      "Core Web Vitals & Lighthouse",
      "Code Splitting & Lazy Loading",
      "Bundle Size Optimization",
      "OnlyOffice Document Server",
      "Razorpay Payment Integration",
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>

      {/* Circular Animated Radar */}
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        {/* Central Core: Full Stack */}
        <motion.button
          className='flex items-center justify-center rounded-full font-bold bg-dark text-light px-8 py-4 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2.5 z-10 border-2 border-primary dark:border-primaryDark'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileFocus={{ outline: 'none', boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }}
          aria-label='Full Stack Core'
        >
          Full Stack
        </motion.button>

        {/* Orbiting Full Stack Nodes */}
        <Skill name='React.js' x='-19vw' y='2vw' />
        <Skill name='TypeScript' x='-6vw' y='-9vw' />
        <Skill name='Node.js' x='8vw' y='-7vw' />
        <Skill name='Next.js' x='0vw' y='11vw' />
        <Skill name='Express & REST' x='20vw' y='2vw' />
        <Skill name='LLM & AI APIs' x='-25vw' y='-8vw' />
        <Skill name='Three.js' x='15vw' y='-12vw' />
        <Skill name='TanStack Query' x='0vw' y='-19vw' />
        <Skill name='Tailwind CSS' x='-20vw' y='-17vw' />
        <Skill name='PostgreSQL' x='-12vw' y='18vw' />
        <Skill name='MongoDB' x='13vw' y='18vw' />
        <Skill name='Redux & Zustand' x='20vw' y='-17vw' />
        <Skill name='Docker & AWS' x='-29vw' y='9vw' />
        <Skill name='Jest & Cypress' x='29vw' y='9vw' />
        <Skill name='JWT & RBAC' x='-8vw' y='4vw' />
        <Skill name='Konva.js' x='27vw' y='-6vw' />
      </div>

      {/* Categorized Full Stack Skills Grid */}
      <div className='w-full mt-16 grid grid-cols-2 gap-8 lg:grid-cols-1'>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true }}
            className='p-6 rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-md flex flex-col justify-between'
          >
            <div>
              <div className='flex items-center justify-between mb-1'>
                <h3 className='text-xl font-bold text-primary dark:text-primaryDark'>
                  {category.title}
                </h3>
              </div>
              <p className='text-xs text-dark/60 dark:text-light/60 mb-4 font-medium'>
                {category.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className='bg-dark/5 dark:bg-light/10 text-dark dark:text-light text-xs font-semibold px-3 py-1.5 rounded-lg border border-dark/15 dark:border-light/15 hover:border-primary dark:hover:border-primaryDark transition-colors'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
