'use client';

import { useEffect, useState } from 'react';

/** "in 12 days" / "Tomorrow" / "Today" / "Past" for an ISO date, computed in the visitor's browser. */
export default function Countdown({ date, accent }: { date: string; accent: string }) {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const [y, m, d] = date.split('-').map(Number);
      const days = Math.round((new Date(y, m - 1, d).getTime() - start.getTime()) / 86_400_000);
      setLabel(days > 1 ? `in ${days} days` : days === 1 ? 'Tomorrow' : days === 0 ? 'Today' : 'Past');
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [date]);

  if (!label) return null;
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
      style={{ color: accent, background: `${accent}1a`, boxShadow: `inset 0 0 0 1px ${accent}55` }}
    >
      <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: accent }} />
      {label}
    </span>
  );
}
