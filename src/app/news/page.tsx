import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { milestones } from "../data/news";

export const metadata: Metadata = {
  title: "News & Milestones | DAINTYMINDZ LAB",
  description:
    "Follow the DaintyMindz journey, from our beginnings as a writing agency to Dainty Mindz Ltd and a growing global research team.",
  alternates: { canonical: "https://daintymindz.com/news" },
};

export default function NewsPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative overflow-hidden pb-24 pt-32 lg:pb-36 lg:pt-40">
        <div className="section-depth-soft absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mx-auto max-w-4xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.4em] text-amber">
              News & Milestones
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-7xl">
              Every chapter brought us <span className="text-amber-gradient">closer</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl font-body text-base leading-8 text-foreground/60 sm:text-lg">
              From a small writing agency to a multidisciplinary research and technology company, this is the DaintyMindz story: built by people, strengthened by purpose, and still unfolding.
            </p>
            <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Dainty Mindz Ltd · RC 9161423
            </p>
          </header>

          <div className="relative mx-auto mt-20 max-w-5xl lg:mt-28">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-linear-to-b from-amber/70 via-amber/20 to-transparent md:left-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <article
                  key={`${milestone.date}-${milestone.title}`}
                  className={`relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0 ${
                    index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                  }`}
                >
                  <span className="absolute left-0 top-7 h-[15px] w-[15px] rounded-full border-4 border-background bg-amber shadow-[0_0_0_1px_rgba(213,156,16,0.35)] md:left-1/2 md:-translate-x-1/2" />

                  <div className="surface-panel overflow-hidden rounded-sm border border-foreground/8 shadow-xl shadow-black/5">
                    {milestone.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-foreground/5 bg-black">
                        <Image
                          src={milestone.image}
                          alt={milestone.imageAlt ?? ""}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className={`object-contain ${
                            milestone.category === "Company Milestone" ? "bg-white p-3" : "p-8"
                          }`}
                        />
                      </div>
                    )}

                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <time className="font-display text-sm font-bold text-amber">
                          {milestone.date}
                        </time>
                        <span className="rounded-full border border-foreground/10 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-widest text-foreground/45">
                          {milestone.category}
                        </span>
                      </div>

                      <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-foreground">
                        {milestone.title}
                      </h2>
                      <p className="mt-4 font-body text-sm leading-7 text-foreground/60">
                        {milestone.summary}
                      </p>

                      {milestone.people && (
                        <div className="mt-6 grid gap-3">
                          {milestone.people.map((person) => (
                            <Link
                              key={person.slug}
                              href={`/team/${person.slug}`}
                              className="group flex items-center justify-between gap-4 rounded-sm border border-foreground/8 px-4 py-3 transition-colors hover:border-amber/35 hover:bg-amber/5"
                            >
                              <span>
                                <span className="block font-display text-sm font-bold text-foreground group-hover:text-amber">
                                  {person.name}
                                </span>
                                <span className="mt-1 block font-body text-xs text-foreground/45">
                                  {person.role}
                                </span>
                              </span>
                              <span aria-hidden="true" className="text-amber">→</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-3xl border-t border-foreground/8 pt-10 text-center">
            <p className="font-display text-2xl font-bold text-foreground">
              The next milestone is already taking shape.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-amber px-7 py-3.5 font-display text-sm font-bold tracking-wider text-graphite-deep transition-colors hover:bg-amber-light"
            >
              BUILD WITH US <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
