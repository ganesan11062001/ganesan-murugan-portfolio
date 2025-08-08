export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-green-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">Ganesan Murugan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Bioinformatics Software Engineer & Data Scientist
          </p>
          <p className="text-lg text-blue-400 font-semibold mb-8">
            2.5+ Years of Proven Experience | 85% ML Model Accuracy | 500+ Users Supported
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            MS Bioinformatics @ Northeastern University | Building scalable ML/AI solutions for drug discovery, 
            structural biology, and genomics with expertise in full-stack development and cloud platforms.
          </p>
          <div className="space-x-6">
            <a href="/projects" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              View My Work
            </a>
            <a href="mailto:murugan.g@northeastern.edu" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Contact Me
            </a>
          </div>
        </section>

        {/* Key Selling Points */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Why Choose Me?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Proven Results</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>85% accuracy</strong> in drug discovery ML models</li>
                <li>✓ <strong>40% improvement</strong> in processing efficiency</li>
                <li>✓ <strong>2 published papers</strong> in 2025</li>
                <li>✓ <strong>500+ users</strong> supported across platforms</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Industry Experience</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>Boehringer Ingelheim</strong> (Big Pharma)</li>
                <li>✓ <strong>Northeastern University</strong> (Academia)</li>
                <li>✓ <strong>Zifo Technologies</strong> (Industry)</li>
                <li>✓ <strong>2.5+ years</strong> hands-on experience</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Full-Stack Expertise</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>ML/AI</strong> + Cloud Architecture</li>
                <li>✓ <strong>React, Django,</strong> Node.js</li>
                <li>✓ <strong>AWS, Docker,</strong> Jenkins</li>
                <li>✓ <strong>Bioinformatics</strong> + Software Engineering</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Cutting-Edge Skills</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>Spatial Transcriptomics</strong></li>
                <li>✓ <strong>AlphaFold Integration</strong></li>
                <li>✓ <strong>Drug Discovery</strong> Pipelines</li>
                <li>✓ <strong>Multi-omics</strong> Analysis</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Academic Excellence</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>MS Bioinformatics</strong> (3.917/4 GPA)</li>
                <li>✓ <strong>BTech Biotechnology</strong> (9.4/10)</li>
                <li>✓ <strong>Top 5%</strong> performer</li>
                <li>✓ <strong>8+ Certifications</strong></li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Leadership Impact</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>Mentored 30+</strong> students</li>
                <li>✓ <strong>Led cross-functional</strong> teams</li>
                <li>✓ <strong>45% improvement</strong> in competency</li>
                <li>✓ <strong>Published</strong> researcher</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Impact at a Glance</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-sm text-blue-200">ML Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-sm text-green-200">Users Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-sm text-purple-200">Efficiency Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">2.5+</div>
                <div className="text-sm text-yellow-200">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Condensed */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Tech Stack</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">🤖 AI/ML</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['TensorFlow', 'PyTorch', 'scikit-learn'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-green-400">☁️ Cloud</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['AWS', 'Docker', 'Jenkins'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-400">💻 Full-Stack</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'Django', 'Node.js'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">🧬 Bioinformatics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['AlphaFold', 'PyMOL', 'Nextflow'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-12 rounded-2xl border border-blue-400/30">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Innovate Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From drug discovery to genomics, let's build the future of bioinformatics with proven expertise and cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 transform hover:scale-105">
                See My Projects
              </a>
              <a href="/about" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
                Learn More About Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
