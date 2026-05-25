import type { ReactNode } from 'react';

export function HeroBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-3 py-1 text-xs font-medium text-gray-300">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-soft" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      {children}
    </div>
  );
}

export function GradientHeading({
  children,
  className = '',
  as: Tag = 'h1',
}: {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}) {
  return (
    <Tag
      className={`bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent animate-gradient bg-300% tracking-tight ${className}`}
    >
      {children}
    </Tag>
  );
}

export function GlassCard({
  children,
  className = '',
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl ${
        hover
          ? 'transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function StatTile({
  value,
  label,
  accent = 'from-blue-300 to-violet-300',
}: {
  value: ReactNode;
  label: string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 transition-colors hover:border-white/20">
      <div
        className={`text-2xl font-semibold tracking-tight bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
      >
        {value}
      </div>
      <p className="mt-1 text-xs font-medium text-gray-400">{label}</p>
    </div>
  );
}

export function SectionLabel({
  children,
  tone = 'blue',
}: {
  children: ReactNode;
  tone?: 'blue' | 'purple' | 'green' | 'amber';
}) {
  const tones: Record<string, string> = {
    blue: 'from-blue-300 to-cyan-300',
    purple: 'from-violet-300 to-pink-300',
    green: 'from-emerald-300 to-teal-300',
    amber: 'from-amber-300 to-orange-300',
  };
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-3 py-1">
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r ${tones[tone]} bg-clip-text text-transparent`}
      >
        {children}
      </span>
    </div>
  );
}
