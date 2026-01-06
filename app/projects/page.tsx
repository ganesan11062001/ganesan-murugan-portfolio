'use client';

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
      title: "Machine Learning-Driven Optimization of CRISPR-Cas9 Genome Editing Efficiency",
      company: "Research Project",
      period: "Dec 2024 - Feb 2025",
      description: "Applied machine learning to optimize CRISPR-Cas9 genome editing, reducing screening by 90%, improving efficiency 7.5-fold, and developing data-driven workflows for therapeutic target discovery through spatial analysis.",
      achievements: [
        "90% reduction in screening requirements",
        "7.5-fold improvement in editing efficiency",
        "Data-driven therapeutic target discovery workflows"
      ],
      technologies: ["Machine Learning", "CRISPR-Cas9", "Python", "Spatial Analysis", "Therapeutic Target Discovery"],
      category: "ML/AI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantitative Analysis of Genomic Overlaps Using Cobind",
      company: "Research Project",
      period: "Sep 2024 - Dec 2024",
      description: "Analyzed 500,000+ genomic intervals using the Cobind Python package and six statistical metrics to identify 10+ key transcriptional cofactors and master regulators from CTCF binding sites and cancer-specific OCRs.",
      achievements: [
        "Analyzed 500,000+ genomic intervals",
        "Identified 10+ key transcriptional cofactors",
        "Processed 10,000,000 intervals using custom Python pipelines"
      ],
      technologies: ["Python", "Cobind", "Pandas", "SciPy", "BX-Python", "ChIP-seq", "ATAC-seq", "BED files"],
      category: "Genomics",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Comparative Transcriptomic Analysis",
      company: "Research Project",
      period: "Dec 2022 - Apr 2023",
      description: "Performed Weighted Gene Co-expression Network Analysis (WGCNA) on 100,000+ RNA-Seq data across S. cerevisiae, M. musculus, and H. sapiens to identify key gene modules and hub genes involved in quiescence.",
      achievements: [
        "Analyzed 100,000+ RNA-Seq data points",
        "Discovered 10+ hub genes (EP300, EGF, EHMT2, EZH2)",
        "Identified conserved molecular pathways across three species"
      ],
      technologies: ["R", "WGCNA", "RNA-Seq", "Cytoscape", "STRING", "Metascape", "Bioconductor"],
      category: "Transcriptomics",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const categories = ["All", "ML/AI", "Genomics", "Transcriptomics"];
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
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
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
              <span className="font-medium text-gray-300">Research & Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Projects
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Research projects in genomics, transcriptomics, and machine learning, analyzing large-scale 
              biological datasets to uncover molecular mechanisms and optimize biotechnology applications.
            </p>
          </div>
        </section>

        {/* Research Stats */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={3} duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Research Projects</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={600} suffix="K+" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Data Points Analyzed</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={90} suffix="%" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Max Efficiency Gain</p>
                </div>
              </div>
              <div className="group">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 hover:border-white/40">
                  <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={7} suffix=".5x" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">CRISPR Improvement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8">
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
                            project.category === 'ML/AI' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            project.category === 'Genomics' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                            'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          }`}>
                            {project.category}
                          </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 mb-4 text-sm">
                          <p className="text-blue-300 font-semibold">{project.company}</p>
                          <p className="text-gray-400">• {project.period}</p>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>
                        
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Key Achievements</h3>
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
                        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies Used</h3>
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

        {/* Research Impact */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/30 rounded-full px-6 py-2 mb-4">
                  <span className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Research Impact
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Research Contributions
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-2xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 group-hover:border-white/40 transition-all duration-500">
                    <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">🤖 Machine Learning</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> CRISPR-Cas9 efficiency optimization</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> 90% screening reduction</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> 7.5x editing efficiency improvement</li>
                      <li className="flex items-start"><span className="text-blue-400 mr-2">•</span> Therapeutic target discovery</li>
                    </ul>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-2xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 group-hover:border-white/40 transition-all duration-500">
                    <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">🧬 Genomics Research</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span> 500K+ genomic interval analysis</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Transcriptional cofactor identification</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span> CTCF binding site characterization</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span> Cancer-specific regulatory analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-2xl"></div>
                  
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 group-hover:border-white/40 transition-all duration-500">
                    <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">📊 Transcriptomics Research</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Cross-species comparative analysis</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Gene co-expression network construction</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Hub gene discovery and validation</li>
                      <li className="flex items-start"><span className="text-purple-400 mr-2">•</span> Molecular pathway characterization</li>
                    </ul>
                  </div>
                </div>
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
