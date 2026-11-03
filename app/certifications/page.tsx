'use client';

import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  Bot,
  BookOpen,
  BrainCircuit,
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
  verificationUrl?: string;
  expires?: string;
  credentialNote?: string;
  tint: string;
  badge?: string;
  featured?: boolean;
};

const certifications: Cert[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Nov 2026',
    year: 2026,
    month: 11,
    status: 'Certified',
    description:
      'Foundational AWS certification validating understanding of core AWS services, cloud concepts, security and compliance, and billing and pricing.',
    skills: ['AWS Core Services', 'Cloud Concepts', 'Security & Compliance', 'Billing & Pricing'],
    category: 'Cloud Development',
    icon: Cloud,
    verificationUrl: 'https://www.credly.com/badges/45c380eb-178b-4d77-aa78-b6b6752ce4db/public_url',
    expires: 'Nov 2029',
    tint: 'text-amber-300 ring-amber-400/30 bg-amber-500/10',
    badge: '/badges/aws-cloud-practitioner.png',
    featured: true,
  },
  {
    title: 'Oracle Cloud Infrastructure Certified Architect Associate',
    issuer: 'Oracle',
    date: 'Aug 2026',
    year: 2026,
    month: 8,
    status: 'Certified',
    description:
      'Associate-level certification validating expertise in architecting solutions on Oracle Cloud Infrastructure - compute, networking, storage, security, and cost optimization.',
    skills: ['OCI Architecture', 'Cloud Networking', 'Security', 'Cost Optimization', 'IaC'],
    category: 'Cloud Architecture',
    icon: Cloud,
    verificationUrl:
      'https://catalog-education.oracle.com/pls/certview/sharebadge?id=37A012D9F56E22C96953813BAC674ED0F79325908032198220ECB02D77BC5291',
    tint: 'text-orange-300 ring-orange-400/30 bg-orange-500/10',
    badge: '/badges/oci-architect-associate.png',
    featured: true,
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Aug 2026',
    year: 2026,
    month: 8,
    status: 'Certified',
    description:
      'Foundational AWS certification covering generative AI, machine learning, and responsible AI concepts and use cases on AWS.',
    skills: ['Generative AI', 'AWS AI/ML Services', 'Responsible AI', 'Prompt Engineering'],
    category: 'ML / Cloud',
    icon: Sparkles,
    verificationUrl: 'https://www.credly.com/badges/45681c75-3861-40c3-8bed-9acbbab5b6eb/public_url',
    expires: 'Aug 2029',
    tint: 'text-yellow-300 ring-yellow-400/30 bg-yellow-500/10',
    badge: '/badges/aws-ai-practitioner.png',
    featured: true,
  },
  {
    title: 'Claude Partner Badge - Claude Code',
    issuer: 'Anthropic',
    date: 'Jul 2026',
    year: 2026,
    month: 7,
    status: 'Certified',
    description:
      "Recognizes verified expertise building with Claude Code, Anthropic's agentic coding tool, across real-world development workflows.",
    skills: ['Claude Code', 'Agentic Coding', 'Anthropic API', 'AI Pair Programming'],
    category: 'AI Fluency & Agents',
    icon: BrainCircuit,
    verificationUrl: 'https://www.credly.com/badges/31281628-afaf-4cf3-987b-2b7fb7c2bbbd/public_url',
    expires: 'Jan 2027',
    tint: 'text-fuchsia-300 ring-fuchsia-400/30 bg-fuchsia-500/10',
    badge: '/badges/claude-partner-badge.png',
    featured: true,
  },
  {
    title: 'Oracle AI Database Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Jun 2026',
    year: 2026,
    month: 6,
    status: 'Certified',
    description:
      'Foundational certification covering Oracle AI Database capabilities - vector search, AI-powered data management, and integrated ML within the Oracle Database platform.',
    skills: ['Oracle AI Database', 'Vector Search', 'AI Data Management', 'Oracle DB'],
    category: 'ML / Cloud',
    icon: Database,
    verificationUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=EACCBD138DFD0320D69605525D2EE0C9682E0ABD4909D4213466ABA60F257B18',
    expires: 'Jun 2028',
    tint: 'text-rose-300 ring-rose-400/30 bg-rose-500/10',
    badge: '/badges/oracle-ai-database-foundations.png',
  },
  {
    title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'Jun 2026',
    year: 2026,
    month: 6,
    status: 'Certified',
    description:
      'Foundational certification covering AI and machine learning services on Oracle Cloud Infrastructure, including OCI AI services, generative AI, and ML fundamentals.',
    skills: ['OCI AI Services', 'Generative AI', 'Machine Learning', 'Cloud AI'],
    category: 'ML / Cloud',
    icon: Cloud,
    verificationUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=BF626E191C37A653FCEE56F0F52B54181F799CD670DB30DAFEDBCF78531BBE0D',
    expires: 'Jun 2028',
    tint: 'text-sky-300 ring-sky-400/30 bg-sky-500/10',
    badge: '/badges/oci-ai-foundations.png',
  },
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Jun 2026',
    year: 2026,
    month: 6,
    status: 'Certified',
    description:
      'Foundational certification covering agentic AI concepts - autonomous agents, tool use, and multi-agent orchestration patterns on Oracle Cloud Infrastructure.',
    skills: ['Agentic AI', 'Multi-Agent Systems', 'Tool Use', 'OCI'],
    category: 'AI Fluency & Agents',
    icon: Bot,
    verificationUrl:
      'https://catalog-education.oracle.com/pls/certview/sharebadge?id=EFB32EC7E4E32D44448F57983FD860D4E59FE5FF989204116E697BA0103BB490',
    expires: 'Jun 2028',
    tint: 'text-lime-300 ring-lime-400/30 bg-lime-500/10',
    badge: '/badges/agentic-ai-foundations.png',
    featured: true,
  },
  {
    title: 'Anthropic Academy - AI Fluency & Claude Agent Skills',
    issuer: 'Anthropic',
    date: 'May 2026',
    year: 2026,
    month: 5,
    status: 'Completed',
    description:
      'Ten Anthropic Academy courses spanning the AI Fluency framework, Claude fundamentals, and agentic tooling - from foundational AI fluency to building with subagents and agent skills.',
    skills: [
      'AI Fluency Framework & Foundations',
      'Claude 101',
      'AI Capabilities and Limitations',
      'Introduction to Subagents',
      'Introduction to Agent Skills',
      'AI Fluency for Educators',
      'AI Fluency for Students',
      'AI Fluency for Small Businesses',
      'AI Fluency for Nonprofits',
      'Teaching the AI Fluency Framework',
    ],
    category: 'AI Fluency & Agents',
    icon: BrainCircuit,
    credentialNote: '10 Anthropic Academy credentials',
    tint: 'text-violet-300 ring-violet-400/30 bg-violet-500/10',
  },
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Databricks',
    date: 'May 2026',
    year: 2026,
    month: 5,
    status: 'Completed',
    description:
      'Databricks Academy course covering generative AI foundations - LLMs, prompt engineering, and responsible AI on the Databricks platform.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Responsible AI'],
    category: 'ML / Cloud',
    icon: Bot,
    verificationUrl: 'https://credentials.databricks.com/13dbb8f8-3287-4370-8bf1-75c544094a52',
    tint: 'text-red-300 ring-red-400/30 bg-red-500/10',
    badge: '/badges/databricks-genai-fundamentals.png',
  },
  {
    title: 'AI Agent Fundamentals',
    issuer: 'Databricks',
    date: 'May 2026',
    year: 2026,
    month: 5,
    status: 'Completed',
    description:
      'Databricks Academy course covering the fundamentals of building and deploying AI agents on the Databricks platform.',
    skills: ['AI Agents', 'Agent Orchestration', 'Databricks Platform'],
    category: 'ML / Cloud',
    icon: Bot,
    verificationUrl: 'https://credentials.databricks.com/d4feaa0c-715d-4815-99e9-dd030bf18574',
    tint: 'text-red-300 ring-red-400/30 bg-red-500/10',
    badge: '/badges/databricks-ai-agent-fundamentals.png',
  },
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
    badge: '/badges/oci-devops-professional.png',
    featured: true,
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
    badge: '/badges/oracle-apex-professional.png',
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
].sort((a, b) => {
  if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
  return a.year !== b.year ? b.year - a.year : b.month - a.month;
}) as Cert[];

