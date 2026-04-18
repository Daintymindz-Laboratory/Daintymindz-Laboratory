import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { thrusts } from "../../data/research";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return thrusts.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const thrust = thrusts.find((t) => t.slug === slug);
    if (!thrust) return { title: "Research Thrust Not Found" };
    return {
      title: `${thrust.shortTitle} | DAINTYMINDZ LAB`,
      description: thrust.description,
    };
  });
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thrust = thrusts.find((t) => t.slug === slug);
  if (!thrust) notFound();

  // Find projects related to this thrust by matching tags
  const relatedProjects = projects.filter((p) =>
    p.tags.some((tag) =>
      thrust.tags.some(
        (tt) =>
          tt.toLowerCase().includes(tag.toLowerCase()) ||
          tag.toLowerCase().includes(tt.toLowerCase()),
      ),
    ),
  );

  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← All research thrusts
          </Link>

          <div className="mt-10 mb-10">
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-amber/50 uppercase mb-3">
              {thrust.shortTitle}
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              {thrust.title}
            </h1>
          </div>

          <div className="space-y-6">
            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Overview
              </h2>
              <p className="font-body text-base leading-relaxed text-foreground/60">
                {thrust.description}
              </p>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                Focus Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {thrust.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/70 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                  Related Projects
                </h2>
                <div className="space-y-4">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group flex items-center justify-between p-4 rounded-sm border border-foreground/5 hover:border-amber/20 transition-colors"
                    >
                      <div>
                        <h3 className="font-display font-bold text-foreground group-hover:text-amber transition-colors">
                          {project.name}
                        </h3>
                        <p className="mt-1 font-body text-sm text-foreground/50">
                          {project.solution.slice(0, 120)}…
                        </p>
                      </div>
                      <span className="text-foreground/30 group-hover:text-amber transition-colors">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
