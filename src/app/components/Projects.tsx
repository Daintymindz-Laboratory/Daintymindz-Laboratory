"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

type Project = {
  name: string;
  status: string;
  category: string;
  image: string | null;
  problem: string;
  solution: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Climate-Window Security via Seed Viability Scanning",
    status: "Field Testing Phase",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/seed-viability.png",
    problem: "Up to 30% of local seeds are unviable due to micro-cracks or pests, wasting crucial planting windows.",
    solution: "A mobile Computer Vision app where farmers scan seeds to receive an instant Germination Probability Score, securing harvests before the first seed hits the soil.",
    tags: ["DataOps", "MachineLearning", "SoftwareSystems"],
  },
  {
    name: "HarvestGuard: Predictive Shelf-Life Analytics",
    status: "Model Optimization",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/harvestguard.png",
    problem: "Perishables like cassava and tomatoes suffer up to 40% transit loss from \"hidden\" internal rot.",
    solution: "A surface-analysis model that detects early vascular streaking and micro-bruising to calculate remaining shelf-life in days, optimizing the supply chain.",
    tags: ["DataOps", "MachineLearning"],
  },
  {
    name: "PurityScale: Dry Food Supply Chain Standardization",
    status: "Field Testing Phase",
    category: "Agricultural Intelligence & Food Security",
    image: "/images/projects/purityscale.png",
    problem: "Manual grain pricing often misses hidden weevil damage and stones, causing massive losses for bulk buyers.",
    solution: "A high-density object detection tool that provides an objective Purity & Quality Grade for local Nigerian grain samples.",
    tags: ["DataOps", "MachineLearning"],
  },
  {
    name: "PathFinder: Real-time Cyber-Physical Infrastructure Diagnostics",
    status: "Model Optimization",
    category: "Smart Infrastructure & Transport",
    image: "/images/projects/pathfinder.png",
    problem: "Transforming standard dashboards into intelligent \"Senses.\"",
    solution: "A YOLO-based edge-computing model trained on underserved Nigerian road datasets. It instantly identifies and classifies potholes, severe cracks, and surface damage to provide real-time safety hazards and transit delay mapping.",
    tags: ["SoftwareSystems", "MachineLearning"],
  },
  {
    name: "Daintymindz Mobile Vision Core",
    status: "Platform Build",
    category: "Software & Data Analytics",
    image: null,
    problem: "Complex Computer Vision models cannot run on low-end devices in remote regions.",
    solution: "A specialized software framework that allows complex CV models (like our Seed Viability and Shelf-Life scanners) to run locally on a smartphone, with high-performance cloud backends and Edge-Computing interfaces.",
    tags: ["SoftwareSystems"],
  },
  {
    name: "Daintymindz Decision Engine",
    status: "Dashboard Design",
    category: "Software & Data Analytics",
    image: null,
    problem: "Raw qualitative field data is not actionable for supply chain decisions.",
    solution: "Our analysts use PowerBI and Tableau to translate raw field data into high-fidelity \"Actionable Foresight\" dashboards, integrating ML-driven seed viability scores and produce shelf-life predictions.",
    tags: ["DataAnalytics"],
  },
];

const statusClasses: Record<string, string> = {
  "Field Testing Phase": "bg-emerald-500/12 text-emerald-300 border-emerald-400/20",
  "Model Optimization": "bg-sky-500/12 text-sky-300 border-sky-400/20",
  "Platform Build": "bg-violet-500/12 text-violet-300 border-violet-400/20",
  "Dashboard Design": "bg-amber/12 text-amber border-amber/20",
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
          <p className={`max-w-xl font-body text-lg italic text-foreground/60 leading-relaxed ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Showcasing our commitment to Intelligence Research for Impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover ${
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

                <h3 className="font-display font-bold text-xl text-foreground mb-4">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
