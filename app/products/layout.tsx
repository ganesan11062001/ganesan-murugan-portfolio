import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMeta } from '../lib/site';

export const metadata: Metadata = pageMeta(
  '/products',
  'Products - Agentic AI & ML Platforms',
  'AI products by Ganesan Murugan: a multi-agentic multi-omics platform, a cloud protein design platform, a single-cell and spatial web platform, and an agentic RAG chatbot for 10K+ HPC users - plus full-stack scientific software.',
  ['Agentic AI platform', 'Multi-agent LLM', 'Protein design platform', 'AI chatbot', 'Full-stack products'],
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
