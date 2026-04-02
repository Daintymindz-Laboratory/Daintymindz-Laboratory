"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const projects = [
  { name: "Seed Viability Scanning", status: "Active", dept: "AgriVision", summary: "Rapid screening workflows for assessing seed quality and viability with machine vision support." },
  { name: "HarvestGuard", status: "Pilot", dept: "Field Intelligence", summary: "Monitoring and alert systems designed to improve crop handling, harvest oversight, and resilience in the field." },
  { name: "PurityScale", status: "Validation", dept: "Quality Analytics", summary: "Measurement and classification tooling for purity assessment across agricultural and industrial samples." },
  { name: "PathFinder", status: "Discovery", dept: "Decision Systems", summary: "Route and recommendation intelligence for navigating uncertain operational environments." },
  { name: "Mobile Vision Core", status: "Platform", dept: "Applied AI", summary: "A reusable computer vision engine for lightweight mobile capture, inference, and edge-assisted workflows." },
  { name: "Decision Engine", status: "Flagship", dept: "Decisional Intelligence", summary: "A modular decision-support core for turning data, uncertainty, and policy constraints into actionable guidance." },
];

const statusClasses: Record<string, string> = {
  Active: "bg-emerald-500/12 text-emerald-300 border-emerald-400/20",
  Pilot: "bg-sky-500/12 text-sky-300 border-sky-400/20",
  Validation: "bg-violet-500/12 text-violet-300 border-violet-400/20",
  Discovery: "bg-amber/12 text-amber border-amber/20",
  Platform: "bg-foreground/8 text-foreground/70 border-foreground/10",
  Flagship: "bg-amber/14 text-amber border-amber/25",
};

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
          <p className={`max-w-xl font-body text-lg text-foreground/60 leading-relaxed ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            From field intelligence to decision systems, our projects are built as deployable engines for measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`surface-panel border border-foreground/5 rounded-sm p-7 card-hover ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${350 + i * 100}ms` }}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full border text-[10px] font-semibold tracking-[0.24em] uppercase ${statusClasses[project.status]}`}>
                  {project.status}
                </span>
                <span className="px-3 py-1 rounded-full border border-foreground/10 text-[10px] font-semibold tracking-[0.24em] uppercase text-foreground/55">
                  {project.dept}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                {project.name}
              </h3>
              <p className="font-body text-sm leading-relaxed text-foreground/55">
                {project.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
