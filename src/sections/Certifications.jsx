import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { personalData } from '../data/personalData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 md:py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-gray-400 text-base md:text-lg">My learning achievements</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalData.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25 flex flex-col items-center"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-20 h-20 object-contain mb-3 rounded-xl shadow-md border border-gray-700 bg-white"
                  loading="lazy"
                />
              ) : (
                <div className="p-2 bg-yellow-500/20 rounded-lg mb-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
              )}
              <h3 className="text-lg font-semibold text-white text-center">{cert.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{cert.year}</p>
              {cert.file && (
                <a
                  href={cert.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Download Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;