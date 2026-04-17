import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { personalData } from '../data/personalData';

const Projects = () => {
  // Sort projects to prioritize AI/ML projects first
  const sortedProjects = [...personalData.projects].sort((a, b) => {
    const aIsAI = a.tags.includes('AI') || a.tags.includes('ML');
    const bIsAI = b.tags.includes('AI') || b.tags.includes('ML');
    if (aIsAI && !bIsAI) return -1;
    if (!aIsAI && bIsAI) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-12 md:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Showcase of my work and achievements</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 hover:-translate-y-2"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <span className="text-red-400 font-medium text-sm">Problem:</span>
                  <p className="text-gray-300 text-sm">{project.problem}</p>
                </div>
                <div>
                  <span className="text-green-400 font-medium text-sm">Solution:</span>
                  <p className="text-gray-300 text-sm">{project.solution}</p>
                </div>
                <div>
                  <span className="text-purple-400 font-medium text-sm">Impact:</span>
                  <p className="text-gray-300 text-sm">{project.impact}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-600"
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