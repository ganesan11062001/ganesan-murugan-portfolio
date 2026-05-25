'use client';

import {
  Bot,
  BookOpen,
  BrainCircuit,
  BarChart3,
  Cloud,
  Dna,
  Mail,
  PenLine,
  Wrench,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import {
  GlassCard,
  GradientHeading,
  HeroBadge,
  SectionLabel,
} from '../components/Section';

const expectedTopics = [
  {
    icon: Dna,
    title: 'Bioinformatics',
    description: 'Genomics, proteomics, and computational biology workflows',
    accent: 'text-rose-300',
    ring: 'ring-rose-400/30',
  },
  {
    icon: Bot,
    title: 'Machine Learning',
    description: 'AI applications in biological research and drug discovery',
    accent: 'text-emerald-300',
    ring: 'ring-emerald-400/30',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable infrastructure for computational biology',
    accent: 'text-violet-300',
    ring: 'ring-violet-400/30',
  },
  {
    icon: BrainCircuit,
    title: 'LLMs & AI',
    description: 'Large language models and neural networks for bioscience',
    accent: 'text-blue-300',
    ring: 'ring-blue-400/30',
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description: 'Advanced analytics and visualization techniques',
    accent: 'text-amber-300',
    ring: 'ring-amber-400/30',
  },
  {
    icon: Wrench,
    title: 'DevOps & MLOps',
    description: 'Production systems and infrastructure automation',
    accent: 'text-yellow-300',
    ring: 'ring-yellow-400/30',
  },
];

export default function Posts() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Coming Soon</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Blog &amp; Posts</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Sharing insights, tutorials, and discoveries in bioinformatics, machine learning, and computational biology.
          </p>
        </section>

        {/* Coming Soon */}
        <section className="mt-16">
          <div className="max-w-2xl mx-auto">
            <GlassCard className="p-10 md:p-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 ring-1 ring-white/15">
                <PenLine className="h-6 w-6 text-blue-300" strokeWidth={1.75} />
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">
                <GradientHeading as="span">Blog coming soon</GradientHeading>
              </h2>
              <p className="mt-3 text-gray-400">
                Preparing content on bioinformatics, machine learning, and computational biology.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm">
                <span className="text-gray-400">First post expected</span>
                <span className="font-semibold text-blue-300">January 2026</span>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Topics */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <SectionLabel tone="green">What to expect</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              Topics I&apos;ll cover
            </GradientHeading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expectedTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <GlassCard key={topic.title} className="p-6">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ${topic.ring}`}>
                    <Icon className={`h-4 w-4 ${topic.accent}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white tracking-tight">{topic.title}</h3>
                  <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">{topic.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="amber">In the meantime</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Explore my work
              </GradientHeading>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                While you wait, check out my publications, projects, or get in touch.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/publications"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  <BookOpen className="h-4 w-4" />
                  Publications
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  Projects
                </a>
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-300" />
                  Contact
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
