"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ══════════ DESKTOP ══════════ */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 hidden md:flex items-center transition-all duration-400 ${
          scrolled
            ? "bg-[#060606]/95 backdrop-blur-xl h-[76px]"
            : "bg-transparent h-[90px]"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-10 lg:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/icons/white.png"
              alt="The Pappu way"
              className="h-[72px] w-auto object-contain opacity-95 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[16px] font-semibold tracking-wide transition-colors duration-200 group pb-0.5 ${
                  pathname === item.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-white transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Hire Me CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3 text-[15px] font-bold text-black bg-white rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200"
          >
            Hire Me
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

        </div>
      </motion.header>

      {/* ══════════ MOBILE ══════════ */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50">
        <div
          className={`flex items-center justify-between px-5 h-[64px] transition-all duration-300 ${
            isOpen || scrolled
              ? "bg-[#060606]/95 backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <Link href="/" onClick={close}>
            <img
              src="/icons/white.png"
              alt="The Pappu way"
              className="h-12 w-auto object-contain opacity-95"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1.5 rounded-lg hover:bg-white/8 transition-colors"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#060606]/98 backdrop-blur-2xl overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={close}
                      className={`text-xl font-semibold block transition-colors ${
                        pathname === item.href ? "text-white" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  onClick={close}
                  className="mt-4 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-[15px] font-bold text-black bg-white rounded-full w-full"
                >
                  Hire Me →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
