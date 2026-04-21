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

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-4 py-2 mb-6 text-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium text-gray-300">Computational Biology &amp; AI</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                About Me
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              MS Bioinformatics student at Northeastern building AI systems for drug discovery —
              <span className="text-blue-400 font-bold"> protein design, multi-omics, agentic LLMs</span>, and the infrastructure to run them at scale.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
              <div className="group relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={1} suffix="M+" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Cells Analyzed</p>
                </div>
              </div>
              <div className="group relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={75} suffix="+" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Students Mentored</p>
                </div>
              </div>
              <div className="group relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                    <AnimatedCounter end={92} suffix="%" duration={2000} />
                  </div>
                  <p className="text-gray-400 text-xs font-medium">Model Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                My Journey
              </h2>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-2xl"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-6">
                    <div className="space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        I started out as a <strong className="text-white">Biotechnology student at Anna University (9.4/10 CGPA)</strong>,
                        where I got pulled into bioinformatics and data science. I liked the combination — you actually need to understand the biology to build the right software.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Now I&apos;m doing my <strong className="text-blue-400">MS in Bioinformatics at Northeastern (3.94/4.00)</strong>,
                        co-op&apos;ing at Solid Biosciences where I&apos;m building multi-agent LangGraph systems and cloud-native protein design pipelines — containerizing models like RFdiffusion3 and ProteinMPNN on AWS Batch across 50,000+ variants.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Before that I interned at <strong className="text-purple-400">Boehringer Ingelheim</strong>, where I built a production single-cell &amp; spatial transcriptomics platform (1M+ cells, Django + React + AWS) and an LLM-powered biological insight engine on AWS Bedrock that let research scientists query differential expression in plain language.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="group relative">
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-3 text-blue-400">🎓 Education</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-white">MS Bioinformatics (Expected Aug 2026)</p>
                          <p className="text-sm text-blue-200">Northeastern University · CGPA: 3.94/4.00</p>
                          <p className="text-xs text-gray-400 mt-1">ML/AI, Cloud Computing, Computational Biology, Protein Language Models</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">BTech Biotechnology (May 2023)</p>
                          <p className="text-sm text-blue-200">Anna University · CGPA: 9.4/10 (Top 5%)</p>
                          <p className="text-xs text-gray-400 mt-1">Bioinformatics, Data Science, Software Engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-3 text-green-400">🏆 Highlights</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300">2 peer-reviewed publications (Biophysical Journal, 3 Biotech)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300">50,000+ protein variants designed on AWS Batch</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300">70% reduction in manual curation via agentic RAG</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300">92% accuracy classifying 100,000+ protein gel images</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300">HPC admin for 10,000+ users (SLURM, GPU clusters)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-3 text-purple-400">💡 What I Care About</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        I&apos;m most interested in problems where the biology is hard and the engineering is hard at the same time.
                        Drug discovery is a good place for that — models need to be correct, fast, and trustworthy.
                        I want to keep building in this space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </h2>

              <div className="space-y-4">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/solid-biosciences.png" alt="Solid Biosciences" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Computational Biology and Predictive Sciences Co-op</h3>
                      <p className="text-blue-300 text-sm">Solid Biosciences · Charlestown, MA · Jan 2026 – Present</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/COE.png" alt="Research Computing" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Graduate Research Assistant — Research Computing</h3>
                      <p className="text-red-300 text-sm">Northeastern University · Jan 2026 – Present</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/COE.png" alt="Lee Makowski Lab" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Programming Assistant — Lee Makowski Lab</h3>
                      <p className="text-cyan-300 text-sm">Northeastern University · May 2025 – Present</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/NCOS.jpg" alt="Northeastern College of Science" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Bioinformatics Teaching Assistant</h3>
                      <p className="text-purple-300 text-sm">College of Science, Northeastern University · Jan 2025 – Dec 2025</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/BI.png" alt="Boehringer Ingelheim" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Digital Transformation, Biotherapeutics Research Data & Automation — Intern</h3>
                      <p className="text-green-300 text-sm">Boehringer Ingelheim Pharmaceuticals · Ridgefield, CT · May 2025 – Aug 2025</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/COE.png" alt="Ondrechen Research Group" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Graduate Research Assistant — Ondrechen Research Group</h3>
                      <p className="text-yellow-300 text-sm">Northeastern University · Sep 2024 – Apr 2025</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-xl"></div>
                  <div className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-4 hover:scale-[1.02]">
                    <img src="/Zifo.webp" alt="Zifo Technologies" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4 flex-shrink-0"/>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white">Scientific Application Analyst</h3>
                      <p className="text-orange-300 text-sm">Zifo Technologies Private Limited · Chennai, India · Jan 2023 – Aug 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 relative overflow-hidden hover:border-white/40 transition-all duration-500">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Want to Work Together?
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    I&apos;m always open to interesting problems in computational biology, drug discovery AI, or ML infrastructure. Drop me a line.
                  </p>
                  <div className="flex justify-center gap-4">
                    <a href="/projects" className="group/cta inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg">
                      <span>📂</span>
                      <span>View Projects</span>
                      <svg className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                      </svg>
                    </a>
                    <a href="mailto:murugan.g@northeastern.edu" className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-6 py-3 rounded-lg font-bold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                      <span>✉️</span>
                      <span>Email Me</span>
                    </a>
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
