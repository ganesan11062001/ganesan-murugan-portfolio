'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  BrainCircuit,
  Cloud,
  Cpu,
  Dna,
  FlaskConical,
  GraduationCap,
  Mail,
  Presentation,
} from 'lucide-react';
import PageShell from './components/PageShell';
import AnimatedCounter from './components/AnimatedCounter';
import HelixCanvas from './components/HelixCanvas';
import { Marquee, RotatingWord, SpotlightCard } from './components/Effects';
import { GradientHeading, HeroBadge, SectionLabel } from './components/Section';

const roles = [
  'multi-agent LLM systems',
  'agents that reason over biological data',
  'fine-tuned LLMs that hallucinate less',
  'protein language model pipelines',
  'agentic RAG for 12,000+ HPC users',
];

const logos = [
  { src: '/zifo-logo.png', alt: 'Zifo Technologies' },
  { src: '/BI.png', alt: 'Boehringer Ingelheim' },
  { src: '/solid-biosciences.png', alt: 'Solid Biosciences' },
  { src: '/COE.png', alt: 'Northeastern University College of Engineering' },
  { src: '/NCOS.jpg', alt: 'Northeastern University College of Science' },
  { src: '/anna-university.png', alt: 'Anna University' },
];

const latest = [
  {
    icon: Award,
    kicker: 'Nov 2026 · Certified',
    title: 'AWS Certified Cloud Practitioner',
    href: '/certifications',
    accent: '#fbbf24',
  },
  {
    icon: Presentation,
    kicker: 'Oct 2026 · Workshop',
    title: 'Taught "Intro to GPUs on the Cluster"',
    href: '/talks',
    accent: '#a78bfa',
  },
  {
    icon: GraduationCap,
    kicker: 'Dec 2026 · Upcoming',
    title: 'Graduating - MS Bioinformatics',
    href: '/about',
    accent: '#34d399',
  },
];

const featured = [
  {
    title: 'Multi-Agentic AI Platform for Biomarker Discovery',
    category: 'Agentic AI',
    metric: '34% → 8% hallucination',
    image: '/projects/multi-agentic-neural-network.svg',
    accent: '#a78bfa',
  },
  {
    title: 'Autonomous Multi-Agent RAG for HPC Support',
    category: 'Agentic AI',
    metric: '12,000+ users',
    image: '/projects/hpc-rag-supercomputer.jpg',
    accent: '#22d3ee',
  },
  {
    title: 'De Novo Peptide Design with Protein Language Models',
    category: 'PLMs · Protein Design',
    metric: '10,000+ variants',
    image: '/projects/peptide-design-liraglutide-structure.png',
    accent: '#34d399',
  },
];

const arc = [
  { step: '01', era: '2023 – 2025', title: 'Full-stack software', where: 'Zifo · Boehringer Ingelheim', accent: '#a3e635' },
  { step: '02', era: '2024 – 2026', title: 'ML & foundation models', where: 'Northeastern · Research', accent: '#34d399' },
  { step: '03', era: 'Now', title: 'Agentic AI', where: 'Multi-agent systems in production', accent: '#a78bfa' },
];

const ACCENT_HEX: Record<string, string> = {
  'text-violet-300': '#a78bfa',
  'text-sky-300': '#7dd3fc',
  'text-emerald-300': '#6ee7b7',
  'text-teal-300': '#5eead4',
  'text-amber-300': '#fcd34d',
  'text-rose-300': '#fda4af',
};

