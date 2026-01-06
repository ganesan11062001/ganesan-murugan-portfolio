'use client';

import { useState, useEffect } from 'react';

interface ContactMethod {
  title: string;
  value: string;
  href?: string;
  subtext?: string;
  icon: string;
  color: string;
  borderColor: string;
}

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactMethods: ContactMethod[] = [
    {
      title: 'Email',
      value: 'murugan.g@northeastern.edu',
      href: 'mailto:murugan.g@northeastern.edu?subject=Hello from your portfolio',
      icon: '✉️',
      color: 'from-blue-500 to-cyan-400',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Phone',
      value: '+1 (857) 351-8024',
      href: 'tel:+18573518024',
      icon: '📞',
      color: 'from-green-500 to-emerald-400',
      borderColor: 'border-green-500/30'
    },
    {
      title: 'Location',
      value: 'Boston, MA',
      subtext: 'Northeastern University',
      icon: '📍',
      color: 'from-purple-500 to-pink-400',
      borderColor: 'border-purple-500/30'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ganesan-murugan-a34aa7231/',
      icon: '💼',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ganesan11062001',
      icon: '🐙',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-600 hover:to-gray-700'
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
              <span className="font-medium text-gray-300">Let's Connect</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Get In Touch
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on bioinformatics, ML, or innovative projects? 
              <br className="hidden sm:block" />
              Reach out through any of these channels!
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {contactMethods.map((method, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 rounded-2xl`}></div>
                  
                  {method.href ? (
                    <a href={method.href}>
                      <div className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-8 text-center ${method.borderColor} hover:scale-105`}>
                        <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl`}>
                          {method.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                        <p className="text-gray-300 group-hover:text-white transition duration-300">
                          {method.value}
                        </p>
                        {method.subtext && (
                          <p className="text-gray-400 text-sm mt-2">{method.subtext}</p>
                        )}
                      </div>
                    </a>
                  ) : (
                    <div className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-8 text-center ${method.borderColor} hover:scale-105`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl`}>
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                      <p className="text-gray-300 group-hover:text-white transition duration-300">
                        {method.value}
                      </p>
                      {method.subtext && (
                        <p className="text-gray-400 text-sm mt-2">{method.subtext}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-12 text-center hover:border-white/40 transition-all duration-500">
                <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2 mb-6">
                  <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Connect Online
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Follow My Work
                </h2>
                
                <div className="flex justify-center gap-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-all duration-300 ${social.hoverColor}`}>
                        {social.icon}
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition duration-300 text-sm font-medium">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-400 mb-8 text-lg">
                Want to know more about my work?
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <a 
                  href="/publications" 
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-blue-500/30 hover:border-blue-500/60 px-6 py-4 rounded-xl font-semibold text-blue-300 hover:text-blue-200 transition-all duration-300 group-hover:scale-105">
                    📖 Publications
                  </div>
                </a>
                
                <a 
                  href="/projects" 
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-purple-500/30 hover:border-purple-500/60 px-6 py-4 rounded-xl font-semibold text-purple-300 hover:text-purple-200 transition-all duration-300 group-hover:scale-105">
                    💻 Projects
                  </div>
                </a>
                
                <a 
                  href="/certifications" 
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-green-500/30 hover:border-green-500/60 px-6 py-4 rounded-xl font-semibold text-green-300 hover:text-green-200 transition-all duration-300 group-hover:scale-105">
                    🏆 Certifications
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-12 relative overflow-hidden hover:border-white/40 transition-all duration-500">
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Ready to Start a Project?
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-8 text-lg">
                    Let's collaborate and build something amazing together!
                  </p>
                  
                  <a 
                    href="mailto:murugan.g@northeastern.edu?subject=Let's work together"
                    className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-xl font-bold text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    <span>✨</span>
                    <span>Send Me an Email</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </a>
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
