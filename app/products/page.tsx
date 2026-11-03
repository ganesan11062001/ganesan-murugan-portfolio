'use client';

import { useRef, type ReactNode } from 'react';
import {
  Activity,
  ArrowUpRight,
  Bot,
  Check,
  Dna,
  ExternalLink,
  FlaskConical,
  Globe,
  HeartPulse,
  Lock,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageShell from '../components/PageShell';
import AnimatedCounter from '../components/AnimatedCounter';
import { Marquee, SpotlightCard } from '../components/Effects';
import { GradientHeading, HeroBadge, SectionLabel } from '../components/Section';

type Product = {
  name: string;
  shortName: string;
  description: string;
  category: string;
  status: 'Published' | 'Internal' | 'Planned' | 'Under Development';
  /** Shown in place of a URL when there is no public link. */
  deployment?: string;
  /** AI platform group (shown first). */
  ai?: boolean;
  technologies: string[];
  features: string[];
  impact: Record<string, string>;
  websiteUrl: string | null;
  launchDate: string;
  icon: LucideIcon;
  accent: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    name: 'Multi-Agentic Platform for Multi-Omics',
    shortName: 'Agentic biomarker discovery',
    description:
      'Multi-agent LLM platform that plans, picks tools, and self-critiques its way through multi-omics analysis - live for a pharma client.',
    category: 'Agentic AI',
    status: 'Internal',
    deployment: 'Live · pharma client (internal)',
    technologies: ['LangGraph', 'FastAPI', 'AWS Bedrock', 'QLoRA', 'DPO', 'RAG', 'FAISS', 'LangSmith'],
    features: ['Multi-agent orchestration', 'LLM tool selection', 'Self-critique loops', 'Grounded RAG'],
    impact: { latency: '-60%', hallucination: '34→8%', agents: 'Multi' },
    websiteUrl: null,
    launchDate: 'Live',
    icon: Bot,
    accent: '#a78bfa',
    ai: true,
  },
  {
    name: 'Cloud Platform for Protein Design',
    shortName: 'PLM-driven peptide design',
    description:
      'Cloud platform running protein design and structure-prediction models end to end, from sequence design to ranked candidates - deployed internally.',
    category: 'Protein Design · PLMs',
    status: 'Internal',
    deployment: 'Internal deployment',
    technologies: ['ProteinMPNN', 'ThermoMPNN', 'Chai-1', 'Boltz-2', 'Python'],
    features: ['Constrained sequence design', 'Structure prediction', 'Stability scoring', 'Candidate ranking'],
    impact: { variants: '10K+', models: '12+', deploy: 'Cloud' },
    websiteUrl: null,
    launchDate: 'Live',
    icon: Dna,
    accent: '#34d399',
    ai: true,
  },
  {
    name: 'Single-Cell & Spatial Web Platform',
    shortName: 'scRNA-seq + spatial transcriptomics',
    description:
      'Web platform for single-cell and spatial transcriptomics analysis with foundation models built in - deployed internally for a pharma client.',
    category: 'Bio Foundation Models',
    status: 'Internal',
    deployment: 'Live · pharma client (internal)',
    technologies: ['scGPT', 'Geneformer', 'scVI', 'Harmony', 'cell2location', 'Squidpy'],
    features: ['scRNA-seq workflows', 'Spatial deconvolution', 'Foundation-model annotation', 'Interactive web UI'],
    impact: { cells: '3M+', profiles: '5M+', deploy: 'Web' },
    websiteUrl: null,
    launchDate: 'Live',
    icon: FlaskConical,
    accent: '#2dd4bf',
    ai: true,
  },
  {
    name: 'AI Chatbot for HPC',
    shortName: 'Agentic RAG support assistant',
    description:
      'Agentic RAG assistant that answers cluster questions and diagnoses failed jobs for the research computing community.',
    category: 'Agentic AI',
    status: 'Planned',
    deployment: 'Launching Dec 2026',
    technologies: ['LangGraph', 'RAG', 'Vector Search', 'SLURM', 'Prometheus', 'Grafana'],
    features: ['Job-failure diagnostics', 'Cluster Q&A', 'Live telemetry context', 'Knowledge-base retrieval'],
    impact: { users: '10K+', launch: 'Dec 2026', mode: 'Agentic' },
    websiteUrl: null,
    launchDate: 'Dec 2026',
    icon: MessageSquare,
    accent: '#38bdf8',
    ai: true,
  },
  {
    name: 'FCS/FCCS Analysis App',
    shortName: 'Fluorescence Correlation Spectroscopy Tool',
    description:
      'A local, cross-platform tool for analyzing Fluorescence Correlation/Cross-Correlation Spectroscopy (FCS/FCCS) traces exported from an ISS VistaVision instrument, with no VistaVision license required. Runs single- or dual-channel autocorrelation, diffusion-model fitting, FCCS bound-fraction calculation, and Kd fitting from concentration series - all locally, with nothing leaving the machine.',
    category: 'Biophysics Software',
    status: 'Published',
    technologies: ['Python', 'Streamlit', 'Multi-tau Correlation', 'pytest', 'NumPy/SciPy'],
    features: [
      'Single/dual-channel autocorrelation & cross-correlation',
      'Diffusion-model fitting per channel',
      'FCCS bound-fraction calculation',
      'Kd fitting from concentration series',
      'Batch / time-course processing',
      'Built-in validation suite (FFT cross-check + synthetic recovery)',
    ],
    impact: { pages: '5', tests: 'Full suite', data: '100% local' },
    websiteUrl: 'https://makowski-lab-fcs-analysis.streamlit.app/',
    launchDate: 'Live Now',
    icon: Activity,
    accent: '#818cf8',
    featured: true,
  },
  {
    name: 'Ghana Bioinnovative Initiative',
    shortName: 'Expo Registration Platform',
    description:
      'Public website for healthcare innovation expo registrations and the bioinnovation center showcase in Ghana.',
    category: 'Public Website',
    status: 'Published',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    features: ['Expo registration', 'Event portal', 'Center showcase', 'Public engagement'],
    impact: { visitors: '1K+', registrations: '200+', events: '5+' },
    websiteUrl: 'https://ghanabioinitiative.sites.northeastern.edu/',
    launchDate: 'Live Now',
    icon: HeartPulse,
    accent: '#34d399',
  },
  {
    name: 'Makowski Lab Research Platform',
    shortName: 'Lab Website',
    description:
      'Academic lab website showcasing structural biology research, projects, and publications from the Makowski Lab.',
    category: 'Academic Website',
    status: 'Published',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    features: ['Project showcase', 'Publications', 'Member profiles', 'Collaboration portal'],
    impact: { visitors: '500+', 'SEO score': '95+', projects: '10+' },
    websiteUrl: 'https://makowski-lab.sites.northeastern.edu/',
    launchDate: 'Live Now',
    icon: Dna,
    accent: '#60a5fa',
  },
  {
    name: 'Enterprise LIMS/ELN Platforms',
    shortName: 'Laboratory Informatics for Pharma',
    description:
      'Engineered and validated 21 CFR Part 11-compliant LIMS/ELN platforms (LabVantage, Benchling, LabWare) for pharmaceutical clients - covering sample accessioning, audit trails, electronic signatures, and workflow automation at enterprise scale.',
    category: 'Enterprise Software',
    status: 'Published',
    technologies: ['LabVantage', 'Benchling', 'LabWare', 'Python', 'REST APIs', 'SQL/PL-SQL', 'Terraform'],
    features: [
      'Sample accessioning & barcode tracking',
      'Audit trails & electronic signatures',
      '21 CFR Part 11 validation',
      'CoA generation',
      'Inventory & master data management',
      'Agile SDLC with CI/CD delivery',
    ],
    impact: { scientists: '5,500+', samples: '1M+', clients: '3+' },
    websiteUrl: null,
    launchDate: 'Jan 2023 – Aug 2024',
    deployment: 'Internal deployment · pharma clients',
    icon: ShieldCheck,
    accent: '#cbd5e1',
  },
];

