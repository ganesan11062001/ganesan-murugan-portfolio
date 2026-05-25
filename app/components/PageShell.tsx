'use client';

import { useEffect, useState, type ReactNode } from 'react';

type PageShellProps = {
  children: ReactNode;
  /** Show the mouse-tracking gradient blob. Default true. */
  spotlight?: boolean;
  /** Show the dotted grid texture. Default true. */
  grid?: boolean;
};

export default function PageShell({
  children,
  spotlight = true,
  grid = true,
}: PageShellProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!spotlight) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [spotlight]);

  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      {/* Layered background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base */}
        <div className="absolute inset-0 bg-[#050507]" />

        {/* Vignette accents */}
        <div className="absolute inset-0 bg-vignette opacity-90" />

        {/* Dotted grid */}
        {grid && (
          <div
            className="absolute inset-0 bg-grid opacity-50"
            style={{
              maskImage:
                'radial-gradient(ellipse at center, black 40%, transparent 85%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, black 40%, transparent 85%)',
            }}
          />
        )}

        {/* Mouse spotlight */}
        {spotlight && (
          <div
            className="absolute h-72 w-72 rounded-full blur-3xl transition-[left,top] duration-700 ease-out"
            style={{
              left: pos.x - 144,
              top: pos.y - 144,
              background:
                'radial-gradient(circle, rgba(96,165,250,0.18), rgba(167,139,250,0.06) 50%, transparent 70%)',
            }}
          />
        )}

        {/* Floating soft orbs */}
        <div className="absolute top-1/4 left-1/4 w-36 h-36 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-44 h-44 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <div className="relative z-10">{children}</div>
    </main>
  );
}
