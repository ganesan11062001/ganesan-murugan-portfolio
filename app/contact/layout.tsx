import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMeta } from '../lib/site';

export const metadata: Metadata = pageMeta(
  '/contact',
  'Contact - Hire an AI/ML & Agentic AI Engineer',
  'Contact Ganesan Murugan - open to full-time AI/ML, agentic AI, and LLM engineering roles. Based in Boston, MA, graduating December 2026.',
  ['Hire AI/ML engineer', 'Agentic AI engineer Boston', 'Contact Ganesan Murugan'],
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
