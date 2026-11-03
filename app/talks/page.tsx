import type { Metadata } from 'next';
import { ArrowUpRight, CalendarDays, Clock, Cpu, FileText, Mail, MapPin, Mic, Plus, Presentation, Sparkles } from 'lucide-react';
import PageShell from '../components/PageShell';
import { pageMeta } from '../lib/site';
import { GradientHeading, HeroBadge, SectionLabel } from '../components/Section';
import { SpotlightCard } from '../components/Effects';
import Countdown from '../components/Countdown';

export const revalidate = 86400;

export const metadata: Metadata = pageMeta(
  '/talks',
  'Talks, Posters & Conference Presentations',
  'Talks, workshops, posters and conference presentations by Ganesan Murugan - including SC26 (HUST-26) on grounded LLM diagnostics for HPC and GPU training at Northeastern Research Computing.',
  ['SC26', 'HUST-26', 'LLM grounding', 'Open OnDemand', 'HPC workshops'],
);

type Talk = {
  title: string;
  type: 'Workshop' | 'Talk' | 'Poster' | 'Conference';
  role: string;
  host: string;
  location: string;
  date: string; // ISO yyyy-mm-dd
  time?: string;
  description: string;
  authors?: string;
  tags: string[];
  url?: string;
  accent: string; // hex
};

const talks: Talk[] = [
  {
    title: 'Analyzing User Logs as a First Diagnostic Step in Open OnDemand',
    type: 'Conference',
    role: 'Co-author',
    host: 'SC26 · HUST-26: 13th International Workshop on HPC User Support Tools',
    location: 'Chicago, IL · Room W183b',
    date: '2026-11-15',
    time: '12:00 – 12:15 PM CST',
    description:
      'Presents LogLight, an asynchronous diagnostic panel inside the Open OnDemand session card that explains failed sessions to researchers. A four-source trust hierarchy puts deterministic log and scheduler-accounting extraction first and restricts the LLM to narrative synthesis, curbing hallucinated root causes. In a blind evaluation over 30 production sessions, grounding let a lightweight Mistral-7B match a GPT-OSS-20B model.',
    authors: 'Arsalan Akhter, Serena Caplins, Ganesan Murugan, Ghanghoon Paik',
    tags: ['SC26', 'Open OnDemand', 'LLM Grounding', 'HPC User Support', 'Mistral-7B'],
    url: 'https://sc26.conference-program.com/presentation/?id=ws_hust122&sess=sess517',
    accent: '#38bdf8',
  },
  {
    title: 'Intro to GPUs on the Cluster',
    type: 'Workshop',
    role: 'Instructor',
    host: 'Northeastern Research Computing · Fall Training',
    location: 'Boston, MA',
    date: '2026-10-13',
    time: '2:00 – 3:00 PM',
    description:
      'Beginner-level hands-on session introducing Explorer cluster users to the NVIDIA GPUs available to them - launching jobs on the GPU partition, requesting specific GPU types, and best practices for GPU workloads.',
    tags: ['HPC', 'NVIDIA GPUs', 'SLURM', 'Explorer Cluster'],
    url: 'https://rc.northeastern.edu/calendar_event/intro-to-gpus-on-the-cluster-fall/',
    accent: '#a78bfa',
  },
];

const TALK_ICONS = { Workshop: Presentation, Talk: Mic, Poster: FileText, Conference: Mic } as const;

const highlights = [
  { icon: Sparkles, k: 'SC26', v: 'Supercomputing 2026 · Chicago', c: '#38bdf8' },
  { icon: Presentation, k: 'Instructor', v: 'Northeastern Research Computing', c: '#a78bfa' },
  { icon: Cpu, k: 'Grounded LLMs', v: 'AI for HPC user support', c: '#34d399' },
];

const todayISO = () => new Date().toISOString().slice(0, 10);

function fmt(dateISO: string) {
  const d = new Date(`${dateISO}T12:00:00`);
  return {
    d,
    month: d.toLocaleString('en-US', { month: 'short' }),
    day: d.getDate(),
    year: d.getFullYear(),
    long: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
  };
}

