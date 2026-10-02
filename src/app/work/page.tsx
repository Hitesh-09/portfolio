import { ProjectCard } from "@/components/ui/project-card";

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 pb-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="w-full mb-16">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4">
          Selected <span className="text-white/40">Works</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl font-light">
          A collection of my recent projects, featuring scalable backends, interactive frontends, and AI integrations.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard
          title="Aero Landing Page"
          description="A comprehensive AI chatbot platform. This project focuses on the design and development of a user-friendly and visually appealing landing page."
          imgSrc="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop"
          link="#"
        />
        <ProjectCard
          title="Dreamland App Concept"
          description="A dreamy mobile app prototype designed for mindfulness and relaxation, featuring calming animations and a serene user interface."
          imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
          link="#"
          linkText="Explore Concept"
        />
        <ProjectCard
          title="Quantum Analytics Dashboard"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2834&auto=format&fit=crop"
          link="#"
        />
        <ProjectCard
          title="Nebula API Gateway"
          description="A scalable, high-performance API gateway built in Go to handle millions of concurrent connections for microservices architectures."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
          link="#"
        />
        <ProjectCard
          title="Fintech Mobile Wallet"
          description="A cross-platform React Native application providing secure cryptographic key generation and seamless digital payments."
          imgSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2940&auto=format&fit=crop"
          link="#"
        />
        <ProjectCard
          title="Neural Search Engine"
          description="An enterprise search tool powered by vector embeddings, optimizing document retrieval across multiple internal knowledge bases."
          imgSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop"
          link="#"
          linkText="View Demo"
        />
      </div>
    </main>
  );
}
