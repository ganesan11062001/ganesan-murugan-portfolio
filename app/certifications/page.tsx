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

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [expandedSkills, setExpandedSkills] = useState<number | null>(null);

  const certifications = [
    {
      title: "Software Engineer Intern",
      issuer: "HackerRank",
      date: "Aug 2025",
      year: 2025,
      month: 8,
      status: "Certified",
      description: "Comprehensive assessment covering software engineering fundamentals including data structures, algorithms, problem-solving, and coding best practices for internship-level positions.",
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
      month: 12, // Assuming December for sorting
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
      month: 11, // Assuming November for sorting
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
      month: 10, // Assuming October for sorting
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
      month: 9, // Assuming September for sorting
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
      month: 8, // Assuming August for sorting
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
    // Sort by year first (descending), then by month (descending)
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  });

  const upcomingCertifications = [
    {
      title: "OCI DevOps Professional",
      issuer: "Oracle Cloud Infrastructure",
      targetMonth: "August 2025",
      description: "Advanced DevOps practices and automation on Oracle Cloud Infrastructure",
      category: "DevOps",
      logo: "⚙️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "OCI Data Science Professional",
      issuer: "Oracle Cloud Infrastructure",
      targetMonth: "September 2025",
      description: "Machine learning and data science on Oracle Cloud platform",
      category: "Data Science",
      logo: "📊",
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

  const categories = ["All", "Database", "Programming", "Data Science", "Cloud Development", "Leadership", "Bioinformatics"];

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const categoryStats = categories.slice(1).map(category => ({
    name: category,
    count: certifications.filter(cert => cert.category === category).length,
    color: category === 'Database' ? 'text-blue-400' :
           category === 'Programming' ? 'text-green-400' :
           category === 'Data Science' ? 'text-purple-400' :
           category === 'Cloud Development' ? 'text-cyan-400' :
           category === 'Leadership' ? 'text-yellow-400' :
           'text-pink-400'
  }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8">
              <span className="text-3xl">🏆</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional certifications and continuous learning in cutting-edge technologies, 
              demonstrating expertise across databases, programming, cloud platforms, and bioinformatics.
            </p>
          </div>

          {/* Statistics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={certifications.length} />
                </div>
                <p className="text-gray-400 text-sm font-medium">Completed</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-green-500/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={categories.length - 1} />
                </div>
                <p className="text-gray-400 text-sm font-medium">Categories</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={3} />
                </div>
                <p className="text-gray-400 text-sm font-medium">Upcoming</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-500/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-gray-400 text-sm font-medium">Success Rate</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 border border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-700/50'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {certifications.filter(cert => cert.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-gray-500/50 ${cert.bgGradient}`}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      cert.status === 'Certified' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {cert.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pr-20">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-4xl flex-shrink-0 mt-1">{cert.logo}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-sm font-medium bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {(expandedSkills === index ? cert.skills : cert.skills.slice(0, 3)).map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600/30 transition-all duration-300">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && expandedSkills !== index && (
                          <button
                            onClick={() => setExpandedSkills(index)}
                            className="px-3 py-1 bg-gray-600/30 text-gray-400 rounded-full text-xs font-medium hover:bg-gray-600/50 hover:text-gray-300 transition-all duration-300 cursor-pointer"
                          >
                            +{cert.skills.length - 3}
                          </button>
                        )}
                        {expandedSkills === index && cert.skills.length > 3 && (
                          <button
                            onClick={() => setExpandedSkills(null)}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium hover:bg-blue-500/30 transition-all duration-300 cursor-pointer border border-blue-500/30"
                          >
                            Show Less
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                      >
                        <span className="text-sm font-medium">Verify</span>
                        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Certifications */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Upcoming Goals
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Continuing the journey of professional development with these upcoming certifications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingCertifications.map((cert, index) => (
                <div key={index} className="group relative">
                  <div className={`bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:border-purple-500/50`}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4">
                        <span className="text-2xl">{cert.logo}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-purple-400 font-medium text-sm mb-3">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {cert.description}
                      </p>
                      <div className="flex items-center justify-center space-x-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                          {cert.category}
                        </span>
                        <span className="text-purple-400 text-sm font-medium">
                          {cert.targetMonth}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Growth Section */}
          <section className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryStats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                    <AnimatedCounter end={stat.count} />
                  </div>
                  <p className="text-gray-300 text-sm">{stat.name}</p>
                  <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                    <div 
                      className={`h-1 rounded-full bg-gradient-to-r ${
                        stat.name === 'Database' ? 'from-blue-400 to-cyan-400' :
                        stat.name === 'Programming' ? 'from-green-400 to-emerald-400' :
                        stat.name === 'Data Science' ? 'from-purple-400 to-pink-400' :
                        stat.name === 'Cloud Development' ? 'from-cyan-400 to-blue-400' :
                        stat.name === 'Leadership' ? 'from-yellow-400 to-orange-400' :
                        'from-pink-400 to-rose-400'
                      }`}
                      style={{ width: `${(stat.count / Math.max(...categoryStats.map(s => s.count))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