const stats = [
  { value: products.length, label: 'Products', c: '#34d399' },
  { value: products.filter((p) => p.ai).length, label: 'AI platforms', c: '#a78bfa' },
  { value: products.filter((p) => p.status === 'Internal' || (p.status === 'Published' && !p.websiteUrl)).length, label: 'Internal deployments', c: '#60a5fa' },
  { value: 10, suffix: 'K+', label: 'Users at HPC launch', c: '#fbbf24' },
]

const allTech = Array.from(new Set(products.flatMap((p) => p.technologies)));

function hostOf(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

/** Browser-window chrome around product visuals. */
function BrowserFrame({ url, accent, label, children }: { url: string | null; accent: string; label?: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0d16]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <div className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-black/40 px-2.5 py-1 text-[11px] text-gray-400">
          {url ? (
            <Lock className="h-3 w-3 flex-shrink-0" style={{ color: accent }} />
          ) : (
            <ShieldCheck className="h-3 w-3 flex-shrink-0" style={{ color: accent }} />
          )}
          <span className="truncate">{url ? hostOf(url) : label ?? 'Internal deployment'}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

/** Stylized (illustrative) FCS autocorrelation decay curves - G(τ) on a log time axis. */
function CorrelationArt({ accent }: { accent: string }) {
  const W = 520;
  const H = 220;
  const pad = 28;
  const curve = (tauD: number, g0: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= 80; i++) {
      const lx = -2 + (i / 80) * 6; // log10 tau from 1e-2 to 1e4
      const tau = Math.pow(10, lx);
      const g = g0 / (1 + tau / tauD);
      const x = pad + (i / 80) * (W - 2 * pad);
      const y = H - pad - g * (H - 2 * pad);
      pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  };
  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Illustrative FCS autocorrelation curves">
        <defs>
          <linearGradient id="fcs-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1={pad}
            x2={W - pad}
            y1={pad + f * (H - 2 * pad)}
            y2={pad + f * (H - 2 * pad)}
            stroke="rgba(255,255,255,0.06)"
          />
        ))}
        <line x1={pad} x2={W - pad} y1={H - pad} y2={H - pad} stroke="rgba(255,255,255,0.2)" />
        <line x1={pad} x2={pad} y1={pad} y2={H - pad} stroke="rgba(255,255,255,0.2)" />
        <path d={`${curve(8, 0.92)} L${W - pad},${H - pad} L${pad},${H - pad} Z`} fill="url(#fcs-fill)" />
        <path d={curve(8, 0.92)} fill="none" stroke="#34d399" strokeWidth="2.5" />
        <path d={curve(30, 0.7)} fill="none" stroke="#f87171" strokeWidth="2.5" />
        <path d={curve(18, 0.45)} fill="none" stroke={accent} strokeWidth="2.5" strokeDasharray="6 5" />
        <text x={pad + 4} y={pad - 10} fill="rgba(255,255,255,0.5)" fontSize="11">G(τ)</text>
        <text x={W - pad - 30} y={H - 8} fill="rgba(255,255,255,0.5)" fontSize="11">log τ</text>
      </svg>
      <div className="absolute right-4 top-3 flex flex-col gap-1 text-[10px] font-medium text-gray-400">
        <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-emerald-400" />Ch 1 auto</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-rose-400" />Ch 2 auto</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-0.5 w-4" style={{ background: accent }} />
          Cross-corr.
        </span>
      </div>
      <p className="absolute bottom-1 left-10 text-[9px] uppercase tracking-widest text-gray-600">Illustrative</p>
    </div>
  );
}