function Authors({ authors }: { authors: string }) {
  return (
    <p className="text-xs italic text-gray-500">
      {authors.split(/(Ganesan Murugan)/).map((part, i) =>
        part === 'Ganesan Murugan' ? (
          <strong key={i} className="font-semibold not-italic text-gray-100">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

function Pills({ talk, upcoming }: { talk: Talk; upcoming: boolean }) {
  const Icon = TALK_ICONS[talk.type];
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
        style={{ color: talk.accent, background: `${talk.accent}1a`, boxShadow: `inset 0 0 0 1px ${talk.accent}55` }}
      >
        <Icon className="h-3 w-3" strokeWidth={2.25} />
        {talk.type}
      </span>
      <span className="rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gray-300 ring-1 ring-white/10">
        {talk.role}
      </span>
      {upcoming && (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 ring-1 ring-amber-400/30">
          Upcoming
        </span>
      )}
    </div>
  );
}

function Meta({ talk }: { talk: Talk }) {
  const f = fmt(talk.date);
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
      <span className="inline-flex items-center gap-1">
        <CalendarDays className="h-3.5 w-3.5" style={{ color: talk.accent }} />
        {f.long}
      </span>
      {talk.time && (
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" style={{ color: talk.accent }} />
          {talk.time}
        </span>
      )}
      <span className="inline-flex items-center gap-1">
        <MapPin className="h-3.5 w-3.5" style={{ color: talk.accent }} />
        {talk.location}
      </span>
    </div>
  );
}

function linkLabel(url: string) {
  return url.includes('conference-program') ? 'Program listing' : 'Event page';
}

function FeaturedTalk({ talk, upcoming }: { talk: Talk; upcoming: boolean }) {
  const f = fmt(talk.date);
  return (
    <SpotlightCard accent={talk.accent} className="rounded-3xl">
      <div className="grid md:grid-cols-[260px_1fr]">
        {/* Big date panel */}
        <div
          className="relative flex flex-col items-center justify-center gap-1 p-8 text-center"
          style={{ background: `radial-gradient(120% 90% at 30% 10%, ${talk.accent}40, ${talk.accent}0a 70%)` }}
        >
          <span className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: talk.accent }}>
            {f.month}
          </span>
          <span className="text-7xl font-bold leading-none tracking-tighter text-white">{f.day}</span>
          <span className="text-sm font-medium text-gray-400">{f.year}</span>
          {upcoming && (
            <div className="mt-4">
              <Countdown date={talk.date} accent={talk.accent} />
            </div>
          )}
          <span className="absolute bottom-6 right-0 top-6 hidden border-r border-dashed border-white/15 md:block" />
        </div>

        {/* Content */}
        <div className="p-7 md:p-9">
          <Pills talk={talk} upcoming={upcoming} />
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
            {talk.title}
          </h2>
          <p className="mt-2 text-sm font-medium" style={{ color: talk.accent }}>
            {talk.host}
          </p>
          {talk.authors && (
            <div className="mt-2">
              <Authors authors={talk.authors} />
            </div>
          )}
          <div className="mt-4">
            <Meta talk={talk} />
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-gray-300/90">{talk.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {talk.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            {talk.url && (
              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105"
                style={{ background: talk.accent }}
              >
                {linkLabel(talk.url)}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function TalkCard({ talk, upcoming }: { talk: Talk; upcoming: boolean }) {
  const f = fmt(talk.date);
  const inner = (
    <SpotlightCard accent={talk.accent} className="h-full">
      <div className="flex h-full flex-col sm:flex-row">
        <div
          className="flex flex-row items-center justify-center gap-3 px-6 py-4 sm:w-32 sm:flex-col sm:gap-0 sm:py-6"
          style={{ background: `linear-gradient(160deg, ${talk.accent}33, ${talk.accent}0a)` }}
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: talk.accent }}>
            {f.month}
          </span>
          <span className="text-4xl font-bold leading-none tracking-tight text-white sm:my-1 sm:text-5xl">{f.day}</span>
          <span className="text-xs font-medium text-gray-400">{f.year}</span>
        </div>
        <div className="flex-1 p-6">
          <Pills talk={talk} upcoming={upcoming} />
          <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-white">{talk.title}</h3>
          <p className="mt-1 text-xs font-medium" style={{ color: talk.accent }}>
            {talk.host}
          </p>
          {talk.authors && (
            <div className="mt-1.5">
              <Authors authors={talk.authors} />
            </div>
          )}
          <div className="mt-2">
            <Meta talk={talk} />
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-gray-300/90">{talk.description}</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {talk.tags.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300">
                  {t}
                </span>
              ))}
            </div>
            {talk.url && (
              <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: talk.accent }}>
                {linkLabel(talk.url)}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
  return talk.url ? (
    <a href={talk.url} target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:-translate-y-0.5">
      {inner}
    </a>
  ) : (
    inner
  );
}

