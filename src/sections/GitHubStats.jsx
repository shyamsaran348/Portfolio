import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Users, Star } from 'lucide-react';

const GitHubStats = () => {
  // Placeholder stats - in a real implementation, fetch from GitHub API
  const stats = [
    { icon: Code, label: 'Repositories', value: '15+', color: 'blue' },
    { icon: Users, label: 'Followers', value: '50+', color: 'green' },
    { icon: Star, label: 'Stars', value: '25+', color: 'yellow' },
    { icon: Github, label: 'Contributions', value: '100+', color: 'purple' }
  ];

  return (
    <section id="github-stats" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            GitHub Stats
          </h2>
          <p className="text-gray-400 text-lg">My coding activity and contributions</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shyamsaran348"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          >
            <Github size={20} />
            View My GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;