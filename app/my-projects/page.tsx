"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiCpu,
  FiCloud,
  FiGlobe,
  FiCheckCircle,
  FiCode,
  FiServer,
  FiDatabase,
  FiShield,
  FiActivity,
  FiBox,
} from "react-icons/fi";
import {
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiGooglecloud,
  SiPostgresql,
  SiOpenai,
  SiTailwindcss,
  SiMapbox,
} from "react-icons/si";

type ProjectCategory = "All" | "AI & Machine Learning" | "Full-Stack SaaS" | "Cloud & FinOps" | "Enterprise Systems";

interface Project {
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  technologies: string[];
  link: string;
  githubLink?: string;
  badge: string;
  highlights: string[];
}

const PROJECTS: Project[] = [
  {
    title: "LipiLens — AI Script Decoder",
    tagline: "Fine-Tuned Ancient Inscription & Script Deciphering Platform",
    description:
      "Trained and deployed a custom computer vision model to identify ancient Lipi and inscriptions from photo uploads, decipher underlying languages, extract character glyphs, and return semantic translations.",
    category: "AI & Machine Learning",
    categoryLabel: "Vision AI / Model Training",
    technologies: [
      "Custom Model Training",
      "Vision AI",
      "Python",
      "FastAPI",
      "Next.js",
      "OCR & NLP",
    ],
    link: "https://lipilens-script-decoder.lovable.app/",
    badge: "Client Production",
    highlights: [
      "Fine-tuned vision model on historical inscription datasets",
      "End-to-end photo upload, glyph recognition & semantic translation",
    ],
  },
  {
    title: "CloudLens — Cloud Cost Intelligence",
    tagline: "Multi-Cloud FinOps & Granular Spend Monitoring on AWS & GCP",
    description:
      "Enterprise cloud cost management platform connecting AWS & GCP accounts to monitor granular spend across EC2, Amplify, Cloud Run, and Storage per project/service with real-time budget forecasting and optimization.",
    category: "Cloud & FinOps",
    categoryLabel: "AWS & GCP FinOps",
    technologies: [
      "AWS API",
      "GCP Cloud Run",
      "Next.js",
      "BigQuery",
      "Firebase",
      "Analytics",
    ],
    link: "https://cloudlens-2d4d1.web.app/",
    badge: "Live FinOps Platform",
    highlights: [
      "Multi-account AWS & GCP spending telemetry aggregation",
      "Project-level attribution for EC2, Amplify & serverless workloads",
    ],
  },
  {
    title: "ShipOnEarth — Maritime Intelligence",
    tagline: "Live Global Vessel Tracking & Geolocation Platform",
    description:
      "High-throughput maritime intelligence web app enabling real-time vessel search, detailed ship registry data, and live AIS geolocation tracking rendered on an interactive high-performance Mapbox GL engine.",
    category: "Full-Stack SaaS",
    categoryLabel: "Geospatial SaaS",
    technologies: [
      "React",
      "Next.js",
      "Mapbox GL",
      "Live AIS Telemetry",
      "Node.js",
      "REST APIs",
    ],
    link: "https://shiponearth.online/",
    badge: "Production Platform",
    highlights: [
      "Live AIS telemetry feeds rendered via Mapbox GL layers",
      "Vessel specification search & global maritime registry",
    ],
  },
  {
    title: "Oceaniek Stream — OTT Video Platform",
    tagline: "High-Concurrency Video Streaming & Content Management Engine",
    description:
      "Architected, developed, and managed Oceaniek Stream, a commercial OTT media platform featuring adaptive video delivery, subscriber lifecycle authentication, content catalog CMS, and secure cloud distribution.",
    category: "Full-Stack SaaS",
    categoryLabel: "OTT & Media Infrastructure",
    technologies: [
      "Next.js",
      "Node.js",
      "HLS Video Streaming",
      "AWS S3 & CloudFront",
      "PostgreSQL",
      "Subscription Billing",
    ],
    link: "https://www.oceaniekstream.com/",
    badge: "Live Platform",
    highlights: [
      "Adaptive bitrate video delivery & CDN content management",
      "Multi-tier subscription billing & user access control",
    ],
  },
  {
    title: "ODI Studio — E-Commerce & Logistics",
    tagline: "Complete Luxury E-Commerce Engine with Automated Shipping",
    description:
      "Architected and shipped an end-to-end luxury e-commerce platform with custom authentication, Razorpay payment gateway integration, automated Delhivery shipping logistics APIs, and live package tracking.",
    category: "Full-Stack SaaS",
    categoryLabel: "E-Commerce Infrastructure",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "Razorpay API",
      "Delhivery API",
      "MongoDB",
    ],
    link: "https://odi.studio/",
    badge: "Commercial Production",
    highlights: [
      "Custom authentication & Razorpay multi-method checkout",
      "Delhivery logistics API integration with automated waybill tracking",
    ],
  },
  {
    title: "The Healing Groove — Wellness Booking",
    tagline: "Two-Sided Meditation & Wellness Center Marketplace",
    description:
      "Multi-tenant marketplace connecting wellness centers with clients. Features verified center onboarding, real-time messaging, appointment slot calendar scheduling, and automated payment gateway processing.",
    category: "Full-Stack SaaS",
    categoryLabel: "Marketplace Platform",
    technologies: [
      "Next.js",
      "Node.js",
      "Socket.io",
      "Payment Gateway",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    link: "https://thehealinggroove.com/",
    badge: "Commercial Production",
    highlights: [
      "Center onboarding, profile management & slot discovery",
      "Real-time communication & integrated booking checkout",
    ],
  },
  {
    title: "Enterprise Hospital Information System",
    tagline: "End-to-End Hospital Digital Operations Suite (HIS)",
    description:
      "Enterprise healthcare platform digitalizing hospital operations: Patient registration, IPD, OPD, Emergency workflows, Pathology lab tests, Pharmacy inventory dispensing, Doctor/Receptionist role dashboards, and billing.",
    category: "Enterprise Systems",
    categoryLabel: "Healthcare ERP",
    technologies: [
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Role-Based Access (RBAC)",
      "Next.js",
      "Billing Engine",
    ],
    link: "#",
    badge: "Enterprise System",
    highlights: [
      "Full IPD/OPD/Emergency clinical workflow management",
      "Pharmacy store inventory tracking & multi-role staff dashboards",
    ],
  },
  {
    title: "Stereo 3D AI — Parallax Engine",
    tagline: "Monocular Depth Estimation to Stereoscopic 3D Generation",
    description:
      "Computer vision application that converts single 2D images into stereoscopic 3D outputs using monocular depth models to generate accurate depth maps, left/right eye parallax rendering, and LLM-guided scene enhancements.",
    category: "AI & Machine Learning",
    categoryLabel: "Generative Vision AI",
    technologies: [
      "Depth Estimation Models",
      "Computer Vision",
      "LLM Integration",
      "Python",
      "WebGL / Three.js",
    ],
    link: "#",
    badge: "Research & Build",
    highlights: [
      "Monocular depth map extraction for stereo parallax generation",
      "LLM integration for prompt-guided 3D scene refinements",
    ],
  },
  {
    title: "LinkedIn AI Content Automation",
    tagline: "Autonomous Technical Content & Visual Generation Engine",
    description:
      "Automated system where users specify strategic topics and LLM pipelines generate high-engagement technical LinkedIn posts and companion visual creative assets with automated scheduling.",
    category: "AI & Machine Learning",
    categoryLabel: "AI Automation Agent",
    technologies: [
      "Next.js",
      "Node.js",
      "Supabase",
      "LLM APIs (OpenAI/Gemini)",
      "Automation",
    ],
    link: "https://github.com/pappuyadav95230/LinkedIn_automation",
    githubLink: "https://github.com/pappuyadav95230/LinkedIn_automation",
    badge: "Open Source Engine",
    highlights: [
      "Multi-prompt LLM chain for post copy & visual concept creation",
      "Automated publishing pipeline with Supabase backend",
    ],
  },
];

