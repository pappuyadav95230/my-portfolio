"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { WorkTogether } from "./WorkTogether";

const RESUME_DOWNLOAD_LINK =
  "https://drive.google.com/file/d/1_4Oic42ANo0VVo7iYzanaoc6VeRAt943/view";

const skills = [
  // Programming Languages
  { name: "C", level: 85, icon: "c" },
  { name: "C++", level: 80, icon: "cplusplus" },
  { name: "Python", level: 75, icon: "python" },
  { name: "JavaScript", level: 80, icon: "javascript" },
  { name: "TypeScript", level: 75, icon: "typescript" },

  // Web Development
  { name: "HTML5", level: 90, icon: "html5" },
  { name: "CSS3", level: 85, icon: "css3" },
  { name: "Tailwind CSS", level: 80, icon: "tailwindcss" },
  { name: "React", level: 75, icon: "react" },
  { name: "Next.js", level: 70, icon: "nextjs" },

  // Backend & Databases
  { name: "Node.js", level: 70, icon: "nodejs" },
  { name: "Express.js", level: 70, icon: "express" },
  { name: "MongoDB", level: 65, icon: "mongodb" },
  { name: "MySQL", level: 70, icon: "mysql" },
  { name: "PostgreSQL", level: 65, icon: "postgresql" },

  // Cloud & DevOps
  { name: "Firebase", level: 70, icon: "firebase" },
  { name: "Google Cloud", level: 65, icon: "googlecloud" },
  { name: "BigQuery", level: 60, icon: "googlecloud" },
  { name: "Cloud Run", level: 60, icon: "googlecloud" },
  { name: "Docker", level: 65, icon: "docker" },
  { name: "Kubernetes", level: 55, icon: "kubernetes" },

  // Computer Science Fundamentals
  { name: "Data Structures", level: 80, icon: "database" },
  { name: "Algorithms", level: 75, icon: "algorithm" },
  { name: "OOP", level: 85, icon: "oop" },
  { name: "Problem Solving", level: 80, icon: "problemsolving" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => {
          if (activeTab === "languages") {
            return [
              "c",
              "cplusplus",
              "python",
              "javascript",
              "typescript",
            ].includes(skill.icon);
          }
          if (activeTab === "web") {
            return ["html5", "css3", "tailwindcss", "react", "nextjs"].includes(
              skill.icon
            );
          }
          if (activeTab === "backend") {
            return [
              "nodejs",
              "express",
              "mongodb",
              "mysql",
              "postgresql",
            ].includes(skill.icon);
          }
          if (activeTab === "cloud") {
            return (
              ["firebase", "googlecloud", "docker", "kubernetes"].includes(
                skill.icon
              ) || ["BigQuery", "Cloud Run"].includes(skill.name)
            );
          }
          if (activeTab === "cs") {
            return ["database", "algorithm", "oop", "problemsolving"].includes(
              skill.icon
            );
          }
          return true;
        });

  return (
    <>
      <section
        id="skills"
        className="py-16 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-purple-400">Skills</span> & Expertise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              I've developed a diverse skill set across multiple domains of
              software development
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab("languages")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "languages"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "web"
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "backend"
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Backend & DB
            </button>
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "cloud"
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Cloud & DevOps
            </button>
            <button
              onClick={() => setActiveTab("cs")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "cs"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              CS Fundamentals
            </button>
          </motion.div>

          {/* Skill Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="bg-[#1c1c2c]/80 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-lg mr-4">
                    {skill.icon === "database" ? (
                      <span className="text-2xl">📊</span>
                    ) : skill.icon === "algorithm" ? (
                      <span className="text-2xl">🧠</span>
                    ) : skill.icon === "oop" ? (
                      <span className="text-2xl">🔄</span>
                    ) : skill.icon === "problemsolving" ? (
                      <span className="text-2xl">💡</span>
                    ) : skill.name === "BigQuery" ? (
                      <span className="text-2xl">🔍</span>
                    ) : skill.name === "Cloud Run" ? (
                      <span className="text-2xl">☁️</span>
                    ) : (
                      <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                    <span className="text-purple-400 text-sm">
                      {skill.level}% proficiency
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      skill.level > 75
                        ? "bg-gradient-to-r from-green-500 to-teal-400"
                        : skill.level > 50
                        ? "bg-gradient-to-r from-blue-500 to-purple-400"
                        : "bg-gradient-to-r from-yellow-500 to-orange-400"
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center bg-[#1c1c2c]/60 backdrop-blur-sm p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to know more about my professional journey?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Download my resume to explore my full experience, education, and
              projects in detail.
            </p>
            <motion.a
              href={RESUME_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaDownload className="mr-2" />
              Download & View Resume
            </motion.a>
            {/* <p className="text-gray-500 text-sm mt-4">
            (PDF file will open in new tab)
          </p> */}
          </motion.div>
        </div>
        <WorkTogether />
      </section>
    </>
  );
};

export default Skills;
