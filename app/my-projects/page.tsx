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
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

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

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[600px] h-[600px] bg-white/[0.015] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
              Production Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Engineered for Impact:{" "}
            <span className="text-emerald-400">AI, Cloud &amp; Web</span>
          </h1>

          <p className="mt-5 text-[15px] sm:text-[16px] text-gray-400 leading-relaxed">
            Real commercial platforms, custom-trained AI vision decoders, multi-cloud FinOps systems,
            and enterprise hospital software built and shipped to production.
          </p>
        </motion.div>

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
              className={`px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
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
                  <h2 className="text-2xl font-black text-white tracking-tight group-hover:text-emerald-50 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-[13px] font-medium text-emerald-400/90 mt-1 mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13px] text-gray-300">
                        <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-semibold text-gray-300 bg-white/[0.03] border border-white/[0.07] rounded-md group-hover:border-emerald-500/20 transition-colors"
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

        {/* ── BOTTOM CALLOUT TO HIRE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111111] to-[#0c0c0c] border border-white/[0.08] hover:border-emerald-500/30 text-center relative overflow-hidden transition-all"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Have an Ambitious AI or Full-Stack Architecture in Mind?
            </h3>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
              From fine-tuning specialized domain models to deploying high-concurrency cloud applications,
              I am available for senior engineering roles and high-impact technical consulting.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-[14px] hover:bg-gray-100 transition-all shadow-lg shadow-white/5"
              >
                Let&apos;s Build Together &rarr;
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/[0.04] text-[14px] font-medium transition-all"
              >
                Return to Overview
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
