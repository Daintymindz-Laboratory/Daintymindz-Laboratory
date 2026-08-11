import type { Metadata } from "next";
import { portfolioProducts } from "../data/portfolio";
import PortfolioCarousel from "../components/PortfolioCarousel";
import PrintButton from "../components/PrintButton";

export const metadata: Metadata = {
  title: "Software Portfolio | DAINTYMINDZ LAB",
  description:
    "Production software shipped by the DAINTYMINDZ LAB Software Engineering team: web apps, mobile apps, APIs, and platforms built for real users.",
  alternates: {
    canonical: "https://daintymindz.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth absolute inset-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
                Software Engineering
              </p>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
                Software our team{" "}
                <span className="text-amber-gradient">has shipped</span>
              </h1>
              <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed max-w-2xl">
                Production applications built end to end: databases, APIs, and
                polished interfaces, deployed and used by real people.
              </p>
            </div>
            <PrintButton />
          </div>

          <div className="space-y-16 print:space-y-8">
            {portfolioProducts.map((product) => (
              <article
                key={product.slug}
                className="surface-panel border border-foreground/5 rounded-sm overflow-hidden print:break-inside-avoid"
              >
                <PortfolioCarousel images={product.images} alt={product.name} />

                <div className="p-8 lg:p-10">
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-2">
                    {product.name}
                  </h2>
                  <p className="font-body text-sm text-amber tracking-wide mb-6">
                    {product.tagline}
                  </p>
                  <p className="font-body text-base leading-relaxed text-foreground/60 mb-6">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/60 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-bold text-sm tracking-wider uppercase text-amber hover:text-amber-light transition-colors"
                  >
                    Visit {product.name} →
                  </a>
                  <p className="hidden print:block mt-2 font-body text-xs text-foreground/50">
                    {product.url}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center surface-panel border border-amber/20 rounded-sm p-10 no-print">
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">
              Need something built?
            </h2>
            <p className="font-body text-base text-foreground/60 leading-relaxed mb-6 max-w-xl mx-auto">
              This is a sample of what our Software Engineering team can ship
              for your organization: web apps, mobile apps, dashboards, and
              production APIs.
            </p>
            <a
              href="mailto:info@daintymindz.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber text-graphite-deep font-display font-bold text-sm tracking-widest rounded-sm hover:bg-amber-light transition-colors"
            >
              EMAIL info@daintymindz.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
