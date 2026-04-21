"use client";

import { useState, useEffect } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = "" }: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => { if (animationFrame) cancelAnimationFrame(animationFrame); };
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function Publications() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const publications = [
    {
      title: "BPS2025 - metabolic enzymes moonlighting as RNA binding proteins",
      authors: "Emberling, G., Curtis, N., Tu, T., Zhang, K., Lokhandwala, A., Tajuddin, Z., Murugan, G., Ondrechen, M. J., & Jeffery, C.",
      journal: "Biophysical Journal",
      year: "2025",
      volume: "124(3)",
      doi: "https://doi.org/10.1016/j.bpj.2024.11.2284",
      abstract: "Investigation of metabolic enzymes with dual functionality as RNA-binding proteins using computational structural biology approaches, POOL analysis, YASARA, and Schrödinger — identifying high-confidence moonlighting candidates from structural and electrostatic features.",
      keywords: ["RNA-Binding Proteins", "Metabolic Enzymes", "Moonlighting", "Computational Structural Biology", "POOL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Weighted gene co-expression network analysis reveals the hub genes and molecular mechanism of quiescence",
      authors: "Apoorvha, J.P., Brindha, S., Ganesan, M. et al.",
      journal: "3 Biotech",
      year: "2025",
      volume: "15, 42",
      doi: "https://doi.org/10.1007/s13205-024-04203-3",
      abstract: "Comprehensive WGCNA analysis of gene regulatory networks across S. cerevisiae, M. musculus, and H. sapiens to identify hub genes and conserved molecular mechanisms underlying cellular quiescence. Identified key hubs including EP300, EGF, EHMT2, and EZH2 with cross-species validation.",
      keywords: ["WGCNA", "Gene Networks", "Quiescence", "Systems Biology", "Transcriptomics"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div
          className="absolute w-64 h-64 bg-gradient-radial from-blue-500/15 via-purple-500/8 to-transparent rounded-full blur-2xl transition-all duration-700"
          style={{ left: mousePosition.x - 128, top: mousePosition.y - 128 }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-4 py-2 mb-6 text-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium text-gray-300">Peer-Reviewed Research</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Publications
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Research in computational structural biology, systems biology, and multi-omics — both published in 2025.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-4 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter end={2} />
                </div>
                <p className="text-gray-400 text-xs font-medium">Publications</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-8 py-4 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  2025
                </div>
                <p className="text-gray-400 text-xs font-medium">Published</p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications List */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              {publications.map((paper, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${paper.color} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-700 rounded-2xl`}></div>

                  <article className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-8">
                    <h2 className="text-xl font-bold text-white mb-3 leading-tight">
                      {paper.title}
                    </h2>

                    <p className="text-gray-400 text-sm mb-3 italic">{paper.authors}</p>

                    <p className={`font-semibold mb-4 text-sm bg-gradient-to-r ${paper.color} bg-clip-text text-transparent`}>
                      {paper.journal}, {paper.volume} ({paper.year})
                    </p>

                    <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                      {paper.abstract}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {paper.keywords.map((keyword, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-md text-xs font-medium text-gray-300">
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300 text-sm font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>View Publication (DOI)</span>
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Research Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-5 text-center">
                {[
                  { label: "AI for Drug Discovery", desc: "Protein design, structure prediction, target identification", color: "text-blue-400" },
                  { label: "Proteomics & Structural Biology", desc: "Moonlighting proteins, RNA-binding, electrostatic analysis", color: "text-purple-400" },
                  { label: "Transcriptomics", desc: "Gene networks, single-cell, spatial transcriptomics", color: "text-green-400" },
                  { label: "Genomics", desc: "ChIP-seq, ATAC-seq, regulatory element analysis", color: "text-red-400" },
                  { label: "Systems Biology", desc: "Multi-omics integration, network analysis, WGCNA", color: "text-cyan-400" },
                  { label: "Computational Biology", desc: "Algorithm development, HPC pipelines, bioinformatics workflows", color: "text-orange-400" }
                ].map((area, i) => (
                  <div key={i} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-5 hover:border-white/30 transition-all duration-300">
                    <h3 className={`font-semibold mb-2 ${area.color}`}>{area.label}</h3>
                    <p className="text-sm text-gray-400">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-0.5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(-1deg); }
          66% { transform: translateY(-25px) rotate(0.5deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .bg-300\\% { background-size: 300% 300%; }
        .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
      `}</style>
    </main>
  );
}
