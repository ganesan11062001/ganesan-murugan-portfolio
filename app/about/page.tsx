'use client';

import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Mail, MapPin, Quote, Sparkles } from 'lucide-react';
import PageShell from '../components/PageShell';
import AnimatedCounter from '../components/AnimatedCounter';
import JourneyTimeline, { type JourneyItem } from '../components/JourneyTimeline';
import { SpotlightCard } from '../components/Effects';
import { GradientHeading, HeroBadge, SectionLabel } from '../components/Section';
import { SOCIALS } from '../lib/site';

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
    logo: '/northeastern-rc.png',
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
  { end: 2, suffix: '', label: 'Peer-reviewed publications', sub: 'Biophysical Journal · 3 Biotech', c: '#60a5fa' },
  { end: 8, suffix: '%', label: 'LLM hallucination', sub: 'down from 34% with QLoRA + DPO', c: '#a78bfa' },
  { end: 60, suffix: '%', label: 'Faster analysis', sub: 'via multi-agent orchestration', c: '#f472b6' },
  { end: 10, suffix: 'K+', label: 'Peptide variants', sub: 'designed with protein models', c: '#34d399' },
  { end: 5, suffix: 'M+', label: 'Single-cell profiles', sub: 'for scGPT & Geneformer', c: '#2dd4bf' },
  { end: 12, suffix: 'K+', label: 'HPC users', sub: 'served by agentic RAG', c: '#fbbf24' },
];

const chapters = [
  {
    n: '01',
    title: 'Biology first',
    c: '#f87171',
    body: (
      <>
        Biotechnology at <strong className="text-white">Anna University (9.4/10)</strong> pulled me into
        bioinformatics. You have to understand the biology to build the right software.
      </>
    ),
  },
  {
    n: '02',
    title: 'Then software',
    c: '#a3e635',
    body: (
      <>
        I started as a <strong className="text-white">full-stack developer</strong> at Zifo and Boehringer
        Ingelheim - which is why I think of agents as software systems first.
      </>
    ),
  },
  {
    n: '03',
    title: 'Now, AI for drug discovery',
    c: '#a78bfa',
    body: (
      <>
        MS Bioinformatics at <strong className="text-white">Northeastern (3.95/4.00)</strong>, building agentic AI,
        fine-tuned LLMs and protein language models aimed at one goal: discovering better drugs, faster.
      </>
    ),
  },
];

const education = [
  { degree: 'MS Bioinformatics', school: 'Northeastern University', meta: 'GPA 3.95/4.00 · Dec 2026', logo: '/NCOS.jpg', c: '#fb7185' },
  { degree: 'BTech Biotechnology', school: 'Anna University', meta: 'CGPA 9.4/10 · Top 5% · 2023', logo: '/anna-university.png', c: '#f87171' },
];

const links = [
  { label: 'LinkedIn', href: SOCIALS.linkedin },
  { label: 'GitHub', href: SOCIALS.github },
  { label: 'Scholar', href: SOCIALS.scholar },
];

function Heading({ label, tone, children }: { label: string; tone: 'blue' | 'purple' | 'green' | 'amber'; children: string }) {
  return (
    <div className="mb-6 text-center">
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <GradientHeading as="h2" className="mt-3 text-2xl font-semibold md:text-3xl">
        {children}
      </GradientHeading>
    </div>
  );
}

