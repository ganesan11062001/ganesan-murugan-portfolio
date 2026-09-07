'use client';

import { useEffect, useState } from 'react';
import { BookOpen, ExternalLink, FileText, GraduationCap } from 'lucide-react';
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

const publications = [
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

const researchAreas = [
  { label: 'AI for Drug Discovery', desc: 'Protein design, structure prediction, target identification', accent: 'text-blue-300' },
  { label: 'Proteomics & Structural Biology', desc: 'Moonlighting proteins, RNA-binding, electrostatics', accent: 'text-violet-300' },
  { label: 'Transcriptomics', desc: 'Gene networks, single-cell, spatial transcriptomics', accent: 'text-emerald-300' },
  { label: 'Genomics', desc: 'ChIP-seq, ATAC-seq, regulatory element analysis', accent: 'text-rose-300' },
  { label: 'Systems Biology', desc: 'Multi-omics integration, network analysis, WGCNA', accent: 'text-cyan-300' },
  { label: 'Computational Biology', desc: 'Algorithm development, HPC pipelines, workflows', accent: 'text-orange-300' },
];

export default function Publications() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Peer-Reviewed Research</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Publications</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Research in computational structural biology, systems biology, and multi-omics - both published in 2025.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md mx-auto">
            <StatTile value={<AnimatedCounter end={2} />} label="Publications" accent="from-blue-300 to-cyan-300" />
            <StatTile value="2025" label="Published" accent="from-emerald-300 to-teal-300" />
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
        </section>

        {/* List */}
        <section className="mt-20">
          <div className="max-w-4xl mx-auto space-y-4">
            {publications.map((paper) => (
              <GlassCard key={paper.title} className="p-7">
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.04] ring-1 ${paper.ring}`}>
                    <FileText className="h-4 w-4 text-blue-300" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-white leading-snug tracking-tight">{paper.title}</h2>
                    <p className="mt-1.5 text-xs text-gray-500 italic leading-relaxed">{paper.authors}</p>
                    <p className={`mt-2 text-xs font-semibold bg-gradient-to-r ${paper.accent} bg-clip-text text-transparent`}>
                      {paper.journal} · {paper.volume} · {paper.year}
                    </p>

                    <p className="mt-4 text-[14px] text-gray-300/90 leading-relaxed">{paper.abstract}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {paper.keywords.map((kw) => (
                        <span key={kw} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300">
                          {kw}
                        </span>
                      ))}
                    </div>

                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-blue-300 hover:text-blue-200"
                    >
                      View publication (DOI)
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {researchAreas.map((area) => (
              <GlassCard key={area.label} className="p-5">
                <h3 className={`text-sm font-semibold ${area.accent}`}>{area.label}</h3>
                <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">{area.desc}</p>
              </GlassCard>
            ))}
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
              <div className="mt-8">
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  <BookOpen className="h-4 w-4" />
                  See projects
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
