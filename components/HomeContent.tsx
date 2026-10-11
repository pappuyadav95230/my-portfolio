"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiBriefcase,
  FiStar,
  FiZap,
  FiShield,
  FiCloud,
  FiCpu,
  FiArrowUpRight,
} from "react-icons/fi";

// ── Work Experience
const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company: "Oceaniek Technologies",
    period: "Apr 2026 – Present",
    type: "Full-Time",
    points: [
      "Architected, developed & managed Oceaniek Stream (oceaniekstream.com) — live OTT streaming platform with video content delivery, subscriber authentication, content catalog management, and high-concurrency streaming pipelines.",
      "Architected & shipped ODI Studio (odi.studio) — full-stack e-commerce with custom auth, Razorpay payments, Delhivery logistics APIs, and live shipment tracking.",
      "Engineered ShipOnEarth (shiponearth.online) — real-time maritime vessel tracking platform with Mapbox GL geospatial mapping, live AIS telemetry, and vessel intelligence.",
      "Built The Healing Groove (thehealinggroove.com) — multi-tenant meditation & wellness marketplace featuring center listings, real-time communication, scheduling, and payment gateways.",
      "Developed an Enterprise Hospital Information System (HIS) — complete healthcare digitalization covering Patient registration, IPD, OPD, Emergency, Pathology labs, Pharmacy inventory, and Doctor/Receptionist role dashboards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Jan 2024 – Mar 2026",
    type: "Full-Time",
    points: [
      "Shipped full-stack features across 8 production releases utilizing Next.js, TypeScript, and Python FastAPI.",
      "Architected an AI-powered logistics platform managing 900+ daily leads with Gemini AI — slashing infra costs by 80% and deployment time by 70%.",
      "Engineered an automated video & creative ad platform serving 1,000+ daily requests across Facebook and Instagram campaign pipelines.",
      "Built multi-query GAQL analytics dashboards using Google Ads API with reusable React component libraries.",
      "Deployed containerized backends onto GCP Cloud Run and integrated Ollama for private, on-premise LLM inference and task adaptation.",
      "Engineered Shopify Admin API automation for dynamic collection provisioning, product metadata sync, and metafield filters.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Sep 2023 – Jan 2024",
    type: "Internship",
    points: [
      "Built React.js applications integrated with Google Apps Script for automated data collection pipelines.",
      "Developed an EV booking platform with Next.js featuring real-time booking state and Firebase authentication.",
      "Set up Firebase deployments with continuous integration and hosting configurations.",
    ],
  },
  {
    title: "Python Developer Intern",
    company: "Softwizz Pvt. Ltd.",
    period: "Jul 2022 – Aug 2022",
    type: "Internship",
    points: [
      "Developed a Library Management System using Python Tkinter and MySQL with structured database schema design.",
    ],
  },
];

// ── Why Work With Me
const REASONS = [
  {
    icon: <FiZap className="w-5 h-5" />,
    tag: "PROVEN TRACK RECORD",
    title: "20+ Platforms & Projects Built",
    desc: "From high-concurrency OTT video streaming to custom e-commerce stores and business SaaS, I ship real software tested under production load.",
  },
  {
    icon: <FiCloud className="w-5 h-5" />,
    tag: "CLOUD & DEVOPS",
    title: "Scalable Cloud Architecture",
    desc: "Zero-downtime deployments, containerized microservices (Docker), serverless workloads, automated CI/CD pipelines, and high-availability systems.",
  },
  {
    icon: <FiCpu className="w-5 h-5" />,
    tag: "APPLIED AI",
    title: "AI & Workflow Automation",
    desc: "Embedding LLMs, custom intelligent processing pipelines, and automated agent workflows directly into business products for real productivity.",
  },
  {
    icon: <FiStar className="w-5 h-5" />,
    tag: "EFFICIENCY",
    title: "Performance & Cost Optimization",
    desc: "Proven ability to re-architect bottlenecks, tune queries, optimize cloud resource utilization, and drastically lower operating overhead.",
  },
  {
    icon: <FiShield className="w-5 h-5" />,
    tag: "FULL CYCLE",
    title: "End-to-End Technical Ownership",
    desc: "Bridging the complete stack: high-converting Next.js / React frontends, battle-tested backend APIs, resilient database schemas, and rock-solid hosting.",
  },
  {
    icon: <FiBriefcase className="w-5 h-5" />,
    tag: "COLLABORATION",
    title: "Transparent & Direct Partnership",
    desc: "Clear architecture blueprints, disciplined code quality, documented deliverables, and direct communication without bureaucratic bloat or ghosting.",
  },
];

