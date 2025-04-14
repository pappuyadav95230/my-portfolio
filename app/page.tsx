"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SkillsSection from "@/components/SkillsSection";

import { useState, useEffect } from 'react'

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto w-full p-4 sm:p-6 md:p-8">
          <div className="flex flex-col-reverse md:flex-row items-center mt-4 md:mt-8 mb-8 justify-between gap-8 md:gap-16 lg:gap-24">
            {/* Image Section - Shown first on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 lg:w-5/12 mx-auto p-2 md:p-6 lg:p-8"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl md:rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-70 group-hover:opacity-90"></div>

                {/* Main image container */}
                <div className="relative bg-gray-800 rounded-xl md:rounded-2xl lg:rounded-3xl h-full shadow-lg md:shadow-xl lg:shadow-2xl shadow-black/50 p-2">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg md:rounded-xl overflow-hidden border border-gray-700/50">
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src="/icons/pappukumar.jpg"
                        alt="Pappu Kumar Yadav"
                        fill
                        className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                        priority
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      />
                    </div>
                  </div>

                  {/* Hover info card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-5 md:left-5 md:right-5 p-2 sm:p-3 md:p-4 bg-gray-900/90 backdrop-blur-md rounded-lg sm:rounded-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-gray-700/50 shadow-md sm:shadow-lg">
                    <p className="text-base sm:text-lg md:text-lg font-bold text-white">
                      Pappu Kumar Yadav
                    </p>
                    <p className="text-xs sm:text-sm md:text-sm text-blue-400 mt-1">
                      Full Stack Developer
                    </p>
                    <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3">
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs bg-blue-900/30 text-blue-400 rounded-md border border-blue-800/50">
                        MERN
                      </span>
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs bg-purple-900/30 text-purple-400 rounded-md border border-purple-800/50">
                        Next.js
                      </span>
                      <span className="inline-block px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs bg-cyan-900/30 text-cyan-400 rounded-md border border-cyan-800/50">
                        React
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-5 md:-right-5 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 lg:w-7/12 text-left space-y-4 sm:space-y-5 md:space-y-6"
            >
              {/* Animated greeting text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl font-mono text-blue-400"
              >
                Hello, I'm
              </motion.div>

              {/* Main headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Pappu Kumar Yadav{" "}
                </span>
              </h1>

              {/* Static role text */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
                Full Stack Developer
              </h2>

              {/* Description text */}
              <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed">
                Crafting high-performance web applications with modern
                technologies. Passionate about building scalable solutions with
                clean code and intuitive user experiences.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4">
                <Link
                  href="/contact"
                  className="px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-1 sm:gap-2 group"
                >
                  <span className="text-sm sm:text-base">Contact Me</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="/my-projects"
                  className="px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 bg-transparent border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg sm:rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-1 sm:gap-2 group"
                >
                  <span className="text-sm sm:text-base">View Projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              {/* Tech stack indicators */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-5 md:pt-6">
                <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 rounded-full border border-gray-700/50">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    2+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 rounded-full border border-gray-700/50">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    10+ Projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator - only shown on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 md:mt-12 lg:hidden"
          >
            <div className="animate-bounce w-8 h-12 sm:w-10 sm:h-16 border-2 sm:border-4 border-gray-500 rounded-full mx-auto flex justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1 sm:mt-2"></div>
            </div>
          </motion.div>
        </div>

      </section>
      <SkillsSection />
      
    </>
  );
};

export default Hero;
