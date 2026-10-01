import type { Metadata } from "next";
import Link from "next/link";
import { applicationSteps, researchAssociatePaths } from "../data/careers";

export const metadata: Metadata = {
  title: "Careers | DAINTYMINDZ LAB",
  description:
    "Explore Research Associate, internship, and collaboration pathways at DaintyMindz Laboratory.",
  alternates: { canonical: "https://daintymindz.com/careers" },
};

export default function CareersPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative overflow-hidden pb-24 pt-32 lg:pb-36 lg:pt-40">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <header className="mx-auto max-w-4xl text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.4em] text-amber">
              Careers at DaintyMindz
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-7xl">
              Find your path into the <span className="text-amber-gradient">lab</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl font-body text-base leading-8 text-foreground/60 sm:text-lg">
              Join a distributed team working across research, data, machine learning, and software. Our opportunities range from Research Associate roles to structured internships and project collaboration.
            </p>
          </header>

          <div className="mx-auto mt-12 max-w-4xl rounded-sm border border-amber/25 bg-amber/8 px-6 py-6 text-center">
            <p className="font-display text-lg font-bold text-foreground">No current openings</p>
            <p className="mt-2 font-body text-sm leading-6 text-foreground/60">
              We are not accepting applications at this time. When a role opens, the vacancy and its official application link will be published here.
            </p>
            <a
              href="mailto:careers@daintymindz.com?subject=Career%20Enquiry"
              className="mt-5 inline-flex items-center gap-2 rounded-sm border border-amber/35 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-amber transition-colors hover:bg-amber hover:text-graphite-deep"
            >
              Email careers@daintymindz.com <span aria-hidden="true">↗</span>
            </a>
          </div>

          <section className="mt-20">
            <div className="max-w-3xl">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-amber">
                Research Associate pathways
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                Contribute through your discipline
              </h2>
            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-2">
              {researchAssociatePaths.map((path) => (
                <article key={path.title} className="surface-panel rounded-sm border border-foreground/5 p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="font-display text-2xl font-bold text-foreground">{path.title}</h3>
                    <span className="shrink-0 rounded-full border border-foreground/10 px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-foreground/45">
                      Closed
                    </span>
                  </div>
                  <p className="mt-4 font-body text-sm leading-7 text-foreground/60">{path.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {path.strengths.map((strength) => (
                      <span key={strength} className="rounded-sm bg-amber/8 px-3 py-1.5 font-body text-xs text-amber">
                        {strength}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 grid gap-6 lg:grid-cols-2">
            <article className="surface-panel rounded-sm border border-foreground/5 p-8 sm:p-10">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-amber">Early career</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">Internship Programme</h2>
              <p className="mt-4 font-body text-sm leading-7 text-foreground/60">
                Our four-month, remote internship programme gives undergraduate students practical experience across the same four research tracks. Cohort dates and applications are announced only when recruitment opens.
              </p>
              <Link href="/internships" className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold tracking-wider text-amber hover:text-amber-light">
                EXPLORE THE PROGRAMME <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="surface-panel rounded-sm border border-foreground/5 p-8 sm:p-10">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-amber">Work with us</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">Research collaboration</h2>
              <p className="mt-4 font-body text-sm leading-7 text-foreground/60">
                Researchers, institutions, and domain specialists can propose a focused collaboration even when recruitment is closed. Collaboration inquiries are assessed separately from employment applications.
              </p>
              <Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold tracking-wider text-amber hover:text-amber-light">
                DISCUSS A COLLABORATION <span aria-hidden="true">→</span>
              </Link>
            </article>
          </section>

          <section className="mt-20">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-amber">How applications work</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-4xl">A clear path when roles open</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {applicationSteps.map((step) => (
                <article key={step.number} className="border-t border-amber/40 pt-5">
                  <span className="font-display text-sm font-bold text-amber">{step.number}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 font-body text-sm leading-7 text-foreground/55">{step.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 font-body text-sm leading-7 text-foreground/55">
              Questions about employment opportunities can be sent to{" "}
              <a className="font-semibold text-amber hover:text-amber-light" href="mailto:careers@daintymindz.com?subject=Career%20Enquiry">
                careers@daintymindz.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