export default function About() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-10 pb-12">
        {/* Hero */}
        <section className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr]">
          <div className="text-center lg:text-left">
            <HeroBadge>About - AI/ML for Drug Discovery</HeroBadge>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              <GradientHeading as="span">About me</GradientHeading>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg lg:mx-0 mx-auto">
              AI/ML engineer passionate about <span className="font-medium text-blue-300">drug discovery</span>. I build{' '}
              <span className="font-medium text-violet-300">agentic AI</span>, fine-tuned LLMs and{' '}
              <span className="font-medium text-emerald-300">protein language models</span> - grounded in real biology.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {highlights.slice(1, 4).map((h) => (
                <SpotlightCard key={h.label} accent={h.c} className="p-3.5 text-center">
                  <p className="text-2xl font-bold tracking-tight" style={{ color: h.c }}>
                    <AnimatedCounter end={h.end} suffix={h.suffix} />
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-gray-400">{h.label}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <SpotlightCard accent="#a78bfa" className="rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-cyan-400 opacity-80 blur-[2px]" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#0b0f1a] text-xl font-bold text-white">
                  GM
                </div>
                <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-[#0b0f1a]" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-semibold tracking-tight text-white">Ganesan Murugan</p>
                <p className="text-sm font-medium text-violet-300">AI/ML for Drug Discovery</p>
                <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="h-3 w-3" /> Boston, MA
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-500/[0.06] px-3.5 py-2.5 text-xs text-emerald-200">
              <span className="font-semibold text-emerald-300">Open to full-time roles</span> · Graduating Dec 2026
            </div>

            <div className="mt-4 space-y-2">
              {education.map((e) => (
                <div key={e.degree} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.logo} alt={e.school} className="h-full w-full object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{e.degree}</p>
                    <p className="truncate text-[11px] text-gray-400">
                      {e.school} · <span style={{ color: e.c }}>{e.meta}</span>
                    </p>
                  </div>
                  <GraduationCap className="h-4 w-4 flex-shrink-0 text-gray-600" />
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/l inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" />
                </a>
              ))}
              <a
                href="mailto:murugan.g@northeastern.edu"
                className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black transition-transform hover:scale-105"
              >
                <Mail className="h-3 w-3" /> Email
              </a>
            </div>
          </SpotlightCard>
        </section>

        {/* Story */}
        <section className="mt-14">
          <Heading label="My Story" tone="blue">
            Biology, then software, now AI for drug discovery
          </Heading>
          <div className="grid gap-4 lg:grid-cols-5">
            <div className="grid gap-3 lg:col-span-3">
              {chapters.map((ch) => (
                <SpotlightCard key={ch.n} accent={ch.c} className="p-5">
                  <div className="flex gap-4">
                    <span className="font-mono text-2xl font-bold leading-none" style={{ color: ch.c }}>
                      {ch.n}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{ch.title}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-gray-400">{ch.body}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Pull quote */}
            <div className="relative overflow-hidden rounded-2xl p-px lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 via-violet-400/30 to-cyan-400/50" />
              <div className="relative flex h-full flex-col rounded-2xl bg-[#0a0d16] p-6">
                <Quote className="h-8 w-8 text-violet-300/70" strokeWidth={1.5} />
                <p className="mt-3 text-[15px] leading-relaxed text-gray-200">
                  I want drug discovery to work less like a pipeline of one-off analyses and more like a{' '}
                  <span className="font-semibold text-violet-300">closed loop</span> - agents that reason over
                  literature and experimental data, models that stay uncertain until the evidence says otherwise, and
                  systems that get a little sharper with every new result.
                </p>
                <p className="mt-auto pt-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  What I care about
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-14">
          <Heading label="Highlights" tone="green">
            Numbers I&apos;m proud of
          </Heading>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {highlights.map((h) => (
              <SpotlightCard key={h.label} accent={h.c} className="p-4">
                <p className="text-3xl font-bold tracking-tight" style={{ color: h.c }}>
                  <AnimatedCounter end={h.end} suffix={h.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{h.label}</p>
                <p className="text-xs text-gray-500">{h.sub}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Experience timeline */}
        <section className="mt-14">
          <Heading label="Experience & Education" tone="purple">
            My Journey
          </Heading>
          <JourneyTimeline items={journey} />
        </section>

        {/* CTA */}
        <section className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-7 text-center backdrop-blur-xl md:p-10">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <SectionLabel tone="green">Open to opportunities</SectionLabel>
              <GradientHeading as="h2" className="mt-3 text-2xl font-semibold md:text-3xl">
                Want to work together?
              </GradientHeading>
              <p className="mx-auto mt-3 max-w-xl text-gray-400">
                Looking for AI/ML roles in drug discovery - agents, LLMs and protein models.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  <Sparkles className="h-4 w-4" />
                  View projects
                </Link>
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <Mail className="h-4 w-4 text-blue-300" />
                  Email me
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
