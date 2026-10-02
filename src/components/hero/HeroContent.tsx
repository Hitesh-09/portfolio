"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16 lg:p-24"
    >
      <div className="max-w-4xl">
        <motion.p
          variants={itemVariants}
          className="text-white/60 text-sm md:text-base font-mono mb-4 tracking-wider uppercase"
        >
          Backend Engineer · AI/ML Developer
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] font-medium tracking-tighter text-white mb-8"
        >
          Hitesh<span className="text-white/40">*</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl mb-12 font-light leading-relaxed"
        >
          I build backend systems, AI-powered applications, and data-driven software.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/work"
            className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full overflow-hidden transition-transform hover:scale-105 duration-300"
          >
            <span className="font-medium">Explore Work</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="#"
            className="group inline-flex items-center justify-center gap-3 bg-black/20 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
            </svg>
            <span className="font-medium">GitHub</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
