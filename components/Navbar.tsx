"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expDropdown, setExpDropdown] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Experience",
      href: "/experience",
      dropdown: [
        { name: "Work History", href: "/work" },
        { name: "Education", href: "/education" },
      ],
    },

    { name: "Our Service", href: "/our-services" },
    { name: "Projects", href: "/my-projects" },
    { name: "Contact", href: "/contact" },
  ];

  const closeAllMenus = () => {
    setIsOpen(false);
    setExpDropdown(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={closeAllMenus}
            >
              <img
                src="/icons/white.png"
                alt="Pappu Kumar Yadav"
                className="h-36 w-56" // Adjust size as needed
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setExpDropdown(!expDropdown)}
                      className={`flex items-center transition duration-300 font-medium ${
                        pathname.startsWith(item.href)
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                      <FiChevronDown
                        className={`ml-1 transition-transform ${
                          expDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 transition-colors ${
                                pathname === subItem.href
                                  ? "bg-gray-700 text-blue-400"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-blue-400"
                              }`}
                              onClick={closeAllMenus}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition duration-300 font-medium relative group ${
                      pathname === item.href
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                    onClick={closeAllMenus}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white focus:outline-none transition duration-300 rounded-md hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="mb-2">
                      <button
                        onClick={() => setExpDropdown(!expDropdown)}
                        className={`flex items-center justify-between w-full text-base font-medium py-2 ${
                          pathname.startsWith(item.href)
                            ? "text-blue-400"
                            : "text-gray-300 hover:text-blue-400"
                        }`}
                      >
                        {item.name}
                        <FiChevronDown
                          className={`transition-transform ${
                            expDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expDropdown && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2 mt-1"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={closeAllMenus}
                                className={`block text-sm font-medium transition-colors duration-300 py-1.5 ${
                                  pathname === subItem.href
                                    ? "text-blue-400"
                                    : "text-gray-400 hover:text-blue-400"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      className={`block text-base font-medium py-2 transition-colors duration-300 ${
                        pathname === item.href
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
