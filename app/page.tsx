"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SkillsSection from "@/components/SkillsSection";

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "Full Stack + AI", label: "" },
];

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative bg-[#0a0a0a] overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* ── PORTRAIT: absolute right, full height, fades left ── */}
        <div
          className="absolute top-0 right-0 bottom-0 hidden md:block z-0"
          style={{ width: "50%", top: "80px" }}
        >
          <Image
            src="/orignal.jpeg"
            alt="Pappu Kumar Yadav"
            fill
            priority
            quality={90}
            className="object-cover object-top"
            style={{
              filter: "grayscale(100%) contrast(1.2) brightness(0.85)",
            }}
            sizes="46vw"
          />
          {/* Left fade — seamlessly merges portrait into background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.95) 10%, rgba(10,10,10,0.7) 25%, rgba(10,10,10,0.2) 45%, transparent 70%)",
            }}
          />
          {/* Top fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.4) 10%, transparent 22%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.5) 12%, transparent 30%)",
            }}
          />
          {/* RIGHT white rim light — cinematic edge on silhouette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 10%, rgba(255,255,255,0.03) 22%, transparent 40%)",
            }}
          />
        </div>

        {/* ── CONTENT ── */}
        <div className="relative z-10 flex items-center min-h-[100vh] w-full max-w-7xl mx-auto px-8 lg:px-14">
          <div className="w-full md:w-[58%] lg:w-[56%] py-8">

            {/* Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-[11px] uppercase tracking-[0.24em] text-gray-500 font-bold mb-5"
            >
              Full Stack Developer
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="font-black leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)" }}
            >
              Turning Ideas into
              <br />
              Digital Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-5 text-[15px] text-gray-400 leading-[1.8] max-w-[420px]"
            >
              I build scalable web applications, SaaS products, AI-powered
              systems and modern digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/my-projects"
                className="group inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                View My Work
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-[13px] font-medium text-white border border-white/25 rounded-lg hover:bg-white/8 transition-all duration-200"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-10 flex items-center flex-wrap gap-0"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.value}
                  className={`${i < STATS.length - 1 ? "pr-7 mr-7 border-r border-white/[0.12]" : ""} mb-1`}
                >
                  <p className="text-2xl font-black text-white tracking-tight leading-none">{s.value}</p>
                  {s.label && (
                    <p className="text-[11px] text-gray-600 mt-1 font-medium">{s.label}</p>
                  )}
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <SkillsSection />
    </>
  );
};

export default Hero;