const CATEGORIES: ProjectCategory[] = [
  "All",
  "AI & Machine Learning",
  "Full-Stack SaaS",
  "Cloud & FinOps",
  "Enterprise Systems",
];

// Visual Stack Icons for the Hero Right Side
const STACK_BADGES = [
  { name: "Next.js 15", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
  { name: "Python FastAPI", icon: <SiFastapi className="w-4 h-4 text-emerald-400" /> },
  { name: "Docker", icon: <SiDocker className="w-4 h-4 text-blue-400" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="w-4 h-4 text-amber-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-cyan-400" /> },
  { name: "GenAI & LLMs", icon: <SiOpenai className="w-4 h-4 text-emerald-300" /> },
  { name: "Mapbox GL", icon: <SiMapbox className="w-4 h-4 text-sky-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-teal-300" /> },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      
      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION: 2-COLUMN SPLIT WITH VISUAL TECH NODES & CARDS
          Left: Broad Executive Headline & Story
          Right: Sleek Interactive Visual Stack Architecture Grid
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="projects-hero"
        className="relative bg-[#0a0a0a] overflow-hidden pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-14 sm:pb-20 border-b border-white/[0.06]"
      >
        {/* Subtle ambient lighting */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-emerald-500/[0.04] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-5 w-[300px] sm:w-[550px] h-[300px] sm:h-[450px] bg-white/[0.015] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
            
            {/* ── LEFT COLUMN: HEADLINE & STORY ── */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 sm:mb-5"
              >
                <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 tracking-[0.22em] uppercase block">
                  Production Engineering Portfolio
                </span>
              </motion.div>

              {/* Bold Headline with Balanced Alignment */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-black leading-[1.05] tracking-tight text-white text-[34px] xs:text-[42px] sm:text-[54px] md:text-[62px] lg:text-[66px]"
              >
                Engineered for Impact
                <br />
                <span className="text-white">With AI, Cloud &amp; </span>
                <br className="hidden sm:block" />
                <span className="text-emerald-400">Production SaaS.</span>
              </motion.h1>

              {/* Punchy Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 sm:mt-7 text-[16px] sm:text-[18px] text-gray-200 leading-[1.65] max-w-xl font-normal"
              >
                A curated catalog of live commercial applications, fine-tuned vision models, multi-cloud FinOps systems, and high-concurrency streaming platforms engineered from scratch and operating in production.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
              >
                <a
                  href="#projects-catalog"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-[14px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md shadow-white/5 text-center"
                >
                  <span>Explore Case Studies</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all duration-200 text-center"
                >
                  <span>Discuss Your Project</span>
                  <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: VISUAL ENGINEERING STACK & ARCHITECTURE NODES ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative p-6 sm:p-7 rounded-3xl bg-[#0d0d0d] border border-white/[0.1] hover:border-emerald-500/30 transition-all duration-300 shadow-2xl">
                {/* Glow corner */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />

                {/* Header Strip with visual icon */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <FiLayers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-white leading-tight">
                        Core Production Stack
                      </h4>
                      <p className="text-[11px] text-gray-400">Battle-tested architectures</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/[0.08] px-2.5 py-1 rounded-full border border-emerald-500/20">
                    20+ Shipped
                  </span>
                </div>

                {/* 4 Architectural Focus Cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-2 text-emerald-400">
                      <FiGlobe className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12px] font-bold text-white block">Full-Stack SaaS</span>
                    <span className="text-[11px] text-gray-400">Web apps &amp; APIs</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-2 text-emerald-400">
                      <FiCpu className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12px] font-bold text-white block">AI &amp; Vision</span>
                    <span className="text-[11px] text-gray-400">Custom decoders</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-2 text-emerald-400">
                      <FiCloud className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12px] font-bold text-white block">Cloud &amp; FinOps</span>
                    <span className="text-[11px] text-gray-400">AWS &amp; GCP scale</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-2 text-emerald-400">
                      <FiServer className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12px] font-bold text-white block">Enterprise ERP</span>
                    <span className="text-[11px] text-gray-400">Role dashboards</span>
                  </div>
                </div>

                {/* Interactive Tech Badge Pills */}
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-2.5">
                    Engineered With:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {STACK_BADGES.map((b) => (
                      <span
                        key={b.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[11px] font-medium text-gray-300 hover:border-emerald-500/30 transition-colors"
                      >
                        {b.icon}
                        <span>{b.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer validation */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Production Verified
                  </span>
                  <span className="font-mono text-emerald-400">Live Client Deployments</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PROJECTS CATALOG & INTERACTIVE FILTER
          ══════════════════════════════════════════════════════════════════ */}
      <section id="projects-catalog" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-16 sm:pt-20 pb-20 relative z-10">

        {/* ── CATEGORY FILTER TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black shadow-md shadow-white/10"
                  : "bg-white/[0.03] text-gray-400 hover:text-white border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── PROJECTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#0e0e0e] border border-white/[0.07] hover:border-emerald-500/40 hover:bg-[#111111] transition-all duration-300 overflow-hidden"
              >
                {/* Top card corner glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/[0.07] transition-all duration-500" />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-[11px] font-bold tracking-widest text-emerald-400 uppercase">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] font-bold text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-md uppercase tracking-wider">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="text-2xl sm:text-[26px] font-black text-white tracking-tight group-hover:text-emerald-50 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-emerald-400 mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] sm:text-[16px] text-gray-200 leading-[1.65] mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[14px] sm:text-[15px] text-gray-200 leading-snug">
                        <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[12px] font-semibold text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-md group-hover:border-emerald-500/25 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-[13px] font-bold hover:bg-gray-100 transition-all duration-200"
                    >
                      <span>Explore Live</span>
                      <FiArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[12px] text-gray-400 font-medium">
                      Enterprise Internal Deployment
                    </span>
                  )}

                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg border border-white/10 hover:border-white/30 text-gray-400 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <FiGithub className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>

    </div>
  );
}
