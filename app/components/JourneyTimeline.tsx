'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export type JourneyItem = {
  title: string;
  org: string;
  location: string;
  start: string;
  end?: string;
  kind: 'work' | 'education';
  logo?: string;
  monogram?: string;
  accent: string;
  status?: 'current' | 'incoming';
  /** Short theme tag that hints at the arc: software -> ML -> agents. */
  chapter?: string;
};

const CHEVRON = 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)';
const CHEVRON_FIRST = 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)';

function Logo({ item, size = 'h-14' }: { item: JourneyItem; size?: string }) {
  if (item.logo) {
    return (
      <div className={`${size} flex w-full max-w-[150px] items-center justify-center rounded-xl bg-white px-3 py-2 shadow-lg`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.logo} alt={item.org} className="h-full w-full object-contain" />
      </div>
    );
  }
  return (
    <div
      className={`${size} flex w-full max-w-[150px] items-center justify-center rounded-xl px-3 shadow-lg ring-1 ring-white/15`}
      style={{ background: `linear-gradient(135deg, ${item.accent}33, #0b1020)` }}
    >
      <span className="text-lg font-bold tracking-tight" style={{ color: item.accent }}>
        {item.monogram ?? item.org.slice(0, 2)}
      </span>
    </div>
  );
}

function ChapterTag({ item }: { item: JourneyItem }) {
  if (!item.chapter) return null;
  return (
    <span
      className="rounded-md px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider"
      style={{ color: item.accent, background: `${item.accent}14`, boxShadow: `inset 0 0 0 1px ${item.accent}33` }}
    >
      {item.chapter}
    </span>
  );
}

function StatusPill({ item }: { item: JourneyItem }) {
  if (!item.status) return null;
  const current = item.status === 'current';
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest ring-1 ${
        current ? 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/30' : 'bg-amber-500/10 text-amber-300 ring-amber-400/30'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${current ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
      {current ? 'Now' : 'Upcoming'}
    </span>
  );
}

function Card({
  item,
  active,
  position,
}: {
  item: JourneyItem;
  active: boolean;
  position: 'top' | 'bottom';
}) {
  const KindIcon = item.kind === 'education' ? GraduationCap : Briefcase;
  const title = (
    <div className="flex flex-col items-center gap-1.5">
      <StatusPill item={item} />
      <h3 className="text-[13px] font-semibold leading-snug tracking-tight text-white">{item.title}</h3>
    </div>
  );
  const meta = (
    <div className="flex flex-col items-center gap-1">
      <p className="text-[11px] font-medium" style={{ color: item.accent }}>
        <KindIcon className="mr-1 inline h-3 w-3 -translate-y-px" strokeWidth={2} />
        {item.org}
      </p>
      <ChapterTag item={item} />
    </div>
  );
  return (
    <div
      className={`flex flex-col items-center gap-3 text-center transition-all duration-300 ${
        active ? (position === 'top' ? '-translate-y-1.5' : 'translate-y-1.5') : ''
      }`}
    >
      {position === 'top' ? (
        <>
          {title}
          <Logo item={item} />
          {meta}
        </>
      ) : (
        <>
          {meta}
          <Logo item={item} />
          {title}
        </>
      )}
    </div>
  );
}

function Stem({ item, active, position }: { item: JourneyItem; active: boolean; position: 'top' | 'bottom' }) {
  return (
    <div className={`flex h-14 flex-col items-center ${position === 'top' ? '' : 'flex-col-reverse'}`}>
      <span
        className="h-3 w-3 rounded-full ring-4 ring-[#050507] transition-all duration-300"
        style={{ background: active ? item.accent : '#9ca3af', boxShadow: active ? `0 0 14px ${item.accent}` : 'none' }}
      />
      <span
        className="w-px flex-1 transition-colors duration-300"
        style={{ background: active ? item.accent : 'rgba(255,255,255,0.2)' }}
      />
    </div>
  );
}

function period(item: JourneyItem) {
  return item.end ? `${item.start} – ${item.end}` : item.start;
}

export default function JourneyTimeline({ items }: { items: JourneyItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      (r.top < window.innerHeight && r.bottom > 0)
    ) {
      setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const n = items.length;
  const cols = { gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` };
  const reveal = (i: number): React.CSSProperties =>
    reduced ? {} : {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(12px)',
        transition: `opacity 600ms ease ${i * 90}ms, transform 600ms ease ${i * 90}ms`,
      };

  return (
    <div ref={ref}>
      {/* Desktop: horizontal journey */}
      <div className="hidden xl:block">
        {/* Top row (odd items) */}
        <div className="grid items-end" style={cols}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={reveal(i)}
            >
              {i % 2 === 1 && (
                <>
                  <div className="-mx-[50%] w-[200%] px-2">
                    <Card item={item} active={hovered === i} position="top" />
                  </div>
                  <div className="mt-3">
                    <Stem item={item} active={hovered === i} position="top" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Chevron ribbon */}
        <div className="grid" style={cols}>
          {items.map((item, i) => {
            const active = hovered === i;
            return (
              <div
                key={item.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative flex h-14 items-center justify-center text-center transition-all duration-300 ${
                  i > 0 ? '-ml-[10px]' : ''
                }`}
                style={{
                  ...reveal(i),
                  clipPath: i === 0 ? CHEVRON_FIRST : CHEVRON,
                  background: active
                    ? `linear-gradient(90deg, ${item.accent}, ${item.accent}cc)`
                    : `linear-gradient(90deg, ${item.accent}40, ${item.accent}1a), linear-gradient(#161c2e, #161c2e)`,
                  width: i > 0 ? 'calc(100% + 10px)' : undefined,
                }}
              >
                <span
                  className={`pl-4 pr-5 text-[11px] font-semibold leading-tight transition-colors ${
                    active ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.start}
                  {item.end && (
                    <>
                      {' –'}
                      <br />
                      {item.end}
                    </>
                  )}
                </span>
                {item.status === 'current' && !active && (
                  <span className="absolute right-5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom row (even items) */}
        <div className="grid items-start" style={cols}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={reveal(i)}
            >
              {i % 2 === 0 && (
                <>
                  <div className="mb-3">
                    <Stem item={item} active={hovered === i} position="bottom" />
                  </div>
                  <div className="-mx-[50%] w-[200%] px-2">
                    <Card item={item} active={hovered === i} position="bottom" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical journey */}
      <div className="relative mx-auto max-w-2xl xl:hidden">
        <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-blue-400/40 via-violet-400/30 to-amber-400/40" />
        <ol className="space-y-4">
          {[...items].reverse().map((item, i) => {
            const KindIcon = item.kind === 'education' ? GraduationCap : Briefcase;
            return (
              <li key={item.title} className="relative pl-12" style={reveal(i)}>
                <span
                  className="absolute left-[10px] top-5 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[#050507]"
                  style={{ background: item.accent }}
                >
                  <KindIcon className="h-3 w-3 text-black" strokeWidth={2.25} />
                </span>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-20 flex-shrink-0">
                      <Logo item={item} size="h-12" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <StatusPill item={item} />
                        <ChapterTag item={item} />
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
                        <span className="font-medium" style={{ color: item.accent }}>
                          {item.org}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                        <span className="text-gray-500">{period(item)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
