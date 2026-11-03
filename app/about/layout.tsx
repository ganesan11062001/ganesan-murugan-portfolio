import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMeta } from '../lib/site';

export const metadata: Metadata = pageMeta(
  '/about',
  'About - AI/ML Engineer, Full-Stack to Agentic AI',
  'About Ganesan Murugan - AI/ML engineer moving from full-stack software to agentic AI and multi-agent LLM systems, with a background in biotechnology and an MS in Bioinformatics at Northeastern.',
  ['About Ganesan Murugan', 'AI/ML Engineer resume', 'Agentic AI experience'],
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
