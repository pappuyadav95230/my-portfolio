"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCode,
  FiCloud,
  FiCpu,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowUpRight,
  FiPhone,
} from "react-icons/fi";

const SERVICES_CATALOG = [
  {
    icon: <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    badge: "Full-Stack Web & E-Commerce",
    title: "Custom Web Applications & E-Commerce Systems",
    subtitle: "Built from Scratch & Production Ready",
    description:
      "End-to-end web engineering for startups and modern businesses. From high-conversion e-commerce storefronts (like ODI Studio with Razorpay and Delhivery shipping APIs) to custom role-based admin portals, SaaS products, and hospital management software.",
    deliverables: [
      "Custom Next.js & React Web Applications",
      "E-Commerce Stores with Razorpay & Stripe Checkout",
      "Automated Shipping & Delivery Logistics APIs (Delhivery)",
      "Role-Based Manager, Admin & Customer Dashboards",
    ],
  },
  {
    icon: <FiCloud className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    badge: "Cloud DevOps & Architecture",
    title: "Cloud Infrastructure, DevOps & Cost Optimization",
    subtitle: "Zero-Downtime, Secure & High Availability",
    description:
      "Turnkey domain setup, SSL security, and modern cloud deployment on AWS and Google Cloud (Cloud Run). Docker containerization, automated transactional database backups, and smart infra rightsizing that slashes monthly server costs by up to 80%.",
    deliverables: [
      "AWS & GCP Cloud Setup, Migration & Auto-scaling",
      "Docker Containerization & CI/CD Pipelines",
      "Automated Daily Database Backups & SSL Security",
      "80% Cloud & Server Overhead Cost Reduction",
    ],
  },
  {
    icon: <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    badge: "AI & Workflow Automation",
    title: "AI Workflows & Business Operations Automation",
    subtitle: "Eliminate Manual Repetitive Operations",
    description:
      "Automate manual business tasks with intelligent AI agents (Gemini & OpenAI) and backend webhook triggers. Instant lead qualification, automated WhatsApp and email outreach, and real-time CRM data synchronization so your operations run 24/7.",
    deliverables: [
      "AI Customer Support & Smart Lead Qualifiers",
      "Automated WhatsApp & Email Follow-up Funnels",
      "Real-Time CRM & Google Sheets Data Webhooks",
      "Domain-Specific Model Prompting & Document Extraction",
    ],
  },
  {
    icon: <FiTrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
    badge: "Performance Marketing & Growth",
    title: "Google Ads, Video Campaign Automation & SEO",
    subtitle: "Targeted Customer Acquisition & Organic Growth",
    description:
      "Having engineered ad automations handling 1,000+ daily creatives with the Google Ads API, I help businesses plan and execute high-ROI marketing funnels. From automated video creatives to high-intent Google Search ads, technical SEO sitemaps, and Core Web Vitals optimization.",
    deliverables: [
      "Google Ads (Search, Display & YouTube) Campaign Management",
      "Automated Video Creative Pipelines for Meta & Google Ads",
      "Technical SEO Architecture, Canonical Sitemaps & Core Web Vitals",
      "Strategic Marketing Roadmaps & GAQL Conversion Telemetry",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We analyze your business model, target market, and operational bottlenecks to define clear deliverables, milestones, and timelines.",
  },
  {
    step: "02",
    title: "Architecture & Code",
    desc: "I build your web platform and backend pipelines with weekly staging demos so you see tangible progress every sprint.",
  },
  {
    step: "03",
    title: "Cloud & Automation",
    desc: "Your system goes live on AWS/GCP with secure SSL, automated backups, and integrated lead/payment webhooks.",
  },
  {
    step: "04",
    title: "Growth & Guidance",
    desc: "We roll out targeted Google/Meta ad funnels and technical SEO for sustainable traffic, with continuous engineering support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      
      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION: MOBILE-OPTIMIZED & DESKTOP SPLIT
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="services-hero"
        className="relative bg-[#0a0a0a] overflow-hidden pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 border-b border-white/[0.06]"
      >
        {/* Ambient lighting glows */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-emerald-500/[0.04] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 right-5 w-[300px] sm:w-[500px] h-[300px] sm:h-[450px] bg-white/[0.015] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
            
            {/* ── LEFT COLUMN: HEADLINE & NARRATIVE ── */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 sm:mb-5 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-emerald-400 tracking-[0.18em] sm:tracking-[0.22em] uppercase">
                  End-to-End Technical Solutions
                </span>
              </motion.div>

              {/* Responsive Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-black leading-[1.08] sm:leading-[1.06] tracking-tight text-white text-[32px] xs:text-[38px] sm:text-[50px] md:text-[56px] lg:text-[64px]"
              >
                Full-Stack Product
                <br />
                <span className="text-white">Engineering &amp;</span>
                <br />
                <span className="text-emerald-400">Growth Architecture.</span>
              </motion.h1>

              {/* Professional Narrative */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] md:text-[18px] text-gray-200 leading-[1.6] sm:leading-[1.65] max-w-xl font-normal"
              >
                Serving as your end-to-end technical partner &mdash; architecting high-performance web applications, reliable cloud infrastructure, intelligent AI automations, and data-driven ad acquisition funnels built for measurable business growth.
              </motion.p>

              {/* Action Buttons: Stack cleanly on mobile, inline on sm+ */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
              >
                <a
                  href="#services-catalog"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-[14px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md shadow-white/5 text-center"
                >
                  <span>Explore Solutions</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all duration-200 text-center"
                >
                  <span>Request Project Scope</span>
                  <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN: CAPABILITY OVERVIEW CONSOLE ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.1] hover:border-emerald-500/30 transition-all duration-300 shadow-2xl">
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-40 sm:w-48 h-40 sm:h-48 bg-emerald-500/[0.05] rounded-full blur-3xl pointer-events-none" />

                {/* Console Bar */}
                <div className="flex items-center justify-between pb-3.5 sm:pb-4 mb-4 sm:mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-[12px] font-mono text-gray-400 truncate max-w-[150px] sm:max-w-none">
                      capabilities.sys
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 bg-emerald-500/[0.08] px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-3.5">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[13px] sm:text-[14px] font-bold text-white flex items-center gap-2">
                        <FiCode className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                        Custom Web &amp; E-Commerce
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400">Next.js &middot; FastAPI</span>
                    </div>
                    <p className="text-[11.5px] sm:text-[12px] text-gray-300 leading-snug">
                      Razorpay payments, automated shipping logistics &amp; enterprise admin dashboards.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[13px] sm:text-[14px] font-bold text-white flex items-center gap-2">
                        <FiCloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                        Cloud DevOps &amp; Deployments
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400">AWS &middot; GCP &middot; Docker</span>
                    </div>
                    <p className="text-[11.5px] sm:text-[12px] text-gray-300 leading-snug">
                      High-availability hosting, automated backups &amp; up to 80% cost reduction.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[13px] sm:text-[14px] font-bold text-white flex items-center gap-2">
                        <FiCpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                        AI Workflows &amp; Automations
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400">LLM &middot; Webhooks</span>
                    </div>
                    <p className="text-[11.5px] sm:text-[12px] text-gray-300 leading-snug">
                      Automated lead responders, WhatsApp/Email flows &amp; CRM data synchronization.
                    </p>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="text-[13px] sm:text-[14px] font-bold text-white flex items-center gap-2">
                        <FiTrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                        Google Ads, Campaigns &amp; SEO
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400">High ROI</span>
                    </div>
                    <p className="text-[11.5px] sm:text-[12px] text-gray-300 leading-snug">
                      AI video creatives, Google search/display ads &amp; technical organic SEO guidance.
                    </p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] sm:text-[12px] text-gray-400">
                  <span className="flex items-center gap-1.5 text-gray-300 font-medium">
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Turnkey Delivery
                  </span>
                  <span className="font-mono text-emerald-400 text-[10px] sm:text-[11px]">Direct Engineer &middot; Zero Agencies</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CORE SERVICES CATALOG: 4 FOCUSED PILLARS (RESPONSIVE GRID)
          ══════════════════════════════════════════════════════════════════ */}
      <section id="services-catalog" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 pb-5 sm:pb-6 border-b border-white/[0.08]">
          <div>
            <span className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              Capabilities
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Specialized Solutions Catalog
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] text-gray-400 max-w-md font-normal">
            Every engagement includes complete code ownership, zero agency middlemen, and direct engineering access.
          </p>
        </div>

        {/* 2-column on md+, 1-column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28 lg:mb-32">
          {SERVICES_CATALOG.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#101010] transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors shrink-0">
                    {s.icon}
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/20 rounded-full uppercase tracking-wider text-right">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {s.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-emerald-400 font-medium mt-1 mb-3.5 sm:mb-4">
                  {s.subtitle}
                </p>
                <p className="text-[14px] sm:text-[15px] text-gray-300 leading-relaxed mb-6 font-normal">
                  {s.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 sm:space-y-3 pt-4 sm:pt-5 border-t border-white/[0.06] mb-6 sm:mb-8">
                  {s.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] text-gray-200">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 sm:mt-1 shrink-0" />
                      <span className="leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl bg-white/[0.03] hover:bg-white text-gray-200 hover:text-black font-bold text-[13px] sm:text-[14px] border border-white/10 hover:border-white transition-all duration-200 text-center"
              >
                <span>Consult on This Service</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── HOW WE WORK TOGETHER (TRANSPARENT PROCESS - RESPONSIVE) ── */}
        <section className="p-6 sm:p-10 md:p-12 lg:p-14 rounded-2xl sm:rounded-3xl bg-[#0e0e0e] border border-white/[0.08]">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-[12px] font-bold text-emerald-400 uppercase tracking-widest block mb-2.5 sm:mb-3">
              Transparent Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              From Concept to Profitable Launch
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px] text-gray-300 leading-relaxed">
              No endless agency meetings or bureaucratic delays. Just rapid, milestone-driven execution with weekly staging demos.
            </p>
          </div>

          {/* 1 col on mobile, 2 col on sm, 4 col on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all"
              >
                <span className="text-2xl sm:text-3xl font-black text-emerald-400/90 leading-none block mb-2 sm:mb-3 font-mono">
                  {step.step}
                </span>
                <h3 className="text-[16px] sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-[12.5px] sm:text-[13px] text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </section>

    </div>
  );
}
