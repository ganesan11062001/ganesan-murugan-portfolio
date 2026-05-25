'use client';

import { useEffect, useState } from 'react';
import {
  Bot,
  Check,
  Cpu,
  Database,
  Dna,
  FlaskConical,
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

type Category = 'Agentic AI' | 'Protein Design' | 'ML/AI' | 'Bioinformatics' | 'Genomics';

type Project = {
  title: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  category: Category;
};

const categoryStyle: Record<Category, { tint: string; icon: typeof Bot }> = {
  'Agentic AI': { tint: 'text-violet-300 bg-violet-500/10 ring-violet-400/30', icon: Bot },
  'Protein Design': { tint: 'text-sky-300 bg-sky-500/10 ring-sky-400/30', icon: Dna },
  'ML/AI': { tint: 'text-amber-300 bg-amber-500/10 ring-amber-400/30', icon: Cpu },
  'Bioinformatics': { tint: 'text-emerald-300 bg-emerald-500/10 ring-emerald-400/30', icon: FlaskConical },
  'Genomics': { tint: 'text-teal-300 bg-teal-500/10 ring-teal-400/30', icon: Database },
};

const projects: Project[] = [
  {
    title: 'Multi-Agentic AI Platform for Multi-Omics Biomarker Discovery',
    type: 'Industry Project',
    period: 'Jan 2026 – Present',
    description:
      "Architected a production-grade multi-agentic AI platform using LangGraph, FastAPI, and AWS Bedrock — enabling autonomous planning, LLM-driven tool selection, and self-critique workflows that reduced analytical latency by 60%. Fine-tuned base models with QLoRA and DPO on curated omics datasets and agent execution traces, dropping hallucination rates from 34% to 8% across differential expression, FDR correction, and pathway enrichment reasoning. Built a complementary RAG + LLMOps stack with FAISS semantic indexing, context-aware reranking, prompt-versioned retrieval, LangSmith observability, and scoped tool permissions for reproducible biomedical workflows.",
    achievements: [
      '60% reduction in analytical latency via multi-agent orchestration',
      'Hallucination rate cut from 34% → 8% with QLoRA + DPO fine-tuning',
      'RAG over biomedical literature with FAISS + context-aware reranking',
      'LangSmith-instrumented LLMOps with scoped tool permissions',
    ],
    technologies: ['LangGraph', 'FastAPI', 'AWS Bedrock', 'QLoRA', 'DPO', 'RAG', 'FAISS', 'LangSmith', 'Python'],
    category: 'Agentic AI',
  },
  {
    title: 'De Novo Peptide Design for Neuromuscular Disease Targets',
    type: 'Industry Project',
    period: 'Jan 2026 – Present',
    description:
      "Designed and optimized de novo peptide sequences for Duchenne muscular dystrophy (DMD) and Friedreich's ataxia (FA) using ProteinMPNN, ThermoMPNN, Chai-1, and Boltz-2 — applying constrained sequence design and thermostability optimization across 10,000+ candidate variants to improve stability and reduce aggregation propensity. Coupled structural prediction with energy-based scoring and developability filters to triage manufacturable leads.",
    achievements: [
      '10,000+ peptide variants designed and screened',
      'Constrained sequence design via ProteinMPNN + Boltz-2',
      'Thermostability optimization with ThermoMPNN',
      'Aggregation-propensity-aware ranking for developability',
    ],
    technologies: ['ProteinMPNN', 'ThermoMPNN', 'Chai-1', 'Boltz-2', 'Python', 'Protein Design', 'Structural Biology'],
    category: 'Protein Design',
  },
  {
    title: 'Autonomous Multi-Agent RAG System for HPC Support',
    type: 'Academic Research',
    period: 'Jan 2026 – Present',
    description:
      'Architected an autonomous multi-agent RAG system for high-performance computing support using LangGraph, vector search, and internal knowledge bases — enabling intelligent SLURM job diagnostics, automated troubleshooting, and AI-driven research workflows for 12,000+ users. Integrated cluster telemetry (Prometheus + Grafana) so the agent can reason about live GPU/CPU allocation, queue contention, and containerized bioinformatics workloads.',
    achievements: [
      'Multi-agent diagnostic system for SLURM job failures',
      'Serves 12,000+ HPC users (faculty, students, researchers)',
      'Live cluster telemetry via Prometheus + Grafana',
      'Retrieval over internal HPC + bioinformatics knowledge bases',
    ],
    technologies: ['LangGraph', 'RAG', 'Vector Search', 'SLURM', 'Prometheus', 'Grafana', 'Docker', 'Python'],
    category: 'Agentic AI',
  },
  {
    title: 'Single-Cell & Spatial Transcriptomics Foundation-Model Platform',
    type: 'Industry Project',
    period: 'May 2025 – Aug 2025',
    description:
      'Deployed an end-to-end scRNA-seq analysis platform integrating scVI, Harmony batch correction, Leiden clustering, and RNA velocity inference — processing 3M+ cells to characterize transcriptional programs and cell-fate transitions. Fine-tuned scGPT and Geneformer foundation models on 5M+ single-cell transcriptomic profiles for cell-type annotation, gene regulatory network inference, and perturbation-aware representation learning, improving accuracy by 80% across heterogeneous tissues. Built a spatial deconvolution pipeline with cell2location and Squidpy mapping fine-grained cellular compositions across 10x Visium datasets.',
    achievements: [
      '3M+ cells processed across single-cell and spatial modalities',
      'scGPT + Geneformer fine-tuned on 5M+ profiles (+80% accuracy)',
      'Spatial deconvolution via cell2location + Squidpy on 10x Visium',
      'RNA velocity inference for cell-fate trajectory analysis',
    ],
    technologies: ['scVI', 'scGPT', 'Geneformer', 'Harmony', 'Leiden', 'cell2location', 'Squidpy', '10x Visium', 'Python'],
    category: 'Bioinformatics',
  },
  {
    title: 'Deep Learning Pipeline for Tau/Tubulin Protein Gel Classification',
    type: 'Academic Research',
    period: 'May 2025 – Present',
    description:
      "Developed deep learning pipelines with agentic hyperparameter and epoch optimization — combining Vision Transformers, VAE, ResNet, and U-Net segmentation to classify 100,000+ silver-stained tau and tubulin protein gel images for Alzheimer's research. Built a multimodal learning framework integrating GNNs, CNNs, and contrastive learning to jointly analyze X-ray scattering profiles and tau fibril imaging data, identifying amyloid-beta aggregation patterns. Ran HPC-scale protein structure prediction (AlphaFold3, ESMFold, RoseTTAFold, ColabFold) across 20,000+ intrinsically disordered protein structures, with PyMOL + ChimeraX for interface analysis.",
    achievements: [
      '100,000+ silver-stained tau / tubulin gel images classified',
      'Multimodal GNN + CNN fusion of X-ray scattering and imaging',
      '20,000+ intrinsically disordered protein structures modeled',
      'Agentic hyperparameter + epoch optimization for the training loop',
    ],
    technologies: ['Vision Transformers', 'ResNet', 'U-Net', 'VAE', 'GNN', 'AlphaFold3', 'ESMFold', 'PyMOL', 'PyTorch'],
    category: 'ML/AI',
  },
  {
    title: 'Multi-Omics Investigation of GATA3 Mutation in ER+ Breast Cancer',
    type: 'Academic Project',
    period: 'Jan 2026 – Apr 2026',
    description:
      'Integrated transcriptomics, epigenomics, phenomics, and proteomics datasets from TCGA, DepMap, CCLE, and CPTAC BRCA cohorts to characterize the molecular landscape of GATA3-mutant ER-positive breast cancer. Identified synthetic-lethal interactions, dysregulated pathways, and transcriptional programs associated with the mutant phenotype using harmonized multi-omics modeling and pathway enrichment.',
    achievements: [
      'Four-modality integration (transcriptomics, epigenomics, phenomics, proteomics)',
      'Cross-cohort harmonization across TCGA, DepMap, CCLE, CPTAC BRCA',
      'Synthetic-lethal interaction discovery for GATA3-mutant ER+ tumors',
      'Pathway- and program-level dysregulation analysis',
    ],
    technologies: ['TCGA', 'DepMap', 'CCLE', 'CPTAC', 'Python', 'R', 'Multi-omics', 'Pathway Enrichment'],
    category: 'Bioinformatics',
  },
  {
    title: 'OnchoGraph: Pan-Cancer Drug Repurposing via Heterogeneous Knowledge Graphs',
    type: 'Academic Project',
    period: 'Sep 2025 – Dec 2025',
    description:
      'Built a heterogeneous graph neural network for drug repurposing that integrates DrugBank, DisGeNET, and Hetionet under a relation-sensitive multi-head attention scheme to identify novel therapeutic candidates across 33 TCGA cancer types. Achieved 0.96 ROC AUC on cold-start evaluation, demonstrating generalization to drug-disease pairs unseen at training time.',
    achievements: [
      '0.96 ROC AUC on cold-start drug-disease evaluation',
      'Heterogeneous GNN with relation-sensitive multi-head attention',
      'Cross-source integration of DrugBank + DisGeNET + Hetionet',
      'Covers all 33 TCGA cancer types',
    ],
    technologies: ['GNN', 'PyTorch Geometric', 'DrugBank', 'DisGeNET', 'Hetionet', 'TCGA', 'Multi-head Attention'],
    category: 'ML/AI',
  },
  {
    title: 'ML-Driven Optimization of CRISPR-Cas9 sgRNA Efficiency',
    type: 'Academic Project',
    period: 'Dec 2024 – Jan 2025',
    description:
      'Developed an ML pipeline using Random Forest, Gradient Boosting, and Neural Networks to predict CRISPR sgRNA efficiency from 100,000+ sequences, achieving 92% accuracy through sequence-level feature engineering. Compressed experimental screening time by 90% and accelerated candidate identification 7.5x over conventional approaches.',
    achievements: [
      '92% prediction accuracy across 100,000+ sgRNA sequences',
      '90% reduction in experimental screening requirements',
      '7.5x acceleration in candidate identification',
      'Sequence-level feature engineering pipeline',
    ],
    technologies: ['Random Forest', 'Gradient Boosting', 'Neural Networks', 'scikit-learn', 'CRISPR-Cas9', 'Python'],
    category: 'ML/AI',
  },
  {
    title: 'RNA-Binding Mechanism Analysis Across Canonical and Moonlighting Proteins',
    type: 'Academic Research',
    period: 'Sep 2024 – Apr 2025',
    description:
      'Analyzed RNA-binding mechanisms across 250+ canonical and moonlighting proteins using the POOL machine learning method, molecular modeling, and evolutionary conservation analysis with ConSurf, SASA, and Concavity Score — identifying functionally significant residues and surface patches that drive RNA recognition.',
    achievements: [
      '250+ canonical and moonlighting proteins analyzed',
      'POOL-based ML for functional residue prediction',
      'Evolutionary conservation via ConSurf + structural SASA',
      'Surface concavity scoring for binding-pocket prioritization',
    ],
    technologies: ['POOL', 'ConSurf', 'SASA', 'Concavity Score', 'PyMOL', 'Python', 'Structural Biology'],
    category: 'Genomics',
  },
  {
    title: 'Quantitative Analysis of Genomic Overlaps Using Cobind',
    type: 'Academic Project',
    period: 'Sep 2024 – Dec 2024',
    description:
      'Analyzed 500,000+ genomic intervals using Python, Pandas, SciPy, and BX-Python to process ChIP-seq/ATAC-seq BED files with 1M+ intervals. Implemented six statistical metrics to identify 10+ transcriptional cofactors and master regulators from CTCF binding sites and cancer-specific open chromatin regions (OCRs).',
    achievements: [
      '500,000+ genomic intervals analyzed',
      '1M+ intervals processed via custom Python pipelines',
      '10+ transcriptional cofactors and master regulators identified',
      'Cancer-specific OCR regulatory analysis',
    ],
    technologies: ['Python', 'Cobind', 'Pandas', 'SciPy', 'BX-Python', 'ChIP-seq', 'ATAC-seq'],
    category: 'Genomics',
  },
];

const categories: ('All' | Category)[] = ['All', 'Agentic AI', 'Protein Design', 'ML/AI', 'Bioinformatics', 'Genomics'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Projects &amp; Research</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Projects</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            A mix of industry platforms, academic research, and personal projects — mostly centered on
            protein design, multi-omics, agentic AI, and genomics.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <StatTile value={<AnimatedCounter end={11} />} label="Projects" accent="from-blue-300 to-cyan-300" />
            <StatTile value={<AnimatedCounter end={5} suffix="M+" />} label="Single-cell profiles" accent="from-emerald-300 to-teal-300" />
            <StatTile value={<AnimatedCounter end={10} suffix="K+" />} label="Peptide variants" accent="from-violet-300 to-pink-300" />
            <StatTile value={<AnimatedCounter end={60} suffix="%" />} label="Latency reduction" accent="from-amber-300 to-orange-300" />
          </div>
        </section>

        {/* Filters */}
        <section className="mt-16">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const active = activeFilter === cat;
              const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? 'border-white/30 bg-white text-black'
                      : 'border-white/10 bg-white/[0.04] text-gray-300 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                      active ? 'bg-black/10 text-black/70' : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Project list */}
        <section className="mt-10">
          <div className="max-w-5xl mx-auto space-y-4">
            {filtered.map((project) => {
              const style = categoryStyle[project.category];
              const Icon = style.icon;
              return (
                <GlassCard key={project.title} className="p-7">
                  <div className="grid lg:grid-cols-3 gap-7">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ring-1 ${style.tint}`}>
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0">
                          <h2 className="text-lg font-semibold text-white leading-snug tracking-tight">
                            {project.title}
                          </h2>
                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 ring-1 ${style.tint}`}>
                              {project.category}
                            </span>
                            <span className="text-blue-300/80 font-medium">{project.type}</span>
                            <span className="text-gray-500">· {project.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-[14px] text-gray-300/90 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300/80 mb-2">
                          Key results
                        </p>
                        <ul className="space-y-1.5">
                          {project.achievements.map((a) => (
                            <li key={a} className="flex gap-2 text-[13px] text-gray-300/90 leading-relaxed">
                              <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" strokeWidth={2.5} />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300/80 mb-2">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
              <SectionLabel tone="purple">Want to dig deeper?</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Let&apos;s talk
              </GradientHeading>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Happy to walk through any of these in detail — architecture, results, lessons learned.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
