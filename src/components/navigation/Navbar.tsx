"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { name: "Hitesh", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Stack", href: "/stack" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <nav
        className={clsx(
          "pointer-events-auto flex items-center justify-between transition-all duration-500 ease-in-out",
          "rounded-full px-6 py-3 border border-white/10 backdrop-blur-md bg-black/40",
          isScrolled ? "w-full max-w-5xl shadow-2xl shadow-black/50" : "w-full max-w-4xl"
        )}
      >
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 w-full justify-between">
          <Link
            href="/"
            className="text-white/90 hover:text-white font-medium px-4 py-2 rounded-full transition-colors"
          >
            Hitesh
          </Link>
          <div className="flex items-center space-x-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/60 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-white/90 hover:text-white font-medium px-2 py-1 transition-colors"
          >
            Hitesh
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 pointer-events-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden flex flex-col space-y-2 backdrop-blur-xl"
          >
            {navItems.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
