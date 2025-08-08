export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-green-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-blue-400 relative">
                Connect
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on bioinformatics, ML, or innovative projects? 
              <br />Reach out through any of these channels!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <div className="group">
              <a 
                href="mailto:murugan.g@northeastern.edu?subject=Hello from your portfolio"
                className="block"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Email</h3>
                  <p className="text-gray-300 hover:text-white transition duration-300">
                    murugan.g@northeastern.edu
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Click to send email</p>
                </div>
              </a>
            </div>

            {/* Phone Card */}
            <div className="group">
              <a href="tel:+18573518024" className="block">
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">Phone</h3>
                  <p className="text-gray-300 hover:text-white transition duration-300">
                    +1 (857) 351-8024
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Click to call</p>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="group md:col-span-2 lg:col-span-1">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Location</h3>
                <p className="text-gray-300">Boston, MA</p>
                <p className="text-gray-500 text-sm mt-2">Northeastern University</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30">
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-400">Connect Online</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.linkedin.com/in/ganesan-murugan-a34aa7231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-blue-700 transition duration-300 transform group-hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-blue-400 transition duration-300 text-sm font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/ganesan11062001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-gray-600 transition duration-300 transform group-hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-gray-400 transition duration-300 text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Want to know more about my work?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/publications" 
                className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-6 py-3 rounded-xl font-medium transition duration-300 border border-blue-500/30"
              >
                View Publications
              </a>
              <a 
                href="/projects" 
                className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 px-6 py-3 rounded-xl font-medium transition duration-300 border border-purple-500/30"
              >
                See Projects
              </a>
              <a 
                href="/certifications" 
                className="bg-green-500/20 hover:bg-green-500/30 text-green-400 px-6 py-3 rounded-xl font-medium transition duration-300 border border-green-500/30"
              >
                View Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
