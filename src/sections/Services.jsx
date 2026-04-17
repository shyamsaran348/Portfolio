import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Database } from 'lucide-react';
import { personalData } from '../data/personalData';

const iconMap = {
  Code,
  Brain,
  Zap,
  Database
};

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-gray-400 text-base md:text-lg">What I can help you with</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personalData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const colorMap = {
              Code: 'blue',
              Brain: 'purple',
              Zap: 'green',
              Database: 'orange'
            };
            const color = colorMap[service.icon] || 'blue';
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-${color}-500/20 rounded-lg flex items-center justify-center`}>
                  <IconComponent className={`w-8 h-8 text-${color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;