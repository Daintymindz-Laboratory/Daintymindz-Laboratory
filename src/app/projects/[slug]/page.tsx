import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, statusClasses } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.name} | DAINTYMINDZ LAB`,
      description: project.solution,
    };
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← All projects
          </Link>

          <div className="mt-10 mb-10">
            <div className="flex items-center gap-4 mb-6">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full border text-[10px] font-semibold tracking-[0.24em] uppercase ${statusClasses[project.status] ?? "bg-foreground/8 text-foreground/70 border-foreground/10"}`}
              >
                {project.status}
              </span>
              <span className="font-body text-xs text-foreground/40 tracking-wide">
                {project.category}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              {project.name}
            </h1>
          </div>

          {project.image && (
            <div className="mb-10 surface-panel border border-foreground/5 rounded-sm overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={1200}
                height={675}
                sizes="(min-width: 1024px) 768px, 100vw"
                className="w-full h-auto"
                priority
              />
            </div>
          )}

          <div className="space-y-6">
            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                The Problem
              </h2>
              <p className="font-body text-base leading-relaxed text-foreground/60">
                {project.problem}
              </p>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                The Solution
              </h2>
              <p className="font-body text-base leading-relaxed text-foreground/60">
                {project.solution}
              </p>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Departments
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/70 rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
