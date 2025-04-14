"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { WorkTogether } from '@/components/WorkTogether';

const projects = [
  {
    title: "Wanderlust - Fullstack Rentals",
    description: "A comprehensive rental platform where users can list and discover apartments and houses. Features user authentication, search filters, and booking system.",
    technologies: ["Node.js", "Express", "MongoDB", "RESTful API", "EJS", "JavaScript"],
    link: "#",
    date: "March 2025",
    icon: "🏡"
  },
  {
    title: "My Portfolio",
    description: "A sleek developer portfolio showcasing my skills and projects. Built with modern technologies for optimal performance and aesthetics.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://pappukumar.vercel.app/",
    date: "April 2025",
    icon: "✨"
  },
  {
    title: "Crafty Web Builder",
    description: "Revolutionary no-code platform enabling users to create professional websites through an intuitive drag-and-drop interface.",
    technologies: ["Next.js", "React", "Tailwind CSS", "BigQuery", "DnD"],
    link: "https://craftyweb.vercel.app/",
    date: "February 2025",
    icon: "🛠️"
  },
  {
    title: "CEAS Cloud Services",
    description: "Cloud infrastructure provider offering seamless web deployment solutions with Firebase integration.",
    technologies: ["Firebase", "JavaScript", "Bootstrap", "Cloud Hosting"],
    link: "#",
    date: "Feb 2023",
    icon: "☁️"
  },
  {
    title: "Zuzozi EV Booking",
    description: "Electric vehicle booking platform with real-time availability and reservation management system.",
    technologies: ["JavaScript", "Firebase", "AppScript", "Google APIs"],
    link: "#",
    date: "July 2024",
    icon: "🚗"
  },
  {
    title: "FuelLock IoT System",
    description: "Innovative hardware solution preventing fuel theft through RFID authentication at petrol stations.",
    technologies: ["Arduino", "RFID", "Embedded C", "IoT"],
    link: "#",
    date: "October 2023",
    icon: "⛽"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 bg-gradient-to-b from-[#0a0a12] via-[#141421] to-[#0a0a12] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Crafted</span> With Passion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Each project represents a unique challenge solved with creativity and technical expertise. 
            From concept to deployment, I pour my heart into building digital experiences that matter.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#1c1c2c]/80 backdrop-blur-lg rounded-2xl border border-gray-800 hover:border-purple-400/30 transition-all duration-500 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-[#2a2a3a] to-[#1a1a2e] flex flex-col items-center justify-center relative overflow-hidden">
                <motion.span 
                  className="text-6xl mb-4 z-10"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {project.icon}
                </motion.span>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs bg-gray-800/80 text-purple-300 px-3 py-1.5 rounded-full border border-gray-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                {project.link !== "#" ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/20"
                  >
                    <span>Explore Live</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                ) : (
                  <button className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-400 rounded-lg cursor-not-allowed">
                    <span>Coming Soon</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-400 mb-6">
            Like what you see? Let's build something amazing together!
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-transparent text-purple-400 border-2 border-purple-400 rounded-lg hover:bg-purple-400/10 transition-all group"
          >
            <span className="font-medium">Start a Conversation</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
      <WorkTogether />
    </section>

  );
};

export default Projects;