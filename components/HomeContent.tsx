"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiBriefcase, FiCheckCircle, FiStar, FiZap, FiShield, FiMessageCircle, FiCloud } from "react-icons/fi";

// ── Work Experience
const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "Oceaniek Technologies",
    period: "Apr 2026 – Present",
    type: "Full-Time",
    points: [
      "Building production-grade SaaS platforms and scalable cloud-based architectures.",
      "Developing AI-powered automation systems and analytics dashboards on GCP.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Jan 2024 – Mar 2026",
    type: "Full-Time",
    points: [
      "Shipped full-stack features across 8 production releases using Next.js and FastAPI.",
      "Built a GAQL-based video campaign analytics dashboard using Google Ads API with reusable React components and multi-query analytics pipelines.",
      "Developed an AI-powered video automation platform handling 1,000+ daily requests across Facebook & Instagram ad workflows.",
      "Architected a Packers & Movers platform managing 900+ daily leads with Gemini AI — reducing infra costs by 80% and deployment time by 70%.",
      "Built Shopify Admin API automation for dynamic collection provisioning, product metadata sync, and metafield-based filters.",
      "Deployed containerized backends on GCP Cloud Run and integrated Ollama for on-premise LLM inference.",
      "Resolved 20+ critical bugs and improved task success rate by 12%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Sep 2023 – Jan 2024",
    type: "Internship",
    points: [
      "Built React.js frontend applications integrated with Google Apps Script for automated data collection pipelines.",
      "Developed an EV car booking platform using Next.js with Firebase real-time booking state and auth.",
      "Deployed and hosted applications on Firebase with CI/CD configuration.",
    ],
  },
  {
    title: "Python Developer Intern",
    company: "Softwizz Pvt. Ltd.",
    period: "Jul 2022 – Aug 2022",
    type: "Internship",
    points: [
      "Built a Library Management System using Python Tkinter and MySQL with user-friendly forms for issue/return tracking.",
    ],
  },
];

// ── Why Hire Me
const REASONS = [
  {
    icon: <FiZap className="w-5 h-5" />,
    title: "8 Production Releases Shipped",
    desc: "Not just code — I've shipped 8 full production releases with real users, real traffic, and real business impact.",
  },
  {
    icon: <FiCloud className="w-5 h-5" />,
    title: "AWS & GCP Cloud Architecture",
    desc: "Designed and deployed scalable, secure, and highly available cloud infrastructure across AWS and Google Cloud Platform.",
  },
  {
    icon: <FiStar className="w-5 h-5" />,
    title: "80% Infrastructure Cost Reduction",
    desc: "Architected a lead platform managing 900+ daily leads and cut infrastructure costs by 80% with Gemini AI automation.",
  },
  {
    icon: <FiShield className="w-5 h-5" />,
    title: "Full Stack → Cloud → AI",
    desc: "I own the entire pipeline: React/Next.js frontends, FastAPI/Node backends, GCP deployments, and LLM integrations.",
  },
  {
    icon: <FiMessageCircle className="w-5 h-5" />,
    title: "Google Ads API & GAQL Expert",
    desc: "Built GAQL-based analytics dashboards and AI-powered ad optimization systems that push optimized copy to live campaigns.",
  },
  {
    icon: <FiBriefcase className="w-5 h-5" />,
    title: "Clear Communication, Zero Ghosting",
    desc: "You'll always know where the project stands. Regular updates, quick replies, and transparent progress tracking.",
  },
];

