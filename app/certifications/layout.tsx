import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMeta } from '../lib/site';

export const metadata: Metadata = pageMeta(
  '/certifications',
  'Certifications - AWS, Oracle, Anthropic, Databricks',
  'Certifications held by Ganesan Murugan: AWS Certified AI Practitioner, AWS Cloud Practitioner, Oracle Cloud Infrastructure, Claude Code, Databricks Generative AI and AI Agent Fundamentals.',
  ['AWS Certified AI Practitioner', 'Oracle Cloud certifications', 'Databricks Generative AI', 'Claude Code certification'],
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
