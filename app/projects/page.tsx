'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Machine Learning-Driven Optimization of CRISPR-Cas9 Genome Editing Efficiency",
      company: "Research Project",
      period: "Dec 2024 - Feb 2025",
      description: "Applied machine learning to optimize CRISPR-Cas9 genome editing, reducing screening by 90%, improving efficiency 7.5-fold, and developing data-driven workflows for therapeutic target discovery through spatial analysis and cross-functional collaboration.",
      achievements: [
        "90% reduction in screening requirements",
        "7.5-fold improvement in editing efficiency",
        "Data-driven therapeutic target discovery workflows"
      ],
      technologies: ["Machine Learning", "CRISPR-Cas9", "Python", "Spatial Analysis", "Therapeutic Target Discovery"],
      category: "ML/AI"
    },
    {
      title: "Quantitative Analysis of Genomic Overlaps Using Cobind",
      company: "Research Project",
      period: "Sep 2024 - Dec 2024",
      description: "Analyzed 500,000+ genomic intervals using the Cobind Python package and six statistical metrics to identify 10+ key transcriptional cofactors and master regulators from CTCF binding sites (ChIP-seq) and cancer-specific OCRs (ATAC-seq).",
      achievements: [
        "Analyzed 500,000+ genomic intervals",
        "Identified 10+ key transcriptional cofactors",
        "Processed 10,000,000 intervals using custom Python pipelines"
      ],
      technologies: ["Python", "Cobind", "Pandas", "SciPy", "BX-Python", "ChIP-seq", "ATAC-seq", "BED files"],
      category: "Genomics"
    },
    {
      title: "Comparative Transcriptomic Analysis",
      company: "Research Project",
      period: "Dec 2022 - Apr 2023",
      description: "Performed Weighted Gene Co-expression Network Analysis (WGCNA) on 100,000+ RNA-Seq data across S. cerevisiae, M. musculus, and H. sapiens to identify key gene modules and hub genes involved in quiescence, using R and tools like Cytoscape, STRING, and Metascape.",
      achievements: [
        "Analyzed 100,000+ RNA-Seq data points",
        "Discovered 10+ hub genes (EP300, EGF, EHMT2, EZH2)",
        "Identified conserved molecular pathways across three species"
      ],
      technologies: ["R", "WGCNA", "RNA-Seq", "Cytoscape", "STRING", "Metascape", "Bioconductor"],
      category: "Transcriptomics"
    }
  ];

  const categories = ["All", "ML/AI", "Genomics", "Transcriptomics"];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            My <span className="text-blue-400">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Research projects in genomics, transcriptomics, and machine learning, analyzing large-scale 
            biological datasets to uncover molecular mechanisms and optimize biotechnology applications.
          </p>

          {/* Research Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">3</h3>
              <p className="text-gray-300">Research Projects</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">600K+</h3>
              <p className="text-gray-300">Data Points Analyzed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">90%</h3>
              <p className="text-gray-300">Max Efficiency Gain</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">7.5x</h3>
              <p className="text-gray-300">CRISPR Improvement</p>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full border transition duration-300 ${
                  activeFilter === category 
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:scale-[1.02] transition duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-2/3">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === 'ML/AI' ? 'bg-blue-500 text-white' :
                        project.category === 'Genomics' ? 'bg-green-500 text-white' :
                        project.category === 'Transcriptomics' ? 'bg-purple-500 text-white' :
                        'bg-gray-500 text-white'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 mb-4">
                      <p className="text-blue-400 font-semibold">{project.company}</p>
                      <p className="text-gray-400">• {project.period}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-green-400">Key Achievements</h3>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Impact */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Research Impact</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">🤖 Machine Learning</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• CRISPR-Cas9 efficiency optimization</li>
                    <li>• 90% reduction in screening requirements</li>
                    <li>• 7.5-fold improvement in editing efficiency</li>
                    <li>• Therapeutic target discovery workflows</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-400">🧬 Genomics Research</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Large-scale genomic interval analysis (500K+ data points)</li>
                    <li>• Transcriptional cofactor identification</li>
                    <li>• CTCF binding site characterization</li>
                    <li>• Cancer-specific regulatory element analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">📊 Transcriptomics Research</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Cross-species comparative analysis</li>
                    <li>• Gene co-expression network construction</li>
                    <li>• Hub gene discovery and validation</li>
                    <li>• Molecular pathway characterization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
