'use client';

import { useState, useEffect } from 'react';

export default function Posts() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const expectedTopics = [
    {
      icon: '🧬',
      title: 'Bioinformatics',
      description: 'Genomics, proteomics, and computational biology workflows',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'AI applications in biological research and drug discovery',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Scalable infrastructure for computational biology',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: '🧠',
      title: 'LLMs & AI',
      description: 'Large language models and neural networks for bioscience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: 'Data Science',
      description: 'Advanced analytics and visualization techniques',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🛠️',
      title: 'DevOps & MLOps',
      description: 'Production systems and infrastructure automation',
      color: 'from-yellow-500 to-orange-400'
    }
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
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-4 py-2 mb-6 text-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium text-gray-300">Coming Soon</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Blog & Posts
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Sharing insights, tutorials, and discoveries in bioinformatics, machine learning, 
              and computational biology. Join me on this journey of continuous learning.
            </p>
          </div>
        </section>

        {/* Coming Soon Card */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 rounded-2xl"></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-12 text-center">
                  <div className="text-6xl mb-6 animate-bounce">📝</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Blog Coming Soon
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    I'm preparing exciting content about bioinformatics, machine learning, and computational biology.
                  </p>
                  
                  <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/40 rounded-xl p-6">
                    <p className="text-blue-300 font-semibold mb-2">First Post Expected:</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      January 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Topics */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-full px-6 py-2 mb-4">
                  <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    What to Expect
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Topics I'll Cover
                  </span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {expectedTopics.map((topic, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${topic.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 rounded-2xl`}></div>
                    
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-6 text-center hover:scale-105">
                      <div className="text-4xl mb-4">{topic.icon}</div>
                      <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${topic.color} bg-clip-text text-transparent`}>
                        {topic.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-12 text-center hover:border-white/40 transition-all duration-500">
                <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
                  <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    In the Meantime
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Explore My Work
                  </span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  While you wait for my blog posts, feel free to check out my research publications, 
                  projects, and connect with me on social media.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/publications" 
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                      <span>📖</span>
                      <span>Publications</span>
                    </div>
                  </a>
                  
                  <a 
                    href="/projects" 
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-bold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                      <span>💻</span>
                      <span>Projects</span>
                    </div>
                  </a>
                  
                  <a 
                    href="/contact" 
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-bold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2">
                      <span>✉️</span>
                      <span>Contact</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-3xl mb-4">🔔</div>
                <h3 className="text-2xl font-bold mb-3 text-white">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to be notified when new posts are published
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition duration-300"
                  />
                  <button 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300"
                  >
                    Notify Me
                  </button>
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
