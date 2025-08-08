"use client";

import { useState, useEffect } from 'react';

// Counter component
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
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function Publications() {
  const publications = [
    {
      title: "BPS2025 - metabolic enzymes moonlighting as RNA binding proteins",
      authors: "Emberling, G., Curtis, N., Tu, T., Zhang, K., Lokhandwala, A., Tajuddin, Z., Murugan, G., Ondrechen, M. J., & Jeffery, C.",
      journal: "Biophysical Journal",
      year: "2025",
      volume: "124(3)",
      doi: "https://doi.org/10.1016/j.bpj.2024.11.2284",
      abstract: "Investigation of metabolic enzymes that exhibit dual functionality as RNA-binding proteins using computational structural biology approaches and advanced prediction algorithms.",
      keywords: ["Structural Biology", "RNA-Protein Interactions", "Metabolic Enzymes", "Computational Biology"],
      type: "Research Article"
    },
    {
      title: "Weighted gene co-expression network analysis reveals the hub genes and molecular mechanism of quiescence",
      authors: "Apoorvha, J.P., Brindha, S., Ganesan, M. et al.",
      journal: "3 Biotech",
      year: "2025",
      volume: "15, 42",
      doi: "https://doi.org/10.1007/s13205-024-04203-3",
      abstract: "Comprehensive analysis of gene regulatory networks and molecular mechanisms underlying cellular quiescence using weighted gene co-expression network analysis (WGCNA) and systems biology approaches.",
      keywords: ["Gene Networks", "Systems Biology", "WGCNA", "Bioinformatics"],
      type: "Research Article"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-blue-400">Publications</span>
          </h1>
          
          <p className="text-lg text-gray-300 text-center mb-12">
            Research contributions in bioinformatics and computational biology
          </p>

          {/* Simple Stats */}
          <div className="flex justify-center space-x-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">
                <AnimatedCounter end={2} />
              </div>
              <div className="text-sm text-gray-400">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">
                <AnimatedCounter end={2025} />
              </div>
              <div className="text-sm text-gray-400">Recent Year</div>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((paper, index) => (
              <article key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition duration-300">
                <h2 className="text-xl font-semibold text-white mb-3 leading-tight">
                  {paper.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-3">{paper.authors}</p>
                
                <p className="text-blue-400 font-medium mb-4">
                  {paper.journal}, {paper.volume} ({paper.year})
                </p>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {paper.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.keywords.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={paper.doi} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="text-sm font-medium">View Publication</span>
                </a>
              </article>
            ))}
          </div>

          {/* Research Areas */}
          <div className="mt-16 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/30">
            <h2 className="text-xl font-semibold mb-6 text-center text-blue-400">Research Focus</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-medium mb-2 text-green-400">AI/ML in Drug Discovery</h3>
                <p className="text-sm text-gray-400">Machine learning for therapeutic development & optimization</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-purple-400">Proteomics</h3>
                <p className="text-sm text-gray-400">Protein structure analysis & interaction prediction</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-yellow-400">Transcriptomics</h3>
                <p className="text-sm text-gray-400">Gene expression analysis & spatial transcriptomics</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-red-400">Genomics</h3>
                <p className="text-sm text-gray-400">Computational genomics & sequence analysis</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-cyan-400">Systems Biology</h3>
                <p className="text-sm text-gray-400">Multi-omics integration & network analysis</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-orange-400">Computational Biology</h3>
                <p className="text-sm text-gray-400">Algorithm development & bioinformatics workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
