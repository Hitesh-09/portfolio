"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

const projects = [
  {
    id: 1,
    title: "Quantum Query",
    category: "AI / Data Pipeline",
    description: "A high-performance semantic search engine built for enterprise datasets, utilizing vector embeddings and edge computing.",
    tech: ["Next.js", "Python", "Pinecone", "OpenAI"],
    link: "#",
    layout: "col-span-1 md:col-span-12 lg:col-span-8",
  },
  {
    id: 2,
    title: "Nebula OS",
    category: "System Architecture",
    description: "A distributed micro-kernel architecture designed for scalable edge deployments and IoT networks.",
    tech: ["Rust", "gRPC", "Docker"],
    link: "#",
    layout: "col-span-1 md:col-span-12 lg:col-span-4",
  },
  {
    id: 3,
    title: "Apex Finance",
    category: "Fintech Platform",
    description: "Real-time trading analytics platform capable of processing 1M+ transactions per second with sub-millisecond latency.",
    tech: ["Go", "Kafka", "PostgreSQL", "React"],
    link: "#",
    layout: "col-span-1 md:col-span-12 lg:col-span-5",
  },
  {
    id: 4,
    title: "Aura Sync",
    category: "Developer Tooling",
    description: "An intelligent state synchronization engine for offline-first applications.",
    tech: ["TypeScript", "SQLite", "WebSockets"],
    link: "#",
    layout: "col-span-1 md:col-span-12 lg:col-span-7",
  }
];

export function WorkSection() {
  return (
    <section id="work" className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 relative z-10">
      {/* Section Header */}
      <div className="mb-20 md:mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-white/50 font-mono text-sm uppercase tracking-widest mb-4"
        >
          My Projects
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-medium tracking-tighter"
        >
          Engineering <br className="hidden md:block" />
          <span className="text-white/40">at scale.</span>
        </motion.h2>
      </div>

      {/* Projects Grid (Asymmetric) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={clsx(
              "group relative flex flex-col rounded-[2rem] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-colors hover:bg-[#111]",
              project.layout
            )}
          >
            {/* Visual Placeholder (Simulating an image or creative asset) */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] bg-black/40 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
              <div className="absolute inset-0 opacity-[0.03] transition-transform duration-700 group-hover:scale-105" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                     backgroundSize: '20px 20px'
                   }} 
              />
              {/* Floating Link Button */}
              <div className="absolute top-6 right-6 z-20">
                <Link 
                  href={project.link}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-black opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ArrowUpRight size={20} strokeWidth={2} />
                </Link>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col flex-1 p-8 md:p-10 z-20 -mt-20">
              <div className="mb-auto">
                <p className="text-white/50 font-mono text-xs uppercase tracking-wider mb-4">{project.category}</p>
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 group-hover:text-white/90 transition-colors">{project.title}</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="px-4 py-2 rounded-full bg-white/5 text-white/70 text-xs font-mono border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
