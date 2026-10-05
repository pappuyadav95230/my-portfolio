"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { WorkTogether } from "./WorkTogether";

const RESUME_LINK = "https://drive.google.com/file/d/14aulnauvOANFQxcqWzbnb53OCWNymLF5/view";

// ── Tech stack organized by category (no progress bars)
const TECH_GROUPS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Google Cloud", "Cloud Run", "BigQuery", "Cloud Spanner", "Docker", "Kubernetes"],
  },
  {
    category: "AI & Automation",
    items: ["Gemini AI", "Ollama", "Google Ads API", "Shopify API", "Automation"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SkillsSection = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
           TECHNOLOGY & EXPERTISE
      ═══════════════════════════════════════════ */}
      <section
        id="skills"
        className="bg-[#0d0d0d] py-24 sm:py-32 relative overflow-hidden"
      >
        {/* Top edge separator */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600 font-semibold mb-4">
              What I work with
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Technology
              <br />
              <span className="text-gray-600 font-light">&amp; Expertise</span>
            </h2>
          </motion.div>

          {/* Tech groups — editorial list layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-0 divide-y divide-white/[0.05]"
          >
            {TECH_GROUPS.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="py-8 sm:py-10 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 group"
              >
                {/* Category label */}
                <span className="text-[11px] uppercase tracking-[0.2em] text-gray-600 font-semibold w-40 shrink-0 pt-0.5">
                  {group.category}
                </span>

                {/* Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 text-[13px] font-medium text-gray-400 border border-white/[0.08] rounded-full hover:border-white/20 hover:text-gray-200 transition-all duration-200 cursor-default"
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
            className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Want to know more about my professional journey?
              </h3>
              <p className="text-sm text-gray-600">
                Explore my experience, education and full project history in detail.
              </p>
            </div>
            <Link
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3 text-[13px] font-medium text-white border border-white/15 rounded-full hover:border-white/35 hover:bg-white/4 transition-all duration-200 whitespace-nowrap"
            >
              Download Resume
              <svg className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CONTACT CTA (cinematic full-width)
      ═══════════════════════════════════════════ */}
      <section className="bg-[#080808] py-24 sm:py-36 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        {/* Faint glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-600 font-semibold mb-6">
              Let's collaborate
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Let's Build Something
              <br />
              <span className="text-gray-600 font-light italic">Amazing Together</span>
            </h2>
            <p className="mt-6 text-[15px] text-gray-500 max-w-lg mx-auto leading-relaxed">
              Have an idea, product or project in mind? Let's turn it into something
              useful, scalable and impactful.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-[13px] font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-xl shadow-white/10"
              >
                Schedule a Call
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:610490papu@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/25 rounded-full transition-all duration-200"
              >
                Email Me
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