/** Spotlight card variant that stretches to full height (for equal-height grids). */
function TallCard({ accent, children }: { accent: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--x', `${e.clientX - r.left}px`);
        el.style.setProperty('--y', `${e.clientY - r.top}px`);
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{ boxShadow: `0 20px 60px -40px ${accent}` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(320px circle at var(--x) var(--y), ${accent}22, transparent 70%)` }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function StatusPill({ product }: { product: Product }) {
  const planned = product.status === 'Planned' || product.status === 'Under Development';
  const label =
    product.status === 'Internal'
      ? 'Live · Internal'
      : product.status === 'Planned'
        ? `Launching ${product.launchDate}`
        : product.websiteUrl
          ? 'Live'
          : product.status;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ring-1 ${
        planned ? 'bg-amber-500/10 text-amber-300 ring-amber-400/30' : 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/30'
      }`}
    >
      <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${planned ? 'bg-amber-400' : 'bg-emerald-400'}`} />
      {label}
    </span>
  );
}

function ImpactTiles({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(product.impact).map(([k, v]) => (
        <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center">
          <div className="text-lg font-bold tracking-tight" style={{ color: product.accent }}>
            {v}
          </div>
          <div className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">{k}</div>
        </div>
      ))}
    </div>
  );
}

function ProductCta({ product, size = 'sm' }: { product: Product; size?: 'sm' | 'lg' }) {
  const pad = size === 'lg' ? 'px-5 py-2.5 text-sm' : 'px-4 py-2 text-xs';
  if (product.websiteUrl) {
    return (
      <a
        href={product.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group/btn inline-flex items-center gap-2 rounded-lg font-semibold text-black transition-transform hover:scale-[1.03] ${pad}`}
        style={{ background: product.accent }}
      >
        <Globe className="h-3.5 w-3.5" />
        {product.featured ? 'Launch app' : 'Visit live'}
        <ExternalLink className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
      </a>
    );
  }
  return (
    <span className={`inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] font-semibold text-gray-400 ${pad}`}>
      {product.status === 'Planned' || product.status === 'Under Development' ? (
        <Rocket className="h-3.5 w-3.5" />
      ) : (
        <Lock className="h-3.5 w-3.5" />
      )}
      {product.status === 'Planned'
        ? `Launching ${product.launchDate}`
        : product.status === 'Under Development'
          ? 'In development'
          : 'Deployed internally'}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <TallCard accent={product.accent}>
      <div className="p-4 pb-0">
        <BrowserFrame url={product.websiteUrl} accent={product.accent} label={product.deployment}>
          <div
            className="relative flex h-28 items-center justify-center overflow-hidden"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${product.accent}33, transparent 60%), linear-gradient(160deg, #111827, #070a12)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(${product.accent}55 1px, transparent 1px)`,
                backgroundSize: '14px 14px',
              }}
            />
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
              style={{
                background: `${product.accent}1f`,
                boxShadow: `inset 0 0 0 1px ${product.accent}55, 0 10px 40px -10px ${product.accent}`,
              }}
            >
              <Icon className="h-7 w-7" style={{ color: product.accent }} strokeWidth={1.5} />
            </div>
          </div>
        </BrowserFrame>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill product={product} />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
            {product.category}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-white">{product.name}</h3>
        <p className="mt-0.5 text-xs font-medium" style={{ color: product.accent }}>
          {product.shortName}
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-gray-400">{product.description}</p>

        <div className="mt-4">
          <ImpactTiles product={product} />
        </div>

        <ul className="mt-4 space-y-1">
          {product.features.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-1.5 text-[12px] text-gray-300/90">
              <Check className="mt-0.5 h-3 w-3 flex-shrink-0" style={{ color: product.accent }} strokeWidth={2.5} />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1">
          {product.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-5">
          <ProductCta product={product} />
          <span className="text-[11px] text-gray-500">{product.launchDate}</span>
        </div>
      </div>
    </TallCard>
  );
}

