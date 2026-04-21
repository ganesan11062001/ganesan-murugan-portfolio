'use client';

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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Multi-Agent LangGraph System for Multi-Omics Target Identification",
      company: "Solid Biosciences",
      period: "Jan 2026 – Present",
      description: "Built a stateful multi-agent system using LangGraph with supervisor-worker topology to orchestrate autonomous multi-omics data ingestion, cross-modal fusion, and biomarker prioritization across 500,000+ measurements. Integrated an RAG pipeline with FAISS vector indexing and OpenAI APIs, adding tool-calling, reranking, and human-in-the-loop review nodes against biomedical knowledge bases — eliminating 70% of manual curation end-to-end.",
      achievements: [
        "Conditional routing & supervisor-worker topology across specialized nodes",
        "500,000+ measurements processed for target identification",
        "70% reduction in manual curation through end-to-end agentic orchestration",
        "RAG with FAISS + OpenAI APIs across biomedical knowledge bases"
      ],
      technologies: ["LangGraph", "RAG", "FAISS", "OpenAI APIs", "Python", "Multi-omics", "Agentic AI"],
      category: "Agentic AI",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud-Native Protein Design Platform on AWS Batch",
      company: "Solid Biosciences",
      period: "Jan 2026 – Present",
      description: "Containerized and deployed 11 protein design models on AWS Batch, building a production-grade platform for therapeutic engineering across 50,000+ design variants. Applied RFdiffusion3 for de novo binder design, ProteinMPNN for AAV capsid surface loop redesign, and Boltz-2 for nanobody and cyclic peptide design. Extended to clinical-grade use cases: linker sequence design (ColabFold + Chai-1), T-cell epitope removal via de-immunization (LigandMPNN), and thermostability optimization (ThermoMPNN).",
      achievements: [
        "11 protein design models containerized on AWS Batch",
        "50,000+ design variants across RFdiffusion3, ProteinMPNN, Boltz-2",
        "De-immunization via T-cell epitope removal (LigandMPNN)",
        "Thermostability optimization for biologics manufacturability (ThermoMPNN)"
      ],
      technologies: ["RFdiffusion3", "ProteinMPNN", "Boltz-2", "Chai-1", "LigandMPNN", "ThermoMPNN", "ColabFold", "AWS Batch", "Docker"],
      category: "Protein Design",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Single-Cell & Spatial Transcriptomics Platform",
      company: "Boehringer Ingelheim Pharmaceuticals",
      period: "May 2025 – Aug 2025",
      description: "Architected a production platform processing 1,000,000+ cells using Scanpy, Squidpy, Harmony/Scanorama batch correction, Leiden clustering, CellTypist/scType, and scVelo RNA velocity — surfacing transcriptional signatures for drug target identification. Built the full-stack interface (Django, React/TypeScript, PostgreSQL, AWS EC2/S3/RDS) featuring interactive UMAP and Visium spatial visualizations with ML-integrated streaming inference, cutting end-to-end processing time by 35%. Also engineered an LLM-powered biological insight engine via AWS Bedrock with RAG, enabling 10+ research scientists to query differential expression and pathway enrichment in plain language.",
      achievements: [
        "1,000,000+ cells processed across single-cell and spatial modalities",
        "Full-stack platform: Django, React/TypeScript, PostgreSQL, AWS",
        "35% reduction in end-to-end processing time",
        "LLM insight engine (AWS Bedrock + RAG) for 10+ research scientists"
      ],
      technologies: ["Scanpy", "Squidpy", "scVelo", "CellTypist", "Django", "React", "TypeScript", "PostgreSQL", "AWS Bedrock", "RAG"],
      category: "Bioinformatics",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Deep Learning Pipeline for Protein Gel Image Classification",
      company: "Lee Makowski Lab, Northeastern University",
      period: "May 2025 – Present",
      description: "Developed a deep learning pipeline integrating Vision Transformers (ViT), ResNet, and U-Net segmentation to classify 100,000+ protein gel images from Alzheimer's-associated tau and tubulin experiments — achieving 92% classification accuracy and reducing manual review time by 85%. Also applied Graph Neural Networks (GNNs), attention mechanisms, and contrastive learning to SAXS/WAXS multi-modal X-ray scattering data from tau fibril preparations, extracting conformational signatures across 3,600 spectra per image. Deployed AlphaFold3 to predict IDP binding geometry of tau-tubulin complexes and characterize interface residues with PyMOL and ChimeraX.",
      achievements: [
        "92% classification accuracy on 100,000+ protein gel images",
        "85% reduction in manual review time",
        "GNNs on SAXS/WAXS data — 3,600 spectra per image",
        "AlphaFold3 for tau-tubulin IDP binding geometry prediction"
      ],
      technologies: ["Vision Transformers", "ResNet", "U-Net", "GNNs", "AlphaFold3", "PyMOL", "ChimeraX", "PyTorch", "SAXS/WAXS"],
      category: "ML/AI",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Machine Learning-Driven Optimization of CRISPR-Cas9 Editing Efficiency",
      company: "Research Project",
      period: "Dec 2024 – Jan 2025",
      description: "Developed an ML pipeline using Random Forest, Gradient Boosting, and Neural Networks to predict CRISPR sgRNA efficiency from 100,000+ sequences, achieving 92% accuracy through feature engineering. Compressed screening time by 90% and accelerated candidate identification 7.5-fold over conventional approaches.",
      achievements: [
        "92% prediction accuracy across 100,000+ sgRNA sequences",
        "90% reduction in experimental screening requirements",
        "7.5x acceleration in candidate identification",
        "Feature engineering from sequence-level properties"
      ],
      technologies: ["Random Forest", "Gradient Boosting", "Neural Networks", "Python", "scikit-learn", "CRISPR-Cas9", "Feature Engineering"],
      category: "ML/AI",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Quantitative Analysis of Genomic Overlaps Using Cobind",
      company: "Research Project",
      period: "Sep 2024 – Dec 2024",
      description: "Analyzed 500,000+ genomic intervals using Python, Pandas, SciPy, and BX-Python to process ChIP-seq/ATAC-seq BED files with 1M+ intervals. Implemented six statistical metrics to identify 10+ transcriptional cofactors and master regulators from CTCF binding sites and cancer-specific open chromatin regions (OCRs).",
      achievements: [
        "500,000+ genomic intervals analyzed",
        "1M+ intervals processed via custom Python pipelines",
        "10+ transcriptional cofactors and master regulators identified",
        "Cancer-specific OCR regulatory analysis"
      ],
      technologies: ["Python", "Cobind", "Pandas", "SciPy", "BX-Python", "ChIP-seq", "ATAC-seq", "BED files"],
      category: "Genomics",
      color: "from-emerald-500 to-green-500"
    }
  ];

  const categories = ["All", "Agentic AI", "Protein Design", "ML/AI", "Bioinformatics", "Genomics"];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
              <span className="font-medium text-gray-300">Projects &amp; Research</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Projects
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A mix of work-experience platforms, research pipelines, and academic projects —
              mostly centered on protein design, multi-omics, agentic AI, and genomics.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={6} duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Projects</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={1} suffix="M+" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Cells / Sequences</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={50} suffix="K+" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Protein Variants</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={92} suffix="%" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Top Model Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/10 border border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-6">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 rounded-2xl`}></div>

                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-2/3">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h2 className="text-xl font-bold text-white">{project.title}</h2>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                            project.category === 'Agentic AI' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                            project.category === 'Protein Design' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            project.category === 'ML/AI' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                            project.category === 'Bioinformatics' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' :
                            'bg-green-500/20 text-green-300 border border-green-500/30'
                          }`}>
                            {project.category}
                          </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm">
                          <p className="text-blue-300 font-semibold">{project.company}</p>
                          <p className="text-gray-400">· {project.period}</p>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                        <div className="mb-6">
                          <h3 className="text-base font-semibold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Key Results</h3>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start">
                                <span className="text-green-400 mr-2 flex-shrink-0">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="lg:w-1/3">
                        <h3 className="text-base font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-md text-xs font-medium text-gray-300 hover:border-white/30 transition-all">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
