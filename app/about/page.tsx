"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Experience from "../experience/page";
import { WorkTogether } from "@/components/WorkTogether";

const About = () => {
  const personalInfo = [
    {
      label: "Name",
      value: "Pappu Kumar Yadav",
      icon: <FaUser className="text-indigo-400" />,
    },
    {
      label: "Email",
      value: "610490papu@gmail.com",
      icon: <FaEnvelope className="text-indigo-400" />,
    },
    {
      label: "Location",
      value: "Bihar, India",
      icon: <FaMapMarkerAlt className="text-indigo-400" />,
    },
    {
      label: "Phone",
      value: "+91 9523076954",
      icon: <FaPhone className="text-indigo-400" />,
    },
  ];

  const techStack = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500 text-xl" /> },
    { name: "React", icon: <FaCode className="text-blue-400 text-xl" /> },
  ];

  return (
    <>
      <section
        id="about"
        className="relative py-32 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
              style={{
                width: Math.random() * 400 + 100,
                height: Math.random() * 400 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 md:mb-20"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Experiences</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Full Stack Developer specializing in modern web technologies with a passion for creating seamless user experiences.
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"
            />
          </motion.div>

          {/* Content */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8 md:space-y-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3 mb-2"
                >
                  <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-indigo-400 font-medium tracking-wider">INTRODUCTION</span>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-white"
                >
                  Hi, I'm <span className="text-indigo-400">Pappu Kumar Yadav</span>
                </motion.h3>
                
                <div className="space-y-5">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    I'm a passionate Full Stack Developer with expertise in building modern web applications. My journey in web development combines technical skills with creative problem-solving.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    Currently at <span className="text-indigo-400 font-medium">Alphanumeric Ideas Pvt. Ltd.</span>, I lead development of innovative digital solutions that drive business growth and user engagement.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    My approach focuses on clean architecture, performance optimization, and creating intuitive interfaces that users love.
                  </motion.p>
                </div>
              </div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="space-y-4"
              >
                <h4 className="text-gray-400 font-medium">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg border border-gray-700 hover:border-indigo-400/50 transition-all"
                    >
                      {tech.icon}
                      <span className="text-white">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Info Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {personalInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-indigo-400/30 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white font-medium text-base">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.a
                  whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/pappu-kumar-yadav-31307121b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 shadow-lg"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </motion.a>

                <motion.a
                  whileHover={{ y: -5, boxShadow: "0 10px 20px -5px rgba(17, 24, 39, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/pappuyadav95230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium">View GitHub</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="w-full sm:w-2/3 lg:w-1/2 flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-indigo-500/20 shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 group">
                <Image
                  src="/icons/pappunew.jpg"
                  alt="Pappu Kumar Yadav"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  quality={90}
                  priority={true}
                  style={{ objectPosition: "center top" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50" />
                <div className="absolute inset-0 border-8 border-transparent group-hover:border-indigo-500/10 transition-all duration-500" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-indigo-500/30 shadow-lg flex items-center gap-2"
                >
                  <FaRocket className="text-indigo-400 text-xl" />
                  <span className="text-white font-medium">Full Stack Developer</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <WorkTogether />
      </section>
      <Experience />
    </>
  );
};

export default About;