export default function Products() {
  const featured = products.find((p) => p.featured)!;
  const aiProducts = products.filter((p) => p.ai);
  const rest = products.filter((p) => !p.featured && !p.ai);
  const FeaturedIcon = featured.icon;

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-10 pb-12">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Shipped software · Built to be used</HeroBadge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            <GradientHeading as="span">Products &amp; Solutions</GradientHeading>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Agentic AI and ML platforms in production for pharma and research - plus the web and scientific software around them.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <SpotlightCard key={s.label} accent={s.c} className="p-5 text-center">
                <p className="text-3xl font-bold tracking-tight" style={{ color: s.c }}>
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-gray-400">{s.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* AI platforms */}
        <section className="mt-12">
          <div className="mb-8 text-center">
            <SectionLabel tone="purple">AI platforms</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-3xl">
              Agents &amp; models in production
            </GradientHeading>
            <p className="mx-auto mt-3 max-w-2xl text-gray-400">
              Deployed for pharma and research teams - most run behind company walls, so there&apos;s no public link.
            </p>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-2">
            {aiProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* Featured product */}
        <section className="mt-14">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-4 w-4" style={{ color: featured.accent }} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">Featured product</p>
          </div>
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-8"
            style={{ boxShadow: `0 30px 80px -50px ${featured.accent}` }}
          >
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
              style={{ background: `${featured.accent}22` }}
            />
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, transparent)` }}
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
              {/* Visual */}
              <div className="group">
                <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                  <BrowserFrame url={featured.websiteUrl} accent={featured.accent} label={featured.deployment}>
                    <div className="p-4">
                      <CorrelationArt accent={featured.accent} />
                    </div>
                  </BrowserFrame>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusPill product={featured} />
                  <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-300 ring-1 ring-white/10">
                    {featured.category}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${featured.accent}1a`, boxShadow: `inset 0 0 0 1px ${featured.accent}44` }}
                  >
                    <FeaturedIcon className="h-5 w-5" style={{ color: featured.accent }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{featured.name}</h2>
                    <p className="text-sm font-medium" style={{ color: featured.accent }}>
                      {featured.shortName}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-gray-300/90">{featured.description}</p>

                <ul className="mt-5 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                  {featured.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[12.5px] text-gray-300/90">
                      <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" style={{ color: featured.accent }} strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <ImpactTiles product={featured} />
                </div>

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

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ProductCta product={featured} size="lg" />
                  <span className="text-xs text-gray-500">
                    Launch: <span className="font-semibold text-emerald-300">{featured.launchDate}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other products */}
        <section className="mt-12">
          <div className="mb-8 text-center">
            <SectionLabel tone="blue">More products</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-3xl">
              Web &amp; scientific software
            </GradientHeading>
          </div>
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* Built with */}
        <section className="mt-14">
          <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Built with
          </p>
          <Marquee duration={32}>
            {allTech.map((t) => (
              <span
                key={t}
                className="flex-shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:border-white/30 hover:text-white"
              >
                {t}
              </span>
            ))}
          </Marquee>
        </section>

        {/* Philosophy */}
        <section className="mt-14">
          <div className="mb-7 text-center">
            <SectionLabel tone="amber">Innovation philosophy</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-3xl">
              Bio-solutions for tomorrow
            </GradientHeading>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {[
              {
                icon: Sparkles,
                title: 'AI-native architecture',
                body: 'Integrating AI / ML capabilities from the ground up, creating intelligent systems that optimize biological workflows.',
                c: '#a78bfa',
              },
              {
                icon: Target,
                title: 'Impact-driven design',
                body: 'Every platform addresses real-world challenges in biology and healthcare, ensuring meaningful impact on human health and scientific discovery.',
                c: '#34d399',
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <SpotlightCard key={card.title} accent={card.c} className="h-full p-7">
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                      style={{ background: `${card.c}1a`, boxShadow: `inset 0 0 0 1px ${card.c}40` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: card.c }} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold" style={{ color: card.c }}>
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-400">{card.body}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-7 text-center backdrop-blur-xl md:p-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <SectionLabel tone="blue">Ready to innovate?</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-4xl">
                Let&apos;s build together
              </GradientHeading>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">Custom solutions for your research and product needs.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  Start project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  View research
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
