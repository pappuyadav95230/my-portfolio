"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiCalendar,
  FiMapPin,
  FiLayers,
  FiCpu,
  FiServer,
  FiCode,
  FiActivity,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";

// ── Work Experiences
const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Oceaniek Technologies",
    period: "2024 – Present",
    location: "Mohali ,Chandigarh , India",
    badge: "Core Engineering Partner",
    badgeType: "emerald",
    summary:
      "Leading technical architecture, full-stack product execution, and high-availability cloud deployments across live commercial products.",
    projects: [
      {
        name: "Oceaniek Stream",
        url: "https://www.oceaniekstream.com/",
        tag: "OTT Video Streaming",
        desc: "Commercial streaming platform with adaptive video transcoding, subscription auth, and scalable content catalog infrastructure.",
      },
      {
        name: "ODI Studio",
        url: "https://odi.studio/",
        tag: "E-Commerce & Logistics",
        desc: "Luxury e-commerce with custom auth, Razorpay payments, and automated Delhivery shipping logistics APIs.",
      },
      {
        name: "ShipOnEarth",
        url: "https://shiponearth.online/",
        tag: "Maritime Telemetry",
        desc: "Live maritime vessel intelligence platform with Mapbox GL, real-time AIS telemetry, and fleet search engine.",
      },
      {
        name: "Hospital Information System (HIS)",
        tag: "Healthcare ERP",
        desc: "Enterprise hospital management software with full IPD, OPD, pathology, and administrative role portals.",
      },
    ],
    skills: [
      "Next.js 15",
      "TypeScript",
      "Python FastAPI",
      "Docker",
      "Node.js",
      "Razorpay",
      "Delhivery APIs",
      "Mapbox GL",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Jan 2024 – 2026",
    location: "Ludhiana, India",
    badge: "8+ Commercial Releases",
    badgeType: "emerald",
    summary:
      "Delivered production web platforms, AI ad creative automations, and multi-cloud analytics infrastructure under strict performance budgets.",
    points: [
      "Engineered full-stack features using Next.js, React, TypeScript, and high-performance Python FastAPI backends.",
      "Architected an automated AI video rendering pipeline generating 1,000+ daily creatives for Facebook & Instagram Ads.",
      "Built high-concurrency GAQL analytics pipelines integrating the Google Ads API to surface real-time video ad telemetry.",
      "Optimized cloud resource allocation, containerized services with Docker, and slashed operating overhead by up to 80%.",
    ],
    skills: [
      "Next.js",
      "Python FastAPI",
      "AI Video Automation",
      "Google Ads GAQL",
      "Docker",
      "PostgreSQL",
      "Cloud Run",
    ],
  },
  {
    role: "Web Developer Executive Intern",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Sep 2023 – Jan 2024",
    location: "Ludhiana, India",
    badge: "Frontend & Performance",
    badgeType: "gray",
    summary:
      "Developed responsive client user interfaces, improved Core Web Vitals, and maintained core customer-facing web products.",
    points: [
      "Built responsive, mobile-first web pages using modern HTML5, CSS3, and JavaScript.",
      "Optimized technical SEO architectures, canonical sitemaps, and Core Web Vitals for production client websites.",
      "Assisted senior engineers in refactoring legacy components into reusable modular frontend blocks.",
    ],
    skills: ["JavaScript", "HTML5/CSS3", "Responsive UI", "SEO Optimization", "Git & GitHub"],
  },
  {
    role: "Python Developer Intern",
    company: "Softwizz Pvt. Ltd.",
    period: "Jul 2022 – Aug 2022",
    location: "Punjab, India",
    badge: "Backend & Systems",
    badgeType: "gray",
    summary:
      "Constructed foundational desktop database applications and structured relational schema models.",
    points: [
      "Engineered an automated Library Management System with Python Tkinter and MySQL database storage.",
      "Implemented transactional data models for member issue/return workflows and inventory reporting.",
    ],
    skills: ["Python", "Tkinter", "MySQL", "Database Schema Design"],
  },
];

// ── Education
const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Shaheed Bhagat Singh State Technical Campus",
    period: "2020 – 2024",
    grade: "CGPA: 8.01 / 10",
    summary:
      "Deep foundation in Data Structures, Algorithms, Database Management Systems, Distributed Systems, Computer Networks, and Cloud Computing.",
  },
  {
    degree: "Senior Secondary (Class XII - Science)",
    institution: "Shaheed Bhagat Singh Inter College (BSEB)",
    period: "2016 – 2018",
    grade: "First Division",
    summary: "Physics, Chemistry, and Advanced Mathematics.",
  },
  {
    degree: "Secondary School (Class X)",
    institution: "G.J.P High School Sani-basantpur (BSEB)",
    period: "2015",
    grade: "First Division (72.4%)",
    summary: "General Sciences, Mathematics, and Computer Studies.",
  },
];