const focusAreas = [
  {
    icon: Bot,
    title: 'Agentic AI & Multi-Agent Systems',
    accent: 'text-violet-300',
    ring: 'ring-violet-400/20',
    points: [
      'Multi-agent LangGraph + FastAPI + AWS Bedrock platforms',
      'Autonomous planning, LLM tool selection & self-critique loops',
      '60% reduction in analytical latency via agent orchestration',
      'Multi-agent RL for molecular design (SafeSelect AI)',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'LLM Fine-Tuning, RAG & LLMOps',
    accent: 'text-sky-300',
    ring: 'ring-sky-400/20',
    points: [
      'QLoRA + DPO on omics data & agent traces - hallucination 34% → 8%',
      'RAG with FAISS semantic indexing + context-aware reranking',
      'LangSmith observability, prompt versioning, scoped tool permissions',
      'Grounded LLM diagnostics for HPC (SC26 workshop paper)',
    ],
  },
  {
    icon: Dna,
    title: 'Protein Language Models & Design',
    accent: 'text-emerald-300',
    ring: 'ring-emerald-400/20',
    points: [
      'De novo peptides with ProteinMPNN, ThermoMPNN, Boltz-2, Chai-1',
      '10,000+ candidate variants designed & screened',
      'AlphaFold3, ESMFold, RoseTTAFold at HPC scale (20,000+ IDPs)',
      'Developability-aware ranking for manufacturable leads',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Biological Foundation Models',
    accent: 'text-teal-300',
    ring: 'ring-teal-400/20',
    points: [
      'scGPT + Geneformer fine-tuned on 5M+ single-cell profiles',
      '+80% accuracy on cell-type annotation',
      'scRNA-seq + spatial transcriptomics over 3M+ cells',
      'Multi-omics biomarker discovery driven by agents',
    ],
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    accent: 'text-amber-300',
    ring: 'ring-amber-400/20',
    points: [
      'Vision Transformers, ResNet, U-Net, VAE',
      'GNNs + CNNs across multimodal X-ray scattering',
      'Contrastive learning over 100,000+ images',
      'Agentic hyperparameter & epoch optimization',
    ],
  },
  {
    icon: Cloud,
    title: 'ML Infrastructure & HPC',
    accent: 'text-rose-300',
    ring: 'ring-rose-400/20',
    points: [
      'AWS Bedrock, SageMaker, Batch, Lambda',
      'Agentic RAG support system for 12,000+ HPC users',
      'SLURM, NVIDIA GPU clusters, Docker, Kubernetes, Terraform',
      'Prometheus + Grafana telemetry the agents can reason over',
    ],
  },
];

const stackGroups = [
  {
    label: 'Agentic AI',
    items: ['LangGraph', 'LangChain', 'AutoGen', 'CrewAI', 'MCP', 'AWS Bedrock', 'OpenAI APIs', 'Ollama', 'FastAPI'],
  },
  {
    label: 'LLMs & LLMOps',
    items: ['QLoRA', 'DPO', 'RAG', 'FAISS', 'LangSmith', 'Mistral-7B', 'Weights & Biases', 'Prompt versioning'],
  },
  {
    label: 'PLMs & Bio Foundation Models',
    items: ['ProteinMPNN', 'ThermoMPNN', 'ESMFold', 'AlphaFold3', 'Boltz-2', 'Chai-1', 'RFdiffusion', 'scGPT', 'Geneformer'],
  },
  {
    label: 'Full-Stack',
    items: ['TypeScript', 'React', 'Next.js', 'FastAPI', 'Python', 'Docker', 'LabVantage', 'Benchling', 'LabWare'],
  },
  {
    label: 'ML & Infra',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'GNN', 'ViT', 'SageMaker', 'SLURM', 'Docker', 'Kubernetes', 'Python', 'TypeScript'],
  },
];

export default function Home() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-14 pb-16">
        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div className="text-center lg:text-left">
            <HeroBadge>Open to full-time AI/ML roles · Graduating Dec 2026</HeroBadge>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Hi, I&apos;m{' '}
              <GradientHeading as="span" className="inline">
                Ganesan
              </GradientHeading>
            </h1>
            <p className="mt-4 text-2xl font-medium text-white/90 md:text-3xl">
              AI/ML Engineer &middot; Agentic AI &times; Biology
            </p>

            <p className="mt-6 min-h-[3.5rem] text-lg text-gray-400 md:text-xl">
              I build <RotatingWord words={roles} />
            </p>

            <p className="mt-2 text-sm font-medium tracking-wide text-blue-300/80">
              Full-stack roots · Multi-agent systems · LLM fine-tuning · Protein language models
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="mailto:murugan.g@northeastern.edu"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/[0.08]"
              >
                <Mail className="h-4 w-4 text-blue-300" />
                Get in touch
              </a>
            </div>
          </div>

          {/* Helix visual with floating metric chips */}
          <div className="relative mx-auto h-[380px] w-full max-w-[520px] md:h-[460px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl" />
            <HelixCanvas />
            {[
              { v: '34% → 8%', l: 'LLM hallucination', pos: 'left-0 top-10', c: '#a78bfa', anim: 'animate-float' },
              { v: '60%', l: 'faster with agents', pos: 'right-0 top-1/3', c: '#38bdf8', anim: 'animate-float-delayed' },
              { v: '10K+', l: 'PLM-designed peptides', pos: 'left-4 bottom-12', c: '#34d399', anim: 'animate-float-delayed' },
            ].map((chip) => (
              <div
                key={chip.l}
                className={`absolute ${chip.pos} ${chip.anim} hidden rounded-xl border border-white/10 bg-[#0b0f1a]/80 px-3.5 py-2 backdrop-blur-xl sm:block`}
                style={{ boxShadow: `0 10px 30px -10px ${chip.c}55` }}
              >
                <p className="text-base font-bold tracking-tight" style={{ color: chip.c }}>
                  {chip.v}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">{chip.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Logo marquee */}
        <section className="mt-12">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Where I&apos;ve worked &amp; studied
          </p>
          <Marquee duration={30}>
            {logos.map((l) => (
              <div
                key={l.alt}
                className="flex h-14 w-40 flex-shrink-0 items-center justify-center rounded-xl bg-white/95 px-4 opacity-85 transition hover:opacity-100 hover:scale-105"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={l.alt} className="max-h-10 w-full object-contain" />
              </div>
            ))}
          </Marquee>
        </section>

        {/* Stats */}
        <section className="mt-14">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { end: 60, suffix: '%', label: 'Latency cut by agents', c: '#a78bfa' },
              { end: 8, suffix: '%', label: 'Hallucination (from 34%)', c: '#60a5fa' },
              { end: 12, suffix: 'K+', label: 'Users served by agentic RAG', c: '#fbbf24' },
              { end: 5, suffix: 'M+', label: 'Cells for foundation models', c: '#34d399' },
            ].map((s) => (
              <SpotlightCard key={s.label} accent={s.c} className="p-5 text-center">
                <p className="text-3xl font-bold tracking-tight" style={{ color: s.c }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">{s.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Latest */}
        <section className="mt-16">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">Latest</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-3">
            {latest.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href}>
                  <SpotlightCard accent={item.accent} className="h-full p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `${item.accent}1a`, boxShadow: `inset 0 0 0 1px ${item.accent}44` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: item.accent }} strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: item.accent }}>
                          {item.kicker}
                        </p>
                        <p className="truncate text-sm font-semibold text-white">{item.title}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>
        </section>

        {/* The arc: software -> ML -> agents */}
        <section className="mt-24">
          <div className="mb-10 text-center">
            <SectionLabel tone="green">The arc</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-4xl">
              From shipping software to shipping agents
            </GradientHeading>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Agents are software systems first. I learned that by building the systems.
            </p>
          </div>
          <div className="relative grid gap-4 md:grid-cols-3">
            <div
              className="pointer-events-none absolute left-[16%] right-[16%] top-[38px] hidden h-px md:block"
              style={{ background: 'linear-gradient(90deg, #a3e635, #34d399, #a78bfa)' }}
            />
            {arc.map((a) => (
              <div key={a.step} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 flex flex-shrink-0 items-center justify-center rounded-full bg-[#050507] font-mono text-xl font-bold"
                  style={{ width: 76, height: 76, color: a.accent, boxShadow: `inset 0 0 0 1px ${a.accent}66, 0 0 30px -6px ${a.accent}88` }}
                >
                  {a.step}
                </div>
                <SpotlightCard accent={a.accent} className="mt-5 h-full w-full p-6">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-gray-500">{a.era}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{a.title}</h3>
                  <p className="mt-1 text-xs font-medium" style={{ color: a.accent }}>
                    {a.where}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section className="mt-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel tone="purple">Featured work</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-4xl">
                Selected projects
              </GradientHeading>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.title}
                href="/projects"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to top, ${p.accent}40, transparent 60%)` }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: p.accent, background: `${p.accent}1f`, boxShadow: `inset 0 0 0 1px ${p.accent}55` }}
                  >
                    {p.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-white">{p.title}</h3>
                  <p className="mt-2 text-2xl font-bold tracking-tight" style={{ color: p.accent }}>
                    {p.metric}
                  </p>
                  <span className="mt-3 inline-flex translate-y-2 items-center gap-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Read more <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Focus areas */}
        <section className="mt-24">
          <div className="mb-10 text-center">
            <SectionLabel tone="blue">What I work on</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-4xl">
              Agents first, grounded in biology
            </GradientHeading>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              AI/ML engineering where the models have to be right about the science.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              const hex = ACCENT_HEX[area.accent] ?? '#60a5fa';
              return (
                <SpotlightCard key={area.title} accent={hex} className="h-full p-6">
                  <div className="flex items-start justify-between">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ background: `${hex}1a`, boxShadow: `inset 0 0 0 1px ${hex}40` }}
                    >
                      <Icon className={`h-5 w-5 ${area.accent}`} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-white">{area.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {area.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-[13px] leading-relaxed text-gray-300/90">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: hex }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* Stack marquee */}
        <section className="mt-24">
          <div className="mb-8 text-center">
            <SectionLabel tone="purple">Stack</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-4xl">
              Tools I reach for
            </GradientHeading>
          </div>
          <div className="space-y-3">
            {stackGroups.map((group, gi) => (
              <Marquee key={group.label} reverse={gi % 2 === 1} duration={34 + gi * 6}>
                <span className="flex flex-shrink-0 items-center rounded-full bg-white/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 ring-1 ring-white/10">
                  {group.label}
                </span>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-white/30 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </Marquee>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-10 text-center backdrop-blur-xl md:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <SectionLabel tone="green">Open to opportunities</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-5xl">
                Let&apos;s build something that matters
              </GradientHeading>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Multi-agent systems, LLM fine-tuning, RAG, or protein language models - I&apos;m looking for AI/ML
                roles building agents that do real work, especially where the science is hard.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  More about me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
