"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiBriefcase,
  FiAward,
  FiBookOpen,
  FiCheckCircle,
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
  FiTrendingUp,
  FiTerminal,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

// ── Work Experiences
const EXPERIENCES = [
  {
    role: "Full-Stack Developer",
    company: "Oceaniek Technologies",
    period: "2024 – Present",
    location: "Remote / Hybrid",
    type: "Contract & Technical Partner",
    badge: "Core Engineering Partner",
    summary:
      "Leading technical architecture, full-stack product execution, and high-availability deployments across live commercial products.",
    projects: [
      {
        name: "Oceaniek Stream",
        url: "https://www.oceaniekstream.com/",
        desc: "Commercial OTT streaming platform with video transcoding, subscriber auth, and content catalog infrastructure.",
      },
      {
        name: "ODI Studio",
        url: "https://odi.studio/",
        desc: "Luxury e-commerce with custom auth, Razorpay payments, and automated Delhivery logistics shipping APIs.",
      },
      {
        name: "ShipOnEarth",
        url: "https://shiponearth.online/",
        desc: "Maritime vessel intelligence with Mapbox GL, real-time AIS telemetry, and fleet search engine.",
      },
      {
        name: "Hospital Information System (HIS)",
        desc: "Enterprise hospital management software with full IPD, OPD, pathology, and administrative role portals.",
      },
    ],
    skills: ["Next.js 15", "TypeScript", "Python FastAPI", "Docker", "Node.js", "Payment Gateways", "Live Streaming"],
  },
  {
    role: "Full-Stack Developer",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Jan 2024 – 2026",
    location: "Ludhiana, India",
    type: "Full-Time",
    badge: "8+ Commercial Releases",
    summary:
      "Delivered production web platforms, AI ad creative automations, and multi-cloud analytics infrastructure under strict performance budgets.",
    points: [
      "Engineered full-stack features using Next.js, React, TypeScript, and high-performance Python FastAPI backends.",
      "Architected an automated AI video rendering pipeline generating 1,000+ daily creatives for Facebook & Instagram Ads.",
      "Built high-concurrency GAQL analytics pipelines integrating the Google Ads API to surface real-time video ad telemetry.",
      "Optimized cloud resource allocation, containerized services with Docker, and slashed operating overhead by up to 80%.",
    ],
    skills: ["Next.js", "Python FastAPI", "AI Video Automation", "Google Ads API", "Docker", "PostgreSQL", "Cloud DevOps"],
  },
  {
    role: "Web Developer Executive Intern",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    period: "Sep 2023 – Jan 2024",
    location: "Ludhiana, India",
    type: "Internship",
    badge: "Frontend & Performance",
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
    type: "Internship",
    badge: "Backend & Systems",
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ExperiencePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[600px] h-[600px] bg-white/[0.012] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="mb-4">
            <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
              Track Record &middot; Work History
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Professional <span className="text-emerald-400">Experience</span>
          </h1>

          <p className="mt-5 text-[16px] sm:text-[18px] text-gray-200 leading-[1.65] font-normal">
            3+ years engineering production software — from high-concurrency OTT streaming platforms (Oceaniek Stream)
            and luxury e-commerce with automated logistics (ODI Studio), to AI ad automations and scalable cloud infrastructure.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/[0.08]">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">3+ Yrs</p>
              <p className="text-[13px] text-gray-300 mt-1 font-medium">Full-Stack Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">20+</p>
              <p className="text-[13px] text-gray-300 mt-1 font-medium">Projects Built</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white">E-Commerce</p>
              <p className="text-[13px] text-gray-300 mt-1 font-medium">Stores &amp; Payments</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">AI &amp; SaaS</p>
              <p className="text-[13px] text-gray-300 mt-1 font-medium">Web Apps &amp; Automation</p>
            </div>
          </div>
        </motion.div>

        {/* ── WORK EXPERIENCE TIMELINE ── */}
        <div className="mb-24 sm:mb-32">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Career History
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Engineering Roles &amp; Engagements
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="group relative p-7 sm:p-9 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#111111] transition-all duration-400 shadow-xl overflow-hidden"
              >
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.02] group-hover:bg-emerald-500/[0.06] rounded-full blur-3xl pointer-events-none transition-all duration-500" />

                <div className="relative z-10">
                  {/* Top Meta Line */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-6 pb-6 border-b border-white/[0.06]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-white">
                          {exp.role}
                        </h3>
                        <span className="px-3 py-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/20 rounded-full uppercase tracking-wider">
                          {exp.badge}
                        </span>
                      </div>
                      <p className="text-[17px] font-bold text-emerald-400">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[14px] text-gray-300 font-medium">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <FiCalendar className="w-4 h-4 text-emerald-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                        <FiMapPin className="w-4 h-4 text-gray-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-[16px] text-gray-200 leading-relaxed font-normal mb-6">
                    {exp.summary}
                  </p>

                  {/* Featured Projects Built in Role (if applicable) */}
                  {exp.projects && (
                    <div className="mb-6">
                      <p className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Featured Systems Delivered:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {exp.projects.map((proj) => (
                          <div
                            key={proj.name}
                            className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className="text-[15px] font-bold text-white">
                                {proj.name}
                              </span>
                              {proj.url && (
                                <a
                                  href={proj.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-[12px] font-semibold text-emerald-400 hover:underline"
                                >
                                  <span>Live Platform</span>
                                  <FiExternalLink className="w-3.5 h-3.5" />
                                </a>
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
                    <ul className="space-y-3 mb-6">
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
                  <div className="flex flex-wrap items-center gap-2 pt-2">
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
        </div>

        {/* ── EDUCATION & CERTIFICATIONS (2-COLUMN GRID) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-24 sm:mb-32">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest">
                Academic Foundation
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-8">
              Education Background
            </h2>

            <div className="space-y-5">
              {EDUCATION.map((edu, i) => (
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
            <div className="flex items-center gap-3 mb-6">
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
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/[0.08] mt-6">
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
        </div>

        {/* ── ACHIEVEMENTS & ACTIVITIES ── */}
        <div className="mb-20">
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
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#080808] border border-white/[0.1] hover:border-emerald-500/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-[0.2em] block mb-3">
              Ready to Collaborate
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Have a Project or Architecture to Build?
            </h3>
            <p className="mt-3 text-[15px] sm:text-[16px] text-gray-300 leading-relaxed font-normal">
              From web apps and OTT platforms to cloud infrastructure and AI automations &mdash; let&apos;s build software that accelerates your business.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all shadow-xl shadow-white/10"
            >
              <span>Hire Me</span>
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
