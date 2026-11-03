'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Dna,
  FlaskConical,
  Layers,
  Mail,
  Sparkles,
  X,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import AnimatedCounter from '../components/AnimatedCounter';
import { Marquee, SpotlightCard } from '../components/Effects';
import { GradientHeading, HeroBadge, SectionLabel } from '../components/Section';

type Category = 'Agentic AI' | 'Protein Design' | 'ML/AI' | 'Bioinformatics' | 'Genomics';

type Project = {
  title: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  category: Category;
  image: string;
};

const categoryStyle: Record<Category, { tint: string; icon: typeof Bot; cover: string }> = {
  'Agentic AI': {
    tint: 'text-violet-300 bg-violet-500/10 ring-violet-400/30',
    icon: Bot,
    cover: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  },
  'Protein Design': {
    tint: 'text-sky-300 bg-sky-500/10 ring-sky-400/30',
    icon: Dna,
    cover: 'from-sky-500/25 via-cyan-500/10 to-transparent',
  },
  'ML/AI': {
    tint: 'text-amber-300 bg-amber-500/10 ring-amber-400/30',
    icon: Cpu,
    cover: 'from-amber-500/25 via-orange-500/10 to-transparent',
  },
  'Bioinformatics': {
    tint: 'text-emerald-300 bg-emerald-500/10 ring-emerald-400/30',
    icon: FlaskConical,
    cover: 'from-emerald-500/25 via-teal-500/10 to-transparent',
  },
  'Genomics': {
    tint: 'text-teal-300 bg-teal-500/10 ring-teal-400/30',
    icon: Database,
    cover: 'from-teal-500/25 via-cyan-500/10 to-transparent',
  },
};

