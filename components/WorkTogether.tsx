'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiPhoneCall, FiMail } from 'react-icons/fi'

export const WorkTogether = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true, margin: '-50px' }}
      className="text-center  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 md:p-10 rounded-2xl border border-indigo-500/20 shadow-2xl shadow-indigo-500/10 mx-4 md:mx-auto relative overflow-hidden max-w-6xl"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/10 rounded-full filter blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold  mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-cyan-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Let's Build Something Amazing Together
        </motion.h3>

        <motion.p
          className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you're launching a startup, revamping an existing product, or need a 
          powerful digital presence — I'll help transform your vision into reality with 
          clean, efficient, and scalable solutions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="tel:+919523076954"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm md:text-base font-medium rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 border border-blue-500/30 group"
          >
            <FiPhoneCall className="mr-3 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            Schedule a Call
          </motion.a>

          <motion.a
            href="mailto:610490papu@gmail.com?subject=Schedule%20a%20Meeting"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm md:text-base font-medium rounded-xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 border border-purple-500/30 group"
          >
            <FiMail className="mr-3 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            Email Me
          </motion.a>
          
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm md:text-base font-medium rounded-xl shadow-lg hover:shadow-gray-500/10 transition-all duration-300 border border-gray-600 group"
          >
            <FiCalendar className="mr-3 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            Book Meeting
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="text-xs text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Typically respond within 24 hours
        </motion.p>
      </div>
    </motion.div>
  )
}