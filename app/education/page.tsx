"use client";
import { WorkTogether } from "@/components/WorkTogether";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaTrophy,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

const EducationSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Education data
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Shaheed Bhagat Singh State Technical Campus",
      period: "July 2020 – May 2024",
      score: "CGPA: 8.01",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      degree: "12th - BSEB, Patna",
      institution: "Shaheed Bhagat Singh Inter College",
      period: "Mar 2016 – Feb 2018",
      score: "Percentage: 59.5%",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
    {
      degree: "10th - BSEB, Patna",
      institution: "G.J.P High School Sani-basantpur",
      period: "May 2015",
      score: "Percentage: 72.4%",
      icon: <FaGraduationCap className="text-blue-400" />,
    },
  ];

  const achievements = [
    {
      title: "Team Lead - Smart India Hackathon",
      year: "2023",
      icon: <FaTrophy className="text-yellow-400" />,
    },
    {
      title:
        "4-Star Fraternity Rank - Office of Fraternity and Sorority Affairs",
      icon: <FaTrophy className="text-yellow-400" />,
    },
  ];

  const participation = [
    {
      title: "Core Member - GDG Ludhiana (Gemini Event)",
      icon: <FaUsers className="text-green-400" />,
    },
    {
      title: "Member - GDSC SBSSU 2023",
      icon: <FaUsers className="text-green-400" />,
    },
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      icon: <FaCertificate className="text-purple-400" />,
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "CodeHelp",
      icon: <FaCertificate className="text-purple-400" />,
    },
    {
      title: "Intro to Python Programming",
      issuer: "Softwizz",
      icon: <FaCertificate className="text-purple-400" />,
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
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
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-32"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            <span className="text-blue-400">Education</span> Background
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border-l-4 border-blue-500 shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="flex items-center mb-5">
                  <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                    {edu.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                </div>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                <p className="text-blue-300 font-medium">{edu.score}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-32"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            <span className="text-yellow-400">Achievements</span> & Awards
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 hover:shadow-yellow-500/10 transition-all"
              >
                <div className="p-3 bg-yellow-500/20 rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                  {item.year && (
                    <p className="text-yellow-300 text-sm mt-2">{item.year}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Participation Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="mb-32"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            <span className="text-green-400">Participation</span> & Activities
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {participation.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 hover:shadow-green-500/10 transition-all"
              >
                <div className="p-3 bg-green-500/20 rounded-full mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            variants={itemVariants}
          >
            Professional <span className="text-purple-400">Certifications</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-24 border border-purple-500/30 hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-center mb-5">
                  <div className="p-3 bg-purple-500/20 rounded-full mr-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  Issued by:{" "}
                  <span className="text-purple-300">{cert.issuer}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <WorkTogether />
    </section>
  );
};

export default EducationSection;
