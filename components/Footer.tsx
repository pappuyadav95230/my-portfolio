'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FiArrowUp,
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiCheck,
  FiCopy,
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('610490papu@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/work' },
    { name: 'Services', href: '/our-services' },
    { name: 'Projects', href: '/my-projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Full-Stack Web Applications (Next.js & React)',
    'DevOps & Cloud Deployments (AWS, GCP, Docker)',
    'Backend Systems & Scalable APIs (Node, Python)',
    'AI Workflows & Business Automations',
    'Video Ads & Meta / Google Ad Campaigns',
  ];

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/pappuyadav95230',
      icon: <FiGithub className="w-4 h-4" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pappu-kumar-yadav-31307121b/',
      icon: <FiLinkedin className="w-4 h-4" />,
    },
    {
      name: 'Email',
      href: 'mailto:610490papu@gmail.com',
      icon: <FiMail className="w-4 h-4" />,
    },
    {
      name: 'Call',
      href: 'tel:+919523076954',
      icon: <FiPhone className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="bg-[#080808] relative text-white overflow-hidden border-t border-white/[0.08]">
      {/* Top subtle emerald gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* ── PRE-FOOTER CTA BANNER ── */}
        <div className="py-10 sm:py-14 lg:py-16 border-b border-white/[0.08]">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#080808] border border-white/[0.1] hover:border-emerald-500/30 p-6 sm:p-10 lg:p-12 overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[12px] sm:text-[13px] font-bold text-emerald-400 uppercase tracking-[0.2em] block mb-3">
                  Let&apos;s Build Together
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-black tracking-tight leading-tight text-white">
                  Have a Project in Mind?{' '}
                  <span className="text-emerald-400">Let&apos;s Architect Your Solution.</span>
                </h2>
                <p className="mt-3 text-[14px] sm:text-[16px] text-gray-300 leading-relaxed font-normal">
                  Available for custom web applications, cloud hosting &amp; DevOps setup, AI workflow automations, and targeted marketing campaigns.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 text-[15px] font-bold text-black bg-white rounded-xl hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                  <span>Hire Me</span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/our-services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 text-[15px] font-semibold text-white border border-white/20 bg-white/[0.04] rounded-xl hover:bg-white/[0.08] hover:border-emerald-500/40 active:scale-95 transition-all"
                >
                  View Services
                </Link>

                <a
                  href="tel:+919523076954"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-[15px] font-medium text-gray-300 border border-white/10 rounded-xl hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
                >
                  <FiPhone className="w-4 h-4 text-emerald-400" />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN 4-COLUMN FOOTER GRID ── */}
        <div className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Brand & Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-5">
                <img
                  src="/Pappuway.png"
                  alt="Pappu Way"
                  className="h-16 w-auto object-contain"
                />
              </Link>

              <p className="text-[15px] text-gray-300 leading-relaxed max-w-sm font-normal">
                Full-Stack Developer specializing in frontend, backend APIs, cloud infrastructure (DevOps), and AI workflow automations for businesses.
              </p>

              {/* Direct Location */}
              <div className="mt-4 flex items-center gap-2 text-[13px] text-gray-400 font-medium">
                <FiMapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bihar, India &middot; Available Globally for Remote Projects</span>
              </div>
            </div>

            {/* Direct Email Box */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <span className="text-[12px] uppercase tracking-[0.2em] text-emerald-400 font-bold block mb-2">
                Direct Contact
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/30 max-w-sm transition-all">
                <a
                  href="mailto:610490papu@gmail.com"
                  className="text-[15px] text-white hover:text-emerald-400 font-medium truncate transition-colors"
                >
                  610490papu@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                      <FiCheck className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <FiCopy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[15px] text-gray-300 hover:text-emerald-400 font-medium transition-colors"
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-emerald-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: What I Do (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-[14px] text-gray-300 hover:text-white transition-colors flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="leading-snug">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-white font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Connect
            </h3>

            <div className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-gray-400 group-hover:text-emerald-400 transition-colors">
                      {s.icon}
                    </span>
                    <span className="text-[14px] font-medium">{s.name}</span>
                  </div>
                  <FiArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM SUB-BAR ── */}
        <div className="py-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-400 text-center sm:text-left font-medium">
            &copy; {currentYear} Pappu Kumar Yadav &middot; Full-Stack Developer
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-gray-300 hover:text-white px-3.5 py-1.5 rounded-full border border-white/[0.1] hover:border-emerald-500/40 bg-white/[0.03] hover:bg-white/[0.06] transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <FiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-emerald-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;