"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Cpu, Globe2 } from "lucide-react"

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
}

export function AboutSection() {
  return (
    <section className="min-h-screen w-full bg-black text-white pt-32 pb-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Top Header Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <motion.span variants={FADE_UP_ANIMATION_VARIANTS} className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase">
            01. Background
          </motion.span>
          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]"
          >
            Engineering <br className="hidden md:block"/>
            <span className="text-white/40 italic">digital realities.</span>
          </motion.h1>
          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mt-4"
          >
            I am Hitesh, a software engineer specialized in building high-performance, 
            interactive web applications. I operate at the intersection of rigorous 
            systems engineering and obsessive design detailing.
          </motion.p>
        </motion.div>

        {/* Middle Image & Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Abstract / Portrait Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden relative group"
          >
            {/* Ambient animated gradient background in lieu of an image for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/80 z-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* If you have a real portrait, place an <img src="/me.jpg" /> here with absolute inset-0 object-cover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white/10 font-mono text-xs tracking-widest uppercase">Portrait</span>
            </div>
          </motion.div>

          {/* Philosophy / Skills Bento Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 p-8 sm:p-10 rounded-3xl hover:bg-white/[0.05] transition-colors"
            >
              <Code2 className="w-8 h-8 text-white/80 mb-6 stroke-[1.5]" />
              <h3 className="text-2xl font-light mb-4">Architecture First</h3>
              <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                Great software is invisible. I design scalable, typed, and modular codebases 
                that prioritize maintainability without compromising on execution speed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors"
              >
                <Globe2 className="w-8 h-8 text-white/80 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-light mb-4">Motion & WebGL</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Leveraging Framer Motion and modern APIs to create fluid, hardware-accelerated interfaces.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors"
              >
                <Cpu className="w-8 h-8 text-white/80 mb-6 stroke-[1.5]" />
                <h3 className="text-xl font-light mb-4">Systems Engineering</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Deep understanding of modern frameworks, edge computing, and backend integrations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Stats / Manifesto */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full border-t border-white/10 pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
        >
          <div className="flex gap-12">
            <div>
              <div className="text-4xl font-light">3+</div>
              <div className="text-white/40 text-sm font-mono mt-2 tracking-wider">YEARS EXPERTISE</div>
            </div>
            <div>
              <div className="text-4xl font-light">20+</div>
              <div className="text-white/40 text-sm font-mono mt-2 tracking-wider">PROJECTS SHIPPED</div>
            </div>
          </div>
          
          <a href="/contact" className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors">
            <span className="font-mono text-sm tracking-widest uppercase">Start a conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
