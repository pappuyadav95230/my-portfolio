"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiCode, FiPenTool, FiCpu, FiCloud, FiServer, FiDatabase } from "react-icons/fi";

const RESUME_LINK = "https://drive.google.com/file/d/14aulnauvOANFQxcqWzbnb53OCWNymLF5/view";

// ── Freelance Services
const SERVICES = [
  {
    title: "Full-Stack Web Development",
    icon: <FiCode className="w-6 h-6" />,
    description: "Production-grade web applications built with React, Next.js, and TypeScript for blazing-fast performance.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    icon: <FiServer className="w-6 h-6" />,
    description: "Robust, scalable backend systems and RESTful APIs using Node.js, Express, and Python FastAPI.",
    tags: ["Node.js", "Express.js", "FastAPI", "Python"],
  },
  {
    title: "UI/UX & Product Design",
    icon: <FiPenTool className="w-6 h-6" />,
    description: "Intuitive, user-centric interfaces and premium digital experiences that convert visitors into customers.",
    tags: ["Figma", "GSAP", "Framer Motion", "Design Systems"],
  },
  {
    title: "Database & Data Systems",
    icon: <FiDatabase className="w-6 h-6" />,
    description: "High-performance database architectures — from NoSQL to enterprise-grade cloud data warehouses.",
    tags: ["MongoDB", "PostgreSQL", "BigQuery", "Cloud Spanner"],
  },
  {
    title: "AI & Automation",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Smart LLM integrations and custom automation pipelines to supercharge your business workflows.",
    tags: ["Gemini AI", "Ollama", "Google Ads API", "Shopify API"],
  },
  {
    title: "Cloud Infrastructure",
    icon: <FiCloud className="w-6 h-6" />,
    description: "Enterprise-grade cloud architectures on AWS & GCP — scalable, secure, and production-ready from day one.",
    tags: ["AWS", "GCP", "Cloud Run", "Docker"],
  },
];

