"use client";
import { WorkTogether } from "@/components/WorkTogether";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy, FaUsers } from "react-icons/fa";

const experiences = [
  {
    side: "left",
    title: "Web Developer",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Jan 2024 – Present",
    details: [
      "Contributed to front-end and back-end development for diverse projects.",
      "Worked on company site, Agarwal Packers and Movers, zuzozi.com, Kiya Preschool, and XtendedSpace.",
      "Enhanced user experience and optimized design for performance."
    ],
    icon: <FaBriefcase className="text-blue-400" />
  },
  {
    side: "right",
    title: "Web Developer Executive Intern",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Sep 2023 – Jan 2024",
    details: [
      "Focused on front-end development with responsive designs.",
      "Enhanced SEO by optimizing sitemaps.",
      "Maintained and improved company products."
    ],
    icon: <FaBriefcase className="text-blue-400" />
  },
  {
    side: "left",
    title: "Python Developer Intern",
    company: "Softwizz Pvt. Ltd.",
    period: "Jul 2022 – Aug 2022",
    details: [
      "Created a Library Management System using Tkinter and MySQL.",
      "Integrated user-friendly forms for issue/return tracking."
    ],
    icon: <FaBriefcase className="text-blue-400" />
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Shaheed Bhagat Singh State Technical Campus",
    period: "July 2020 – May 2024",
    score: "CGPA: 8.01",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    degree: "12th in BSEB, Patna (State-Board)",
    institution: "Shaheed Bhagat Singh Inter College",
    period: "March 2016 – Feb 2018",
    score: "Percentage: 59.5%",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    degree: "Class X in BSEB, Patna (State-Board)",
    institution: "G.J.P High School Sani-basantpur",
    period: "May 2015",
    score: "Percentage: 72.4%",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
];

const achievements = [
  {
    title: "Team Lead in organizing Smart India Hackathon in college",
    year: "2023",
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    title: "Achieved a 4 star fraternity ranking by the Office of Fraternity and Sorority Affairs (highest possible ranking)",
    icon: <FaTrophy className="text-yellow-400" />,
  },
];

const participation = [
  {
    title: "Core member of GDG Ludhiana, managed event focused on Gemini",
    icon: <FaUsers className="text-green-400" />,
  },
  {
    title: "Google Developer Student Clubs SBSSU 2023",
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
    title: "Data Structure and Algorithms",
    issuer: "CodeHelp",
    icon: <FaCertificate className="text-purple-400" />,
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "SOFTWIZZ",
    icon: <FaCertificate className="text-purple-400" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-blue-400">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Professional milestones and achievements
          </motion.p>
          <motion.div 
            className="w-24 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-32">
          <motion.div 
            className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          
          {experiences.map((_, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
              style={{ top: `${(index * 33) + 16}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-950" />
            </motion.div>
          ))}

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  x: exp.side === "left" ? -100 : 100 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    type: "spring", 
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.15
                  } 
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative md:w-1/2 px-6 py-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl shadow-lg backdrop-blur-sm ${
                  exp.side === "left" ? "md:ml-auto" : "md:mr-auto"
                } hover:border-blue-500/50 transition-all duration-300 group`}
              >
                <div className="absolute -top-5 -left-5 bg-gray-950 p-2 rounded-full border border-gray-800 group-hover:border-blue-500 transition-all duration-300">
                  {exp.icon}
                </div>
                
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute -inset-1 bg-blue-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                  {exp.title}
                  <motion.span 
                    className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2
                    }}
                  >
                    {exp.period}
                  </motion.span>
                </h3>
                <p className="text-blue-400 mb-3 font-medium">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.details.map((point, i) => (
                    <motion.li 
                      key={i}
                      className="text-gray-300 text-sm pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-400 before:rounded-full"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400">Education</span> Background
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl shadow-lg p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                      {edu.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-gray-200 mb-2">{edu.institution}</p>
                  <p className="text-gray-300 text-sm mb-1">{edu.period}</p>
                  <p className="text-blue-300 font-medium">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Participation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-yellow-400">Achievements</span> & Awards
            </motion.h2>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-lg p-5 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="p-3 bg-yellow-500/20 rounded-full mr-4 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {achievement.title}
                    </h3>
                    {achievement.year && (
                      <span className="text-sm text-yellow-300">
                        {achievement.year}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Participation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-green-400">Participation</span> & Activities
            </motion.h2>

            <div className="space-y-6">
              {participation.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-lg p-5 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="p-3 bg-green-500/20 rounded-full mr-4 mt-1">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {activity.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Professional <span className="text-purple-400">Certifications</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1.5 bg-purple-500 mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl shadow-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br  from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 ">
                  <div className="p-6 ">
                    <div className="flex items-center mb-4">
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
                  </div>
                  <div className="bg-white/5 px-6 py-4">
                    <span className="text-sm text-purple-300">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <WorkTogether />
    </section>
  );
};

export default Experience;