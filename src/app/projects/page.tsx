import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, statusClasses } from "../data/projects";

export const metadata: Metadata = {
  title: "Projects | DAINTYMINDZ LAB",
  description:
    "Explore the DAINTYMINDZ LAB project portfolio — real-world research across agricultural intelligence, smart infrastructure, and data analytics.",
};

export default function ProjectsPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
              Projects
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              The portfolio behind our{" "}
              <span className="text-amber-gradient">research momentum</span>
            </h1>
            <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed max-w-3xl">
              Showcasing our commitment to Intelligence Research for Impact.
              Each project bridges academic research and field deployment to
              create measurable change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover"
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
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full border text-[10px] font-semibold tracking-[0.24em] uppercase ${statusClasses[project.status] ?? "bg-foreground/8 text-foreground/70 border-foreground/10"}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-xl text-foreground mb-4 group-hover:text-amber transition-colors">
                    {project.name}
                  </h2>
                  <p className="font-body text-sm leading-relaxed text-foreground/55 mb-2">
                    <strong className="text-foreground/70">The Problem:</strong>{" "}
                    {project.problem}
                  </p>
                  <p className="font-body text-sm leading-relaxed text-foreground/55 mb-5">
                    <strong className="text-foreground/70">The Solution:</strong>{" "}
                    {project.solution}
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
        </div>
      </section>
    </main>
  );
}