function SectionTitle({ children, dot }: { children: string; dot: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-2 w-2 rounded-full" style={{ background: dot, boxShadow: `0 0 10px ${dot}` }} />
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">{children}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
    </div>
  );
}

export default function Talks() {
  const today = todayISO();
  const upcoming = talks.filter((t) => t.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = talks.filter((t) => t.date < today).sort((a, b) => b.date.localeCompare(a.date));
  const featured = upcoming[0] ?? past[0];
  const restUpcoming = upcoming.filter((t) => t !== featured);
  const restPast = past.filter((t) => t !== featured);

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-10 pb-12">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>On stage</HeroBadge>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            <GradientHeading as="span">Talks &amp; Presentations</GradientHeading>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Conference papers, workshops and talks on agentic AI, grounded LLMs, and GPUs for research.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <SpotlightCard key={h.k} accent={h.c} className="p-4 text-left">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${h.c}1a`, boxShadow: `inset 0 0 0 1px ${h.c}44` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: h.c }} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold tracking-tight" style={{ color: h.c }}>
                        {h.k}
                      </p>
                      <p className="truncate text-xs text-gray-400">{h.v}</p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        <div className="mx-auto mt-12 max-w-5xl space-y-14">
          {/* Featured */}
          {featured && (
            <section>
              <SectionTitle dot={featured.date >= today ? '#fbbf24' : featured.accent}>
                {featured.date >= today ? 'Next up' : 'Latest'}
              </SectionTitle>
              <FeaturedTalk talk={featured} upcoming={featured.date >= today} />
            </section>
          )}

          {restUpcoming.length > 0 && (
            <section>
              <SectionTitle dot="#fbbf24">Upcoming</SectionTitle>
              <div className="space-y-4">
                {restUpcoming.map((t) => (
                  <TalkCard key={t.title + t.date} talk={t} upcoming />
                ))}
              </div>
            </section>
          )}

          <section>
            <SectionTitle dot="#a78bfa">Past</SectionTitle>
            <div className="space-y-4">
              {restPast.map((t) => (
                <TalkCard key={t.title + t.date} talk={t} upcoming={false} />
              ))}
              <a
                href="mailto:murugan.g@northeastern.edu?subject=Speaking%20invitation"
                className="group flex items-center gap-4 rounded-2xl border border-dashed border-white/15 p-6 transition-colors hover:border-white/30 hover:bg-white/[0.02]"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-dashed border-white/20 text-gray-500 transition-colors group-hover:text-white">
                  <Plus className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300 group-hover:text-white">More coming soon</p>
                  <p className="text-xs text-gray-500">Posters and talks are on the way. Want me at your event or lab meeting?</p>
                </div>
              </a>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-cyan-500/10 p-7 text-center backdrop-blur-xl md:p-10">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative">
              <SectionLabel tone="purple">Speaking</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-3xl">
                Want me to speak or run a workshop?
              </GradientHeading>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Agentic AI and multi-agent systems, grounding LLMs, GPUs and HPC for research, or ML for biology.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:murugan.g@northeastern.edu?subject=Speaking%20invitation"
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
    </PageShell>
  );
}
