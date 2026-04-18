import type { Metadata } from "next";
import Link from "next/link";
import { thrusts } from "../data/research";

export const metadata: Metadata = {
  title: "Research Thrusts | DAINTYMINDZ LAB",
  description:
    "Explore the four core research thrusts powering DAINTYMINDZ LAB — Machine Learning, Software Systems, Data Analytics, and Data Operations.",
};

export default function ResearchPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
              Research Thrusts
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Intelligence research,{" "}
              <span className="text-amber-gradient">four thrusts</span>
            </h1>
            <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed max-w-3xl">
              Our research is organized into four interdependent thrusts — each
              addressing a core pillar of the intelligence pipeline, from raw
              data to real-world deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {thrusts.map((thrust) => (
              <Link
                key={thrust.slug}
                href={`/research/${thrust.slug}`}
                className="group surface-panel border border-foreground/5 rounded-sm p-8 card-hover"
              >
                <p className="font-body text-xs font-semibold tracking-[0.3em] text-amber/50 uppercase mb-3">
                  {thrust.shortTitle}
                </p>
                <h2 className="font-display font-bold text-2xl text-foreground group-hover:text-amber transition-colors mb-4">
                  {thrust.title}
                </h2>
                <p className="font-body text-sm leading-relaxed text-foreground/55 mb-5">
                  {thrust.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {thrust.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/50 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
