import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { pageMeta } from '../lib/site';

export const metadata: Metadata = pageMeta(
  '/projects',
  'Projects - Agentic AI, LLMs & Protein Design',
  'AI/ML projects by Ganesan Murugan: multi-agent LLM platforms with LangGraph and AWS Bedrock, agentic RAG, QLoRA/DPO fine-tuning, deep learning, and protein language model pipelines.',
  ['Agentic AI projects', 'Multi-agent LLM projects', 'LangGraph projects', 'RAG projects', 'Protein design projects'],
);

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
