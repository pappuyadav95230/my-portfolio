"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const FEATURED_PROJECTS = [
  {
    title: "LipiLens — AI Script Decoder",
    subtitle: "Fine-Tuned Vision Model for Ancient Script Deciphering",
    description:
      "Trained and deployed a custom vision model that identifies ancient Lipi inscriptions from photos, deciphers historical scripts, extracts character glyphs, and generates semantic multilingual translations.",
    category: "AI & Computer Vision",
    badge: "Trained Vision Model",
    stack: ["Fine-Tuned Vision Model", "Python", "FastAPI", "Next.js", "OCR & NLP"],
    link: "https://lipilens-script-decoder.lovable.app/",
    highlights: [
      "Custom dataset training for historical inscription character recognition",
      "Full-stack automated inference pipeline from photo upload to translated text",
    ],
  },
  {
    title: "CloudLens — Cloud Cost Intelligence",
    subtitle: "Multi-Cloud AWS & GCP Spend Telemetry & FinOps Platform",
    description:
      "Enterprise cost intelligence platform connecting AWS and GCP accounts to monitor granular spend across EC2, Amplify, Cloud Run, and Storage per project with real-time budget forecasting and optimization.",
    category: "Cloud Architecture & FinOps",
    badge: "AWS & GCP Multi-Cloud",
    stack: ["AWS APIs", "GCP Cloud Run", "Next.js", "BigQuery", "Firebase Analytics"],
    link: "https://cloudlens-2d4d1.web.app/",
    highlights: [
      "Project-level cost attribution across multi-region cloud workloads",
      "Real-time telemetry and resource scaling anomaly detection",
    ],
  },
  {
    title: "ShipOnEarth — Maritime Intelligence",
    subtitle: "Real-Time Global Vessel Tracking & Geolocation Engine",
    description:
      "High-throughput maritime intelligence web application enabling real-time vessel search, global ship registry intelligence, and live AIS vessel geolocation tracking rendered on high-performance Mapbox GL layers.",
    category: "Geospatial SaaS",
    badge: "Live AIS Telemetry",
    stack: ["React", "Next.js", "Mapbox GL", "AIS Telemetry", "Node.js", "REST APIs"],
    link: "https://shiponearth.online/",
    highlights: [
      "Real-time AIS position streaming rendered on custom Mapbox geospatial layers",
      "Comprehensive registry search and vessel voyage route tracking",
    ],
  },
  {
    title: "ODI Studio — Luxury E-Commerce Engine",
    subtitle: "End-to-End E-Commerce with Automated Shipping Logistics",
    description:
      "Architected and deployed a luxury fashion e-commerce platform with custom authentication, Razorpay payment gateway integration, automated Delhivery shipping logistics APIs, and live package tracking.",
    category: "Production E-Commerce",
    badge: "Full Logistics Integration",
    stack: ["Next.js", "Node.js", "Express", "Razorpay API", "Delhivery Logistics", "MongoDB"],
    link: "https://odi.studio/",
    highlights: [
      "Seamless Razorpay checkout integration with automated payment reconciliations",
      "Automated Delhivery logistics dispatching, waybill generation & tracking",
    ],
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

export const FeaturedProjects = () => {
  return (
    <section id="featured-work" className="bg-[#080808] py-24 sm:py-32 border-t border-white/[0.04] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/[0.015] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-white/[0.012] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6"
        >
          <div>
            <div className="mb-3">
              <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
                Portfolio &middot; Case Studies
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-[15px] sm:text-[16px] text-gray-300 max-w-md leading-relaxed font-normal">
              A selection of live web applications, e-commerce stores, and custom platforms built and shipped for real businesses.
            </p>
            <Link
              href="/my-projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-emerald-500/40 bg-white/[0.03] hover:bg-white/[0.08] text-[13px] font-bold text-white hover:text-emerald-400 whitespace-nowrap transition-all"
            >
              <span>View All 20+ Projects</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* 2x2 Grid of Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] hover:border-emerald-500/40 hover:bg-[#101010] hover:shadow-[0_0_35px_rgba(52,211,153,0.04)] transition-all duration-400 overflow-hidden"
            >
              {/* Corner ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/[0.08] transition-all duration-500" />

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-bold text-gray-300 bg-white/[0.04] border border-white/[0.08] rounded-md uppercase tracking-wider">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-[13px] font-medium text-emerald-400/90 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-[13px] text-gray-300">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-semibold text-gray-300 bg-white/[0.03] border border-white/[0.07] rounded-md group-hover:border-emerald-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-[13px] font-bold hover:bg-gray-100 active:scale-95 transition-all duration-200"
                >
                  <span>Explore Live Platform</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>

                <span className="text-[12px] text-gray-500 font-medium hidden sm:inline">
                  Production Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip link */}
        <div className="mt-12 text-center">
          <Link
            href="/my-projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.1] hover:border-emerald-500/40 text-gray-300 hover:text-white text-[13px] font-bold transition-all"
          >
            <span>View All 8 Systems (HIS, Stereo 3D AI, LinkedIn Automation &amp; more)</span>
            <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
