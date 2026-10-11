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
    title: "8 Production Releases Shipped",
    desc: "Not theoretical prototypes — I have shipped 8 commercial production releases handling real user traffic, live data, and core business transactions.",
  },
  {
    icon: <FiCloud className="w-5 h-5" />,
    title: "AWS & GCP Cloud Architecture",
    desc: "Deep hands-on experience designing cloud infrastructure on AWS and GCP Cloud Run, Docker containers, serverless functions, and secure microservices.",
  },
  {
    icon: <FiCpu className="w-5 h-5" />,
    title: "AI Automation & Model Fine-Tuning",
    desc: "Specialized in fine-tuning, prompt engineering, and integrating models (Gemini, OpenAI, Ollama) directly into business workflows for measurable productivity gains.",
  },
  {
    icon: <FiStar className="w-5 h-5" />,
    title: "80% Infrastructure Cost Reduction",
    desc: "Proven track record of re-architecting systems, optimizing cloud resources, and implementing smart AI pipelines to drastically reduce cloud expenditure.",
  },
  {
    icon: <FiShield className="w-5 h-5" />,
    title: "Full-Stack Ownership: UI → API → Cloud",
    desc: "I bridge the entire lifecycle: modern Next.js/React user interfaces, high-performance FastAPI backends, database schema design, and cloud deployments.",
  },
  {
    icon: <FiBriefcase className="w-5 h-5" />,
    title: "Engineering Discipline & Transparency",
    desc: "Rigorous code quality, modular architecture, comprehensive documentation, and direct, proactive communication with zero ghosting.",
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
    title: "Architecture & AI/Cloud Blueprint",
    desc: "I design the data models, cloud architecture (AWS/GCP), API contracts, and AI workflow integration strategies.",
  },
  {
    step: "03",
    title: "Iterative Build & Benchmarking",
    desc: "Rapid full-stack execution with clean code, frequent milestone demos, performance profiling, and model fine-tuning validation.",
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
        className="bg-[#0a0a0a] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 sm:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Track Record
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">Professional </span>
                <span className="text-emerald-400">Journey</span>
              </h2>
            </div>
            <p className="text-[15px] text-gray-400 max-w-md leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0">
              3+ years architecting enterprise SaaS platforms, AI automation systems, and scalable cloud microservices in production.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative sm:pl-8">
            {/* Vertical timeline line */}
            <div className="absolute left-[10px] top-2 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-emerald-400 via-emerald-500/40 to-transparent hidden sm:block" />

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
                  {/* Dot */}
                  <div className="absolute left-[-21px] top-[26px] hidden sm:flex items-center">
                    <div className="w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-emerald-500/60 group-hover:border-emerald-400 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 shrink-0 z-10" />
                    <div className="w-[21px] h-px bg-gradient-to-r from-emerald-500/40 to-white/[0.04] group-hover:from-emerald-400/60 transition-colors duration-300" />
                  </div>

                  <div className="p-7 sm:p-8 rounded-2xl bg-[#111111] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-[#131313] transition-all duration-400">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.title}
                        </h3>
                        <p className="text-[14px] text-emerald-400/90 font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 text-[10px] font-bold text-gray-300 bg-white/[0.05] border border-white/[0.08] rounded-md uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <span className="text-[12px] text-gray-400 font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-px bg-white/10 mb-5 group-hover:w-16 group-hover:bg-emerald-500/40 transition-all duration-500" />
                    <ul className="space-y-2.5">
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[14px] text-gray-400 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-2 flex-shrink-0" />
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
        className="bg-[#060606] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden"
      >
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/[0.015] blur-[120px] rounded-full translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
            {/* Left: Sticky Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase">
                  Engineering Standards
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                <span className="text-white">Built for Scale, </span>
                <br />
                <span className="text-emerald-400">Delivered with Impact</span>
              </h2>

              <p className="text-[15px] text-gray-400 leading-relaxed max-w-sm mb-8">
                I combine full-stack engineering with cloud infrastructure and applied AI to deliver robust software that accelerates business growth.
              </p>

              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  Discuss Your Architecture &rarr;
                </Link>
              </div>
            </motion.div>

            {/* Right: Reasons Grid */}
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="group flex flex-col gap-5 p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-[#0d0d0d] hover:shadow-[0_0_30px_rgba(52,211,153,0.05)] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight group-hover:text-white">
                      {r.title}
                    </h3>
                    <p className="text-[13px] text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
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
        className="bg-[#0a0a0a] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 sm:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-4 mb-5">
                <span className="w-8 h-px bg-white/20 flex-shrink-0" />
                <p className="text-[11px] uppercase tracking-[0.28em] text-emerald-400 font-bold">
                  Engineering Workflow
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">Disciplined, </span>
                <span className="text-gray-400">Predictable Execution</span>
              </h2>
            </div>
            <p className="text-[15px] text-gray-400 max-w-sm leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0">
              Clear roadmaps, architecture reviews, automated CI/CD releases, and transparent milestone tracking from day one.
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
                className="group relative flex flex-col p-7 rounded-2xl bg-[#111111] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-[#131313] transition-all duration-400"
              >
                <span className="text-[40px] font-black text-white/[0.08] group-hover:text-emerald-400/20 transition-colors duration-300 leading-none mb-4">
                  {p.step}
                </span>
                <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">
                  {p.title}
                </h3>
                <div className="w-6 h-px bg-white/15 mb-3 group-hover:w-10 group-hover:bg-emerald-400 transition-all duration-500" />
                <p className="text-[13px] text-gray-400 leading-relaxed">
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
