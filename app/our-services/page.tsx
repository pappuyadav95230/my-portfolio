"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCode,
  FiCloud,
  FiCpu,
  FiVideo,
  FiCheckCircle,
  FiArrowUpRight,
  FiPhone,
  FiDollarSign,
  FiZap,
} from "react-icons/fi";

const BUSINESS_SERVICES = [
  {
    icon: <FiCode className="w-7 h-7 text-emerald-400" />,
    badge: "Full-Stack Development",
    title: "Custom Web Applications & E-Commerce",
    subtitle: "Built for Your Exact Business Needs",
    description:
      "From high-conversion e-commerce stores (like ODI Studio with Razorpay and automated shipping) to custom booking marketplaces and hospital ERPs. Fast, SEO-optimized, and built to convert visitors into paying clients.",
    deliverables: [
      "Custom Web Applications & Portals",
      "E-Commerce with Razorpay Checkout",
      "Logistics & Delivery API Integrations",
      "Admin, Doctor, or Manager Dashboards",
    ],
  },
  {
    icon: <FiCloud className="w-7 h-7 text-emerald-400" />,
    badge: "Cloud DevOps & Hosting",
    title: "Domain, Cloud Hosting & Deployments",
    subtitle: "Fast, Secure & Always Online",
    description:
      "I set up your business domain, SSL security, and host your platforms on AWS or Google Cloud Run. Auto-scaling, automated backups, and 80% infrastructure cost savings so you never overpay for servers.",
    deliverables: [
      "AWS & GCP Cloud Setup & Migration",
      "Domain Setup & Free SSL Certificates",
      "Automated Database Backups",
      "80% Server Cost Optimization",
    ],
  },
  {
    icon: <FiCpu className="w-7 h-7 text-emerald-400" />,
    badge: "AI Automation",
    title: "AI Workflows & Business Automation",
    subtitle: "Put Your Business Operations on Autopilot",
    description:
      "Eliminate repetitive manual tasks. Connect your website to custom AI lead responders, automated WhatsApp/Email follow-ups, and auto-sync inquiries into your CRM or Google Sheets in real-time.",
    deliverables: [
      "AI Customer Support & Lead Qualifiers",
      "WhatsApp & Email Automated Follow-ups",
      "CRM & Google Sheets Real-Time Sync",
      "Custom Model Training & Vision OCR",
    ],
  },
  {
    icon: <FiVideo className="w-7 h-7 text-emerald-400" />,
    badge: "Performance Marketing",
    title: "Video Ads & Meta / Google Campaigns",
    subtitle: "High-ROI Creative Strategy & Traffic",
    description:
      "Having built ad automation handling 1,000+ daily creatives with the Google Ads API, I help Indian and global businesses run profitable video ads on Instagram, Facebook, and Google to drive qualified leads.",
    deliverables: [
      "AI-Generated High-Converting Video Ads",
      "Google Ads & Meta Campaign Management",
      "High-Converting Landing Pages",
      "GAQL Analytics & Conversion Tracking",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Free Consultation & Scoping",
    desc: "We discuss your business needs, goals, and target audience to define the exact deliverables and timeline.",
  },
  {
    step: "02",
    title: "Design & Development",
    desc: "I build your web app, integrate payment gateways and APIs, with regular staging previews so you see progress live.",
  },
  {
    step: "03",
    title: "Cloud Deployment & Automation",
    desc: "Your app goes live on AWS/GCP with custom domains, SSL, and automated lead capture pipelines.",
  },
  {
    step: "04",
    title: "Launch & Campaign Growth",
    desc: "We launch video ads and marketing campaigns to send real customers to your new platform with ongoing support.",
  },
];

export const Services = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-28 sm:pt-36 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[600px] h-[600px] bg-white/[0.015] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
              End-to-End Business Solutions
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
            Digital Agency Services for{" "}
            <span className="text-emerald-400">Growing Businesses</span>
          </h1>

          <p className="mt-5 text-[15px] sm:text-[16px] text-gray-400 leading-relaxed">
            I help businesses in India and across the world build custom web applications, deploy on high-performance cloud hosting, automate operations with AI, and scale with high-converting video ad campaigns.
          </p>
        </motion.div>

        {/* ── SERVICES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 sm:mb-32">
          {BUSINESS_SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#0d0d0d] border border-white/[0.07] hover:border-emerald-500/40 hover:bg-[#101010] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                    {s.icon}
                  </div>
                  <span className="px-3 py-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 rounded-full uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white tracking-tight">{s.title}</h2>
                <p className="text-[13px] text-emerald-400 font-medium mt-1 mb-4">{s.subtitle}</p>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-6">{s.description}</p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-8">
                  {s.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-gray-300">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-white/[0.03] hover:bg-white text-gray-300 hover:text-black font-bold text-[13px] border border-white/10 hover:border-white transition-all duration-200"
              >
                <span>Inquire About This Service</span>
                <FiArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── HOW WE WORK TOGETHER ── */}
        <div className="mb-24 sm:mb-32 p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#0e0e0e] border border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-3">
              Transparent Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              From Concept to Profitable Launch
            </h2>
            <p className="mt-3 text-[15px] text-gray-400 leading-relaxed">
              No endless meetings, no agency bureaucracy. Just fast, predictable execution with direct updates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-3xl font-black text-emerald-400/80 leading-none block mb-3">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CALL TO ACTION ── */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#111111] to-[#0c0c0c] border border-white/[0.08] hover:border-emerald-500/40 text-center relative overflow-hidden transition-all">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Need a Web App, Cloud Hosting, or Video Ads for Your Business?
            </h2>
            <p className="text-[15px] text-gray-400 leading-relaxed mb-8">
              Let&apos;s discuss your project scope, budget, and timeline. Get a free proposal within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-[14px] hover:bg-gray-100 transition-all shadow-lg shadow-white/5"
              >
                Hire Me Today &rarr;
              </Link>
              <a
                href="tel:+919523076954"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/[0.04] text-[14px] font-medium transition-all"
              >
                <FiPhone className="w-4 h-4 text-emerald-400" />
                +91 95230 76954
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
