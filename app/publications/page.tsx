import type { Metadata } from 'next';
import { pageMeta } from '../lib/site';
import { ArrowRight, BookOpen, ExternalLink, FileText, GraduationCap, Mic } from 'lucide-react';
import PageShell from '../components/PageShell';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  GlassCard,
  GradientHeading,
  HeroBadge,
  SectionLabel,
  StatTile,
} from '../components/Section';
import { fetchScholarPublications } from '../lib/scholar';
import { SpotlightCard } from '../components/Effects';

export const revalidate = 3600;

export const metadata: Metadata = pageMeta(
  '/publications',
  'Publications - Computational Biology & AI Research',
  'Peer-reviewed publications by Ganesan Murugan in Biophysical Journal and 3 Biotech - computational structural biology, RNA-binding proteins, WGCNA and systems biology.',
  ['Ganesan Murugan publications', 'Biophysical Journal', '3 Biotech', 'Computational structural biology'],
);

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  doi: string;
  abstract?: string;
  keywords: string[];
  accent: string;
  ring: string;
};

const curatedPublications: Publication[] = [
  {
    title: 'BPS2025 - Metabolic enzymes moonlighting as RNA binding proteins',
    authors:
      'Emberling, G., Curtis, N., Tu, T., Zhang, K., Lokhandwala, A., Tajuddin, Z., Murugan, G., Ondrechen, M. J., & Jeffery, C.',
    journal: 'Biophysical Journal',
    year: '2025',
    volume: '124(3)',
    doi: 'https://doi.org/10.1016/j.bpj.2024.11.2284',
    abstract:
      'Investigation of metabolic enzymes with dual functionality as RNA-binding proteins using computational structural biology approaches - POOL analysis, YASARA, and Schrödinger - identifying high-confidence moonlighting candidates from structural and electrostatic features.',
    keywords: ['RNA-Binding Proteins', 'Metabolic Enzymes', 'Moonlighting', 'Computational Structural Biology', 'POOL'],
    accent: 'from-blue-300 to-cyan-300',
    ring: 'ring-blue-400/30',
  },
  {
    title: 'WGCNA reveals hub genes and molecular mechanism of quiescence',
    authors: 'Apoorvha, J.P., Brindha, S., Ganesan, M. et al.',
    journal: '3 Biotech',
    year: '2025',
    volume: '15, 42',
    doi: 'https://doi.org/10.1007/s13205-024-04203-3',
    abstract:
      'Weighted gene co-expression network analysis across S. cerevisiae, M. musculus, and H. sapiens to identify hub genes and conserved molecular mechanisms underlying cellular quiescence. Identified key hubs including EP300, EGF, EHMT2, and EZH2 with cross-species validation.',
    keywords: ['WGCNA', 'Gene Networks', 'Quiescence', 'Systems Biology', 'Transcriptomics'],
    accent: 'from-violet-300 to-pink-300',
    ring: 'ring-violet-400/30',
  },
];

const palette = [
  { accent: 'from-blue-300 to-cyan-300', ring: 'ring-blue-400/30' },
  { accent: 'from-violet-300 to-pink-300', ring: 'ring-violet-400/30' },
  { accent: 'from-emerald-300 to-teal-300', ring: 'ring-emerald-400/30' },
  { accent: 'from-amber-300 to-orange-300', ring: 'ring-amber-400/30' },
];

// Hex for each gradient accent - used for glows and cover panels.
const ACCENT_HEX: Record<string, [string, string]> = {
  'from-blue-300 to-cyan-300': ['#60a5fa', '#22d3ee'],
  'from-violet-300 to-pink-300': ['#a78bfa', '#f472b6'],
  'from-emerald-300 to-teal-300': ['#34d399', '#2dd4bf'],
  'from-amber-300 to-orange-300': ['#fbbf24', '#fb923c'],
};

const AREA_HEX: Record<string, string> = {
  'text-blue-300': '#60a5fa',
  'text-violet-300': '#a78bfa',
  'text-emerald-300': '#34d399',
  'text-rose-300': '#fb7185',
  'text-cyan-300': '#22d3ee',
  'text-orange-300': '#fb923c',
};

const SELF = /(Murugan, G\.|Ganesan, M\.|M Ganesan|Ganesan Murugan|G Murugan)/;

