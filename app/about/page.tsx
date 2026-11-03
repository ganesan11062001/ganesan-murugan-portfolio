'use client';

import { useEffect, useState } from 'react';
import {
  Award,
  GraduationCap,
  Heart,
  Mail,
  Sparkles,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import JourneyTimeline, { type JourneyItem } from '../components/JourneyTimeline';
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

const journey: JourneyItem[] = [
  {
    title: 'Bachelors (Biotechnology)',
    org: 'Anna University',
    location: 'Chennai, India',
    start: 'Aug 2019',
    end: 'May 2023',
    kind: 'education',
    logo: '/anna-university.png',
    accent: '#f87171',
  },
  {
    title: 'Scientific Application Analyst',
    chapter: 'Full-stack',
    org: 'Zifo Technologies',
    location: 'Chennai, India',
    start: 'Jan 2023',
    end: 'Aug 2024',
    kind: 'work',
    logo: '/zifo-logo.png',
    accent: '#a3e635',
  },
  {
    title: 'Masters (Bioinformatics)',
    org: 'Northeastern University',
    location: 'Boston, MA',
    start: 'Sep 2024',
    end: 'Dec 2026',
    kind: 'education',
    logo: '/NCOS.jpg',
    accent: '#fb7185',
  },
  {
    title: 'Graduate Research Assistant',
    chapter: 'Structural bio',
    org: 'Ondrechen Research Group',
    location: 'Boston, MA',
    start: 'Sep 2024',
    end: 'Apr 2025',
    kind: 'work',
    logo: '/COE.png',
    accent: '#fbbf24',
  },
  {
    title: 'Bioinformatics Teaching Assistant',
    chapter: 'Teaching',
    org: 'Northeastern, College of Science',
    location: 'Boston, MA',
    start: 'Jan 2025',
    end: 'Dec 2025',
    kind: 'work',
    logo: '/NCOS.jpg',
    accent: '#a78bfa',
  },
  {
    title: 'Digital Transformation Intern',
    chapter: 'Full-stack · ML',
    org: 'Boehringer Ingelheim',
    location: 'Ridgefield, CT',
    start: 'May 2025',
    end: 'Aug 2025',
    kind: 'work',
    logo: '/BI.png',
    accent: '#34d399',
  },
  {
    title: 'Computational Biology Co-op',
    chapter: 'PLMs · Agents',
    org: 'Solid Biosciences',
    location: 'Charlestown, MA',
    start: 'Jan 2026',
    end: 'Aug 2026',
    kind: 'work',
    logo: '/solid-biosciences.png',
    accent: '#fb923c',
  },
  {
    title: 'Programming Assistant',
    chapter: 'Deep learning',
    org: 'Lee Makowski Lab',
    location: 'Boston, MA',
    start: 'May 2025',
    end: 'Present',
    kind: 'work',
    logo: '/COE.png',
    accent: '#22d3ee',
    status: 'current',
  },
  {
    title: 'Lead Graduate Research Assistant',
    chapter: 'Agentic AI',
    org: 'Northeastern Research Computing',
    location: 'Boston, MA',
    start: 'Jan 2026',
    end: 'Present',
    kind: 'work',
    logo: '/COE.png',
    accent: '#f472b6',
    status: 'current',
  },
  {
    title: 'Graduating',
    org: 'MS Bioinformatics · Northeastern',
    location: 'Boston, MA',
    start: 'Dec 2026',
    kind: 'education',
    logo: '/graduation-cap.png',
    accent: '#facc15',
    status: 'incoming',
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
      <div className="container mx-auto px-6 pt-16 pb-16">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>About - AI/ML · Agentic AI · Biology</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">About me</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-3xl text-base md:text-lg text-gray-400 leading-relaxed">
            AI/ML engineer focused on <span className="text-violet-300 font-medium">agentic AI</span> -
            multi-agent LLM systems, fine-tuning, and RAG - applied to biology through{' '}
            <span className="text-emerald-300 font-medium">protein language models</span> and single-cell foundation
            models. MS Bioinformatics at Northeastern.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <StatTile value={<AnimatedCounter end={60} suffix="%" />} label="Latency cut by agents" accent="from-violet-300 to-pink-300" />
            <StatTile value={<AnimatedCounter end={10} suffix="K+" />} label="PLM-designed peptides" accent="from-emerald-300 to-teal-300" />
            <StatTile value={<AnimatedCounter end={12} suffix="K+" />} label="Users served by agentic RAG" accent="from-blue-300 to-cyan-300" />
          </div>
        </section>

        {/* Journey */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <SectionLabel tone="blue">My Story</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              From wet-lab beginnings to production AI
            </GradientHeading>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Story + values */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <GlassCard className="p-7">
                <div className="space-y-4 text-[15px] text-gray-300 leading-relaxed">
                  <p>
                    I started out as a{' '}
                    <strong className="text-white">Biotechnology student at Anna University (9.4/10 CGPA)</strong>,
                    where I got pulled into bioinformatics and data science. I liked the combination -
                    you actually need to understand the biology to build the right software.
                  </p>
                  <p>
                    So I started by building software - as a full-stack developer at Zifo and Boehringer
                    Ingelheim. That&apos;s why I think of agents as software systems first.
                  </p>
                  <p>
                    Now I&apos;m doing my{' '}
                    <strong className="text-blue-300">MS in Bioinformatics at Northeastern (3.95/4.00)</strong>,
                    building production-grade multi-agentic AI platforms with LangGraph, FastAPI and AWS Bedrock for
                    multi-omics biomarker discovery - fine-tuning LLMs with QLoRA and DPO to cut hallucination rates
                    from 34% to 8%, and designing de novo peptide sequences with ProteinMPNN, ThermoMPNN, Chai-1
                    and Boltz-2 across 10,000+ variants.
                  </p>
                  <p>
                    In parallel, I architect autonomous multi-agent RAG systems for HPC support serving{' '}
                    <strong className="text-violet-300">12,000+ users</strong>, run deep learning pipelines for
                    tau/tubulin gel image classification and IDP structure prediction.
                  </p>
                </div>
              </GlassCard>
              <GlassCard className="p-7 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 ring-1 ring-violet-400/20">
                    <Heart className="h-4 w-4 text-violet-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">What I care about</h3>
                </div>
                <p className="text-[14px] text-gray-400 leading-relaxed">
                  I&apos;m most interested in problems where the biology is hard and the engineering is hard at the
                  same time. Lately that means thinking about drug discovery less as a pipeline of one-off analyses
                  and more as a closed loop - agents that reason over literature and experimental data, models that
                  stay uncertain until the evidence says otherwise, and systems that get a little sharper with every
                  new result. Drug discovery is a good place for that: models need to be correct, fast, and
                  trustworthy. I want to keep building in this space.
                </p>
              </GlassCard>
            </div>

            {/* Side cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
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
                    <p className="text-xs text-gray-500 mt-0.5">Expected Dec 2026 · ML/AI, Computational Biology, PLMs</p>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <p className="font-medium text-white">BTech Biotechnology</p>
                    <p className="text-xs text-blue-300/80">Anna University · CGPA 9.4/10 (Top 5%)</p>
                    <p className="text-xs text-gray-500 mt-0.5">Aug 2019 – May 2023 · Bioinformatics, Data Science</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex-1">
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

            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <SectionLabel tone="purple">Experience &amp; Education</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              My Journey
            </GradientHeading>
          </div>

          <JourneyTimeline items={journey} />
        </section>

        {/* CTA */}
        <section className="mt-20">
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
