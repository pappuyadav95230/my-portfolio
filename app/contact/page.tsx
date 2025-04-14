"use client";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa";
import { WorkTogether } from "@/components/WorkTogether";

const Contact = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "#", name: "LinkedIn" },
    { icon: <FaGithub />, url: "#", name: "GitHub" },
    { icon: <FaTelegram />, url: "#", name: "Telegram" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 md:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Let's Work Together
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you.
          </motion.p>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/30 transition-all duration-500 shadow-xl hover:shadow-indigo-500/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-gray-800">
              Send Me a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-gray-800/70 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Project Inquiry"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <FiSend className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 hover:border-indigo-500/30 transition-all duration-500 shadow-xl hover:shadow-indigo-500/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-gray-800">
              Contact Information
            </h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500/30 transition-all">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:610490papu@gmail.com"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    610490papu@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500/30 transition-all">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <a
                    href="tel:+919523076954"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    +91 9523076954
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500/30 transition-all">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/919523076954"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 hover:bg-gray-800/70 rounded-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500/30 transition-all">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-300">Bihar, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 pt-6 border-t border-gray-800"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 hover:bg-indigo-500/20 rounded-xl text-gray-300 hover:text-white transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-20 text-center"
        >
          <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Prefer a quicker way to reach me?
          </h4>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="tel:+919523076954"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
            >
              <FiPhone className="mr-2 w-5 h-5" />
              Call Now
            </motion.a>
            <motion.a
              href="mailto:610490papu@gmail.com"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800/80 transition-all"
            >
              <FiMail className="mr-2 w-5 h-5" />
              Email Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      <WorkTogether />
    </section>
  );
};

export default Contact;