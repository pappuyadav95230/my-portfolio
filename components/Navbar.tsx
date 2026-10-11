"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/work" },
  { name: "Services", href: "/our-services" },
  { name: "Projects", href: "/my-projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isScrolledRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPastThreshold = window.scrollY > 25;
          if (isPastThreshold !== isScrolledRef.current) {
            isScrolledRef.current = isPastThreshold;
            setScrolled(isPastThreshold);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial position on mount
    if (window.scrollY > 25) {
      isScrolledRef.current = true;
      setScrolled(true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ══════════ DESKTOP ══════════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 hidden md:flex items-center h-[82px] transition-[background-color,border-color,box-shadow] duration-200 will-change-[background-color,border-color] ${
          scrolled
            ? "bg-[#060606]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-10 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/Pappuway.png"
              alt="Pappu Way"
              className="h-[54px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-7 lg:gap-9">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[16px] lg:text-[17px] font-bold tracking-[0.02em] py-1.5 transition-colors duration-150 group ${
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-200 ${
                    pathname === item.href
                      ? "w-full bg-emerald-400"
                      : "w-0 group-hover:w-full bg-white/80"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Action CTA: Hire Me */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3 text-[15px] font-bold text-black bg-white rounded-full hover:bg-gray-100 hover:scale-[1.02] active:scale-95 transition-all duration-150 shadow-md shadow-white/10"
            >
              Hire Me
              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </header>

      {/* ══════════ MOBILE ══════════ */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50">
        <div
          className={`flex items-center justify-between px-5 h-[64px] transition-[background-color,border-color] duration-200 ${
            isOpen || scrolled
              ? "bg-[#060606]/95 backdrop-blur-md border-b border-white/[0.08]"
              : "bg-[#060606]/80 backdrop-blur-sm border-b border-white/[0.04]"
          }`}
        >
          <Link href="/" onClick={close} className="flex-shrink-0">
            <img
              src="/Pappuway.png"
              alt="Pappu Way"
              className="h-10 sm:h-12 w-auto object-contain opacity-95"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX size={22} className="text-emerald-400" /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#060606]/98 backdrop-blur-2xl border-b border-white/[0.1] shadow-2xl shadow-black overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={close}
                    className={`text-[17px] font-bold flex items-center justify-between transition-colors py-3 px-3 rounded-xl ${
                      pathname === item.href
                        ? "text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {pathname === item.href && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    )}
                  </Link>
                ))}

                <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
                  <Link
                    href="/contact"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 text-[15px] font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-full w-full shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                  >
                    <span>Hire Me &mdash; Get In Touch</span>
                    <span>&rarr;</span>
                  </Link>

                  <div className="flex items-center justify-center gap-4 pt-1 text-[13px] text-gray-400">
                    <a href="tel:+919523076954" className="hover:text-emerald-400 transition-colors">
                      +91 95230 76954
                    </a>
                    <span>&middot;</span>
                    <a href="mailto:610490papu@gmail.com" className="hover:text-emerald-400 transition-colors">
                      Email Me
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
