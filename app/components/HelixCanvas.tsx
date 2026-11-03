'use client';

import { useEffect, useRef } from 'react';

const COLORS = [
  [96, 165, 250], // blue
  [167, 139, 250], // violet
  [34, 211, 238], // cyan
];

function mix(t: number) {
  const seg = t * (COLORS.length - 1);
  const i = Math.min(Math.floor(seg), COLORS.length - 2);
  const f = seg - i;
  const a = COLORS[i];
  const b = COLORS[i + 1];
  return [0, 1, 2].map((k) => Math.round(a[k] + (b[k] - a[k]) * f));
}

/**
 * A rotating DNA double helix whose base pairs double as neural-network nodes -
 * computational biology x AI in one picture. Nodes near the cursor light up.
 */
export default function HelixCanvas({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let frame = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener('mousemove', onMove);

    const N = 26;
    const tilt = -0.42;

    const draw = (time: number) => {
      const t = reduced ? 0.6 : time * 0.0006;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const len = Math.min(h * 0.92, Math.hypot(w, h) * 0.62);
      const amp = Math.min(w, h) * 0.17;
      const cos = Math.cos(tilt);
      const sin = Math.sin(tilt);

      type P = { x: number; y: number; z: number; c: number[] };
      const s1: P[] = [];
      const s2: P[] = [];
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const along = (u - 0.5) * len;
        const ph = t * 2 + i * 0.42;
        const off1 = amp * Math.sin(ph);
        const off2 = -off1;
        const z = Math.cos(ph);
        const c = mix(u);
        // rotate the (along, offset) frame by tilt
        const p = (off: number, zz: number): P => ({
          x: cx + off * cos - along * sin,
          y: cy + off * sin + along * cos,
          z: zz,
          c,
        });
        s1.push(p(off1, z));
        s2.push(p(off2, -z));
      }

      // faint "synapse" links - the neural-network layer
      ctx.lineWidth = 0.6;
      for (let i = 0; i < N - 2; i++) {
        const a = s1[i];
        const b = s2[i + 2];
        ctx.strokeStyle = `rgba(${a.c.join(',')},0.10)`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        const c2 = s2[i];
        const d = s1[i + 2];
        ctx.beginPath();
        ctx.moveTo(c2.x, c2.y);
        ctx.lineTo(d.x, d.y);
        ctx.stroke();
      }

      // base-pair rungs
      for (let i = 0; i < N; i++) {
        const a = s1[i];
        const b = s2[i];
        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        g.addColorStop(0, `rgba(${a.c.join(',')},${0.15 + 0.25 * (a.z + 1) / 2})`);
        g.addColorStop(1, `rgba(${b.c.join(',')},${0.15 + 0.25 * (b.z + 1) / 2})`);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // backbones
      for (const strand of [s1, s2]) {
        ctx.lineWidth = 2;
        for (let i = 0; i < N - 1; i++) {
          const a = strand[i];
          const b = strand[i + 1];
          ctx.strokeStyle = `rgba(${a.c.join(',')},${0.25 + 0.45 * (a.z + 1) / 2})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes, back to front
      const nodes = [...s1, ...s2].sort((a, b) => a.z - b.z);
      for (const n of nodes) {
        const depth = (n.z + 1) / 2;
        const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const near = Math.max(0, 1 - dist / 120);
        const r = 2 + depth * 3.2 + near * 4;
        ctx.shadowColor = `rgba(${n.c.join(',')},0.9)`;
        ctx.shadowBlur = 6 + depth * 10 + near * 20;
        ctx.fillStyle = `rgba(${n.c.join(',')},${0.35 + depth * 0.6 + near * 0.3})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduced) frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={ref} className={`h-full w-full ${className}`} aria-hidden="true" />;
}
