"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { projects, statusClasses } from "../data/projects";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="projects" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-depth absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className={`flex items-center gap-4 mb-6 ${inView ? "animate-fade-up" : "opacity-0"}`}>
              <div className="geo-diamond" />
              <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
                Projects
              </span>
              <div className="w-24 h-px bg-gradient-to-r from-amber/30 to-transparent" />
            </div>
            <h2 className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}>
              The portfolio behind our <span className="text-amber-gradient">research momentum</span>
            </h2>
          </div>
          <p className={`max-w-xl font-body text-lg italic text-foreground/60 leading-relaxed ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Showcasing our commitment to Intelligence Research for Impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Link
              key={project.name}
              href={`/projects/${project.slug}`}
              className={`group surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${350 + i * 100}ms` }}
            >
              {project.image && (
                <div className="relative w-full aspect-[16/9] bg-foreground/5">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full border text-[10px] font-semibold tracking-[0.24em] uppercase ${statusClasses[project.status] ?? "bg-foreground/8 text-foreground/70 border-foreground/10"}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-4 group-hover:text-amber transition-colors">
                  {project.name}
                </h3>
                <p className="font-body text-sm leading-relaxed text-foreground/55 mb-2">
                  <strong className="text-foreground/70">The Problem:</strong> {project.problem}
                </p>
                <p className="font-body text-sm leading-relaxed text-foreground/55 mb-5">
                  <strong className="text-foreground/70">The Solution:</strong> {project.solution}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/50 rounded-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground/15 text-foreground/70 font-display font-semibold text-sm tracking-widest rounded-sm hover:border-amber/50 hover:text-amber transition-all duration-300"
          >
            VIEW ALL PROJECTS
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
