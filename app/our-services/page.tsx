"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiSmartphone,
  FiLayers,
  FiZap,
  FiTrendingUp,
  FiSettings,
  FiCpu,
  FiServer,
  FiGlobe,
  FiShield,
} from "react-icons/fi";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { WorkTogether } from "@/components/WorkTogether";

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: "Frontend Development",
    description:
      "Building modern, responsive UIs with Next.js, React, TypeScript, and Tailwind CSS. Creating pixel-perfect, SEO-optimized interfaces with exceptional user experiences.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <FiServer className="w-8 h-8" />,
    title: "Backend Development",
    description:
      "Robust server-side solutions with Node.js, Express.js, and Python Flask. Developing secure REST APIs, authentication systems, and scalable server architectures.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: "Database Solutions",
    description:
      "Expert database design and optimization using MongoDB, MySQL, PostgreSQL, Google Cloud Spanner, and Firebase. Ensuring data integrity, performance, and scalability.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: <FiCloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description:
      "Full cloud infrastructure management on Google Cloud Platform. Deploying applications with Cloud Run, Firebase Hosting, Docker, and Kubernetes for production-ready solutions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FiCpu className="w-8 h-8" />,
    title: "AI Integration & Automation",
    description:
      "Implementing cutting-edge AI solutions with Gemini AI API and OpenAI integration. Automating business processes to reduce manual effort by ~40% and boost productivity.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: "Full-Stack Development",
    description:
      "End-to-end application development combining frontend and backend expertise. Building complete SaaS products, authentication flows, and analytics dashboards.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Performance Optimization",
    description:
      "Optimizing application performance, SEO, and user experience. Implementing best practices for fast loading times, scalability, and system reliability.",
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Tech Consulting & Integration",
    description:
      "Strategic technology consulting and seamless integration of new tech stacks. Modernizing legacy systems and implementing innovative solutions for business growth.",
    color: "from-indigo-500 to-purple-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-[#0f0f1a] via-[#141421] to-[#0f0f1a] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
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
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 mb-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Services
            </span>{" "}
            I Offer
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            With 2+ years of experience handling 10-12 large-scale projects for
            major clients, I specialize in building features from scratch and
            integrating cutting-edge technologies to drive business growth and
            operational efficiency.
          </motion.p>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              whileHover={{ y: -10 }}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Icon with gradient background */}
              <div
                className={`mb-6 p-3 rounded-lg bg-gradient-to-br ${service.color} w-14 h-14 flex items-center justify-center text-white`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Learn more <FaArrowRight className="ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to bring your digital vision to life?
          </h3>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get in Touch
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h4 className="text-xl font-semibold text-white mb-6">
            Connect With Me
          </h4>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/pappuyadav95230"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pappu-kumar-yadav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/Pappu_95230/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all duration-300"
            >
              <SiLeetcode className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:610490papu@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-500 text-white rounded-full transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <WorkTogether />
    </section>
  );
};

export default Services;
