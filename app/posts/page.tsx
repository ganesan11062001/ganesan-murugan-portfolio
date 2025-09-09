'use client';

export default function Posts() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            <span className="text-blue-400">Blog</span> & Posts
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Sharing insights, tutorials, and discoveries in bioinformatics, machine learning, 
            and computational biology. Join me on this journey of continuous learning.
          </p>

          {/* Coming Soon Section */}
          <div className="text-center mb-16">
            <div className="bg-gray-800 p-12 rounded-lg border border-gray-700">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-6">
                I'm preparing exciting content about bioinformatics, machine learning, and computational biology.
              </p>
              <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 inline-block">
                <p className="text-blue-400 font-semibold">First Post Expected:</p>
                <p className="text-white text-xl">Sep 25, 2025</p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Bioinformatics</h3>
                <p className="text-gray-400 text-sm">Genomics, proteomics, and computational biology workflows</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold mb-2 text-green-400">Machine Learning</h3>
                <p className="text-gray-400 text-sm">AI applications in biological research and drug discovery</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Cloud Computing</h3>
                <p className="text-gray-400 text-sm">Scalable infrastructure for computational biology</p>
              </div>
            </div>
          </section>

          {/* Connect Section */}
          <section className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              While you wait for my blog posts, feel free to connect with me on LinkedIn 
              or check out my research publications and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/publications" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Publications
              </a>
              <a 
                href="/projects" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                See Projects
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
