'use client';

import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  BookOpen,
  Cloud,
  Code2,
  Database,
  Dna,
  ExternalLink,
  GitBranch,
  Lightbulb,
  Mail,
  Server,
  Sparkles,
  Users,
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

type Cert = {
  title: string;
  issuer: string;
  date: string;
  year: number;
  month: number;
  status: 'Certified' | 'Completed';
  description: string;
  skills: string[];
  category: string;
  icon: LucideIcon;
  verificationUrl: string;
  tint: string;
};

const certifications: Cert[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    date: 'Aug 2025',
    year: 2025,
    month: 8,
    status: 'Certified',
    description:
      'DevOps certification covering CI/CD, infrastructure as code, monitoring, and automation on Oracle Cloud Infrastructure.',
    skills: ['DevOps', 'CI/CD', 'OCI', 'IaC', 'Automation', 'Cloud Security', 'Deployment'],
    category: 'DevOps',
    icon: GitBranch,
    verificationUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=448E98842880E651092E414E13518BC7B2B20F91F0621A48905389D9E79EBE5A',
    tint: 'text-orange-300 ring-orange-400/30 bg-orange-500/10',
  },
  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'Aug 2025',
    year: 2025,
    month: 8,
    status: 'Certified',
    description:
      'Assessment covering software engineering fundamentals: data structures, algorithms, and problem-solving.',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'PWAs', 'Interviews'],
    category: 'Programming',
    icon: Code2,
    verificationUrl: 'https://www.hackerrank.com/certificates/f3cce6d030ba',
    tint: 'text-blue-300 ring-blue-400/30 bg-blue-500/10',
  },
  {
    title: 'SQL',
    issuer: 'HackerRank',
    date: 'Oct 2023',
    year: 2023,
    month: 10,
    status: 'Completed',
    description: 'SQL skills for database querying, management, and data manipulation.',
    skills: ['SQL', 'Queries', 'Data Manipulation', 'DB Design'],
    category: 'Database',
    icon: Database,
    verificationUrl: 'https://www.hackerrank.com/certificates/b225df6c3d82',
    tint: 'text-indigo-300 ring-indigo-400/30 bg-indigo-500/10',
  },
  {
    title: 'Oracle APEX Cloud Developer Certified Professional',
    issuer: 'Oracle',
    date: 'Aug 2023',
    year: 2023,
    month: 8,
    status: 'Certified',
    description: 'Professional certification in Oracle APEX for cloud-based application development.',
    skills: ['Oracle APEX', 'Cloud Dev', 'Web Apps', 'PL/SQL'],
    category: 'Cloud Development',
    icon: Cloud,
    verificationUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=DC9C6BC5EFA430548883137FB81F0E1521744124B9093B205EE2A7FFBA07841A',
    tint: 'text-violet-300 ring-violet-400/30 bg-violet-500/10',
  },
  {
    title: 'Python',
    issuer: 'HackerRank',
    date: 'Apr 2023',
    year: 2023,
    month: 4,
    status: 'Completed',
    description: 'Proficiency in Python for data science and application development.',
    skills: ['Python', 'Data Analysis', 'Programming', 'Scripting'],
    category: 'Programming',
    icon: Code2,
    verificationUrl: 'https://drive.google.com/file/d/1iqLwWsowjU2coTMwwlhqLUVcYQUXWaaL/view',
    tint: 'text-emerald-300 ring-emerald-400/30 bg-emerald-500/10',
  },
  {
    title: 'Database Management System',
    issuer: 'IIT Kharagpur',
    date: '2022',
    year: 2022,
    month: 12,
    status: 'Completed',
    description: 'Comprehensive coverage of database design, management, and optimization.',
    skills: ['DB Design', 'SQL', 'Data Modeling', 'DB Admin'],
    category: 'Database',
    icon: Database,
    verificationUrl: 'https://drive.google.com/file/d/18KM8bgHhCZWJiphXmgxwghiQy0ctyFbF/view',
    tint: 'text-cyan-300 ring-cyan-400/30 bg-cyan-500/10',
  },
  {
    title: 'Data Structures and Algorithms in Java',
    issuer: 'IIT Kharagpur',
    date: '2022',
    year: 2022,
    month: 11,
    status: 'Completed',
    description: 'Data structures and algorithms with Java implementation.',
    skills: ['Java', 'DSA', 'Algorithms', 'Problem Solving'],
    category: 'Programming',
    icon: Server,
    verificationUrl: 'https://drive.google.com/file/d/1rXFECDOhGNcpKJVGYzdphhL7uMZ7gY6z/view',
    tint: 'text-orange-300 ring-orange-400/30 bg-orange-500/10',
  },
  {
    title: 'Data Analytics',
    issuer: 'IIT Roorkee',
    date: '2022',
    year: 2022,
    month: 10,
    status: 'Completed',
    description: 'Data analysis, visualization, and interpretation for business intelligence.',
    skills: ['Data Analysis', 'Statistics', 'Visualization', 'BI'],
    category: 'Data Science',
    icon: Lightbulb,
    verificationUrl: 'https://drive.google.com/file/d/1-Syq3QZhez6wNPQVy4eAt4s07Nz866BV/view',
    tint: 'text-teal-300 ring-teal-400/30 bg-teal-500/10',
  },
  {
    title: 'Exercising Leadership',
    issuer: 'HarvardX',
    date: '2022',
    year: 2022,
    month: 9,
    status: 'Completed',
    description: 'Adaptive leadership and organizational change.',
    skills: ['Leadership', 'Team Management', 'Org Development', 'Communication'],
    category: 'Leadership',
    icon: Users,
    verificationUrl: 'https://drive.google.com/file/d/10f2PQ-0ezTqJG2paYXOLIZPcXl738jCB/view',
    tint: 'text-amber-300 ring-amber-400/30 bg-amber-500/10',
  },
  {
    title: 'Genomics',
    issuer: 'Johns Hopkins University',
    date: '2022',
    year: 2022,
    month: 8,
    status: 'Completed',
    description: 'Advanced genomics analysis and computational biology methods.',
    skills: ['Genomics', 'Bioinformatics', 'DNA Analysis', 'Comp Bio'],
    category: 'Bioinformatics',
    icon: Dna,
    verificationUrl: 'https://drive.google.com/file/d/1j2wGGY1zNBsuOO0m37jNPQnSA7S5aFCo/view',
    tint: 'text-pink-300 ring-pink-400/30 bg-pink-500/10',
  },
].sort((a, b) => (a.year !== b.year ? b.year - a.year : b.month - a.month)) as Cert[];

