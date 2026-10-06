"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiLayout, FiServer, FiDatabase, FiCloud, FiCpu } from "react-icons/fi";
import { WorkTogether } from "./WorkTogether";

const RESUME_LINK = "https://drive.google.com/file/d/14aulnauvOANFQxcqWzbnb53OCWNymLF5/view";

// ── Tech stack organized by category with icons
const TECH_GROUPS = [
  {
    category: "Frontend",
    icon: <FiLayout className="w-6 h-6" />,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <FiServer className="w-6 h-6" />,
    items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"],
  },
  {
    category: "Database",
    icon: <FiDatabase className="w-6 h-6" />,
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    icon: <FiCloud className="w-6 h-6" />,
    items: ["Google Cloud", "Cloud Run", "BigQuery", "Cloud Spanner", "Docker", "Kubernetes"],
  },
  {
    category: "AI & Automation",
    icon: <FiCpu className="w-6 h-6" />,
    items: ["Gemini AI", "Ollama", "Google Ads API", "Shopify API", "Automation"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const SkillsSection = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
           TECHNOLOGY & EXPERTISE (Bento Grid Style)
      ═══════════════════════════════════════════ */}
      <section
        id="skills"
        className="bg-[#0a0a0a] py-24 sm:py-32 relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 sm:mb-20 text-center sm:text-left"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500 font-bold mb-4">
              What I work with
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Professional
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600 font-light">Skillset</span>
            </h2>
          </motion.div>

          {/* Tech groups — Premium Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {TECH_GROUPS.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-2xl bg-[#111111]/80 backdrop-blur-sm border border-white/[0.05] hover:bg-[#161616] hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-6">
                  {group.icon}
                </div>

                {/* Category label */}
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {group.category}
                </h3>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[12px] font-medium text-gray-400 bg-black/40 border border-white/[0.04] rounded-lg group-hover:border-white/[0.1] group-hover:text-gray-200 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Resume download strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 sm:mt-24 p-8 sm:p-10 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/[0.06] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-[40px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Want to know more about my journey?
              </h3>
              <p className="text-[15px] text-gray-500 max-w-xl">
                Explore my full experience, education, and detailed project history. Perfect if you're looking for a reliable freelancer or consultant.
              </p>
            </div>
            <Link
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative z-10 shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 text-[14px] font-bold text-black bg-white rounded-xl hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5"
            >
              Download Resume
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           FREELANCE CTA
      ═══════════════════════════════════════════ */}
      <section className="bg-[#060606] py-24 sm:py-36 relative overflow-hidden border-t border-white/[0.02]">
        {/* Faint glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[12px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-gray-600"></span>
              Open for Freelance Work
              <span className="w-8 h-px bg-gray-600"></span>
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 font-light italic">World-Class Together</span>
            </h2>
            <p className="mt-8 text-[16px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you need a scalable application built from scratch, AI integrations to automate your business, or premium backend systems—I'm ready to bring your vision to life.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[14px] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                Hire Me for Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:610490papu@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-[14px] font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/30 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
              >
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <WorkTogether />
    </>
  );
};

export default SkillsSection;
