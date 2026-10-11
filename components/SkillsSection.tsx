"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FiCode,
  FiCpu,
  FiCloud,
  FiServer,
  FiDatabase,
  FiLayers,
  FiArrowUpRight,
  FiFileText,
} from "react-icons/fi";

// ── Technical Capabilities / Services
const SERVICES = [
  {
    title: "Full-Stack Web Engineering",
    icon: <FiCode className="w-6 h-6" />,
    description: "Production-grade web applications architected with Next.js 15, React, TypeScript, and modern design systems for maximum speed and SEO.",
    tags: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: <FiCloud className="w-6 h-6" />,
    description: "Cloud-native deployments on AWS and GCP Cloud Run. Resilient serverless architectures, Docker containerization, and automated CI/CD pipelines.",
    tags: ["AWS", "GCP Cloud Run", "Docker", "CI/CD"],
  },
  {
    title: "Custom AI Automation Pipelines",
    icon: <FiCpu className="w-6 h-6" />,
    description: "Production AI automation: RAG systems, multimodal LLM pipelines, autonomous agents, and marketing workflow automations delivering 1,000+ daily ops.",
    tags: ["Gemini AI", "OpenAI", "LangChain", "RAG Pipelines"],
  },
  {
    title: "Model Training & Business Fine-Tuning",
    icon: <FiLayers className="w-6 h-6" />,
    description: "Domain-adapted model fine-tuning, dataset curation, LoRA/QLoRA techniques, and on-premise private inference engines with Ollama for enterprise privacy.",
    tags: ["Model Fine-Tuning", "Ollama", "LoRA/QLoRA", "Private LLMs"],
  },
  {
    title: "Backend Microservices & REST APIs",
    icon: <FiServer className="w-6 h-6" />,
    description: "Ultra-fast, asynchronous backend services using Python FastAPI and Node.js. High concurrency, secure authentication, and clean API design.",
    tags: ["FastAPI", "Python", "Node.js", "REST APIs"],
  },
  {
    title: "Data Architecture & Analytics",
    icon: <FiDatabase className="w-6 h-6" />,
    description: "Scalable data stores and real-time analytics engines with PostgreSQL, Supabase, and petabyte-scale BigQuery pipelines with Google Ads GAQL.",
    tags: ["PostgreSQL", "Supabase", "BigQuery", "GAQL"],
  },
];

