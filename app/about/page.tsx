"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiArrowUpRight,
  FiCode,
  FiCpu,
  FiVideo,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiZap,
  FiPhone,
} from "react-icons/fi";

// ── What I Offer to Businesses (Solo Agency Model)
const AGENCY_SERVICES = [
  {
    icon: <FiCode className="w-6 h-6 text-emerald-400" />,
    title: "Custom Web & SaaS Development",
    subtitle: "Built from Scratch & Production Ready",
    desc: "Complete end-to-end web apps, admin portals, and customer-facing platforms using Next.js 15, React, and Python FastAPI. No slow templates — clean, scalable, fast architecture.",
    deliverables: ["Custom Business Web Apps", "E-Commerce with Razorpay & Logistics", "Role-Based Admin Dashboards", "SEO & Core Web Vitals Optimization"],
  },
  {
    icon: <FiGlobe className="w-6 h-6 text-emerald-400" />,
    title: "Cloud Deployment & Hosting",
    subtitle: "Zero-Downtime Infrastructure",
    desc: "I handle everything from domain setup and SSL to deploying containerized backends on AWS and Google Cloud (Cloud Run). Secure, auto-scaling, and cost-optimized.",
    deliverables: ["AWS & GCP Cloud Setup", "Custom Domain & SSL Configuration", "Automated Database Backups", "Infra Cost Optimization (~80% saved)"],
  },
  {
    icon: <FiCpu className="w-6 h-6 text-emerald-400" />,
    title: "AI Workflows & Business Automation",
    subtitle: "Eliminate Manual Repetitive Work",
    desc: "Automate leads collection, WhatsApp/Email follow-ups, and repetitive business tasks with customized AI agents (Gemini & OpenAI) and automated backend webhooks.",
    deliverables: ["AI Chatbots & Lead Qualifiers", "CRM & Google Sheets Auto-Sync", "WhatsApp / Email Autoresponders", "Domain-Specific Model Fine-Tuning"],
  },
  {
    icon: <FiVideo className="w-6 h-6 text-emerald-400" />,
    title: "Video Ads & Meta / Google Campaigns",
    subtitle: "Automated Creative & High-ROI Ads",
    desc: "Having built ad automation handling 1,000+ daily creatives with the Google Ads API, I help businesses launch, track, and optimize high-converting video ad campaigns on Meta & Google.",
    deliverables: ["AI-Assisted Video Ad Generation", "Google Ads & Meta Campaign Strategy", "High-Converting Landing Pages", "GAQL Analytics & Conversion Tracking"],
  },
];

// ── Why Hire Me Over an Agency
const AGENCY_ADVANTAGES = [
  {
    title: "Direct Access — No Middlemen",
    desc: "In big agencies, your project gets passed to junior interns while account managers give excuses. With me, you work directly with the senior engineer building your product.",
  },
  {
    title: "Turnkey Ownership (Code to Ads)",
    desc: "You don't need to hire a developer, a cloud DevOps guy, and a marketing specialist separately. I handle the web app, the cloud deployment, and the ad campaign.",
  },
  {
    title: "Production Proven (8+ Shipped Releases)",
    desc: "Built actual commercial systems handling thousands of live users: e-commerce (ODI Studio), maritime tracking (ShipOnEarth), healthcare ERPs (HIS), and AI decoders (LipiLens).",
  },
  {
    title: "Transparent Pricing & Fixed Timelines",
    desc: "Clear milestones, fixed budgets, weekly staging demos, zero hidden fees, and lifetime clean documentation so you actually own your code and accounts.",
  },
];

// ── Milestones Timeline
const MILESTONES = [
  {
    year: "2024 – Present",
    role: "Full-Stack Developer",
    company: "Oceaniek Technologies",
    summary: "Architecting & managing client platforms including Oceaniek Stream (oceaniekstream.com), luxury e-commerce (ODI Studio with Delhivery logistics), live maritime tracking (ShipOnEarth with Mapbox GL), and hospital ERP software (HIS).",
  },
  {
    year: "2024 – 2026",
    role: "Full Stack Developer",
    company: "Alphanumeric Ideas Pvt. Ltd.",
    summary: "Shipped 8 production releases. Built AI video automation processing 1,000+ daily ads, GAQL analytics dashboards for Google Ads, and cut cloud costs by 80% for 900+ daily lead platform.",
  },
  {
    year: "2020 – 2024",
    role: "B.Tech in Computer Science & Engineering",
    company: "SBS State Technical Campus (CGPA: 8.01)",
    summary: "Strong computer science fundamentals, data structures, algorithms, and distributed systems architecture.",
  },
];