const projects: Project[] = [
  {
    title: 'SafeSelect AI: Multi-Objective Molecular Design',
    type: 'Pfizer Digital & Technology Hackathon 2026',
    period: 'May 2026 – Present',
    description:
      'Developed a multi-agent reinforcement learning pipeline for oncology ADC payload and small-molecule discovery, orchestrating target selectivity, ADMET prediction, and retrosynthesis agents to jointly optimize on-target binding affinity, off-target safety, and synthetic accessibility.',
    achievements: [
      'Multi-agent RL pipeline coordinating selectivity, ADMET, and retrosynthesis agents',
      'Joint optimization of binding affinity, off-target safety, and synthetic accessibility',
      'Applied to oncology ADC payload and small-molecule design',
      'Built for the Pfizer Digital & Technology Hackathon 2026',
    ],
    technologies: ['Reinforcement Learning', 'Multi-Agent Systems', 'ADMET Prediction', 'Retrosynthesis', 'Python'],
    category: 'Agentic AI',
    image: '/projects/safeselect-adc-structure.svg',
  },
  {
    title: 'Multi-Agentic AI Platform for Multi-Omics Biomarker Discovery',
    type: 'Industry Project',
    period: 'Jan 2026 – Present',
    description:
      "Architected a production-grade multi-agentic AI platform using LangGraph, FastAPI, and AWS Bedrock - enabling autonomous planning, LLM-driven tool selection, and self-critique workflows that reduced analytical latency by 60%. Fine-tuned base models with QLoRA and DPO on curated omics datasets and agent execution traces, dropping hallucination rates from 34% to 8% across differential expression, FDR correction, and pathway enrichment reasoning. Built a complementary RAG + LLMOps stack with FAISS semantic indexing, context-aware reranking, prompt-versioned retrieval, LangSmith observability, and scoped tool permissions for reproducible biomedical workflows.",
    achievements: [
      '60% reduction in analytical latency via multi-agent orchestration',
      'Hallucination rate cut from 34% → 8% with QLoRA + DPO fine-tuning',
      'RAG over biomedical literature with FAISS + context-aware reranking',
      'LangSmith-instrumented LLMOps with scoped tool permissions',
    ],
    technologies: ['LangGraph', 'FastAPI', 'AWS Bedrock', 'QLoRA', 'DPO', 'RAG', 'FAISS', 'LangSmith', 'Python'],
    category: 'Agentic AI',
    image: '/projects/multi-agentic-neural-network.svg',
  },
  {
    title: 'De Novo Peptide Design for Neuromuscular Disease Targets',
    type: 'Industry Project',
    period: 'Jan 2026 – Present',
    description:
      "Designed and optimized de novo peptide sequences for Duchenne muscular dystrophy (DMD) and Friedreich's ataxia (FA) using ProteinMPNN, ThermoMPNN, Chai-1, and Boltz-2 - applying constrained sequence design and thermostability optimization across 10,000+ candidate variants to improve stability and reduce aggregation propensity. Coupled structural prediction with energy-based scoring and developability filters to triage manufacturable leads.",
    achievements: [
      '10,000+ peptide variants designed and screened',
      'Constrained sequence design via ProteinMPNN + Boltz-2',
      'Thermostability optimization with ThermoMPNN',
      'Aggregation-propensity-aware ranking for developability',
    ],
    technologies: ['ProteinMPNN', 'ThermoMPNN', 'Chai-1', 'Boltz-2', 'Python', 'Protein Design', 'Structural Biology'],
    category: 'Protein Design',
    image: '/projects/peptide-design-liraglutide-structure.png',
  },
  {
    title: 'Autonomous Multi-Agent RAG System for HPC Support',
    type: 'Academic Research',
    period: 'Jan 2026 – Present',
    description:
      'Architected an autonomous multi-agent RAG system for high-performance computing support using LangGraph, vector search, and internal knowledge bases - enabling intelligent SLURM job diagnostics, automated troubleshooting, and AI-driven research workflows for 12,000+ users. Integrated cluster telemetry (Prometheus + Grafana) so the agent can reason about live GPU/CPU allocation, queue contention, and containerized bioinformatics workloads.',
    achievements: [
      'Multi-agent diagnostic system for SLURM job failures',
      'Serves 12,000+ HPC users (faculty, students, researchers)',
      'Live cluster telemetry via Prometheus + Grafana',
      'Retrieval over internal HPC + bioinformatics knowledge bases',
    ],
    technologies: ['LangGraph', 'RAG', 'Vector Search', 'SLURM', 'Prometheus', 'Grafana', 'Docker', 'Python'],
    category: 'Agentic AI',
    image: '/projects/hpc-rag-supercomputer.jpg',
  },
  {
    title: 'Single-Cell & Spatial Transcriptomics Foundation-Model Platform',
    type: 'Industry Project',
    period: 'May 2025 – Aug 2025',
    description:
      'Deployed an end-to-end scRNA-seq analysis platform integrating scVI, Harmony batch correction, Leiden clustering, and RNA velocity inference - processing 3M+ cells to characterize transcriptional programs and cell-fate transitions. Fine-tuned scGPT and Geneformer foundation models on 5M+ single-cell transcriptomic profiles for cell-type annotation, gene regulatory network inference, and perturbation-aware representation learning, improving accuracy by 80% across heterogeneous tissues. Built a spatial deconvolution pipeline with cell2location and Squidpy mapping fine-grained cellular compositions across 10x Visium datasets.',
    achievements: [
      '3M+ cells processed across single-cell and spatial modalities',
      'scGPT + Geneformer fine-tuned on 5M+ profiles (+80% accuracy)',
      'Spatial deconvolution via cell2location + Squidpy on 10x Visium',
      'RNA velocity inference for cell-fate trajectory analysis',
    ],
    technologies: ['scVI', 'scGPT', 'Geneformer', 'Harmony', 'Leiden', 'cell2location', 'Squidpy', '10x Visium', 'Python'],
    category: 'Bioinformatics',
    image: '/projects/single-cell-fluorescent-cells.jpg',
  },
  {
    title: 'Deep Learning Pipeline for Tau/Tubulin Protein Gel Classification',
    type: 'Academic Research',
    period: 'May 2025 – Present',
    description:
      "Developed deep learning pipelines with agentic hyperparameter and epoch optimization - combining Vision Transformers, VAE, ResNet, and U-Net segmentation to classify 100,000+ silver-stained tau and tubulin protein gel images for Alzheimer's research. Built a multimodal learning framework integrating GNNs, CNNs, and contrastive learning to jointly analyze X-ray scattering profiles and tau fibril imaging data, identifying amyloid-beta aggregation patterns. Ran HPC-scale protein structure prediction (AlphaFold3, ESMFold, RoseTTAFold, ColabFold) across 20,000+ intrinsically disordered protein structures, with PyMOL + ChimeraX for interface analysis.",
    achievements: [
      '100,000+ silver-stained tau / tubulin gel images classified',
      'Multimodal GNN + CNN fusion of X-ray scattering and imaging',
      '20,000+ intrinsically disordered protein structures modeled',
      'Agentic hyperparameter + epoch optimization for the training loop',
    ],
    technologies: ['Vision Transformers', 'ResNet', 'U-Net', 'VAE', 'GNN', 'AlphaFold3', 'ESMFold', 'PyMOL', 'PyTorch'],
    category: 'ML/AI',
    image: '/projects/tau-tubulin-gel-electrophoresis.jpg',
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
    image: '/projects/gata3-dna-double-helix.jpg',
  },
  {
    title: 'WGCNA: Hub Gene Discovery for Cellular Quiescence',
    type: 'Academic Research · Published in 3 Biotech',
    period: '2025',
    description:
      'Performed weighted gene co-expression network analysis (WGCNA) across S. cerevisiae, M. musculus, and H. sapiens transcriptomic datasets to identify hub genes and conserved molecular mechanisms underlying cellular quiescence, revealing a cross-species regulatory core validated through comparative network analysis.',
    achievements: [
      'Cross-species WGCNA across yeast, mouse, and human transcriptomes',
      'Identified conserved hub genes (EP300, EGF, EHMT2, EZH2) driving quiescence',
      'Published in 3 Biotech (2025)',
      'Network-based framework generalizable to other conserved cellular programs',
    ],
    technologies: ['WGCNA', 'R', 'Gene Co-expression Networks', 'Systems Biology', 'Transcriptomics', 'Python'],
    category: 'Bioinformatics',
    image: '/projects/wgcna-network-community.svg',
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
    image: '/projects/onchograph-knowledge-graph.svg',
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
    image: '/projects/crispr-sgrna-diagram.svg',
  },
  {
    title: 'RNA-Binding Mechanism Analysis Across Canonical and Moonlighting Proteins',
    type: 'Academic Research',
    period: 'Sep 2024 – Apr 2025',
    description:
      'Analyzed RNA-binding mechanisms across 250+ canonical and moonlighting proteins using the POOL machine learning method, molecular modeling, and evolutionary conservation analysis with ConSurf, SASA, and Concavity Score - identifying functionally significant residues and surface patches that drive RNA recognition.',
    achievements: [
      '250+ canonical and moonlighting proteins analyzed',
      'POOL-based ML for functional residue prediction',
      'Evolutionary conservation via ConSurf + structural SASA',
      'Surface concavity scoring for binding-pocket prioritization',
    ],
    technologies: ['POOL', 'ConSurf', 'SASA', 'Concavity Score', 'PyMOL', 'Python', 'Structural Biology'],
    category: 'Genomics',
    image: '/projects/rna-binding-adar2-structure.png',
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
    image: '/projects/cobind-chipseq-diagram.png',
  },
];

