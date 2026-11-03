/** Single source of truth for SEO. Set NEXT_PUBLIC_SITE_URL in your host (e.g. Vercel) to the live domain. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ganesanmurugan.dev').replace(/\/$/, '');

export const SITE_NAME = 'Ganesan Murugan';

export const SITE_TITLE = 'Ganesan Murugan - AI/ML for Drug Discovery · Agentic AI';

export const SITE_DESCRIPTION =
  'Ganesan Murugan is an AI/ML engineer passionate about drug discovery - building agentic AI, multi-agent LLM systems and protein language model pipelines for biomarker discovery, protein design and molecular design. MS Bioinformatics, Northeastern University, Boston.';

export const SITE_KEYWORDS = [
  'Ganesan Murugan',
  'AI for Drug Discovery',
  'AI/ML for Drug Discovery',
  'Machine Learning for Drug Discovery',
  'Computational Drug Discovery',
  'AI/ML Engineer',
  'Machine Learning Engineer',
  'Agentic AI Engineer',
  'Agentic AI',
  'Multi-Agent Systems',
  'LLM Engineer',
  'Generative AI',
  'LangGraph',
  'LangChain',
  'RAG',
  'Retrieval-Augmented Generation',
  'LLM Fine-Tuning',
  'QLoRA',
  'DPO',
  'LLMOps',
  'AWS Bedrock',
  'Protein Language Models',
  'Protein Design',
  'Molecular Design',
  'Biomarker Discovery',
  'Computational Biology',
  'Bioinformatics',
  'Single-Cell Foundation Models',
  'Full-Stack Developer',
  'HPC',
  'Northeastern University',
  'Boston',
];

export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/ganesan-murugan-a34aa7231/',
  github: 'https://github.com/ganesan11062001',
  scholar: 'https://scholar.google.com/citations?user=DE6CicUAAAAJ',
};

export const ROUTES: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/publications', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/talks', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/certifications', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/products', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
];

/** Build per-page metadata with canonical URL + matching Open Graph / Twitter fields. */
export function pageMeta(path: string, title: string, description: string, keywords: string[] = []) {
  return {
    title,
    description,
    keywords: [...keywords, ...SITE_KEYWORDS.slice(0, 8)],
    alternates: { canonical: path },
    openGraph: {
      type: 'website' as const,
      siteName: SITE_NAME,
      locale: 'en_US',
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: SITE_TITLE }],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ['/opengraph-image'],
    },
  };
}
