'use client';

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
            Hi, I am <span className="text-blue-400">Ganesan Murugan</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-4">
            Turning Data into Intelligence | Building Production ML Systems at Scale
          </p>
          <p className="text-lg text-blue-400 font-semibold mb-8">
            🚀 3+ Years of Experience | 92% Model Accuracy | 3500+ Users Scaled
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Software Engineer | Data Scientist | ML Ops Specialist
            <br className="hidden md:block" />
            Specializing in AI infrastructure, LLM deployment, cloud-native solutions, and end-to-end ML systems
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
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">LLM & ML Ops</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>92% accuracy</strong> in CRISPR ML optimization</li>
                <li>✓ <strong>85% accuracy</strong> in drug discovery models</li>
                <li>✓ ML pipeline orchestration & monitoring</li>
                <li>✓ Model deployment & versioning</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Cloud & Infrastructure</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>AWS</strong> (SageMaker, EC2, Lambda, RDS)</li>
                <li>✓ <strong>HPC & SLURM</strong> cluster management</li>
                <li>✓ Docker & containerization</li>
                <li>✓ <strong>40% efficiency</strong> improvement in workflows</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">AI & Deep Learning</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>TensorFlow & PyTorch</strong> model development</li>
                <li>✓ Large-scale data processing & feature engineering</li>
                <li>✓ Advanced ML algorithms & optimization</li>
                <li>✓ 2 published papers in 2025</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Production Systems</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ ML pipeline development & deployment</li>
                <li>✓ CI/CD with Jenkins & GitHub Actions</li>
                <li>✓ Model monitoring & versioning</li>
                <li>✓ Served 3500+ users at scale</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Software Engineering</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>Python, Django, React,</strong> Node.js</li>
                <li>✓ PostgreSQL & database design</li>
                <li>✓ Full-stack ML applications</li>
                <li>✓ 95% reduction in data entry errors</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Experience & Impact</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>MS Bioinformatics</strong> (3.95/4 GPA)</li>
                <li>✓ Boehringer Ingelheim & Big Pharma experience</li>
                <li>✓ Mentored 75+ engineers & scientists</li>
                <li>✓ Published researcher</li>
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
                <div className="text-4xl font-bold text-blue-400 mb-2">92%</div>
                <div className="text-sm text-blue-200">ML Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">3500+</div>
                <div className="text-sm text-green-200">Users Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                <div className="text-sm text-purple-200">Efficiency Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">3+</div>
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
              <h3 className="text-lg font-semibold mb-4 text-blue-400">🤖 LLM & AI</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['LangChain', 'RAG', 'Fine-tuning', 'TensorFlow', 'PyTorch', 'Transformers'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-green-400">☁️ Cloud & Infra</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['AWS SageMaker', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Lambda'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-400">📊 Data & ML Ops</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Apache Spark', 'Airflow', 'MLflow', 'Prometheus', 'Pandas', 'Scikit-learn'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">💻 Software</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'FastAPI', 'PostgreSQL', 'React', 'Git', 'GraphQL'].map((skill) => (
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
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Build Production ML Systems?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From LLM deployment to AI infrastructure, let's scale machine learning systems with proven expertise in ML Ops, cloud architecture, and production-grade systems.
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