// ── Certifications
const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development",
    issuer: "Apna College",
    skills: "Next.js, React, Node.js, Express, MongoDB, REST APIs",
  },
  {
    title: "Data Structures & Algorithms in C++",
    issuer: "CodeHelp",
    skills: "Problem Solving, Trees, Graphs, Dynamic Programming, Time Complexity",
  },
  {
    title: "Python Systems & Core Programming",
    issuer: "Softwizz Pvt. Ltd.",
    skills: "Object-Oriented Programming, Scripting, MySQL Integration",
  },
];

// ── Achievements & Hackathons
const ACHIEVEMENTS = [
  {
    title: "Team Lead — Smart India Hackathon (SIH)",
    year: "2023",
    desc: "Led a university engineering team in designing and pitching a digital solution for public sector governance challenges.",
  },
  {
    title: "4-Star Fraternity Engineering Ranking",
    year: "Honors",
    desc: "Achieved the highest possible 4-star tier awarded by the Office of Student Affairs for academic and technical leadership.",
  },
  {
    title: "Core Member — GDG (Google Developer Group)",
    year: "2023 – 2024",
    desc: "Active organizer for local tech workshops focused on Gemini models, generative AI APIs, and cloud deployments.",
  },
  {
    title: "Google Developer Student Clubs (GDSC)",
    year: "2023",
    desc: "Mentored peers in modern JavaScript and full-stack web application development.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION: PREMIUM HIGH-IMPACT 2-COLUMN SPLIT (NO IMAGES)
          Left: Bold Typography & CTAs
          Right: Live Engineering Telemetry Terminal & System Highlights
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="experience-hero"
        className="relative bg-[#0a0a0a] overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20"
      >
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/[0.04] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[450px] bg-white/[0.015] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* ── LEFT COLUMN: HEADLINE & STORY ── */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 tracking-[0.22em] uppercase">
                  Track Record &middot; Work History
                </span>
              </motion.div>

              {/* Bold Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-black leading-[1.06] tracking-tight text-white text-[38px] sm:text-[54px] lg:text-[64px]"
              >
                Proven Track Record
                <br />
                <span className="text-white">In High-Impact</span>
                <br />
                <span className="text-emerald-400">Engineering.</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 sm:mt-7 text-[16px] sm:text-[18px] text-gray-200 leading-[1.65] max-w-xl font-normal"
              >
                3+ years engineering production software — from high-concurrency OTT streaming platforms (Oceaniek Stream) and luxury e-commerce with automated logistics (ODI Studio), to AI video automations and multi-cloud backends.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <a
                  href="#roles-section"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md shadow-white/5"
                >
                  <span>Explore Career Roles</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/my-projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all duration-200"
                >
                  <span>Live Project Case Studies</span>
                  <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: SYSTEM TELEMETRY TERMINAL & ARCHITECTURE HIGHLIGHTS ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative p-6 sm:p-7 rounded-3xl bg-[#0d0d0d] border border-white/[0.1] hover:border-emerald-500/30 transition-all duration-300 shadow-2xl">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />

                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[12px] font-mono text-gray-400">production-telemetry.sys</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/[0.08] px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    LIVE STATUS
                  </span>
                </div>

                {/* Telemetry Points */}
                <div className="space-y-4">

                  {/* Item 1: Hospital Information System (HIS) */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[13px] font-bold text-white flex items-center gap-2">
                        <FiLayers className="w-4 h-4 text-emerald-400" />
                        Hospital Information System (HIS)
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">Enterprise ERP</span>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      Multi-portal healthcare platform: IPD, OPD, pathology, doctor scheduling &amp; role-based administration.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[13px] font-bold text-white flex items-center gap-2">
                        <FiCode className="w-4 h-4 text-emerald-400" />
                        ODI Studio (E-Commerce)
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">Automated</span>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      Razorpay payments checkout &amp; real-time automated Delhivery shipping logistics APIs.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[13px] font-bold text-white flex items-center gap-2">
                        <FiCpu className="w-4 h-4 text-emerald-400" />
                        AI Video Ad Automation
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">1,000+ / Day</span>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      High-volume programmatic video generation pipeline with Google Ads GAQL analytics.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[13px] font-bold text-white flex items-center gap-2">
                        <FiServer className="w-4 h-4 text-emerald-400" />
                        Cloud &amp; DevOps Optimization
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">-80% Overhead</span>
                    </div>
                    <p className="text-[12px] text-gray-300">
                      Docker containerization, GCP Cloud Run &amp; AWS microservices cost slashed by 80%.
                    </p>
                  </div>

                </div>

                {/* Footer strip of the card */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[12px] text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Production Ready
                  </span>
                  <span className="font-mono text-emerald-400">Full-Stack &middot; DevOps &middot; AI</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PRODUCTION PROOF METRICS STRIP (IDENTICAL TO HOMEPAGE)
          ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#080808] border-y border-white/[0.06] py-6 sm:py-7 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">

            {/* Metric 1 */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                3+ Yrs
              </span>
              <span className="text-[12px] sm:text-[13px] text-gray-400 font-medium mt-1.5">
                Full-Stack Experience
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col sm:border-l sm:border-white/[0.08] sm:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                20+
              </span>
              <span className="text-[12px] sm:text-[13px] text-gray-400 font-medium mt-1.5">
                Projects Built
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col md:border-l md:border-white/[0.08] md:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                E-Commerce
              </span>
              <span className="text-[12px] sm:text-[13px] text-gray-400 font-medium mt-1.5">
                Stores &amp; Payments
              </span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col sm:border-l sm:border-white/[0.08] sm:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight leading-none">
                AI &amp; SaaS
              </span>
              <span className="text-[12px] sm:text-[13px] text-gray-400 font-medium mt-1.5">
                Web Apps &amp; Automations
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MAIN CONTENT AREA: ROLES, EDUCATION, CERTIFICATIONS, CTA
          ══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 pb-20 relative z-10">

        {/* ── WORK EXPERIENCE SECTION ── */}
        <section id="roles-section" className="mb-24 sm:mb-32">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Career History
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Engineering Roles &amp; Engagements
              </h2>
            </div>
            <p className="text-[14px] text-gray-400 max-w-md font-normal">
              Direct engineering ownership across real revenue-generating platforms, production users, and modern cloud stacks.
            </p>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative p-7 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#111111] transition-all duration-300 shadow-2xl overflow-hidden"
              >
                {/* Ambient glow on hover */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.02] group-hover:bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none transition-all duration-500" />

                <div className="relative z-10">
                  {/* Top Meta Line */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span
                          className={`px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider ${exp.badgeType === "emerald"
                            ? "text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/20"
                            : "text-gray-300 bg-white/[0.04] border border-white/[0.1]"
                            }`}
                        >
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-[17px] sm:text-[18px] font-bold text-emerald-400">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[14px] text-gray-300 font-medium">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <FiCalendar className="w-4 h-4 text-emerald-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <FiMapPin className="w-4 h-4 text-gray-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-[16px] sm:text-[17px] text-gray-200 leading-relaxed font-normal mb-7">
                    {exp.summary}
                  </p>

                  {/* Featured Projects Built in Role (if applicable) */}
                  {exp.projects && (
                    <div className="mb-7">
                      <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-3.5">
                        Live Platforms &amp; Systems Delivered:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {exp.projects.map((proj) => (
                          <div
                            key={proj.name}
                            className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.03] transition-all"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-[15px] sm:text-[16px] font-bold text-white">
                                {proj.name}
                              </span>
                              {proj.url ? (
                                <a
                                  href={proj.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-emerald-400 hover:underline shrink-0"
                                >
                                  <span>Live Platform</span>
                                  <FiExternalLink className="w-3.5 h-3.5" />
                                </a>
                              ) : (
                                <span className="text-[11px] font-medium text-gray-400 px-2 py-0.5 rounded bg-white/[0.04]">
                                  {proj.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[13px] sm:text-[14px] text-gray-300 leading-relaxed">
                              {proj.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities Bullets (if applicable) */}
                  {exp.points && (
                    <ul className="space-y-3 mb-7">
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[15px] sm:text-[16px] text-gray-200 leading-relaxed font-normal"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.04]">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-[12px] font-semibold text-gray-300 bg-white/[0.04] border border-white/[0.07] group-hover:border-white/[0.12] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION & CERTIFICATIONS (2-COLUMN GRID) ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-24 sm:mb-32">

          {/* Left Column: Education */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest">
                Academic Foundation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">
              Education Background
            </h2>

            <div className="space-y-5">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-[13px] font-semibold text-emerald-400 shrink-0">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-[15px] text-gray-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-[13px] text-gray-400 mb-3 font-mono">
                    {edu.period}
                  </p>
                  <p className="text-[14px] text-gray-300 leading-relaxed">
                    {edu.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest">
                Specialized Training
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">
              Professional Certifications
            </h2>

            <div className="space-y-5">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="text-[17px] font-bold text-white">
                      {cert.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/[0.08] text-emerald-400 border border-emerald-500/20">
                      Verified
                    </span>
                  </div>
                  <p className="text-[14px] text-emerald-400 font-medium mb-2">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-[13px] text-gray-300 leading-relaxed">
                    {cert.skills}
                  </p>
                </div>
              ))}

              {/* Direct Link to Verified Projects */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/[0.08] mt-6">
                <h4 className="text-[16px] font-bold text-white mb-2">
                  Looking for Proof of Execution?
                </h4>
                <p className="text-[14px] text-gray-300 leading-relaxed mb-4">
                  Explore full case studies with live URLs and GitHub source repositories across 20+ applications.
                </p>
                <Link
                  href="/my-projects"
                  className="inline-flex items-center gap-2 text-[14px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Browse Project Case Studies</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS & ACTIVITIES ── */}
        <section className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Leadership &middot; Community
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Achievements &amp; Activities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/[0.08] border border-emerald-500/20">
                      {ach.year}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2 leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-[13px] text-gray-300 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>



      </div>
    </div>
  );
}
