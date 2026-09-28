import Head from 'next/head';
import { useRouter } from 'next/router';

const DEFAULT_SEO = {
  title: 'Manoj S | Full Stack Software Engineer | React.js, TypeScript & AI Applications',
  description:
    'Full Stack Software Engineer with 3+ years of professional experience building high-performance web applications using React.js, TypeScript, Node.js, and streaming LLM-powered interfaces.',
  siteUrl: 'https://manojsharvan.vercel.app',
  defaultImage: '/images/profile/developer-pic-1.png',
  author: 'Manoj S',
  twitterHandle: '@manoj_sharvan',
  keywords: [
    'Manoj S',
    'Full Stack Software Engineer',
    'Frontend Software Engineer',
    'React.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'AI Applications',
    'LLM Integration',
    'Streaming UI',
    'Next.js Portfolio',
    'Three.js',
    'Konva.js',
    'TanStack Query',
    'Enterprise SaaS Developer',
    'Web Developer Chennai Madurai India',
  ].join(', '),
};

const SEO = ({
  title,
  description = DEFAULT_SEO.description,
  path = '',
  image = DEFAULT_SEO.defaultImage,
  type = 'website',
  keywords = DEFAULT_SEO.keywords,
  schema = null,
}) => {
  const router = useRouter();
  const currentPath = path || router.asPath || '';
  const cleanPath = currentPath.split('?')[0];
  const canonicalUrl = `${DEFAULT_SEO.siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
  const fullImageUrl = image.startsWith('http') ? image : `${DEFAULT_SEO.siteUrl}${image}`;
  const pageTitle = title
    ? `${title} | Manoj S - Full Stack Software Engineer`
    : DEFAULT_SEO.title;

  const defaultPersonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manoj S',
    jobTitle: 'Full Stack Software Engineer',
    url: DEFAULT_SEO.siteUrl,
    image: fullImageUrl,
    email: 'mailto:manojsharvan@gmail.com',
    telephone: '+918667671121',
    sameAs: [
      'https://github.com/Manoj-sharvan',
      'https://linkedin.com/in/manoj-sharvan',
    ],
    knowsAbout: [
      'React.js',
      'TypeScript',
      'Node.js',
      'JavaScript',
      'Next.js',
      'LLM APIs',
      'Three.js',
      'Konva.js',
      'TanStack Query',
      'Redux Toolkit',
      'Tailwind CSS',
      'Material UI',
      'SPFx',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Zlendo Technology Pvt Ltd',
      url: 'https://www.zlendo.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Gnanamani College of Technology',
    },
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={DEFAULT_SEO.author} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.svg" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Manoj S | Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content={DEFAULT_SEO.twitterHandle} />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || defaultPersonSchema),
        }}
      />
    </Head>
  );
};

export default SEO;
