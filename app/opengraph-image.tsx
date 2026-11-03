import { ImageResponse } from 'next/og';

export const alt = 'Ganesan Murugan - AI/ML Engineer · Agentic AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const chips = ['Agentic AI', 'Multi-Agent Systems', 'LLM Fine-Tuning', 'RAG', 'Protein Language Models'];
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px 88px',
          background: 'radial-gradient(circle at 80% 20%, #312e81 0%, #050507 55%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#6ee7b7' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#34d399' }} />
          Open to full-time AI/ML roles · Graduating Dec 2026
        </div>
        <div style={{ marginTop: 28, fontSize: 92, fontWeight: 700, letterSpacing: -3, display: 'flex' }}>
          Ganesan Murugan
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 46,
            fontWeight: 600,
            backgroundImage: 'linear-gradient(90deg, #93c5fd, #c4b5fd, #67e8f9)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}
        >
          AI/ML Engineer · Agentic AI × Biology
        </div>
        <div style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: 'flex',
                fontSize: 24,
                padding: '10px 22px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.06)',
                color: '#e5e7eb',
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
