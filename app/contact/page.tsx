'use client';

import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Check,
  Clock,
  Copy,
  GraduationCap,
  Mail,
  MapPin,
  Mic,
  Phone,
  Sparkles,
} from 'lucide-react';
import type { SVGProps } from 'react';

// lucide-react dropped brand/logo icons (Github, Linkedin) - inline SVGs instead
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.28.98 11.6c0 5.06 3.29 9.36 7.86 10.87.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.44-2.71 5.42-5.29 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.12 11.12 0 0 0 23.02 11.6C23.02 5.28 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
import PageShell from '../components/PageShell';
import { GradientHeading, SectionLabel } from '../components/Section';
import { RotatingWord, SpotlightCard } from '../components/Effects';

const EMAIL = 'murugan.g@northeastern.edu';

const topics = [
  'AI/ML for drug discovery',
  'agentic AI & multi-agent systems',
  'protein language models & molecular design',
  'AI/ML roles & research collaborations',
];

const interests = ['AI/ML for Drug Discovery', 'Agentic AI', 'LLM Applications', 'Protein Language Models'];

const socials = [
  {
    name: 'LinkedIn',
    handle: '/in/ganesan-murugan',
    url: 'https://www.linkedin.com/in/ganesan-murugan-a34aa7231/',
    icon: LinkedinIcon,
    accent: '#60a5fa',
    blurb: 'Experience, roles & updates',
  },
  {
    name: 'GitHub',
    handle: '@ganesan11062001',
    url: 'https://github.com/ganesan11062001',
    icon: GithubIcon,
    accent: '#e5e7eb',
    blurb: 'Code & side projects',
  },
  {
    name: 'Google Scholar',
    handle: 'Ganesan Murugan',
    url: 'https://scholar.google.com/citations?user=DE6CicUAAAAJ',
    icon: GraduationCap,
    accent: '#34d399',
    blurb: 'Publications & citations',
  },
];

const quickLinks = [
  { label: 'Projects', href: '/projects', icon: Briefcase, accent: '#a78bfa' },
  { label: 'Publications', href: '/publications', icon: BookOpen, accent: '#60a5fa' },
  { label: 'Talks', href: '/talks', icon: Mic, accent: '#f472b6' },
  { label: 'Certifications', href: '/certifications', icon: Award, accent: '#fbbf24' },
];

function useBostonTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CopyEmailButton({ className = '' }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Email copied' : 'Copy email address'}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${
        copied
          ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300'
          : 'border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]'
      } ${className}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4 text-blue-300" />}
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  );
}

export default function Contact() {
  const bostonTime = useBostonTime();

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-10 pb-12">
        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to AI/ML roles in drug discovery · Graduating Dec 2026
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Let&apos;s use AI to{' '}
              <GradientHeading as="span" className="inline">
                discover drugs faster
              </GradientHeading>
            </h1>
            <p className="mt-6 min-h-[3.5rem] text-lg text-gray-400 md:text-xl">
              Talk to me about <RotatingWord words={topics} />
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={`mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio`}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                Send an email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <CopyEmailButton />
            </div>
          </div>

          {/* Interests card */}
          <SpotlightCard accent="#a78bfa" className="p-7">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              What I&apos;m excited about
            </p>
            <div className="relative mt-4 flex flex-wrap gap-2">
              {interests.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="relative mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
              <div>
                <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-500">
                  <MapPin className="h-3 w-3" /> Based in
                </p>
                <p className="mt-1 text-sm font-semibold text-white">Boston, MA</p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-500">
                  <Clock className="h-3 w-3" /> Local time
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{bostonTime ?? '—'} <span className="text-gray-500 font-normal">ET</span></p>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* Contact methods */}
        <section className="mt-12">
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <SpotlightCard accent="#60a5fa" className="h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: '#60a5fa1a', boxShadow: 'inset 0 0 0 1px #60a5fa44' }}>
                <Mail className="h-5 w-5 text-blue-300" strokeWidth={1.75} />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">Email</p>
              <a href={`mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio`} className="mt-1 block break-all text-base font-semibold text-white hover:text-blue-200">
                {EMAIL}
              </a>
              <CopyEmailButton className="mt-5 w-full justify-center" />
            </SpotlightCard>

            <a href="tel:+18573518024" className="block">
              <SpotlightCard accent="#34d399" className="h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: '#34d3991a', boxShadow: 'inset 0 0 0 1px #34d39944' }}>
                  <Phone className="h-5 w-5 text-emerald-300" strokeWidth={1.75} />
                </div>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Phone</p>
                <p className="mt-1 text-base font-semibold text-white">+1 (857) 351-8024</p>
                <p className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-white">
                  Tap to call <ArrowUpRight className="h-3 w-3" />
                </p>
              </SpotlightCard>
            </a>

            <SpotlightCard accent="#a78bfa" className="h-full p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: '#a78bfa1a', boxShadow: 'inset 0 0 0 1px #a78bfa44' }}>
                <MapPin className="h-5 w-5 text-violet-300" strokeWidth={1.75} />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">Location</p>
              <p className="mt-1 text-base font-semibold text-white">Boston, MA</p>
              <p className="mt-1 text-xs text-gray-500">Northeastern University</p>
            </SpotlightCard>
          </div>
        </section>

        {/* Socials */}
        <section className="mt-14">
          <div className="mb-8 text-center">
            <SectionLabel tone="purple">Connect online</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl font-semibold md:text-3xl">
              Follow my work
            </GradientHeading>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="block">
                  <SpotlightCard accent={s.accent} className="h-full p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                        style={{ background: `${s.accent}1a`, boxShadow: `inset 0 0 0 1px ${s.accent}44` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: s.accent }} strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-base font-semibold text-white">{s.name}</p>
                        <p className="truncate text-xs text-gray-500">{s.handle}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <p className="mt-4 text-[13px] text-gray-400">{s.blurb}</p>
                  </SpotlightCard>
                </a>
              );
            })}
          </div>
        </section>

        {/* Quick links */}
        <section className="mt-14">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-8 text-center backdrop-blur-xl md:p-8">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                <Sparkles className="h-4 w-4 text-violet-300" />
                Want to know more about my work first?
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-gray-200 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                    >
                      <Icon className="h-4 w-4" style={{ color: link.accent }} strokeWidth={1.75} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
