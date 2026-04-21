'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-teal-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-400">Ganesan Murugan</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 mb-4">
            Computational Biology &amp; AI — from protein design to agentic LLM systems
          </p>
          <p className="text-lg text-blue-400 font-semibold mb-8">
            MS Bioinformatics @ Northeastern &nbsp;·&nbsp; Co-op @ Solid Biosciences &nbsp;·&nbsp; 2 Published Papers
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            I build end-to-end ML systems across the drug discovery stack — multi-omics platforms, agentic workflows, cloud-native protein design, and full-stack research tools.
            <br className="hidden md:block" />
            I like working at the intersection of biology and software engineering where both really matter.
          </p>
          <div className="space-x-6">
            <a href="/projects" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
              View My Work
            </a>
            <a href="mailto:murugan.g@northeastern.edu" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
              Get in Touch
            </a>
          </div>
        </section>

        {/* What I Focus On */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">What I Work On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">AI for Drug Discovery</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ Protein design — <strong>RFdiffusion3, ProteinMPNN, Boltz-2</strong></li>
                <li>✓ Structure prediction — AlphaFold3, ColabFold, Chai-1</li>
                <li>✓ De-immunization &amp; thermostability (LigandMPNN, ThermoMPNN)</li>
                <li>✓ <strong>50,000+</strong> variants designed on AWS Batch</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-teal-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-4 text-teal-400">Multi-Omics &amp; Bioinformatics</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ Single-cell &amp; spatial transcriptomics — <strong>1M+ cells</strong></li>
                <li>✓ Scanpy, Squidpy, scVelo, CellTypist, Visium</li>
                <li>✓ SAXS/WAXS scattering analysis — GNNs &amp; attention</li>
                <li>✓ CRISPR sgRNA efficiency — <strong>92% accuracy</strong></li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-4 text-purple-400">Agentic LLM Systems</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ Multi-agent <strong>LangGraph</strong> — supervisor-worker topology</li>
                <li>✓ RAG with FAISS — biomedical knowledge bases</li>
                <li>✓ AWS Bedrock, OpenAI APIs, Azure AI Foundry</li>
                <li>✓ Eliminated <strong>70%</strong> of manual curation</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4 text-green-400">Cloud &amp; HPC</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>AWS</strong> (Batch, EC2, S3, RDS, SageMaker, CloudWatch)</li>
                <li>✓ Linux HPC — SLURM, <strong>10,000+ users</strong>, Lustre/NFS</li>
                <li>✓ Docker, Singularity, multi-GPU deep learning</li>
                <li>✓ Grafana + Prometheus cluster monitoring</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Full-Stack Engineering</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>Django, React/TypeScript, Node.js</strong></li>
                <li>✓ PostgreSQL, MongoDB, REST APIs</li>
                <li>✓ Interactive UMAP &amp; Visium spatial visualizations</li>
                <li>✓ <strong>35%</strong> reduction in end-to-end processing time</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30 hover:scale-105 transition duration-300 text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Research &amp; Teaching</h3>
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                <li>✓ <strong>2 peer-reviewed papers</strong> published (2025)</li>
                <li>✓ Guided <strong>75+</strong> grad students in ML for biology</li>
                <li>✓ MS Bioinformatics — <strong>3.94/4.00 GPA</strong></li>
                <li>✓ BTech Biotechnology — <strong>9.4/10.0 CGPA</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
                <div className="text-sm text-blue-200">Cells Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400 mb-2">92%</div>
                <div className="text-sm text-teal-200">ML Model Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
                <div className="text-sm text-purple-200">Protein Variants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-sm text-green-200">HPC Users Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Tech Stack</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">🧬 Protein &amp; Structure</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['RFdiffusion3', 'ProteinMPNN', 'AlphaFold3', 'Boltz-2', 'Chai-1', 'ColabFold', 'PyMOL'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-purple-400">🤖 LLM &amp; ML</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['LangGraph', 'RAG', 'FAISS', 'PyTorch', 'TensorFlow', 'GNNs', 'ViT'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-green-400">☁️ Cloud &amp; HPC</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['AWS Batch', 'EC2/S3', 'SLURM', 'Docker', 'Singularity', 'Terraform', 'Airflow'].map((skill) => (
                  <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">💻 Platforms</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Django', 'React', 'TypeScript', 'PostgreSQL', 'Python', 'Scanpy', 'Squidpy'].map((skill) => (
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
            <h2 className="text-3xl font-bold mb-6 text-white">Let&apos;s Build Something That Matters</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether it&apos;s a multi-agent research platform, a protein design pipeline, or a full-stack bioinformatics tool — I&apos;m interested in work where the biology and the engineering both have to be right.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 transform hover:scale-105">
                See My Projects
              </a>
              <a href="/about" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
                More About Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