const upcoming = [
  {
    title: 'Claude Certified Architect - Foundations',
    issuer: 'Anthropic',
    targetMonth: 'Late 2026',
    description: 'Foundational certification covering architecture patterns for building with Claude and the Claude Developer Platform.',
    category: 'AI Fluency & Agents',
    icon: BrainCircuit,
  },
  {
    title: 'Claude Certified Architect - Professional',
    issuer: 'Anthropic',
    targetMonth: 'Late 2026',
    description: 'Professional-level certification covering advanced architecture and deployment patterns for production Claude-based systems.',
    category: 'AI Fluency & Agents',
    icon: BrainCircuit,
  },
  {
    title: 'LangChain Certified Agent Engineer',
    issuer: 'LangChain',
    targetMonth: 'Late 2026',
    description: 'Certification covering building, orchestrating, and evaluating LLM agents with LangChain and LangGraph.',
    category: 'AI Fluency & Agents',
    icon: Bot,
  },
];

const categories = [
  'All',
  'Database',
  'Programming',
  'Data Science',
  'Cloud Development',
  'Cloud Architecture',
  'ML / Cloud',
  'AI Fluency & Agents',
  'DevOps',
  'Leadership',
  'Bioinformatics',
];

const ACCENTS: Record<string, string> = {
  orange: '#fb923c',
  yellow: '#facc15',
  amber: '#fbbf24',
  fuchsia: '#e879f9',
  rose: '#fb7185',
  sky: '#38bdf8',
  lime: '#a3e635',
  violet: '#a78bfa',
  red: '#f87171',
  blue: '#60a5fa',
  indigo: '#818cf8',
  emerald: '#34d399',
  cyan: '#22d3ee',
  teal: '#2dd4bf',
  pink: '#f472b6',
};

