import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';
import { personalData } from '../data/personalData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: personalData.skills.languages,
      color: 'blue'
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: personalData.skills.webDevelopment,
      color: 'purple'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: personalData.skills.databases,
      color: 'green'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: personalData.skills.machineLearning,
      color: 'red'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: personalData.skills.tools,
      color: 'orange'
    },
    {
      title: 'Concepts',
      icon: Brain,
      skills: personalData.skills.concepts,
      color: 'pink'
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Technologies and tools I work with</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}-500/20`}>
                  <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;