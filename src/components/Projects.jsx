import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Based Online Proctoring System',
      description: 'AI-powered facial recognition system to detect cheating during online examinations with real-time monitoring using computer vision.',
      tech: ['Python', 'Computer Vision', 'AI/ML'],
      github: 'https://github.com/shyamsaran348',
      demo: null
    },
    {
      title: 'VeriSource AI',
      description: 'AI-based source verification system that detects misinformation and validates sources using advanced algorithms.',
      tech: ['Python', 'NLP', 'AI/ML'],
      github: 'https://github.com/shyamsaran348',
      demo: null
    },
    {
      title: 'System Threat Forecaster',
      description: 'Machine learning model to predict system threats and security vulnerabilities in real-time.',
      tech: ['Python', 'Machine Learning', 'Security'],
      github: 'https://github.com/shyamsaran348',
      demo: null
    },
    {
      title: 'Corporate Website – KUN FAYA KUN',
      description: 'Responsive corporate website built with modern web technologies for a client business.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/shyamsaran348',
      demo: null
    },
    {
      title: 'Reddit Rule Violation Detection',
      description: 'Used transformer models and ensemble techniques to detect rule violations on Reddit, improving AUC through feature engineering.',
      tech: ['Python', 'Transformers', 'Ensemble Learning'],
      github: 'https://github.com/shyamsaran348',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcase of my work and achievements</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;