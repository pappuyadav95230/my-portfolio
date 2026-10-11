"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiClock,
  FiShield,
  FiCode,
  FiSend,
  FiMessageSquare,
  FiCalendar,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";

const CONTACT_HIGHLIGHTS = [
  {
    icon: <FiClock className="w-5 h-5 text-emerald-400" />,
    title: "< 24-Hour Response",
    desc: "Direct communication with the engineer building your product.",
  },
  {
    icon: <FiShield className="w-5 h-5 text-emerald-400" />,
    title: "100% Code & IP Ownership",
    desc: "Complete documentation, clean repository transfers & zero lock-in.",
  },
  {
    icon: <FiCode className="w-5 h-5 text-emerald-400" />,
    title: "Milestone-Driven Execution",
    desc: "Weekly staging deployments with live clickable demos every sprint.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web App / SaaS",
    timeline: "Within 1 Month",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("610490papu@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-20 relative">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[350px] sm:w-[650px] h-[250px] sm:h-[350px] bg-emerald-500/[0.04] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-5 w-[300px] sm:w-[550px] h-[300px] sm:h-[450px] bg-white/[0.015] blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 relative z-10">
        
        {/* ══════════════════════════════════════════════════════════════════
            HERO SECTION: 2-COLUMN SPLIT (HERO + DIRECT CHANNELS DOCK)
            ══════════════════════════════════════════════════════════════════ */}
        <section className="mb-14 sm:mb-20 pb-12 sm:pb-16 border-b border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 sm:mb-5 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-emerald-400 tracking-[0.2em] sm:tracking-[0.24em] uppercase">
                  Direct Technical Partnership
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-black leading-[1.06] tracking-tight text-white text-[34px] xs:text-[42px] sm:text-[54px] md:text-[62px] lg:text-[66px]"
              >
                Let&apos;s Build
                <br />
                <span className="text-white">Your Next </span>
                <span className="text-emerald-400">Architecture.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-[16px] sm:text-[18px] text-gray-200 leading-[1.65] max-w-xl font-normal"
              >
                Have a project to build from scratch, cloud systems to scale, or need high-converting ad automations? Reach out directly &mdash; no sales pitches, junior middlemen, or agency bureaucracy.
              </motion.p>

              {/* Quick direct action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28 }}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5"
              >
                <a
                  href="#inquiry-form"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-[14px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md shadow-white/5 text-center"
                >
                  <span>Submit Project Scope</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://wa.me/919523076954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all duration-200 text-center"
                >
                  <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                  <span>Quick WhatsApp</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Direct Connect Dock Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0d0d] border border-white/[0.1] hover:border-emerald-500/30 transition-all duration-300 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                  <span className="text-[12px] font-mono text-gray-400">channels.active</span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/[0.08] px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    ONLINE &middot; ACCEPTING WORK
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Email with copy */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <FiMail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Direct</p>
                        <a
                          href="mailto:610490papu@gmail.com"
                          className="text-[14px] font-semibold text-white hover:text-emerald-400 transition-colors truncate block"
                        >
                          610490papu@gmail.com
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedEmail ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+919523076954"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] text-emerald-400 flex items-center justify-center shrink-0">
                        <FiPhone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone Call</p>
                        <p className="text-[14px] font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          +91 95230 76954
                        </p>
                      </div>
                    </div>
                    <FiArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>

                  {/* Location */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-400 flex items-center justify-center shrink-0">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Availability</p>
                      <p className="text-[13px] font-semibold text-white">Punjab / Bihar, India &middot; Remote Worldwide</p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Profiles:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/pappuyadav95230"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all"
                      title="GitHub"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pappu-kumar-yadav-31307121b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all"
                      title="LinkedIn"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            3-CARD CLIENT COMMITMENT & GUARANTEES
            ══════════════════════════════════════════════════════════════════ */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CONTACT_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/[0.08] hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[16px] font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            INTERACTIVE PROJECT SCOPING FORM (STRUCTURED & CONVERTING)
            ══════════════════════════════════════════════════════════════════ */}
        <section id="inquiry-form" className="max-w-4xl mx-auto">
          <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-[#0d0d0d] border border-white/[0.08] shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Project Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Send Your Project Scope
              </h2>
              <p className="text-[14px] text-gray-300 mt-2">
                Fill out the quick form below and receive a detailed architectural estimate within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Message Received</h3>
                <p className="text-[15px] text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || "friend"}! I have received your inquiry and will review your technical requirements within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[13px] font-bold text-emerald-400 hover:underline cursor-pointer"
                >
                  Submit another inquiry &rarr;
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-bold text-gray-300 mb-2">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500/60 focus:bg-white/[0.05] text-white text-[14px] placeholder-gray-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[13px] font-bold text-gray-300 mb-2">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500/60 focus:bg-white/[0.05] text-white text-[14px] placeholder-gray-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="service" className="block text-[13px] font-bold text-gray-300 mb-2">
                      Project Domain
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/[0.08] focus:border-emerald-500/60 text-white text-[14px] outline-none transition-all"
                    >
                      <option value="Full-Stack Web App / SaaS">Full-Stack Web Application / SaaS</option>
                      <option value="E-Commerce & Logistics">E-Commerce &amp; Razorpay Logistics</option>
                      <option value="Cloud DevOps & Deployments">Cloud DevOps (AWS / GCP Cloud Run)</option>
                      <option value="AI Workflows & Automations">AI Workflows &amp; Automation</option>
                      <option value="Google Ads & Marketing">Google Ads, Video Campaigns &amp; SEO</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-[13px] font-bold text-gray-300 mb-2">
                      Target Timeline
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#141414] border border-white/[0.08] focus:border-emerald-500/60 text-white text-[14px] outline-none transition-all"
                    >
                      <option value="Immediate (< 1 Month)">Immediate (Within 1 Month)</option>
                      <option value="Within 1-2 Months">Standard (1 &ndash; 2 Months)</option>
                      <option value="3+ Months / Ongoing">Ongoing Technical Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-bold text-gray-300 mb-2">
                    Project Details &amp; Objectives <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your product idea, key functionality, current bottlenecks, or target deadlines..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-500/60 focus:bg-white/[0.05] text-white text-[14px] placeholder-gray-500 outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white hover:bg-gray-100 text-black font-bold text-[15px] active:scale-[0.99] transition-all shadow-xl shadow-white/5 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting Project Scope...</span>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}