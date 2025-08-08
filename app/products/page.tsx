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

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const products = [
    {
      name: "Ghana Bioinnovative Initiative",
      shortName: "Expo Registration Platform",
      description: "Public website for healthcare innovation expo registrations and bioinnovation center showcase in Ghana",
      category: "Public Website",
      status: "Published",
      statusIcon: "🚀",
      technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      features: [
        "Expo registration system",
        "Event information portal",
        "Bioinnovation center showcase",
        "Public engagement platform"
      ],
      impact: {
        visitors: "1K+",
        registrations: "200+",
        events: "5+"
      },
      targetUsers: "General public, Event attendees, Researchers",
      websiteUrl: "https://ghanabioinitiative.sites.northeastern.edu/",
      launchDate: "Live Now",
      color: "from-emerald-400 to-green-500",
      icon: "🏥"
    },
    {
      name: "Makowski Lab Research Platform",
      shortName: "Lab Website",
      description: "Academic lab website showcasing structural biology research, projects, and publications from the Makowski Lab",
      category: "Academic Website", 
      status: "Published",
      statusIcon: "⚡",
      technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      features: [
        "Research project showcase",
        "Publication listings",
        "Lab member profiles",
        "Academic collaboration portal"
      ],
      impact: {
        visitors: "500+",
        "SEO score": "95+",
        projects: "10+"
      },
      targetUsers: "Academic researchers, Students, Collaborators",
      websiteUrl: "https://makowski-lab.sites.northeastern.edu/",
      launchDate: "Live Now",
      color: "from-blue-400 to-purple-500",
      icon: "🧬"
    },
    {
      name: "BioFlow Intelligence Platform",
      shortName: "Next-Gen Bioinformatics",
      description: "AI-native bioinformatics workflow platform with autonomous pipeline orchestration",
      category: "Bioinformatics AI",
      status: "Concept",
      statusIcon: "🎯",
      technologies: ["React 19", "FastAPI", "Vector DB", "MLOps"],
      features: [
        "Autonomous workflow orchestration",
        "Real-time ML quality control",
        "Intelligent data routing",
        "Zero-config cloud scaling"
      ],
      impact: {
        pipelines: "∞",
        processing: "100TB+",
        models: "50+"
      },
      targetUsers: "Research institutions, Biotech companies",
      websiteUrl: null,
      launchDate: "2026",
      color: "from-cyan-400 to-blue-500",
      icon: "🔬"
    }
  ];

  const stats = [
    { value: 3, label: "Total Products", color: "from-emerald-400 to-green-500" },
    { value: 2, label: "Published Products", color: "from-blue-400 to-purple-500" },
    { value: 1, label: "In Development", color: "from-orange-400 to-red-500" },
    { value: 2025, label: "Innovation Year", color: "from-pink-400 to-rose-500" },
    { value: 100, label: "Success Rate", color: "from-yellow-400 to-orange-500", suffix: "%" }
  ];

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
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        {/* Compact Hero Section */}
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-6 text-center">
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-4 py-2 mb-6 text-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium text-gray-300">Building Bio-Innovation</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Products
              </span>
              <span className="text-white/90 text-2xl md:text-4xl font-light block">
                & Solutions
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Revolutionary platforms transforming healthcare innovation, structural biology, 
              and bioinformatics through AI and cloud technologies.
            </p>

            {/* Compact Stats Grid */}
            <div className="grid grid-cols-5 gap-3 max-w-3xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                    <div className={`text-xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                    </div>
                    <p className="text-gray-400 text-xs font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compact Products Showcase */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="space-y-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setActiveProduct(index)}
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 rounded-2xl`}></div>
                  
                  {/* Compact Card */}
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center text-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                            {product.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                              {product.name}
                            </h3>
                            <p className={`text-xs font-medium bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                              {product.shortName}
                            </p>
                          </div>
                        </div>
                        
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          product.status === 'Published' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' :
                          product.status === 'Under Construction' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/50' :
                          'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                        }`}>
                          {product.status}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        {/* Impact Metrics */}
                        <div className="col-span-1">
                          <div className="grid grid-cols-3 gap-2">
                            {Object.entries(product.impact).map(([key, value], i) => (
                              <div key={i} className="text-center p-2 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10">
                                <div className={`text-sm font-black bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                                  {value}
                                </div>
                                <div className="text-xs text-gray-400 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="col-span-1">
                          <div className="space-y-1">
                            {product.features.slice(0, 4).map((feature, i) => (
                              <div key={i} className="flex items-center space-x-2 text-xs">
                                <div className={`w-3 h-3 bg-gradient-to-r ${product.color} rounded-sm flex items-center justify-center text-xs font-bold text-white`}>
                                  ✓
                                </div>
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="col-span-1">
                          <div className="flex flex-wrap gap-1">
                            {product.technologies.map((tech, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-md text-xs font-medium text-gray-300 hover:border-white/30 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="mt-2 text-xs text-gray-400">
                            Launch: <span className={`font-semibold ${
                              product.launchDate === 'Live Now' ? 'text-green-400' :
                              product.launchDate === 'Coming Soon' ? 'text-orange-400' :
                              'text-purple-400'
                            }`}>{product.launchDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div>
                        {product.websiteUrl ? (
                          <a 
                            href={product.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/btn inline-flex items-center space-x-2 bg-gradient-to-r ${product.color} px-4 py-2 rounded-lg text-sm font-bold text-white hover:scale-105 transition-all duration-300`}
                          >
                            <span>🌐</span>
                            <span>Visit Live</span>
                            <svg className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                            </svg>
                          </a>
                        ) : (
                          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-600/50 to-gray-700/50 px-4 py-2 rounded-lg text-sm font-bold text-gray-400">
                            <span>🚧</span>
                            <span>In Development</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compact Philosophy Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-pink-500/30 rounded-full px-6 py-2 mb-4">
                  <span className="text-sm font-semibold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Innovation Philosophy
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Bio-Solutions for Tomorrow
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl border border-emerald-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center text-lg mb-4 group-hover:rotate-12 transition-transform duration-300">
                      🎯
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-emerald-400">Impact-Driven Design</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Every platform addresses real-world challenges in biology and healthcare, 
                      ensuring meaningful impact on human health and scientific discovery.
                    </p>
                  </div>
                </div>

                <div className="group relative">
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-lg mb-4 group-hover:rotate-12 transition-transform duration-300">
                      🚀
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-blue-400">AI-Native Architecture</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Integrating advanced AI/ML capabilities from the ground up, 
                      creating intelligent systems that optimize biological workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ready to Innovate?
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join the revolution in biological computing. Let's build custom solutions for your research needs.
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    <a 
                      href="/contact" 
                      className="group/cta inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      <span>💫</span>
                      <span>Start Project</span>
                      <svg className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                      </svg>
                    </a>
                    
                    <a 
                      href="/projects" 
                      className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-6 py-3 rounded-lg font-bold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                      <span>🔬</span>
                      <span>View Research</span>
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