const ORDER: Category[] = ['Agentic AI', 'Protein Design', 'ML/AI', 'Bioinformatics', 'Genomics'];
const categories: ('All' | Category)[] = ['All', ...ORDER];

const ACCENT: Record<Category, string> = {
  'Agentic AI': '#a78bfa',
  'Protein Design': '#38bdf8',
  'ML/AI': '#fbbf24',
  Bioinformatics: '#34d399',
  Genomics: '#2dd4bf',
};

// Agentic AI first, then the rest in category order (stable within a category).
const sorted = [...projects].sort((a, b) => ORDER.indexOf(a.category) - ORDER.indexOf(b.category));
const FEATURED_TITLE = 'Multi-Agentic AI Platform for Multi-Omics Biomarker Discovery';
const featured = sorted.find((p) => p.title === FEATURED_TITLE) ?? sorted[0];
const allTech = Array.from(new Set(sorted.flatMap((p) => p.technologies)));

// Tile images are sourced from Wikimedia Commons / public domain.
// Several are CC BY / CC BY-SA, which requires attribution - see
// public/projects/CREDITS.md for the source + license of each file.

function CategoryPill({ category }: { category: Category }) {
  const accent = ACCENT[category];
  const Icon = categoryStyle[category].icon;
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm"
      style={{
        color: accent,
        background: `linear-gradient(${accent}26, ${accent}26), rgba(5,5,7,0.75)`,
        boxShadow: `inset 0 0 0 1px ${accent}66`,
      }}
    >
      <Icon className="h-3 w-3" strokeWidth={2.25} />
      {category}
    </span>
  );
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const accent = ACCENT[project.category];
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b0f1a]"
        style={{ boxShadow: `0 0 80px -20px ${accent}80` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-56 overflow-hidden md:h-64">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-[#0b0f1a]/50 to-transparent" />
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
          />
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition hover:bg-black/80"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <CategoryPill category={project.category} />
            <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl">
              {project.title}
            </h2>
            <p className="mt-1 text-xs font-medium text-gray-400">
              <span style={{ color: accent }}>{project.type}</span> · {project.period}
            </p>
          </div>
        </div>

        <div className="p-6 pt-4">
          <p className="text-[14px] leading-relaxed text-gray-300">{project.description}</p>

          <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Highlights</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.achievements.map((a) => (
              <li
                key={a}
                className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-[13px] leading-relaxed text-gray-200"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: accent }} strokeWidth={2.5} />
                <span>{a}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Stack</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
            <button
              onClick={onPrev}
              className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <span className="text-[10px] uppercase tracking-widest text-gray-600">Esc to close · ← →</span>
            <button
              onClick={onNext}
              className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const accent = ACCENT[project.category];
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseMove={(e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: -((e.clientY - r.top) / r.height - 0.5) * 6, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 text-left outline-none transition-[border-color,box-shadow] duration-300 hover:border-white/25 focus-visible:ring-2 focus-visible:ring-white/40"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 200ms ease-out, border-color 300ms, box-shadow 300ms',
        boxShadow: tilt.x || tilt.y ? `0 20px 50px -20px ${accent}80` : undefined,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(to top, ${accent}38, transparent 65%)` }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      <div className="absolute left-4 top-4">
        <CategoryPill category={project.category} />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[11px] font-medium text-gray-400">
          <span style={{ color: accent }}>{project.type}</span> · {project.period}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-[16px] font-semibold leading-snug tracking-tight text-white">
          {project.title}
        </h3>

        {/* Revealed on hover */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <ul className="mt-3 space-y-1.5">
              {project.achievements.slice(0, 2).map((a) => (
                <li key={a} className="flex gap-1.5 text-[12px] leading-snug text-gray-200">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" style={{ color: accent }} strokeWidth={2.5} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((t) => (
                <span key={t} className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-gray-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium" style={{ color: accent }}>
          View details <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | Category>('All');
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const filtered = activeFilter === 'All' ? sorted : sorted.filter((p) => p.category === activeFilter);

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const openFeatured = () => {
    setActiveFilter('All');
    setOpenIdx(sorted.indexOf(featured));
  };

  const fAccent = ACCENT[featured.category];
  const agenticCount = projects.filter((p) => p.category === 'Agentic AI').length;

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-16 pb-16">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Projects &amp; Research · Agentic AI first</HeroBadge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            <GradientHeading as="span">Projects</GradientHeading>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Multi-agent LLM systems, fine-tuned models, and protein language model pipelines - plus the deep
            learning and bioinformatics underneath them. Industry platforms, academic research, and personal builds.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { end: projects.length, suffix: '', label: 'Projects', c: '#60a5fa' },
              { end: agenticCount, suffix: '', label: 'Agentic AI builds', c: '#a78bfa' },
              { end: 60, suffix: '%', label: 'Latency reduction', c: '#fbbf24' },
              { end: 10, suffix: 'K+', label: 'Peptide variants', c: '#38bdf8' },
            ].map((st) => (
              <SpotlightCard key={st.label} accent={st.c} className="p-4 text-center">
                <p className="text-2xl font-bold tracking-tight" style={{ color: st.c }}>
                  <AnimatedCounter end={st.end} suffix={st.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">{st.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* Featured spotlight */}
        <section className="mt-16">
          <button
            type="button"
            onClick={openFeatured}
            className="group relative grid w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] text-left backdrop-blur-xl transition-colors hover:border-white/25 lg:grid-cols-[1.1fr_1fr]"
            style={{ boxShadow: `0 30px 80px -40px ${fAccent}90` }}
          >
            <div
              className="relative h-64 overflow-hidden lg:h-auto lg:min-h-[360px]"
              style={{ background: `radial-gradient(circle at 40% 50%, ${fAccent}30, transparent 70%), #0b0d14` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt=""
                className="absolute inset-0 h-full w-full object-contain p-8 opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-[#0b0d14]" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white ring-1 ring-white/20 backdrop-blur">
                <Sparkles className="h-3 w-3 text-amber-300" />
                Featured
              </span>
            </div>
            <div className="relative p-7 md:p-9">
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${fAccent}, transparent)` }}
              />
              <CategoryPill category={featured.category} />
              <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-2 text-xs font-medium text-gray-400">
                <span style={{ color: fAccent }}>{featured.type}</span> · {featured.period}
              </p>
              <ul className="mt-5 space-y-2.5">
                {featured.achievements.map((a) => (
                  <li key={a} className="flex gap-2 text-[14px] leading-relaxed text-gray-200">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0" style={{ color: fAccent }} strokeWidth={2.5} />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {featured.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform group-hover:scale-[1.02]">
                Read the full story <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </button>
        </section>

        {/* Filters */}
        <section className="mt-16">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const active = activeFilter === cat;
              const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
              const accent = cat === 'All' ? '#ffffff' : ACCENT[cat];
              const Icon = cat === 'All' ? Layers : categoryStyle[cat].icon;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setOpenIdx(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active ? 'text-black' : 'border-white/10 bg-white/[0.04] text-gray-300 hover:border-white/25 hover:text-white'
                  }`}
                  style={active ? { background: accent, borderColor: accent, boxShadow: `0 0 24px -6px ${accent}` } : undefined}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} style={active ? undefined : { color: accent }} />
                  {cat}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                      active ? 'bg-black/15 text-black/70' : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Project tiles */}
        <section className="mt-10">
          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectTile key={project.title} project={project} onOpen={() => setOpenIdx(i)} />
            ))}
          </div>
        </section>

        {/* Tech marquee */}
        <section className="mt-20">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Built with
          </p>
          <div className="space-y-3">
            {[allTech.slice(0, Math.ceil(allTech.length / 2)), allTech.slice(Math.ceil(allTech.length / 2))].map(
              (row, ri) => (
                <Marquee key={ri} reverse={ri === 1} duration={50 + ri * 10}>
                  {row.map((t) => (
                    <span
                      key={t}
                      className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </Marquee>
              ),
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-emerald-500/10 p-10 text-center backdrop-blur-xl md:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="relative">
              <SectionLabel tone="purple">Want to dig deeper?</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-4xl">
                Let&apos;s talk
              </GradientHeading>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Happy to walk through any of these in detail - architecture, results, lessons learned.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {openIdx !== null && filtered[openIdx] && (
        <ProjectModal project={filtered[openIdx]} onClose={close} onPrev={prev} onNext={next} />
      )}
    </PageShell>
  );
}
