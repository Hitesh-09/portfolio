import { ProjectCard } from "@/components/ui/project-card";

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="w-full mb-16">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4">
          My <span className="text-white/40">Projects</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl font-light">
          A collection of my recent projects, featuring scalable backends, interactive frontends, and AI integrations.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="Edulink"
          description="Academic Study Collaboration Platform designed to enhance peer learning and connect students through structured resources."
          imgSrc="/projects/edulink.png"
          link="https://github.com/Hitesh-09/Edulink"
        />
        <ProjectCard
          title="ParamSetu"
          description="Parametric Insurance Platform for Delivery Riders ensuring instant, data-driven payouts based on external triggers."
          imgSrc="/projects/paramsetu.png"
          link="https://github.com/Hitesh-09/ParamSetu"
        />
        <ProjectCard
          title="Retinal Disease Classification"
          description="Advanced deep learning pipeline to detect and classify various retinal diseases from medical imaging scans."
          imgSrc="/projects/retinal.png"
          link="https://github.com/Hitesh-09/retinal-disease-classification"
        />
        <ProjectCard
          title="Agentguard"
          description="A robust security and monitoring layer designed specifically for LLMs and autonomous AI agents."
          imgSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2834&auto=format&fit=crop"
          link="https://github.com/Hitesh-09/Agentguard"
        />
        <ProjectCard
          title="KrishiMitra"
          description="Scalable backend platform for managing farmer data with REST APIs, built for agri-tech applications."
          imgSrc="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop"
          link="https://github.com/Hitesh-09/KrishiMitra"
        />
        <ProjectCard
          title="TrainMate"
          description="A smart mobile application for searching train schedules, seat availability, and optimizing travel options."
          imgSrc="/projects/trainmate.png"
          link="https://github.com/Hitesh-09/TrainMate"
        />
      </div>
    </main>
  );
}
