"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Go", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
  { name: "Rust", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Prisma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

export function InteractiveStack() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center pt-32 pb-24 px-4 overflow-hidden relative">
       
       {/* Visible grid structure */}
       <div className="w-full max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 relative z-10">
         {skills.map((skill, index) => (
           <div 
             key={index} 
             className="flex flex-col items-center justify-center group"
           >
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-4"
             >
                <div className="w-24 h-24 md:w-28 md:h-28 relative flex items-center justify-center bg-white/5 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:-translate-y-2">
                   <img 
                     src={skill.src} 
                     alt={skill.name} 
                     className={`w-14 h-14 md:w-16 md:h-16 object-contain transition-transform duration-500 group-hover:scale-110 ${["Next.js", "Vercel"].includes(skill.name) ? 'invert opacity-90' : ''}`}
                     loading="lazy"
                   />
                </div>
                <span className="text-white/60 font-mono text-[10px] md:text-xs tracking-widest uppercase transition-colors group-hover:text-white/90">
                  {skill.name}
                </span>
             </motion.div>
           </div>
         ))}
       </div>
    </div>
  );
}
