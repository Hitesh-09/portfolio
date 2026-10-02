"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Calendar, MapPin, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      id: "aicte",
      role: "AI/ML Developer Intern",
      company: "AICTE",
      period: "April 2024 – June 2024",
      location: "Remote",
      description: "Worked on advanced Machine Learning pipelines and AI integrations. Assisted in developing scalable solutions and optimizing data models for better performance.",
      skills: ["Machine Learning", "Python", "Data Pipelines", "AI Integrations"],
    },
    {
      id: "envision",
      role: "Game Developer & Core Team Member",
      company: "Team ENVISION (AARUUSH SRMIST)",
      period: "2023 – Present",
      location: "SRMIST",
      description: "Organized ML/AI workshops and tech sessions, fostering a data-driven learning culture on campus. Developed interactive games and managed cross-functional team workflows.",
      skills: ["Game Development", "Event Management", "AI Workshops", "Leadership"],
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-medium tracking-tighter mb-4"
          >
            My <span className="text-white/40">Experience</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl font-light"
          >
            A timeline of my professional journey, internships, and core team contributions.
          </motion.p>
        </div>

        {/* Resume Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-neutral-200 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            View Resume <Download size={16} />
          </span>
          <div className="absolute inset-0 bg-neutral-300 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
        </motion.a>
      </div>

      {/* Experience Timeline */}
      <div className="w-full max-w-4xl relative">
        {/* Vertical Line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

        <div className="flex flex-col gap-12 md:gap-24">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[28px] md:left-1/2 top-0 w-3 h-3 bg-white rounded-full -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />

              {/* Empty Space for alternate side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className="w-full md:w-1/2 pl-16 md:pl-0 group">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors duration-500 hover:bg-white/10">
                  <div className="flex items-center gap-3 text-white/40 text-sm font-mono mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-1">{exp.role}</h3>
                  <div className="text-white/70 text-lg mb-6 flex items-center gap-2">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>

                  <p className="text-white/60 leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  );
}