// ── Full Technology Stack with hover descriptions
const TECH_STACK = [
  {
    category: "Languages",
    techs: [
      { name: "JavaScript", desc: "Core language for dynamic web applications" },
      { name: "TypeScript", desc: "Type-safe JavaScript for production systems" },
      { name: "Python", desc: "Backend services, AI integrations & automation" },
      { name: "C++", desc: "Data structures & algorithmic problem solving" },
      { name: "HTML5", desc: "Semantic, accessible markup for the modern web" },
      { name: "CSS3", desc: "Advanced layouts, animations & responsive design" },
      { name: "Apps Script", desc: "Google Workspace automation & integrations" },
    ],
  },
  {
    category: "Frontend",
    techs: [
      { name: "React.js", desc: "Component-based UI library for complex interfaces" },
      { name: "Next.js", desc: "Full-stack React framework with SSR & ISR" },
      { name: "Tailwind CSS", desc: "Utility-first CSS for rapid premium UI development" },
      { name: "GSAP", desc: "High-performance scroll & timeline animations" },
      { name: "Framer Motion", desc: "Declarative animations for React components" },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", desc: "Scalable server-side JavaScript runtime" },
      { name: "Express.js", desc: "Lightweight REST API framework for Node" },
      { name: "FastAPI", desc: "High-performance Python API framework" },
      { name: "REST APIs", desc: "Clean, documented, versioned API architecture" },
    ],
  },
  {
    category: "Databases & Cloud",
    techs: [
      { name: "MongoDB", desc: "Flexible NoSQL for dynamic data models" },
      { name: "Firebase", desc: "Real-time DB, auth & serverless functions" },
      { name: "Supabase", desc: "Open-source Postgres with real-time subscriptions" },
      { name: "BigQuery", desc: "Petabyte-scale analytics data warehouse" },
      { name: "Cloud Spanner", desc: "Globally distributed relational database" },
      { name: "AWS", desc: "Amazon Web Services cloud computing platform" },
      { name: "GCP Cloud Run", desc: "Serverless container deployment & scaling" },
    ],
  },
  {
    category: "AI & APIs",
    techs: [
      { name: "Gemini AI", desc: "Google's multimodal AI for content & analysis" },
      { name: "Ollama", desc: "Local LLM inference for private AI workloads" },
      { name: "Google Ads API", desc: "GAQL-based analytics dashboards & reporting" },
      { name: "Shopify API", desc: "E-commerce store management & automation" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

// ── Tech pill with hover tooltip
const TechPill = ({ name, desc }: { name: string; desc: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="inline-flex px-3.5 py-1.5 text-[12px] font-semibold text-gray-400 bg-white/[0.03] border border-white/[0.06] rounded-lg hover:border-white/[0.15] hover:text-white hover:bg-white/[0.06] transition-all duration-300 cursor-default tracking-wide">
        {name}
      </span>
      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 px-3.5 py-2 bg-[#1a1a1a] border border-white/[0.12] rounded-lg shadow-xl shadow-black/40 z-50 whitespace-nowrap pointer-events-none"
        >
          <p className="text-[11px] text-gray-300 font-medium">{desc}</p>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#1a1a1a] border-r border-b border-white/[0.12] rotate-45 -mt-1" />
        </motion.div>
      )}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
           FREELANCE SERVICES
      ═══════════════════════════════════════════ */}
      <section
        id="skills"
        className="bg-[#0a0a0a] py-24 sm:py-32 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.015] blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14 relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 sm:mb-24 text-center sm:text-left"
          >
            <div className="flex items-center gap-4 mb-8 justify-center sm:justify-start">
              <span className="flex-shrink-0 w-8 h-px bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500 font-bold">
                  Freelance Services
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">What I Can </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-semibold">Build For You</span>
              </h2>
              <p className="text-[15px] text-gray-400 max-w-sm leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0">
                3+ years of end-to-end development — from pixel-perfect frontends to scalable cloud backends and AI integrations.
              </p>
            </div>

            <div className="mt-12 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
          </motion.div>

          {/* Services Grid — 6 cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative flex flex-col p-7 rounded-2xl bg-[#111111] border border-white/[0.06] hover:bg-[#141414] hover:border-white/[0.14] transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>

                <div className="w-8 h-px bg-white/15 mb-3 group-hover:w-14 transition-all duration-500" />

                <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-semibold text-gray-500 bg-white/[0.03] border border-white/[0.05] rounded-md group-hover:border-white/[0.10] group-hover:text-gray-300 transition-all duration-300 tracking-wide uppercase"
                    >
                      {tag}
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
            className="mt-6 p-8 sm:p-10 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/[0.06] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-[40px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Want the full picture?
              </h3>
              <p className="text-[15px] text-gray-500 max-w-xl">
                Download my resume for detailed project history, education, certifications, and achievements.
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
           UNIFIED HIRE ME CTA
      ═══════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-24 sm:py-36 relative overflow-hidden border-t border-white/[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-emerald-500/[0.025] blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-8 lg:px-14 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[12px] font-semibold text-emerald-400 tracking-wide uppercase">
                Open for Freelance Work
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Let&apos;s Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-semibold">
                World-Class Together
              </span>
            </h2>

            <p className="mt-8 text-[16px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Whether you need a scalable SaaS platform, AI-powered automation, or a premium product built from scratch — I&apos;m ready to bring your vision to life.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[14px] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.18)]"
              >
                Hire Me for Your Project
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="mailto:610490papu@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[14px] font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/30 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send an Email
              </a>
              <a
                href="tel:+919523076954"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[14px] font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-white/30 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Schedule a Call
              </a>
            </div>

            <p className="mt-8 text-[12px] text-gray-600 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
              Typically responds within 24 hours &nbsp;&middot;&nbsp; Free initial consultation
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