// ── How I Work (Process)
const PROCESS = [
  {
    step: "01",
    title: "Technical Discovery & Scoping",
    desc: "We analyze business requirements, system bottlenecks, user flows, and technical architecture to establish clear deliverables.",
  },
  {
    step: "02",
    title: "Architecture & Cloud Blueprint",
    desc: "I design data models, scalable cloud infrastructure, API contracts, and AI workflow integration strategies.",
  },
  {
    step: "03",
    title: "Iterative Build & Benchmarking",
    desc: "Rapid full-stack execution with clean code, frequent milestone demos, performance profiling, and model validation.",
  },
  {
    step: "04",
    title: "Production Deployment & Support",
    desc: "Automated CI/CD release, cloud monitoring, security hardening, and dedicated post-launch support to guarantee system stability.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const HomeContent = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
           EXPERIENCE SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="experience"
        className="bg-[#0a0a0a] py-16 sm:py-24 lg:py-32 border-t border-white/[0.04] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          >
            <div>
              <div className="mb-3">
                <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
                  Experience &middot; Work History
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                Work <span className="text-emerald-400">Experience</span>
              </h2>
            </div>
            <p className="text-[16px] sm:text-[17px] text-gray-200 max-w-lg leading-relaxed font-normal">
              3+ years engineering production SaaS products, e-commerce architectures, OTT streaming platforms, and AI automations.
            </p>
          </motion.div>

          {/* Timeline Cards */}
          <div className="relative sm:pl-8">
            {/* Vertical timeline line */}
            <div className="absolute left-[10px] top-2 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-emerald-400 via-emerald-500/30 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={`${exp.title}-${i}`}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="group relative"
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-[-21px] top-[26px] hidden sm:flex items-center">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.6)] transition-all duration-300 shrink-0 z-10" />
                    <div className="w-[21px] h-px bg-emerald-500/30 group-hover:bg-emerald-400/60 transition-colors duration-300" />
                  </div>

                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#121212] transition-all duration-300 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.title}
                        </h3>
                        <p className="text-[15px] sm:text-[16px] text-emerald-400 font-semibold mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                        <span className="px-3 py-1 text-[11px] font-bold text-gray-200 bg-white/[0.06] border border-white/[0.1] rounded-md uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <span className="text-[13px] sm:text-[14px] text-gray-300 font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="w-12 h-px bg-emerald-500/30 mb-5 group-hover:w-20 group-hover:bg-emerald-400 transition-all duration-500" />

                    <ul className="space-y-3">
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[15px] sm:text-[16px] text-gray-200 leading-relaxed font-normal"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           WHY WORK WITH ME
      ═══════════════════════════════════════════ */}
      <section
        id="why-hire-me"
        className="bg-[#060606] py-16 sm:py-24 lg:py-32 border-t border-white/[0.04] relative overflow-hidden"
      >
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/[0.02] blur-[120px] rounded-full translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20">
            {/* Left: Sticky Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
            >
              <div className="mb-6">
                <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                  Core Value · Engineering Standards
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight leading-[1.08] mb-6">
                <span className="text-white">Built for Scale, </span>
                <br />
                <span className="text-emerald-400">Delivered with Impact</span>
              </h2>

              <p className="text-[16px] sm:text-[17px] text-gray-200 leading-relaxed max-w-md mb-8">
                I combine full-stack engineering with cloud infrastructure and applied AI to deliver robust software that accelerates business growth.
              </p>

              <div className="flex flex-col items-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[15px] shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all duration-300 group"
                >
                  <span>Discuss Your Architecture</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200 text-lg leading-none">&rarr;</span>
                </Link>
                <span className="text-[12px] text-gray-400 font-medium pl-1">
                  Available for new projects · Quick turnaround
                </span>
              </div>
            </motion.div>

            {/* Right: Reasons Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#121212] hover:shadow-[0_0_35px_rgba(16,185,129,0.08)] transition-all duration-500"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-300">
                        {r.icon}
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-md bg-white/[0.03] text-gray-400 border border-white/[0.06] group-hover:text-emerald-400/90 group-hover:border-emerald-500/20 group-hover:bg-emerald-500/[0.04] transition-all">
                        {r.tag}
                      </span>
                    </div>
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-white mb-3 tracking-tight group-hover:text-white">
                      {r.title}
                    </h3>
                    <p className="text-[15px] text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300 font-normal">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           HOW I WORK — PROCESS
      ═══════════════════════════════════════════ */}
      <section
        id="process"
        className="bg-[#0a0a0a] py-16 sm:py-24 lg:py-32 border-t border-white/[0.04] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 sm:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <div className="mb-4">
                <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                  Engineering Workflow &middot; How I Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                Disciplined Process, <span className="text-emerald-400">Predictable Delivery</span>
              </h2>
            </div>
            <p className="text-[16px] sm:text-[17px] text-gray-200 max-w-lg leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0 font-normal">
              Structured roadmaps, modular architecture, automated CI/CD deployments, and transparent milestone tracking from day one.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative flex flex-col p-7 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-emerald-500/30 hover:bg-[#141414] hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] transition-all duration-300"
              >
                <span className="text-[40px] font-black text-white/[0.12] group-hover:text-emerald-400/30 transition-colors duration-300 leading-none mb-4">
                  {p.step}
                </span>
                <h3 className="text-[17px] sm:text-[18px] font-bold text-white mb-2 tracking-tight">
                  {p.title}
                </h3>
                <div className="w-6 h-px bg-white/20 mb-3 group-hover:w-10 group-hover:bg-emerald-400 transition-all duration-500" />
                <p className="text-[14px] sm:text-[15px] text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
