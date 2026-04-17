import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personalData';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-base md:text-lg">Get to know me better</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              {personalData.bio}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">{personalData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">{personalData.education.degree}</h4>
                <p className="text-blue-400">{personalData.education.college}</p>
                <p className="text-gray-400">{personalData.education.graduation} | {personalData.education.cgpa}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{personalData.education.school}</h4>
                <p className="text-gray-400">{personalData.education.score}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;