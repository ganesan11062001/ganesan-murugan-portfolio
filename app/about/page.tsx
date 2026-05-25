'use client';

import { useEffect, useState } from 'react';
import {
  Award,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import {
  GlassCard,
  GradientHeading,
  HeroBadge,
  SectionLabel,
  StatTile,
} from '../components/Section';

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime: number | undefined;
    let frame: number;
    const tick = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const experiences = [
  {
    title: 'Computational Biology, Predictive Sciences Co-op',
    company: 'Solid Biosciences',
    location: 'Charlestown, MA',
    period: 'Jan 2026 – Present',
    logo: '/solid-biosciences.png',
    accent: 'text-blue-300',
  },
  {
    title: 'Graduate Research Assistant — Research Computing',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Jan 2026 – Present',
    logo: '/COE.png',
    accent: 'text-rose-300',
  },
  {
    title: 'Programming Assistant — Lee Makowski Lab',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'May 2025 – Present',
    logo: '/COE.png',
    accent: 'text-cyan-300',
  },
  {
    title: 'Digital Transformation, Biotherapeutics Research Data & Automation',
    company: 'Boehringer Ingelheim Pharmaceuticals',
    location: 'Ridgefield, CT',
    period: 'May 2025 – Aug 2025',
    logo: '/BI.png',
    accent: 'text-emerald-300',
  },
  {
    title: 'Bioinformatics Teaching Assistant',
    company: 'Northeastern University, College of Science',
    location: 'Boston, MA',
    period: 'Jan 2025 – Dec 2025',
    logo: '/NCOS.jpg',
    accent: 'text-violet-300',
  },
  {
    title: 'Graduate Research Assistant — Ondrechen Research Group',
    company: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Sep 2024 – Apr 2025',
    logo: '/COE.png',
    accent: 'text-amber-300',
  },
  {
    title: 'Scientific Application Analyst',
    company: 'Zifo Technologies',
    location: 'Chennai, India',
    period: 'Jan 2023 – Aug 2024',
    logo: '/Zifo.webp',
    accent: 'text-orange-300',
  },
];

const highlights = [
  '2 peer-reviewed publications (Biophysical Journal, 3 Biotech)',
  'LLM hallucination cut from 34% → 8% via QLoRA + DPO fine-tuning',
  '60% reduction in analytical latency through multi-agent orchestration',
  '10,000+ de novo peptide variants designed with ProteinMPNN / Boltz-2',
  'scGPT & Geneformer fine-tuned on 5M+ single-cell profiles (+80% acc.)',
  'HPC support for 12,000+ users (SLURM, GPU clusters)',
];

export default function About() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>About — Computational Biology &amp; AI</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">About me</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
            MS Bioinformatics student at Northeastern building AI systems for drug discovery —
            <span className="text-blue-300 font-medium"> agentic LLM platforms, multi-omics, protein design</span>,
            and the infrastructure to run them at scale.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <StatTile value={<AnimatedCounter end={5} suffix="M+" />} label="Single-cell profiles" accent="from-blue-300 to-cyan-300" />
            <StatTile value={<AnimatedCounter end={100} suffix="+" />} label="Students mentored" accent="from-emerald-300 to-teal-300" />
            <StatTile value={<AnimatedCounter end={12} suffix="K+" />} label="HPC users supported" accent="from-violet-300 to-pink-300" />
          </div>
        </section>

        {/* Journey */}
        <section className="mt-28">
          <div className="text-center mb-12">
            <SectionLabel tone="blue">My Journey</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              From wet-lab beginnings to production AI
            </GradientHeading>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Story */}
            <GlassCard className="p-7 lg:col-span-3">
              <div className="space-y-4 text-[15px] text-gray-300 leading-relaxed">
                <p>
                  I started out as a{' '}
                  <strong className="text-white">Biotechnology student at Anna University (9.4/10 CGPA)</strong>,
                  where I got pulled into bioinformatics and data science. I liked the combination —
                  you actually need to understand the biology to build the right software.
                </p>
                <p>
                  Now I&apos;m doing my{' '}
                  <strong className="text-blue-300">MS in Bioinformatics at Northeastern (3.95/4.00)</strong>,
                  building production-grade multi-agentic AI platforms with LangGraph, FastAPI and AWS Bedrock for
                  multi-omics biomarker discovery — fine-tuning LLMs with QLoRA and DPO to cut hallucination rates
                  from 34% to 8%, and designing de novo peptide sequences with ProteinMPNN, ThermoMPNN, Chai-1
                  and Boltz-2 across 10,000+ variants.
                </p>
                <p>
                  In parallel, I architect autonomous multi-agent RAG systems for HPC support serving{' '}
                  <strong className="text-violet-300">12,000+ users</strong>, run deep learning pipelines for
                  tau/tubulin gel image classification and IDP structure prediction, and previously built an
                  end-to-end scRNA-seq + spatial transcriptomics platform (3M+ cells, scGPT/Geneformer
                  fine-tuned on 5M+ profiles) during a biotech digital transformation internship.
                </p>
              </div>
            </GlassCard>

            {/* Side cards */}
            <div className="lg:col-span-2 space-y-4">
              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/20">
                    <GraduationCap className="h-4 w-4 text-blue-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-white">MS Bioinformatics</p>
                    <p className="text-xs text-blue-300/80">Northeastern University · CGPA 3.95/4.00</p>
                    <p className="text-xs text-gray-500 mt-0.5">Expected Aug 2026 · ML/AI, Computational Biology, PLMs</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="font-medium text-white">BTech Biotechnology</p>
                    <p className="text-xs text-blue-300/80">Anna University · CGPA 9.4/10 (Top 5%)</p>
                    <p className="text-xs text-gray-500 mt-0.5">Aug 2019 – May 2023 · Bioinformatics, Data Science</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/20">
                    <Award className="h-4 w-4 text-emerald-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">Highlights</h3>
                </div>
                <ul className="space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-[13px] text-gray-300/90 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400/60" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 ring-1 ring-violet-400/20">
                    <Heart className="h-4 w-4 text-violet-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">What I care about</h3>
                </div>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  I&apos;m most interested in problems where the biology is hard and the engineering is hard at the
                  same time. Drug discovery is a good place for that — models need to be correct, fast, and
                  trustworthy. I want to keep building in this space.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="mt-28">
          <div className="text-center mb-12">
            <SectionLabel tone="purple">Experience</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              Where I&apos;ve worked
            </GradientHeading>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline rail */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block" />

            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-7 hidden sm:flex h-2 w-2 -translate-x-1/2 rounded-full bg-white/40 ring-4 ring-[#050507]" />
                  <GlassCard className="p-4">
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-11 w-11 flex-shrink-0 rounded-lg object-contain bg-white p-1.5"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm md:text-base font-semibold text-white truncate">
                          {exp.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                          <span className={`font-medium ${exp.accent}`}>{exp.company}</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                          <span className="text-gray-500">· {exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="green">Open to opportunities</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Want to work together?
              </GradientHeading>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                I&apos;m always open to interesting problems in computational biology, drug discovery AI,
                or ML infrastructure. Drop me a line.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4" />
                  View projects
                </a>
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-300" />
                  Email me
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
