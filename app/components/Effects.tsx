'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span key={i} className="animate-word-in inline-block bg-gradient-to-r from-blue-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
      {words[i]}
    </span>
  );
}

/** Card with a soft glow that follows the cursor. */
export function SpotlightCard({ children, accent, className = '' }: { children: ReactNode; accent: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--x', `${e.clientX - r.left}px`);
        el.style.setProperty('--y', `${e.clientY - r.top}px`);
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(320px circle at var(--x) var(--y), ${accent}26, transparent 70%)` }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Marquee({ children, reverse = false, duration = 40 }: { children: ReactNode; reverse?: boolean; duration?: number }) {
  return (
    <div
      className="marquee-pause relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`flex w-max gap-3 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {children}
        <div aria-hidden="true" className="flex gap-3">
          {children}
        </div>
      </div>
    </div>
  );
}
