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
        {/* ── PORTRAIT: right aligned on desktop, subtle top banner on mobile ── */}
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
        <div className="relative z-10 flex flex-col md:flex-row items-center min-h-[92vh] w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-14">
          <div className="w-full md:w-[62%] lg:w-[58%] pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-20">
            {/* Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-black leading-[1.08] tracking-tight text-[38px] sm:text-[54px] lg:text-[66px]"
            >
              <span className="text-white">Engineering</span>
              <br />
              <span className="text-emerald-400">Scalable Web,</span>
              <br />
              <span className="text-white">Cloud &amp; </span>
              <span className="text-emerald-400">AI Automation</span>
            </motion.h1>

            {/* Punchy, Clear Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-6 sm:mt-7 text-[16px] sm:text-[18px] text-gray-200 leading-[1.65] max-w-[540px] font-normal"
            >
              Operating as an individual digital agency for businesses &amp; startups: 
              architecting custom web applications, scalable cloud infrastructure &amp; DevOps, and AI automation workflows built for real business ROI.
            </motion.p>

            {/* Desktop CTAs (hidden on mobile, shown on md+) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 sm:mt-8 hidden md:flex items-center gap-3.5"
            >
              <Link
                href="/my-projects"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-md shadow-white/5"
              >
                <span>View Work</span>
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/our-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all duration-200"
              >
                <span>Our Services</span>
                <FiArrowUpRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </motion.div>

            {/* Mobile-only Portrait: Full-bleed width with zero borders, blending seamlessly into black background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block md:hidden mt-8 relative -mx-6 sm:-mx-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] aspect-[4/4.8] max-h-[440px] overflow-hidden"
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
                sizes="100vw"
              />
              {/* Gentle top and bottom fades for smooth page transition & CTA readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.88) 18%, rgba(10,10,10,0.3) 40%, transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.35) 8%, transparent 22%)",
                }}
              />
              {/* Luminous white rim light matching desktop hero (lines 60-65) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to left, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 12%, transparent 35%)",
                }}
              />
              {/* Soft ambient white glow on left as well */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.08) 0%, transparent 20%)",
                }}
              />

              {/* Mobile CTAs placed directly inside at the bottom of the image */}
              <div className="absolute inset-x-5 sm:inset-x-8 bottom-4 z-10 flex items-center gap-3">
                <Link
                  href="/my-projects"
                  className="flex-1 group inline-flex items-center justify-center gap-1.5 py-3.5 px-4 text-[13px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 active:scale-95 transition-all shadow-xl shadow-black/80"
                >
                  <span>View Work</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/our-services"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3.5 px-4 text-[13px] font-medium text-white border border-white/20 bg-black/60 backdrop-blur-md rounded-xl hover:bg-black/80 hover:border-emerald-500/40 active:scale-95 transition-all shadow-xl shadow-black/80"
                >
                  <span>Our Services</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PRODUCTION PROOF STRIP ── */}
      <section className="bg-[#080808] border-y border-white/[0.06] py-6 sm:py-7 relative overflow-hidden">
        {/* Subtle emerald top glow line */}
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

            {/* Metric 3: E-Commerce */}
            <div className="flex flex-col md:border-l md:border-white/[0.08] md:pl-6 lg:pl-8">
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                E-Commerce
              </span>
              <span className="text-[12px] sm:text-[13px] text-gray-400 font-medium mt-1.5">
                Stores &amp; Payments
              </span>
            </div>

            {/* Metric 4: AI & SaaS */}
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

      <FeaturedProjects />
      <HomeContent />
      <SkillsSection />
    </>
  );
};

export default Hero;
