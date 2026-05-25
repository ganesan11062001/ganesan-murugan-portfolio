'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Cloud,
  Dna,
  FlaskConical,
  GraduationCap,
  Mail,
} from 'lucide-react';
import PageShell from './components/PageShell';
import {
  GlassCard,
  GradientHeading,
  HeroBadge,
  SectionLabel,
  StatTile,
} from './components/Section';

const focusAreas = [
  {
    icon: Bot,
    title: 'Agentic AI & LLMs',
    accent: 'text-violet-300',
    ring: 'ring-violet-400/20',
    points: [
      'Multi-agent LangGraph + FastAPI + AWS Bedrock',
      'QLoRA / DPO fine-tuning — hallucination 34% → 8%',
      'RAG with FAISS + LangSmith observability',
      '60% reduction in analytical latency',
    ],
  },
  {
    icon: Dna,
    title: 'Protein Design',
    accent: 'text-sky-300',
    ring: 'ring-sky-400/20',
    points: [
      'De novo peptides via ProteinMPNN, Boltz-2, Chai-1',
      'Thermostability optimization with ThermoMPNN',
      'AlphaFold3, ESMFold, RoseTTAFold structure prediction',
      '10,000+ peptide variants designed & screened',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Multi-Omics & Single-Cell',
    accent: 'text-emerald-300',
    ring: 'ring-emerald-400/20',
    points: [
      'scRNA-seq via scVI, Harmony, Leiden, RNA velocity',
      'scGPT + Geneformer fine-tuned on 5M+ profiles',
      'Spatial deconvolution with cell2location + Squidpy',
      '+80% accuracy on cell-type annotation',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & HPC',
    accent: 'text-teal-300',
    ring: 'ring-teal-400/20',
    points: [
      'AWS Bedrock, SageMaker, Batch, EC2, S3, RDS, Lambda',
      'SLURM scheduling for 12,000+ HPC users',
      'Docker, Kubernetes, Singularity, Terraform',
      'Prometheus + Grafana cluster monitoring',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'Deep Learning',
    accent: 'text-amber-300',
    ring: 'ring-amber-400/20',
    points: [
      'Vision Transformers, ResNet, U-Net, VAE',
      'GNNs + CNNs across multimodal X-ray scattering',
      'Contrastive learning over 100,000+ images',
      '20,000+ IDP structures modeled at scale',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Research & Teaching',
    accent: 'text-cyan-300',
    ring: 'ring-cyan-400/20',
    points: [
      '2 peer-reviewed publications',
      'Mentored 100+ grad students in NGS / ML',
      'MS Bioinformatics — 3.95/4.00 GPA',
      'BTech Biotechnology — 9.4/10.0 CGPA',
    ],
  },
];

const stackGroups = [
  {
    label: 'Agentic AI / LLMs',
    items: ['LangGraph', 'LangChain', 'AutoGen', 'CrewAI', 'MCP', 'RAG', 'FAISS', 'Ollama'],
  },
  {
    label: 'Protein & Structure',
    items: ['RFdiffusion', 'ProteinMPNN', 'ThermoMPNN', 'AlphaFold3', 'Boltz-2', 'Chai-1', 'Protenix'],
  },
  {
    label: 'Cloud & HPC',
    items: ['AWS Bedrock', 'SageMaker', 'Batch', 'SLURM', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'ML / Programming',
    items: ['PyTorch', 'TensorFlow', 'XGBoost', 'GNN', 'ViT', 'Python', 'React', 'FastAPI'],
  },
];

export default function Home() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="mx-auto max-w-4xl text-center">
          <HeroBadge>Available for full-time roles · Summer 2026</HeroBadge>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Hi, I&apos;m{' '}
            <GradientHeading as="h1" className="inline">
              Ganesan
            </GradientHeading>
            <span className="block text-white/90 text-3xl md:text-5xl font-medium mt-3">
              Computational Biology &times; AI
            </span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-blue-300/80 font-medium tracking-wide">
            MS Bioinformatics @ Northeastern · Computational Biology Co-op · 2 Published Papers
          </p>

          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            I build production-grade ML systems across the drug discovery stack —
            multi-agentic LLM platforms, multi-omics analysis, de novo protein design,
            and the HPC and cloud infrastructure to run them at scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="mailto:murugan.g@northeastern.edu"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
            >
              <Mail className="h-4 w-4 text-blue-300" />
              Get in touch
            </a>
          </div>
        </section>

        {/* Stats strip */}
        <section className="mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <StatTile value="5M+" label="Single-cell profiles" accent="from-blue-300 to-cyan-300" />
            <StatTile value="60%" label="Latency reduction" accent="from-emerald-300 to-teal-300" />
            <StatTile value="10K+" label="Peptide variants" accent="from-violet-300 to-pink-300" />
            <StatTile value="12K+" label="HPC users supported" accent="from-amber-300 to-orange-300" />
          </div>
        </section>

        {/* Focus areas */}
        <section className="mt-28">
          <div className="text-center mb-12">
            <SectionLabel tone="blue">What I work on</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              From wet-lab signal to production AI
            </GradientHeading>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Six areas where the biology and the engineering both have to be right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <GlassCard key={area.title} className="p-6">
                  <div className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ${area.ring}`}>
                    <Icon className={`h-4.5 w-4.5 ${area.accent}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {area.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {area.points.map((p) => (
                      <li key={p} className="flex gap-2 text-[13px] text-gray-300/90 leading-relaxed">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Tech stack */}
        <section className="mt-28">
          <div className="text-center mb-10">
            <SectionLabel tone="purple">Stack</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              Tools I reach for
            </GradientHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stackGroups.map((group) => (
              <GlassCard key={group.label} className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-3">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs font-medium text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="green">Open to opportunities</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Let&apos;s build something that matters
              </GradientHeading>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Whether it&apos;s a multi-agent research platform, a protein design pipeline,
                or a full-stack bioinformatics tool — I&apos;m interested in work where
                the biology and the engineering both have to be right.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  See my projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  More about me
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