export const About = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[600px] h-[600px] bg-white/[0.012] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ── HERO INTRODUCTION SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24 sm:mb-32">
          
          {/* Left Column: Story & Agency Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="mb-4 sm:mb-5">
              <span className="text-[13px] sm:text-[15px] font-bold text-emerald-400 uppercase tracking-[0.22em]">
                Solo Agency &middot; Engineering Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
              Hi, I&apos;m <span className="text-white">Pappu Kumar Yadav</span>.
              <br />
              <span className="text-emerald-400">Your Complete Tech Partner.</span>
            </h1>

            <p className="mt-5 text-[16px] sm:text-[17px] text-gray-300 leading-relaxed max-w-xl font-normal">
              Full-Stack Developer managing end-to-end web applications, DevOps &amp; cloud deployments, and custom AI automations for businesses and startups.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/[0.08]">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">3+ Yrs</p>
                <p className="text-[12px] text-gray-400 mt-1 font-medium">Full-Stack Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">20+</p>
                <p className="text-[12px] text-gray-400 mt-1 font-medium">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">E-Commerce</p>
                <p className="text-[12px] text-gray-400 mt-1 font-medium">Stores &amp; Payments</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">AI &amp; SaaS</p>
                <p className="text-[12px] text-gray-400 mt-1 font-medium">Web Apps &amp; Workflows</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-bold text-black bg-white rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-lg shadow-white/5"
              >
                Hire Me for Your Business
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/our-services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white border border-white/20 bg-white/[0.03] rounded-full hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all"
              >
                Explore Services
                <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Premium Studio Executive Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] group">
              {/* Subtle ambient backdrop glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-emerald-500/20 via-transparent to-emerald-500/10 rounded-[32px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Pure Cohesive Portrait Card - clean & unobstructed */}
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-[#0e0e0e] border border-white/[0.12] shadow-2xl shadow-black">
                <Image
                  src="/orignal.jpeg"
                  alt="Pappu Kumar Yadav"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-[1.12] brightness-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 380px, 420px"
                  quality={95}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── THE INDIVIDUAL AGENCY MODEL BANNER ── */}
        <div className="mb-24 sm:mb-28 p-8 sm:p-10 rounded-2xl bg-[#0c0c0c] border border-white/[0.08] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl relative z-10">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              The Individual Agency Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              One Senior Engineer. Zero Agency Overhead.
            </h2>
            <p className="text-[15px] text-gray-300 leading-relaxed font-normal">
              Instead of hiring 3 separate agencies for web development, cloud hosting, and marketing ads, 
              I own the entire lifecycle for your business: 
              <span className="text-emerald-400 font-medium"> building your custom web application, deploying it on high-speed AWS/GCP servers, automating workflows with AI, and driving qualified traffic with video ad campaigns</span>.
            </p>
            <p className="mt-3 text-[14px] text-gray-400 leading-relaxed">
              Based in India and serving clients worldwide, I bring 3+ years of production engineering experience shipping commercial systems handling thousands of live users and transactions.
            </p>
          </div>
        </div>

        {/* ── SOLO AGENCY SERVICES FOR BUSINESSES ── */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                Business Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Everything Your Business Needs to <span className="text-emerald-400">Scale Digitally</span>
            </h2>
            <p className="mt-4 text-[15px] text-gray-400 leading-relaxed">
              Whether you are an Indian business going online or an international startup launching an MVP, 
              here is what I build, deploy, and manage for you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AGENCY_SERVICES.map((s) => (
              <div
                key={s.title}
                className="p-8 sm:p-9 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] hover:border-emerald-500/40 hover:bg-[#101010] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{s.title}</h3>
                <p className="text-[13px] text-emerald-400 font-medium mt-1 mb-4">{s.subtitle}</p>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-6">{s.desc}</p>
                
                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {s.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-gray-300">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY HIRE ME OVER A TRADITIONAL AGENCY ── */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#0e0e0e] to-[#080808] border border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              The Agency Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Work With a Dedicated Solo Agency?
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 leading-relaxed">
              Traditional agencies charge inflated retainers, hire unmotivated juniors to do the work, and take weeks to respond. Here is how I work differently:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AGENCY_ADVANTAGES.map((adv, i) => (
              <div key={i} className="flex flex-col p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-500/30 text-emerald-400 text-[12px] font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">{adv.title}</h3>
                </div>
                <p className="text-[14px] text-gray-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CAREER MILESTONES & CREDENTIALS ── */}
        <div className="mb-24 sm:mb-32">
          <div className="max-w-3xl mb-12">
            <div className="mb-3">
              <span className="text-[13px] sm:text-[14px] font-bold text-emerald-400 uppercase tracking-[0.2em]">
                Career &middot; Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Work <span className="text-emerald-400">Experience</span>
            </h2>
          </div>

          <div className="space-y-6">
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className="p-7 sm:p-8 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] hover:border-emerald-500/30 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="md:w-1/3">
                  <span className="px-3 py-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full">
                    {m.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3">{m.role}</h3>
                  <p className="text-[13px] text-gray-400 mt-1">{m.company}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-[14px] text-gray-300 leading-relaxed">{m.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL HIRE ME CTA BANNER ── */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#111111] to-[#0c0c0c] border border-white/[0.08] hover:border-emerald-500/40 text-center relative overflow-hidden transition-all">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Let&apos;s Build Your Business
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Ready to Launch Your Web App &amp; Grow Your Business?
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
              Whether you need a full-stack custom web app, cloud deployment, AI automation, or high-ROI video ad campaigns — let&apos;s talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-[14px] hover:bg-gray-100 transition-all shadow-lg shadow-white/5"
              >
                Hire Me for Your Project &rarr;
              </Link>
              <a
                href="tel:+919523076954"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/[0.04] text-[14px] font-medium transition-all"
              >
                <FiPhone className="w-4 h-4 text-emerald-400" />
                Schedule a Direct Call
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;