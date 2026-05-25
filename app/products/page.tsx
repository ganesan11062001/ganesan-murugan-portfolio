'use client';

import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Dna,
  ExternalLink,
  FlaskConical,
  Globe,
  HeartPulse,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
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

type Product = {
  name: string;
  shortName: string;
  description: string;
  category: string;
  status: 'Published' | 'Under Development';
  technologies: string[];
  features: string[];
  impact: Record<string, string>;
  websiteUrl: string | null;
  launchDate: string;
  icon: LucideIcon;
  tint: string;
};

const products: Product[] = [
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
    tint: 'text-emerald-300 ring-emerald-400/30 bg-emerald-500/10',
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
    tint: 'text-blue-300 ring-blue-400/30 bg-blue-500/10',
  },
  {
    name: 'SingleCell Insights Pro',
    shortName: 'scRNA-seq Analysis Platform',
    description:
      'Single-cell RNA sequencing platform with automated QC, dimensional reduction, and interactive visualization for multi-omics discovery.',
    category: 'Bioinformatics Analysis',
    status: 'Under Development',
    technologies: ['Python', 'Scanpy', 'React', 'Plotly', 'Docker', 'AWS'],
    features: ['Automated QC', 'UMAP / tSNE', 'Cell type classification', 'DE analysis', 'Trajectory inference', 'Multi-sample integration'],
    impact: { version: 'v0.1', testing: 'Alpha', launch: 'Q4' },
    websiteUrl: null,
    launchDate: 'Q4 2025',
    icon: FlaskConical,
    tint: 'text-teal-300 ring-teal-400/30 bg-teal-500/10',
  },
];

const stats = [
  { value: 3, label: 'Total products', accent: 'from-emerald-300 to-teal-300' },
  { value: 2, label: 'Published', accent: 'from-blue-300 to-cyan-300' },
  { value: 1, label: 'In development', accent: 'from-amber-300 to-orange-300' },
  { value: 100, suffix: '%', label: 'Success rate', accent: 'from-violet-300 to-pink-300' },
];

export default function Products() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Building bio-innovation</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Products &amp; Solutions</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Platforms shipping at the intersection of healthcare, structural biology, and bioinformatics.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {stats.map((s) => (
              <StatTile
                key={s.label}
                value={<AnimatedCounter end={s.value} suffix={s.suffix} />}
                label={s.label}
                accent={s.accent}
              />
            ))}
          </div>
        </section>

        {/* Product list */}
        <section className="mt-20">
          <div className="max-w-5xl mx-auto space-y-4">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <GlassCard key={product.name} className="p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ring-1 ${product.tint}`}>
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-white tracking-tight">{product.name}</h3>
                        <p className="mt-0.5 text-xs font-medium text-blue-300/80">{product.shortName}</p>
                      </div>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${
                        product.status === 'Published'
                          ? 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/30'
                          : 'bg-amber-500/10 text-amber-300 ring-amber-400/30'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <p className="text-[14px] text-gray-300/90 leading-relaxed">{product.description}</p>

                  <div className="mt-6 grid md:grid-cols-3 gap-5">
                    {/* Impact */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300/80 mb-2">
                        Impact
                      </p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {Object.entries(product.impact).map(([k, v]) => (
                          <div key={k} className="rounded-md border border-white/10 bg-white/[0.03] p-2 text-center">
                            <div className="text-[13px] font-semibold text-white">{v}</div>
                            <div className="text-[10px] text-gray-500 capitalize mt-0.5">{k}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-300/80 mb-2">
                        Features
                      </p>
                      <ul className="space-y-1">
                        {product.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex gap-1.5 text-[12px] text-gray-300/90">
                            <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-400" strokeWidth={2.5} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack + meta */}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-300/80 mb-2">
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {product.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-gray-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-[11px] text-gray-500">
                        Launch:{' '}
                        <span
                          className={`font-semibold ${
                            product.launchDate === 'Live Now' ? 'text-emerald-300' : 'text-amber-300'
                          }`}
                        >
                          {product.launchDate}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    {product.websiteUrl ? (
                      <a
                        href={product.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-xs font-semibold transition-transform hover:scale-[1.02]"
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Visit live
                        <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-gray-400">
                        <Rocket className="h-3.5 w-3.5" />
                        In development
                      </span>
                    )}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <SectionLabel tone="amber">Innovation philosophy</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              Bio-solutions for tomorrow
            </GradientHeading>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <GlassCard className="p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
                <Target className="h-4 w-4 text-emerald-300" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-emerald-300">Impact-driven design</h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                Every platform addresses real-world challenges in biology and healthcare, ensuring meaningful impact on
                human health and scientific discovery.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/30">
                <Sparkles className="h-4 w-4 text-blue-300" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-blue-300">AI-native architecture</h3>
              <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                Integrating AI / ML capabilities from the ground up, creating intelligent systems that optimize
                biological workflows.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="blue">Ready to innovate?</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Let&apos;s build together
              </GradientHeading>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Custom solutions for your research and product needs.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  Start project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  View research
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </PageShell>
  );
}