function accentOf(cert: Cert) {
  const m = cert.tint.match(/text-(\w+)-300/);
  return ACCENTS[m?.[1] ?? 'blue'] ?? ACCENTS.blue;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parseMonth(s: string) {
  const [mon, yr] = s.split(' ');
  const idx = MONTHS.indexOf(mon);
  return idx < 0 || !yr ? null : Number(yr) * 12 + idx;
}

function validity(cert: Cert) {
  if (!cert.expires) return null;
  const start = parseMonth(cert.date);
  const end = parseMonth(cert.expires);
  if (start === null || end === null || end <= start) return null;
  const now = new Date();
  const cur = now.getFullYear() * 12 + now.getMonth();
  const left = end - cur;
  const pct = Math.min(Math.max((cur - start) / (end - start), 0), 1);
  const label =
    left <= 0
      ? 'Expired'
      : left >= 12
        ? `${Math.floor(left / 12)}y ${left % 12}m left`
        : `${left}m left`;
  return { pct, label, expired: left <= 0 };
}

const HEX = 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)';

/** Generated AWS-style hexagon badge for certs without an official badge image. */
function HexBadge({ cert, accent }: { cert: Cert; accent: string }) {
  const Icon = cert.icon;
  const titleSize =
    cert.title.length > 34 ? 'text-[11px]' : cert.title.length > 18 ? 'text-[13px]' : 'text-[17px]';
  return (
    <div
      className="relative h-full w-full"
      style={{ clipPath: HEX, background: `linear-gradient(160deg, #e5e7eb, ${accent} 55%, #6b7280)` }}
    >
      <div
        className="absolute inset-[5px] flex flex-col items-center justify-center px-[17%] text-center"
        style={{
          clipPath: HEX,
          background: `radial-gradient(120% 80% at 30% 15%, ${accent}55, transparent 60%), linear-gradient(165deg, #1f2937, #0b1020)`,
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-semibold lowercase tracking-tight text-white/90">
            {cert.issuer.split(' ')[0]}
          </span>
          <Icon className="h-3 w-3" style={{ color: accent }} strokeWidth={2.25} />
        </div>
        <span className="text-[9px] font-light text-white/60">certified</span>
        <div className="my-1.5 h-px w-full bg-white/40" />
        <span className={`${titleSize} font-bold leading-tight text-white`}>{cert.title}</span>
        <div className="my-1.5 h-px w-full bg-white/40" />
        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/85">
          {cert.category}
        </span>
      </div>
    </div>
  );
}

function BadgeTile({ cert }: { cert: Cert }) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const accent = accentOf(cert);
  const v = validity(cert);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 10, y: px * 12 });
  };

  const toggle = () => setFlipped((f) => !f);

  return (
    <div className="group relative h-[340px]" style={{ perspective: 1200 }}>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${cert.title} - ${flipped ? 'hide' : 'show'} details`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="relative h-full w-full cursor-pointer rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 200ms ease-out',
        }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${flipped ? 180 : 0}deg)`,
            transition: 'transform 700ms cubic-bezier(.2,.8,.2,1)',
          }}
        >
          {/* Front: the badge is the hero */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-start rounded-3xl px-5 pt-8"
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          >
            {/* ambient glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
              style={{ background: accent }}
            />
            {cert.featured && (
              <span
                className="absolute left-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ring-1"
                style={{ color: accent, background: `${accent}1a`, boxShadow: `inset 0 0 0 1px ${accent}55` }}
              >
                Top
              </span>
            )}
            <span
              className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${
                cert.status === 'Certified'
                  ? 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/30'
                  : 'bg-blue-500/10 text-blue-300 ring-blue-400/30'
              }`}
            >
              <BadgeCheck className="h-3 w-3" strokeWidth={2.25} />
              {cert.status}
            </span>

            <div
              className="relative h-40 w-40 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.04]"
              style={{ transform: 'translateZ(40px)', filter: `drop-shadow(0 18px 30px ${accent}40)` }}
            >
              {cert.badge ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cert.badge} alt={`${cert.title} badge`} className="h-full w-full object-contain" />
              ) : (
                <HexBadge cert={cert} accent={accent} />
              )}
              {/* shine sweep, masked to the badge silhouette */}
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={
                  cert.badge
                    ? {
                        WebkitMaskImage: `url(${cert.badge})`,
                        maskImage: `url(${cert.badge})`,
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center',
                      }
                    : { clipPath: HEX }
                }
              >
                <div className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-1000 ease-out group-hover:left-[150%]" />
              </div>
            </div>

            <h3 className="relative mt-6 line-clamp-2 text-center text-[15px] font-semibold leading-snug tracking-tight text-white">
              {cert.title}
            </h3>
            <p className="relative mt-1.5 text-xs font-medium" style={{ color: accent }}>
              {cert.issuer} <span className="text-gray-500">· {cert.date}</span>
            </p>
            <span className="absolute bottom-4 text-[10px] font-medium uppercase tracking-widest text-gray-600 transition-colors group-hover:text-gray-400">
              Tap to flip ↻
            </span>
          </div>

          {/* Back: the details */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f1a]/95 p-6 text-left backdrop-blur-xl"
            style={{
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              boxShadow: `0 0 60px -20px ${accent}66`,
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
            />
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 flex-shrink-0">
                {cert.badge ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cert.badge} alt="" className="h-full w-full object-contain" />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{ clipPath: HEX, background: `linear-gradient(160deg, ${accent}, #1f2937)` }}
                  />
                )}
              </div>
              <div className="min-w-0">
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-white">{cert.title}</h3>
                <p className="mt-0.5 text-[11px] font-medium" style={{ color: accent }}>
                  {cert.issuer}
                </p>
              </div>
            </div>

            <p className="mt-4 line-clamp-5 text-[13px] leading-relaxed text-gray-400">{cert.description}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4">
              {v && (
                <div className="mb-3">
                  <div className="mb-1 flex justify-between text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    <span>Validity</span>
                    <span className={v.expired ? 'text-rose-300' : 'text-gray-300'}>{v.label}</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${Math.max(v.pct * 100, 3)}%`, background: accent }}
                    />
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between gap-2 border-t border-white/10 pt-3 text-xs">
                <span className="text-gray-500">
                  {cert.date}
                  {cert.expires && <span className="text-gray-600"> → {cert.expires}</span>}
                </span>
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    tabIndex={flipped ? 0 : -1}
                    className="inline-flex flex-shrink-0 items-center gap-1 rounded-full px-3 py-1 font-semibold text-black transition-transform hover:scale-105"
                    style={{ background: accent }}
                  >
                    Verify <ExternalLink className="h-3 w-3" />
                  </a>
                ) : cert.credentialNote ? (
                  <span className="flex-shrink-0 text-gray-500">{cert.credentialNote}</span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? certifications : certifications.filter((c) => c.category === selected);

  return (
    <PageShell>
      <div className="container mx-auto px-6 pt-12 pb-16">
        {/* Hero */}
        <section className="text-center">
          <HeroBadge>Professional Certifications</HeroBadge>
          <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
            <GradientHeading as="span">Certifications</GradientHeading>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-gray-400 leading-relaxed">
            Continuous learning across databases, programming, cloud, AI/agentic systems, bioinformatics, and leadership.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <StatTile value={<AnimatedCounter end={certifications.length} />} label="Completed" accent="from-blue-300 to-cyan-300" />
            <StatTile value={<AnimatedCounter end={categories.length - 1} />} label="Categories" accent="from-emerald-300 to-teal-300" />
            <StatTile value={<AnimatedCounter end={upcoming.length} />} label="Upcoming" accent="from-violet-300 to-pink-300" />
            <StatTile value={<AnimatedCounter end={100} suffix="%" />} label="Pass rate" accent="from-amber-300 to-orange-300" />
          </div>
        </section>

        {/* Filter */}
        <section className="mt-12">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cert) => (
              <BadgeTile key={cert.title} cert={cert} />
            ))}
          </div>
        </section>

        {/* Upcoming */}
        <section className="mt-16">
          <div className="text-center mb-7">
            <SectionLabel tone="purple">Next goals</SectionLabel>
            <GradientHeading as="h2" className="mt-4 text-3xl md:text-3xl font-semibold">
              Upcoming
            </GradientHeading>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
        <section className="mt-16">
          <GlassCard className="overflow-hidden">
            <div className="relative p-7 md:p-10 text-center">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
              <SectionLabel tone="green">Continuous learning</SectionLabel>
              <GradientHeading as="h2" className="mt-4 text-3xl md:text-3xl font-semibold">
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