// ── How I Work
const PROCESS = [
  { step: "01", title: "Discovery Call", desc: "We align on your vision, goals, and project scope in a free consultation." },
  { step: "02", title: "Proposal & Plan", desc: "I send a detailed proposal with timeline, pricing, and deliverables." },
  { step: "03", title: "Design & Build", desc: "I design and develop your product with regular check-ins and demos." },
  { step: "04", title: "Launch & Support", desc: "We go live. I provide post-launch support to ensure everything runs perfectly." },
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
      <section id="experience" className="bg-[#0a0a0a] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden">
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-emerald-500">Professional </span>
                <span className="text-white">Journey</span>
              </h2>
            </div>
            <p className="text-[15px] text-gray-400 max-w-sm leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0">
              3+ years building real-world SaaS products, AI systems, and cloud architectures in production.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative sm:pl-8">
            {/* Vertical line — sits on left-[11px] so it passes through the center of dots */}
            <div className="absolute left-[10px] top-2 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-transparent hidden sm:block" />

            <div className="space-y-5">
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
                  {/* Dot — centered on the line at left-[11px] */}
                  <div className="absolute left-[-21px] top-[26px] hidden sm:flex items-center">
                    {/* Dot */}
                    <div className="w-[11px] h-[11px] rounded-full bg-[#0a0a0a] border-2 border-emerald-500/60 group-hover:border-emerald-400 group-hover:bg-emerald-500/10 group-hover:shadow-[0_0_8px_rgba(52,211,153,0.4)] transition-all duration-300 shrink-0 z-10" />
                    {/* Horizontal arm connecting dot → card */}
                    <div className="w-[21px] h-px bg-gradient-to-r from-emerald-500/40 to-white/[0.04] group-hover:from-emerald-400/60 transition-colors duration-300" />
                  </div>

                  <div className="p-7 rounded-2xl bg-[#111111] border border-white/[0.06] hover:border-white/[0.14] hover:bg-[#141414] transition-all duration-400">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">{exp.title}</h3>
                        <p className="text-[14px] text-gray-400 mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        <span className="px-2.5 py-1 text-[10px] font-bold text-gray-400 bg-white/[0.04] border border-white/[0.06] rounded-md uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <span className="text-[12px] text-gray-500 font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <div className="w-8 h-px bg-white/10 mb-4 group-hover:w-14 transition-all duration-500" />
                    <ul className="space-y-2">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] text-gray-500 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                          {pt}
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
           WHY HIRE ME
      ═══════════════════════════════════════════ */}
      <section id="why-hire-me" className="bg-[#060606] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-white/[0.012] blur-[120px] rounded-full translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14 relative z-10">
          {/* Side-by-Side Layout */}
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
                  Why Work With Me
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6">
                <span className="text-white">The Freelancer </span>
                <br />
                <span className="text-emerald-500">
                  You Actually Need
                </span>
              </h2>

              <p className="text-[15px] text-gray-400 leading-relaxed max-w-sm">
                Not just a developer — a partner who cares about your business outcome as much as you do. Built for scale, delivered with quality.
              </p>
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
                  className="group flex flex-col gap-5 p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-[#0c0c0c] hover:shadow-[0_0_30px_rgba(52,211,153,0.05)] transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight group-hover:text-emerald-50">{r.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">{r.desc}</p>
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
      <section id="process" className="bg-[#0a0a0a] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden">
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
                <p className="text-[11px] uppercase tracking-[0.28em] text-gray-500 font-bold">How I Work</p>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                <span className="text-white">Simple, </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-semibold">Transparent Process</span>
              </h2>
            </div>
            <p className="text-[15px] text-gray-400 max-w-sm leading-relaxed lg:pb-2 mx-auto sm:mx-0 lg:mx-0">
              No surprises, no scope creep. A proven workflow that gets your project delivered on time.
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
                className="group relative flex flex-col p-7 rounded-2xl bg-[#111111] border border-white/[0.06] hover:border-white/[0.13] hover:bg-[#141414] transition-all duration-400"
              >
                <span className="text-[42px] font-black text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-300 leading-none mb-4">
                  {p.step}
                </span>
                <h3 className="text-[16px] font-bold text-white mb-2 tracking-tight">{p.title}</h3>
                <div className="w-6 h-px bg-white/15 mb-3 group-hover:w-10 transition-all duration-500" />
                <p className="text-[13px] text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
};

export default HomeContent;
