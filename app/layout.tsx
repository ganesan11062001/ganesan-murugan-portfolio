import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../src/app/globals.css";
import Navigation from "./components/Navigation";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL, SOCIALS } from "./lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  applicationName: SITE_NAME,
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    firstName: 'Ganesan',
    lastName: 'Murugan',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: '/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#050507',
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      jobTitle: 'AI/ML Engineer - Drug Discovery',
      description: SITE_DESCRIPTION,
      email: 'mailto:murugan.g@northeastern.edu',
      address: { '@type': 'PostalAddress', addressLocality: 'Boston', addressRegion: 'MA', addressCountry: 'US' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Northeastern University' },
        { '@type': 'CollegeOrUniversity', name: 'Anna University' },
      ],
      knowsAbout: [
        'Drug Discovery',
        'AI for Drug Discovery',
        'Agentic AI',
        'Multi-Agent Systems',
        'Large Language Models',
        'LLM Fine-Tuning',
        'Retrieval-Augmented Generation',
        'LangGraph',
        'Machine Learning',
        'Deep Learning',
        'Protein Language Models',
        'Protein Design',
        'Computational Biology',
        'Bioinformatics',
        'Full-Stack Development',
        'High-Performance Computing',
      ],
      sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.scholar],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-[#050507] text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Navigation />
        <div id="main" className="pt-16">{children}</div>
      </body>
    </html>
  );
}