// ── Full Technology Stack
const TECH_STACK = [
  {
    category: "Languages & Frameworks",
    techs: [
      { name: "TypeScript", desc: "Type-safe robust JavaScript for production scale" },
      { name: "Python", desc: "FastAPI backends, AI pipelines & model fine-tuning" },
      { name: "Next.js 15", desc: "Full-stack React framework with App Router, SSR & ISR" },
      { name: "React.js", desc: "Modern declarative UI component architecture" },
      { name: "JavaScript", desc: "Modern ESNext core web development" },
      { name: "Tailwind CSS", desc: "Clean utility-first responsive styling" },
    ],
  },
  {
    category: "Cloud & DevOps",
    techs: [
      { name: "AWS", desc: "Amazon Web Services scalable cloud ecosystem" },
      { name: "GCP Cloud Run", desc: "Serverless container orchestration & automatic scaling" },
      { name: "Docker", desc: "Containerized environments for predictable deployment" },
      { name: "CI/CD", desc: "Automated GitHub Actions build, test, and release flows" },
      { name: "Firebase", desc: "Realtime data synchronization & authentication" },
    ],
  },
  {
    category: "AI & Model Engineering",
    techs: [
      { name: "Gemini AI", desc: "Google multimodal models for automated workflows" },
      { name: "Model Fine-Tuning", desc: "Customizing open weights on domain business data" },
      { name: "Ollama", desc: "Private, on-premise local model inference" },
      { name: "RAG & Embeddings", desc: "Retrieval-augmented knowledge grounding systems" },
      { name: "Google Ads API", desc: "GAQL-based video & ad campaign analytics" },
      { name: "Shopify API", desc: "Automated provisioning and store metadata sync" },
    ],
  },
  {
    category: "Databases & Backend",
    techs: [
      { name: "FastAPI", desc: "High-performance async Python backend framework" },
      { name: "Node.js", desc: "Scalable event-driven JavaScript server runtime" },
      { name: "PostgreSQL", desc: "ACID compliant relational database systems" },
      { name: "Supabase", desc: "Postgres-backed database with realtime features" },
      { name: "BigQuery", desc: "Serverless data warehouse for high-volume analytics" },
      { name: "MongoDB", desc: "Document database for unstructured schemas" },
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
      <span className="inline-flex px-3.5 py-1.5 text-[12px] font-semibold text-gray-300 bg-white/[0.03] border border-white/[0.07] rounded-lg hover:border-emerald-500/40 hover:text-white hover:bg-emerald-500/[0.06] transition-all duration-300 cursor-default tracking-wide">
        {name}
      </span>
      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2.5 px-3.5 py-2 bg-[#1a1a1a] border border-emerald-500/30 rounded-lg shadow-xl shadow-black/60 z-50 whitespace-nowrap pointer-events-none"
        >
          <p className="text-[11px] text-gray-200 font-medium">{desc}</p>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-[#1a1a1a] border-r border-b border-emerald-500/30 rotate-45 -mt-1" />
        </motion.div>
      )}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
           CORE CAPABILITIES / SERVICES
      ═══════════════════════════════════════════ */}
      <section
        id="skills"
        className="bg-[#0a0a0a] py-24 sm:py-32 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.015] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
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
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-400 font-bold">
                  Core Competencies
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">Full Stack, </span>
                <span className="text-emerald-400">Cloud &amp; AI</span>
              </h2>
              <p className="text-[15px] text-gray-400 max-w-md leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0">
                End-to-end engineering excellence — from performant web applications to scalable AWS/GCP cloud platforms and domain-adapted AI model integrations.
              </p>
            </div>

            <div className="mt-12 w-full h-px bg-gradient-to-r from-emerald-500/20 via-white/10 to-transparent" />
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
                className="group relative flex flex-col p-7 rounded-2xl bg-[#111111] border border-white/[0.06] hover:bg-[#131313] hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[12px] font-bold text-white/15 group-hover:text-emerald-400/30 transition-colors duration-300 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-white">
                  {service.title}
                </h3>

                <div className="w-8 h-px bg-white/15 mb-3 group-hover:w-14 group-hover:bg-emerald-400 transition-all duration-500" />

                <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-semibold text-gray-300 bg-white/[0.03] border border-white/[0.06] rounded-md group-hover:border-emerald-500/20 group-hover:text-gray-200 transition-all duration-300 tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Interactive Tech Stack Breakdown ── */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0d0d0d] border border-white/[0.07]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Production Technology Stack
                </h3>
                <p className="text-[14px] text-gray-400 mt-1">
                  Hover over any technology for context on how it is deployed in production.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 w-fit">
                Verified Skills
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TECH_STACK.map((group) => (
                <div key={group.category} className="space-y-3">
                  <h4 className="text-[13px] font-bold text-gray-300 uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <TechPill key={tech.name} name={tech.name} desc={tech.desc} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agency Partnership Banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 p-8 sm:p-10 bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/[0.08] hover:border-emerald-500/30 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.03] blur-[50px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Select Client Engagements
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Have a Platform to Build or Automate?
              </h3>
              <p className="text-[14px] text-gray-400 max-w-xl">
                From high-performing web apps &amp; cloud infrastructure to intelligent AI automations and targeted video ad campaigns — let&apos;s build software that generates revenue for your business.
              </p>
            </div>
            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/5"
              >
                Hire Me
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/our-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-gray-300 border border-white/10 rounded-xl hover:text-white hover:bg-white/[0.06] transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
