import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, User } from 'lucide-react';
import { personalData } from '../data/personalData';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Publications & Research
          </h2>
          <p className="text-gray-400 text-lg">Academic contributions and peer-reviewed articles</p>
        </motion.div>

        <div className="space-y-8">
          {personalData.publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-blue-500/10 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                      {pub.publisher}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs md:text-sm">
                      <Calendar size={14} />
                      <span>{pub.year}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {pub.title}
                  </h3>

                  <div className="flex items-start gap-2 text-gray-300 mb-4 italic">
                    <User size={16} className="mt-1 flex-shrink-0 text-gray-500" />
                    <p className="text-xs md:text-sm">{pub.authors}</p>
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed max-w-4xl">
                    {pub.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="text-xs md:text-sm font-medium text-gray-500">
                      Journal: <span className="text-blue-300">{pub.journal}</span>
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 flex items-center mt-2 md:mt-0">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto p-3 md:p-4 bg-gray-900 rounded-xl text-blue-400 hover:text-white hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span className="text-sm font-medium">Read Article</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
