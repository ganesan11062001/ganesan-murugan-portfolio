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

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedSkills, setExpandedSkills] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle",
      date: "Aug 2025",
      year: 2025,
      month: 8,
      status: "Certified",
      description: "Comprehensive DevOps certification covering CI/CD pipelines, infrastructure as code, monitoring, and automation using Oracle Cloud Infrastructure.",
      skills: ["DevOps", "CI/CD", "OCI", "Infrastructure as Code", "Automation", "Cloud Security", "Application Deployment"],
      category: "DevOps",
      logo: "⚙️",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=448E98842880E651092E414E13518BC7B2B20F91F0621A48905389D9E79EBE5A",
      color: "from-orange-500 to-red-500",
      bgGradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10"
    },
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "Aug 2025",
      year: 2025,
      month: 8,
      status: "Certified",
      description: "Comprehensive assessment covering software engineering fundamentals including data structures, algorithms, and problem-solving.",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Progressive Web Applications", "Coding Interviews"],
      category: "Programming",
      logo: "💻",
      verificationUrl: "https://www.hackerrank.com/certificates/f3cce6d030ba",
      color: "from-blue-500 to-indigo-500",
      bgGradient: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "SQL",
      issuer: "HackerRank",
      date: "Oct 2023",
      year: 2023,
      month: 10,
      status: "Completed",
      description: "Comprehensive SQL skills for database querying, management, and data manipulation.",
      skills: ["SQL", "Database Queries", "Data Manipulation", "Database Design"],
      category: "Database",
      logo: "🗃️",
      verificationUrl: "https://www.hackerrank.com/certificates/b225df6c3d82",
      color: "from-indigo-500 to-blue-500",
      bgGradient: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      date: "Aug 2023",
      year: 2023,
      month: 8,
      status: "Certified",
      description: "Professional certification in Oracle Application Express (APEX) for cloud-based application development.",
      skills: ["Oracle APEX", "Cloud Development", "Web Applications", "PL/SQL"],
      category: "Cloud Development",
      logo: "☁️",
      verificationUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DC9C6BC5EFA430548883137FB81F0E1521744124B9093B205EE2A7FFBA07841A",
      color: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Python",
      issuer: "HackerRank",
      date: "Apr 2023",
      year: 2023,
      month: 4,
      status: "Completed",
      description: "Proficiency in Python programming language for data science and application development.",
      skills: ["Python", "Data Analysis", "Programming", "Scripting"],
      category: "Programming",
      logo: "🐍",
      verificationUrl: "https://drive.google.com/file/d/1iqLwWsowjU2coTMwwlhqLUVcYQUXWaaL/view",
      color: "from-green-500 to-emerald-500",
      bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Database Management System",
      issuer: "Indian Institute of Technology - Kharagpur",
      date: "2022",
      year: 2022,
      month: 12,
      status: "Completed",
      description: "Comprehensive understanding of database design, management, and optimization principles.",
      skills: ["Database Design", "SQL", "Data Modeling", "Database Administration"],
      category: "Database",
      logo: "🗄️",
      verificationUrl: "https://drive.google.com/file/d/18KM8bgHhCZWJiphXmgxwghiQy0ctyFbF/view",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Data Structures and Algorithms Using Java",
      issuer: "Indian Institute of Technology - Kharagpur",
      date: "2022",
      year: 2022,
      month: 11,
      status: "Completed",
      description: "Advanced understanding of data structures and algorithms implementation using Java programming language.",
      skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
      category: "Programming",
      logo: "☕",
      verificationUrl: "https://drive.google.com/file/d/1rXFECDOhGNcpKJVGYzdphhL7uMZ7gY6z/view",
      color: "from-orange-500 to-red-500",
      bgGradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10"
    },
    {
      title: "Data Analytics",
      issuer: "Indian Institute of Technology - Roorkee",
      date: "2022",
      year: 2022,
      month: 10,
      status: "Completed",
      description: "Skills in data analysis, visualization, and interpretation for business intelligence.",
      skills: ["Data Analysis", "Statistics", "Data Visualization", "Business Intelligence"],
      category: "Data Science",
      logo: "📊",
      verificationUrl: "https://drive.google.com/file/d/1-Syq3QZhez6wNPQVy4eAt4s07Nz866BV/view",
      color: "from-teal-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-teal-500/10 to-cyan-500/10"
    },
    {
      title: "Exercising Leadership",
      issuer: "HarvardX",
      date: "2022",
      year: 2022,
      month: 9,
      status: "Completed",
      description: "Leadership development program focusing on adaptive leadership and organizational change.",
      skills: ["Leadership", "Team Management", "Organizational Development", "Communication"],
      category: "Leadership",
      logo: "👥",
      verificationUrl: "https://drive.google.com/file/d/10f2PQ-0ezTqJG2paYXOLIZPcXl738jCB/view",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Genomics",
      issuer: "John Hopkins University",
      date: "2022",
      year: 2022,
      month: 8,
      status: "Completed",
      description: "Advanced genomics analysis and computational biology methods.",
      skills: ["Genomics", "Bioinformatics", "DNA Analysis", "Computational Biology"],
      category: "Bioinformatics",
      logo: "🧬",
      verificationUrl: "https://drive.google.com/file/d/1j2wGGY1zNBsuOO0m37jNPQnSA7S5aFCo/view",
      color: "from-pink-500 to-rose-500",
      bgGradient: "bg-gradient-to-br from-pink-500/10 to-rose-500/10"
    }
  ].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });

  const upcomingCertifications = [
    {
      title: "OCI Data Science Professional",
      issuer: "Oracle Cloud Infrastructure",
      targetMonth: "September 2025",
      description: "Machine learning and data science on Oracle Cloud platform",
      category: "Data Science",
      logo: "🤖",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "AWS Certified Solutions Architect Associate",
      issuer: "Amazon Web Services",
      targetMonth: "October 2025",
      description: "Comprehensive AWS architecture and cloud solution design",
      category: "Cloud Architecture",
      logo: "☁️",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const categories = ["All", "Database", "Programming", "Data Science", "Cloud Development", "DevOps", "Leadership", "Bioinformatics"];
  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

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
        <section className="pt-16 pb-12">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-4 py-2 mb-6 text-sm">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium text-gray-300">Professional Certifications</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Certifications
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional certifications and continuous learning in cutting-edge technologies, 
              demonstrating expertise across databases, programming, cloud, and bioinformatics.
            </p>

            {/* Compact Stats Grid */}
            <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter end={certifications.length} duration={2000} />
                </div>
                <p className="text-gray-400 text-xs font-medium">Completed</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter end={categories.length - 1} duration={2000} />
                </div>
                <p className="text-gray-400 text-xs font-medium">Categories</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter end={upcomingCertifications.length} duration={2000} />
                </div>
                <p className="text-gray-400 text-xs font-medium">Upcoming</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter end={100} suffix="%" duration={2000} />
                </div>
                <p className="text-gray-400 text-xs font-medium">Success</p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 border border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  {category}
                  {category !== 'All' && (
                    <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full">
                      {certifications.filter(cert => cert.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 rounded-2xl`}></div>
                  
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{cert.logo}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        cert.status === 'Certified' 
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' 
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
                      }`}>
                        {cert.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </h3>
                    
                    <p className={`text-xs font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
                      {cert.issuer}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {(expandedSkills === index ? cert.skills : cert.skills.slice(0, 3)).map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/50 rounded-md text-xs font-medium text-gray-300">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && expandedSkills !== index && (
                        <button
                          onClick={() => setExpandedSkills(index)}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-md text-xs font-medium hover:bg-blue-500/30 transition-all"
                        >
                          +{cert.skills.length - 3}
                        </button>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{cert.date}</span>
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                      >
                        <span>Verify</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Certifications */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Next Goals
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Upcoming Certifications
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {upcomingCertifications.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-15 blur-2xl transition-all duration-700 rounded-2xl`}></div>
                  
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden group-hover:border-white/40 transition-all duration-500 p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4">
                      <span className="text-2xl">{cert.logo}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className={`text-xs font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-3`}>
                      {cert.issuer}
                    </p>
                    <p className="text-gray-300 text-sm mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">
                        {cert.category}
                      </span>
                      <span className="text-purple-400 text-xs font-medium">
                        {cert.targetMonth}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
                      Continuous Learning
                    </span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Committed to professional growth and staying at the forefront of emerging technologies.
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    <a 
                      href="/about" 
                      className="group/cta inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-bold text-white hover:scale-105 transition-all duration-300"
                    >
                      <span>📚</span>
                      <span>About Me</span>
                    </a>
                    <a 
                      href="mailto:murugan.g@northeastern.edu" 
                      className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-6 py-3 rounded-lg font-bold text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                      <span>✉️</span>
                      <span>Contact</span>
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
