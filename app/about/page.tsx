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

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-green-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-blue-400">Me</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Bioinformatics Engineer bridging biology and technology with 
              <span className="text-blue-400 font-bold"> 2.5+ years</span> of proven impact
            </p>
            
            {/* Quick Impact Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-blue-400/30">
                <div className="text-3xl font-bold text-blue-400">
                  <AnimatedCounter end={3500} suffix="+" />
                </div>
                <div className="text-sm text-blue-200">Users Supported</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-green-400/30">
                <div className="text-3xl font-bold text-green-400">
                  <AnimatedCounter end={75} suffix="+" />
                </div>
                <div className="text-sm text-green-200">Students Mentored</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-400">
                  <AnimatedCounter end={40} suffix="%" />
                </div>
                <div className="text-sm text-purple-200">Efficiency Improvement</div>
              </div>
            </div>
          </div>

          {/* My Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">My Journey</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  From a <strong className="text-white">top-performing Biotechnology graduate (9.4/10 CGPA)</strong> 
                  to a <strong className="text-blue-400">Master's in Bioinformatics at Northeastern University</strong>, 
                  my journey has been about bridging the gap between biology and cutting-edge technology.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Over <strong className="text-green-400">2.5+ years of hands-on experience</strong>, I've evolved from 
                  processing NGS data to building full-stack applications, from analyzing spatial transcriptomics 
                  to architecting cloud-native bioinformatics platforms.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  My expertise spans the <strong className="text-purple-400">entire bioinformatics pipeline</strong> - 
                  from raw genomic data processing with GATK and Nextflow, to ML model development with TensorFlow, 
                  to deploying scalable web applications with React and Django on AWS.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30">
                <h3 className="text-xl font-bold mb-3 text-blue-400">🎓 Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white">MS Bioinformatics (Expected Aug 2026)</p>
                    <p className="text-sm text-blue-200">Northeastern University • CGPA: 3.917/4</p>
                    <p className="text-xs text-gray-400 mt-1">Focus: Computational Biology, ML, Genomics</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">BTech Biotechnology (May 2023)</p>
                    <p className="text-sm text-blue-200">Anna University • CGPA: 9.4/10 (Top 5%)</p>
                    <p className="text-xs text-gray-400 mt-1">Foundation: Biology, Biochemistry, Programming</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30">
                <h3 className="text-xl font-bold mb-3 text-green-400">🏆 Key Achievements</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">2 research publications in top-tier journals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Led LIMS platform supporting 500+ users</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">85% accuracy in drug discovery ML models</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">8+ professional certifications</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/30">
                <h3 className="text-xl font-bold mb-3 text-purple-400">💡 What Drives Me</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Passionate about making complex bioinformatics accessible through intuitive software. 
                  I believe the future lies in seamless integration of biological data, AI/ML, and 
                  user-friendly applications that empower researchers worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Journey - Clean & Simple */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Professional Journey</h2>
            
            <div className="space-y-6">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:scale-[1.02] transition duration-300">
                <img src="/COE.png" alt="NEU" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4"/>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Programming Assistant</h3>
                  <p className="text-blue-400 text-sm">Lee Makowski Lab, Northeastern University • May 2025 - Present</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/30 hover:scale-[1.02] transition duration-300">
                <img src="/NCOS.jpg" alt="NCOS" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4"/>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Bioinformatics Teaching Assistant</h3>
                  <p className="text-purple-400 text-sm">College of Science, Northeastern University • Jan 2025 - Present</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30 hover:scale-[1.02] transition duration-300">
                <img src="/BI.png" alt="BI" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4"/>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Digital Transformation, Biotherapeutics Research Data and Automation - Intern</h3>
                  <p className="text-green-400 text-sm">Boehringer Ingelheim Pharmaceuticals • May 2025 - Aug 2025</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/30 hover:scale-[1.02] transition duration-300">
                <img src="/COE.png" alt="NEU Research" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4"/>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Graduate Research Assistant</h3>
                  <p className="text-yellow-400 text-sm">Ondrechen Research Group, Northeastern University • Sep 2024 - Apr 2025</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/30 hover:scale-[1.02] transition duration-300">
                <img src="/Zifo.webp" alt="Zifo" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4"/>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Scientific Application Analyst</h3>
                  <p className="text-cyan-400 text-sm">Zifo Technologies Private Limited • Jan 2023 - Aug 2024</p>
                </div>
              </div>

              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30 hover:scale-[1.02] transition duration-300">
                <img src="cts.png" alt="Zifo" className="w-12 h-12 rounded-xl object-contain bg-white p-1 mr-4"/>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">Campus Ambassador</h3>
                  <p className="text-orange-400 text-sm">Cognizant • Apr 2022 - Apr 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-12 rounded-2xl border border-blue-400/30">
            <h2 className="text-3xl font-bold mb-6 text-white">Let's Build Something Amazing</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether it's processing terabytes of NGS data, building intuitive bioinformatics platforms, 
              or developing AI models for drug discovery - I'm ready to tackle your next challenge.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 transform hover:scale-105">
                View My Projects
              </a>
              <a href="/contact" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