function Authors({ text }: { text: string }) {
  return (
    <>
      {text.split(SELF).map((part, i) =>
        SELF.test(part) ? (
          <strong key={i} className="font-semibold not-italic text-white">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function normalizeTitle(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

const researchAreas = [
  { label: 'AI for Drug Discovery', desc: 'Protein design, structure prediction, target identification', accent: 'text-blue-300' },
  { label: 'Proteomics & Structural Biology', desc: 'Moonlighting proteins, RNA-binding, electrostatics', accent: 'text-violet-300' },
  { label: 'Transcriptomics', desc: 'Gene networks, single-cell, spatial transcriptomics', accent: 'text-emerald-300' },
  { label: 'Genomics', desc: 'ChIP-seq, ATAC-seq, regulatory element analysis', accent: 'text-rose-300' },
  { label: 'Systems Biology', desc: 'Multi-omics integration, network analysis, WGCNA', accent: 'text-cyan-300' },
  { label: 'Computational Biology', desc: 'Algorithm development, HPC pipelines, workflows', accent: 'text-orange-300' },
];

export default async function Publications() {
  const scholarPubs = await fetchScholarPublications();
  const isLive = Boolean(scholarPubs && scholarPubs.length > 0);

  const curatedByTitle = new Map(curatedPublications.map((p) => [normalizeTitle(p.title), p]));

  const publications: Publication[] = isLive
    ? scholarPubs!.map((sp, i) => {
        const curated = curatedByTitle.get(normalizeTitle(sp.title));
        if (curated) return curated;
        const c = palette[i % palette.length];
        return {
          title: sp.title,
          authors: sp.authors || 'Ganesan Murugan et al.',
          journal: sp.journal,
          year: sp.year,
          doi: sp.link,
          keywords: [],
          accent: c.accent,
          ring: c.ring,
        };
      })
    : curatedPublications;

  const latestYear = publications.reduce((max, p) => {
    const y = parseInt(p.year, 10);
    return Number.isFinite(y) && y > max ? y : max;
  }, 0);

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-16 pb-16">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Peer-Reviewed Research</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Publications</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Research in computational structural biology, systems biology, and multi-omics.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md mx-auto">
            <StatTile value={<AnimatedCounter end={publications.length} />} label="Publications" accent="from-blue-300 to-cyan-300" />
            <StatTile value={latestYear ? String(latestYear) : '2025'} label="Latest" accent="from-emerald-300 to-teal-300" />
          </div>

          <a
            href="https://scholar.google.com/citations?user=DE6CicUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur px-4 py-2 text-sm font-medium text-gray-300 hover:border-white/25 hover:text-white transition-colors"
          >
            <GraduationCap className="h-4 w-4 text-emerald-300" />
            View on Google Scholar
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <p className="mt-3 text-xs text-gray-500">
            {isLive ? 'Synced live from Google Scholar' : 'Showing cached publication data'}
          </p>
        </section>

        {/* List */}
        <section className="mt-16">
          <div className="mx-auto max-w-5xl space-y-5">
            {publications.map((paper, idx) => {
              const [c1, c2] = ACCENT_HEX[paper.accent] ?? ['#60a5fa', '#22d3ee'];
              const isDoi = paper.doi.includes('doi.org');
              return (
                <a
                  key={paper.title}
                  href={paper.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_70px_-25px_var(--glow)] md:flex-row"
                  style={{ ['--glow' as string]: c1 }}
                >
                  {/* Journal cover */}
                  <div
                    className="relative flex flex-col justify-between gap-5 overflow-hidden p-6 md:w-60 md:flex-shrink-0"
                    style={{ background: `linear-gradient(155deg, ${c1}40, ${c2}14 60%, transparent)` }}
                  >
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                      style={{ background: c1 }}
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="font-mono text-[11px] text-white/50">No. {String(idx + 1).padStart(2, '0')}</span>
                      <FileText className="h-4 w-4 text-white/60" strokeWidth={1.75} />
                    </div>
                    <div className="relative">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Published in</p>
                      <p className="mt-1 line-clamp-3 text-xl font-bold leading-tight tracking-tight text-white">{paper.journal}</p>
                      {paper.volume && <p className="mt-1 text-xs text-white/60">Vol. {paper.volume}</p>}
                    </div>
                    <p
                      className="relative bg-clip-text text-6xl font-black leading-none tracking-tighter text-transparent"
                      style={{ backgroundImage: `linear-gradient(90deg, ${c1}, ${c2})` }}
                    >
                      {paper.year}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-xl font-semibold leading-snug tracking-tight text-white">{paper.title}</h2>
                    {paper.authors && (
                      <p className="mt-2 text-xs italic leading-relaxed text-gray-500">
                        <Authors text={paper.authors} />
                      </p>
                    )}

                    {paper.abstract && (
                      <p className="mt-4 text-[14px] leading-relaxed text-gray-300/90">{paper.abstract}</p>
                    )}

                    {paper.keywords.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {paper.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}

                    <span
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold"
                      style={{ color: c1 }}
                    >
                      {isDoi ? 'View publication (DOI)' : 'View on Google Scholar'}
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              );
            })}

            {/* Talks callout */}
            <a
              href="/talks"
              className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-dashed border-sky-400/30 bg-sky-500/[0.04] p-6 transition-colors hover:border-sky-400/60 hover:bg-sky-500/[0.08] sm:flex-row sm:items-center"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/10 ring-1 ring-sky-400/30">
                <Mic className="h-5 w-5 text-sky-300" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-sky-300">
                  Also at SC26 · HUST-26 Workshop · Nov 15, 2026
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  Analyzing User Logs as a First Diagnostic Step in Open OnDemand
                </p>
                <p className="mt-0.5 text-xs text-gray-400">Workshop paper on grounded LLM diagnostics - see Talks &amp; Posters</p>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-sky-300 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <SectionLabel tone="blue">Research areas</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              What I work on
            </GradientHeading>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => {
              const hex = AREA_HEX[area.accent] ?? '#60a5fa';
              return (
                <SpotlightCard key={area.label} accent={hex} className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="h-2 w-2 rounded-full" style={{ background: hex, boxShadow: `0 0 12px ${hex}` }} />
                    <span className="font-mono text-xs text-gray-600">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold" style={{ color: hex }}>
                    {area.label}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-400">{area.desc}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="blue">Read more</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Curious about the work?
              </GradientHeading>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  <BookOpen className="h-4 w-4" />
                  See projects
                </a>
                <a
                  href="/talks"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  <Mic className="h-4 w-4 text-violet-300" />
                  Talks &amp; posters
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
