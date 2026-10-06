'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/work' },
    { name: 'Projects', href: '/my-projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pappu-kumar-yadav-31307121b/',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.27C5.57 6.73 4.75 5.91 4.75 4.93S5.57 3.13 6.5 3.13s1.75.8 1.75 1.8-.78 1.8-1.75 1.8zM19 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77C13.4 7.19 19 7 19 11.48V19z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/pappuyadav95230',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:610490papu@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#080808] relative">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/The-Pappu-transparent.png"
              alt="The Pappu way"
              className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Center nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {pages.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="text-[13px] text-gray-600 hover:text-gray-300 transition-colors duration-200 font-medium"
              >
                {p.name}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-9 h-9 rounded-full border border-white/8 flex items-center justify-center text-gray-600 hover:text-gray-300 hover:border-white/20 transition-all duration-200"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-gray-700">
            © {year} Pappu Kumar Yadav. All rights reserved.
          </p>
          <p className="text-[12px] text-gray-700">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;