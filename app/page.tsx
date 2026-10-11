"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SkillsSection from "@/components/SkillsSection";
import { HomeContent } from "@/components/HomeContent";
import FeaturedProjects from "@/components/FeaturedProjects";
import { FiArrowUpRight } from "react-icons/fi";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative bg-[#0a0a0a] overflow-hidden"
        style={{ minHeight: "92vh" }}
      >
        {/* ── PORTRAIT: right aligned with subtle cinematic gradient fade ── */}
        <div
          className="absolute top-0 right-0 bottom-0 hidden md:block z-0"
          style={{ width: "48%", top: "80px" }}
        >
          <Image
            src="/orignal.jpeg"
            alt="Pappu Kumar Yadav"
            fill
            priority
            quality={90}
            className="object-cover object-top"
            style={{
              filter: "grayscale(100%) contrast(1.15) brightness(1.1)",
            }}
            sizes="46vw"
          />
          {/* Fades for smooth edge merging */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.95) 10%, rgba(10,10,10,0.7) 25%, rgba(10,10,10,0.2) 45%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.4) 10%, transparent 22%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 12%, transparent 30%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 10%, transparent 30%)",
            }}
          />
        </div>

        {/* ── CLEAN, FOCUSED HERO CONTENT ── */}
        <div className="relative z-10 flex items-center min-h-[92vh] w-full max-w-7xl mx-auto px-8 lg:px-14">
          <div className="w-full md:w-[62%] lg:w-[58%] pt-28 pb-16 md:pt-32 md:pb-20">
            {/* Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-black leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "clamp(2.1rem, 4vw, 4rem)" }}
            >
              Engineering
              <br />
              <span className="text-white">Scalable Web,</span>
              <br />
              <span className="text-white">Cloud &amp; </span>
              <span className="text-emerald-400">AI Automation</span>
            </motion.h1>

            {/* Punchy, Concise Description (No Wall of Text) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 text-[15px] sm:text-[16px] text-gray-400 leading-[1.75] max-w-[490px]"
            >
              Operating as an individual digital agency for businesses &amp; startups: 
              architecting custom web applications, scalable cloud infrastructure &amp; DevOps, and AI automation workflows built for real business ROI.
            </motion.p>

            {/* Two Crisp, Focused CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center gap-3.5"
            >
              <Link
                href="/my-projects"
                className="group inline-flex items-center gap-2 px-6 py-3 text-[13px] font-bold text-black bg-white rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
              >
                View Work
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/our-services"
                className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium text-white border border-white/20 bg-white/[0.03] rounded-lg hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all duration-200"
              >
                Our Services
                <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PRODUCTION PROOF STRIP ── */}
      <section className="bg-[#080808] border-y border-white/[0.06] py-6 sm:py-7 relative overflow-hidden">
        {/* Subtle emerald top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

        <div className="max-w-7xl mx-auto px-8 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center">

            {/* Metric 1 */}
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                3+ Yrs
              </span>
              <span className="text-[12px] text-gray-400 font-medium mt-1.5">
                Full-Stack Experience
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col md:border-l md:border-white/[0.08] md:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                20+
              </span>
              <span className="text-[12px] text-gray-400 font-medium mt-1.5">
                Projects Built
              </span>
            </div>

            {/* Metric 3: E-Commerce */}
            <div className="flex flex-col md:border-l md:border-white/[0.08] md:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                E-Commerce
              </span>
              <span className="text-[12px] text-gray-400 font-medium mt-1.5">
                Stores &amp; Payment Systems
              </span>
            </div>

            {/* Metric 4: AI & SaaS */}
            <div className="flex flex-col md:border-l md:border-white/[0.08] md:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-tight leading-none">
                AI &amp; SaaS
              </span>
              <span className="text-[12px] text-gray-400 font-medium mt-1.5">
                Web Apps &amp; Automations
              </span>
            </div>

            {/* Availability Badge */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 flex lg:justify-end items-center lg:border-l lg:border-white/[0.08] lg:pl-8 pt-2 lg:pt-0">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 whitespace-nowrap">
                  Available for Hire
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FeaturedProjects />
      <HomeContent />
      <SkillsSection />
    </>
  );
};

export default Hero;
