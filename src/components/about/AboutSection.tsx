"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Cpu, Globe2 } from "lucide-react"
import { GitHubCalendar } from "react-github-calendar"

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

          <motion.h1 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1]"
          >
            About <br className="hidden md:block"/>
            <span className="text-white/40 italic">Me.</span>
          </motion.h1>
          <motion.p 
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mt-4"
          >
            Hey there! I am Hitesh, a 4th-year Computer Science and Engineering undergraduate at SRM Institute of Science and Technology. I am deeply passionate about cloud architecture, building scalable backends, and crafting digital experiences that live at the intersection of rigorous engineering and premium design.
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
            {/* Actual Portrait Image */}
            <Image 
              src="/portrait.png" 
              alt="Hitesh Portrait" 
              fill
              className="object-cover z-0 transition-transform duration-700 ease-in-out group-hover:scale-110"
              priority
            />

            {/* Ambient animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/80 z-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-50 z-20 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          {/* Philosophy / Skills Bento Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#0d1117] border border-white/10 p-8 sm:p-10 rounded-3xl hover:border-white/20 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-light mb-2 flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  Open Source
                </h3>
                <p className="text-white/50 text-sm mb-6">Building in public and pushing green squares.</p>
              </div>
              
              {/* Real GitHub Contributions Graph */}
              <div className="w-full mt-4 overflow-hidden opacity-90 flex justify-center lg:justify-start">
                <GitHubCalendar 
                  username="Hitesh-09" 
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={11}
                  blockMargin={4}
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold text-white tracking-tighter">SRM</span>
                </div>
                <h3 className="text-xl font-light mb-2">B.Tech CSE</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  4th-year undergrad at SRM Institute of Science and Technology.
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
                <h3 className="text-xl font-light mb-2">Cloud & Infra</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Actively exploring cloud-native architectures and highly available systems.
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
              <div className="text-4xl font-light">4+</div>
              <div className="text-white/40 text-sm font-mono mt-2 tracking-wider">HACKATHONS</div>
            </div>
            <div>
              <div className="text-4xl font-light">15+</div>
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
