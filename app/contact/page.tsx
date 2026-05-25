'use client';

import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageShell from '../components/PageShell';
import {
  GlassCard,
  GradientHeading,
  HeroBadge,
  SectionLabel,
} from '../components/Section';

type ContactMethod = {
  title: string;
  value: string;
  href?: string;
  subtext?: string;
  icon: LucideIcon;
  accent: string;
  ring: string;
};

const contactMethods: ContactMethod[] = [
  {
    title: 'Email',
    value: 'murugan.g@northeastern.edu',
    href: 'mailto:murugan.g@northeastern.edu?subject=Hello%20from%20your%20portfolio',
    icon: Mail,
    accent: 'text-blue-300',
    ring: 'ring-blue-400/30 bg-blue-500/10',
  },
  {
    title: 'Phone',
    value: '+1 (857) 351-8024',
    href: 'tel:+18573518024',
    icon: Phone,
    accent: 'text-emerald-300',
    ring: 'ring-emerald-400/30 bg-emerald-500/10',
  },
  {
    title: 'Location',
    value: 'Boston, MA',
    subtext: 'Northeastern University',
    icon: MapPin,
    accent: 'text-violet-300',
    ring: 'ring-violet-400/30 bg-violet-500/10',
  },
];

const socials = [
  {
    name: 'LinkedIn',
    handle: '/in/ganesan-murugan',
    url: 'https://www.linkedin.com/in/ganesan-murugan-a34aa7231/',
    icon: Linkedin,
    accent: 'text-blue-300',
    ring: 'ring-blue-400/30 bg-blue-500/10',
  },
  {
    name: 'GitHub',
    handle: '@ganesan11062001',
    url: 'https://github.com/ganesan11062001',
    icon: Github,
    accent: 'text-white',
    ring: 'ring-white/20 bg-white/[0.06]',
  },
];

const quickLinks = [
  { label: 'Publications', href: '/publications', icon: BookOpen },
  { label: 'Projects', href: '/projects', icon: Briefcase },
  { label: 'Certifications', href: '/certifications', icon: Award },
];

export default function Contact() {
  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Let&apos;s connect</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Get in touch</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Open to collaboration on bioinformatics, ML for drug discovery, and infrastructure for computational biology.
          </p>
        </section>

        {/* Contact methods */}
        <section className="mt-16">
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contactMethods.map((m) => {
              const Icon = m.icon;
              const inner = (
                <GlassCard className="p-7 text-center h-full">
                  <div className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${m.ring}`}>
                    <Icon className={`h-5 w-5 ${m.accent}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white tracking-tight">{m.title}</h3>
                  <p className="mt-1 text-sm text-gray-300">{m.value}</p>
                  {m.subtext && <p className="mt-1 text-xs text-gray-500">{m.subtext}</p>}
                </GlassCard>
              );
              return m.href ? (
                <a key={m.title} href={m.href} className="block hover:scale-[1.02] transition-transform">
                  {inner}
                </a>
              ) : (
                <div key={m.title}>{inner}</div>
              );
            })}
          </div>
        </section>

        {/* Social */}
        <section className="mt-16">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="p-8 md:p-10 text-center">
              <SectionLabel tone="purple">Connect online</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-2xl md:text-3xl font-semibold">
                Follow my work
              </GradientHeading>

              <div className="mt-8 flex justify-center gap-3 flex-wrap">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 hover:border-white/25 hover:bg-white/[0.06] transition-colors"
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${s.ring}`}>
                        <Icon className={`h-4 w-4 ${s.accent}`} strokeWidth={1.75} />
                      </span>
                      <span className="flex flex-col items-start text-left">
                        <span className="text-sm font-semibold text-white">{s.name}</span>
                        <span className="text-[11px] text-gray-500">{s.handle}</span>
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Quick links */}
        <section className="mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-5">Want to know more about my work?</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur px-5 py-3 text-sm font-semibold text-gray-300 hover:border-white/25 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className="max-w-3xl mx-auto">
            <GlassCard className="overflow-hidden">
              <div className="relative p-10 md:p-14 text-center">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
                <SectionLabel tone="blue">Ready to start a project?</SectionLabel>
                <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                  Let&apos;s build something
                </GradientHeading>
                <div className="mt-8">
                  <a
                    href="mailto:murugan.g@northeastern.edu?subject=Let%27s%20work%20together"
                    className="group inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                  >
                    <Sparkles className="h-4 w-4" />
                    Send me an email
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