const upcoming = [
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    targetMonth: 'Mid 2026',
    description: 'AWS architecture and cloud solution design.',
    category: 'Cloud Architecture',
    icon: Cloud,
  },
  {
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    targetMonth: 'Late 2026',
    description: 'Building, training, tuning, and deploying ML models on AWS.',
    category: 'ML / Cloud',
    icon: Sparkles,
  },
];

const categories = ['All', 'Database', 'Programming', 'Data Science', 'Cloud Development', 'DevOps', 'Leadership', 'Bioinformatics'];

export default function Certifications() {
  const [selected, setSelected] = useState('All');
  const [expanded, setExpanded] = useState<number | null>(null);
  const filtered = selected === 'All' ? certifications : certifications.filter((c) => c.category === selected);

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-20 pb-24">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Professional Certifications</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Certifications</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Continuous learning across databases, programming, cloud, bioinformatics, and leadership.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <StatTile value={<AnimatedCounter end={certifications.length} />} label="Completed" accent="from-blue-300 to-cyan-300" />
            <StatTile value={<AnimatedCounter end={categories.length - 1} />} label="Categories" accent="from-emerald-300 to-teal-300" />
            <StatTile value={<AnimatedCounter end={upcoming.length} />} label="Upcoming" accent="from-violet-300 to-pink-300" />
            <StatTile value={<AnimatedCounter end={100} suffix="%" />} label="Pass rate" accent="from-amber-300 to-orange-300" />
          </div>
        </section>

        {/* Filter */}
        <section className="mt-16">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const active = selected === cat;
              const count = cat === 'All' ? certifications.length : certifications.filter((c) => c.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
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

        {/* Grid */}
        <section className="mt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <GlassCard key={cert.title} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${cert.tint}`}>
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${
                        cert.status === 'Certified'
                          ? 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/30'
                          : 'bg-blue-500/10 text-blue-300 ring-blue-400/30'
                      }`}
                    >
                      <BadgeCheck className="h-3 w-3" strokeWidth={2.25} />
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-[15px] font-semibold text-white tracking-tight leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-300/80">{cert.issuer}</p>
                  <p className="mt-3 text-[13px] text-gray-400 leading-relaxed">{cert.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(expanded === idx ? cert.skills : cert.skills.slice(0, 3)).map((s) => (
                      <span key={s} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300">
                        {s}
                      </span>
                    ))}
                    {cert.skills.length > 3 && expanded !== idx && (
                      <button
                        onClick={() => setExpanded(idx)}
                        className="rounded-md border border-blue-400/30 bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-300 hover:bg-blue-500/20"
                      >
                        +{cert.skills.length - 3}
                      </button>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs">
                    <span className="text-gray-500">{cert.date}</span>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200"
                    >
                      Verify <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Upcoming */}
        <section className="mt-24">
          <div className="text-center mb-10">
            <SectionLabel tone="purple">Next goals</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
              Upcoming
            </GradientHeading>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {upcoming.map((cert) => {
              const Icon = cert.icon;
              return (
                <GlassCard key={cert.title} className="p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 ring-1 ring-violet-400/30">
                    <Icon className="h-4 w-4 text-violet-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-white tracking-tight">{cert.title}</h3>
                  <p className="mt-1 text-xs font-medium text-violet-300/80">{cert.issuer}</p>
                  <p className="mt-3 text-[13px] text-gray-400 leading-relaxed">{cert.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-gray-300">
                      {cert.category}
                    </span>
                    <span className="text-violet-300">{cert.targetMonth}</span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24">
          <GlassCard className="overflow-hidden">
            <div className="relative p-10 md:p-14 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="green">Continuous learning</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-4xl font-semibold">
                Always growing
              </GradientHeading>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Committed to professional growth and staying at the forefront of emerging technologies.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                >
                  <BookOpen className="h-4 w-4" />
                  About me
                </a>
                <a
                  href="mailto:murugan.g@northeastern.edu"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] backdrop-blur px-5 py-2.5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-colors"
                >
                  <Mail className="h-4 w-4 text-blue-300" />
                  Contact
                </a>
              </div>
            </div>
          </GlassCard>
        </section>

      </div>
    </PageShell>
  );
}
