"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility for merging class names

// Define the props interface for type safety and clarity
export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, link, linkText = "View Project", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-sm text-white shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-white/5 hover:border-white/20",
          className
        )}
        {...props}
      >
        {/* Card Image Section */}
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-8">
          <h3 className="text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-white/90">
            {title}
          </h3>
          <p className="mt-4 flex-1 text-white/60 font-light leading-relaxed">{description}</p>
          
          {/* Card Link/CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/button mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-80"
            onClick={(e) => e.stopPropagation()} // Prevent card's onClick if it has one
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
