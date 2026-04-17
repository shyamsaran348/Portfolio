import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Full Stack Web Development',
      description: 'Building end-to-end web applications with modern frameworks and best practices.',
      icon: Code,
      color: 'blue'
    },
    {
      title: 'AI/ML Model Development',
      description: 'Creating intelligent systems and machine learning models for various applications.',
      icon: Brain,
      color: 'purple'
    },
    {
      title: 'REST API Development',
      description: 'Designing and implementing robust RESTful APIs for seamless data communication.',
      icon: Zap,
      color: 'green'
    },
    {
      title: 'Database Design & Integration',
      description: 'Architecting efficient database schemas and integrating them with applications.',
      icon: Database,
      color: 'orange'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-gray-400 text-lg">What I can help you with</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-${service.color}-500/20 rounded-lg flex items-center justify-center`}>
                <service.icon className={`w-8 h-8 text-${service.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;