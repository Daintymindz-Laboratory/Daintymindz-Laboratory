import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICE_STATS,
  SERVICE_CATEGORIES,
  QUALITY_STANDARDS,
  HOW_IT_WORKS,
  PRICING_OPTIONS,
} from "../data/services";

export const metadata: Metadata = {
  title: "Research Services | DAINTYMINDZ LAB",
  description:
    "Daintymindz Laboratory offers custom dataset curation, AI and machine learning development, software deployment, research advisory, and training services to universities, NGOs, and organisations worldwide.",
  alternates: {
    canonical: "https://daintymindz.com/services",
  },
  openGraph: {
    title: "Research Services | DAINTYMINDZ LAB",
    description:
      "Intelligence for Impact, available to partners, institutions and organisations worldwide. From dataset curation to model development, software deployment, and research training.",
    type: "website",
    url: "https://daintymindz.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Services | DAINTYMINDZ LAB",
    description:
      "Intelligence for Impact, available to partners, institutions and organisations worldwide.",
  },
};

export default function ServicesPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      {/* Hero */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
            Research Services
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
            Intelligence for Impact,{" "}
            <span className="text-amber-gradient">available worldwide</span>
          </h1>
          <p className="mt-8 font-body text-lg text-foreground/60 leading-relaxed max-w-3xl mx-auto">
            Daintymindz Laboratory is a global, diaspora-led AI research organisation with
            active hubs in the USA, Nigeria, South Korea, and Canada. We offer a full spectrum
            of research and technology services, from custom dataset curation to model
            development, software deployment, and research training. Whether you are a
            university, an NGO, a private organisation, or an individual researcher, we can
            build the intelligence infrastructure your work needs.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:info@daintymindz.com"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-amber text-graphite-deep font-display font-bold text-base tracking-widest rounded-sm hover:shadow-[0_0_60px_rgba(213,156,16,0.3)] transition-all duration-300"
            >
              <span>TALK TO THE LAB</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <span className="font-body text-sm text-foreground/45">
              info@daintymindz.com · Response within 48 hours
            </span>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8">
            {SERVICE_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-extrabold text-2xl sm:text-4xl text-amber">
                  {stat.value}
                </div>
                <div className="mt-2 font-body text-xs sm:text-sm text-foreground/50 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="section-depth absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Our Service Offerings
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="surface-panel border border-foreground/5 rounded-sm p-8 card-hover"
              >
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-sm italic text-foreground/50 mb-6">
                  {category.tagline}
                </p>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                      <span className="font-body text-sm text-foreground/60 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Why Work With Daintymindz
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-graphite-deep rounded-sm p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                African Context, Global Standards
              </h3>
              <p className="font-body text-base leading-relaxed text-white/70">
                We are one of the very few research organisations actively curating
                African-context AI datasets. Our ground-truth data comes from Nigerian
                fields, markets, and food systems, contexts that are massively
                underrepresented in global AI training data.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-amber italic">
                If your research involves African agriculture, food security, nutrition, or
                infrastructure, we are not just a service provider. We are your most relevant
                partner.
              </p>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Research-Grade Quality
              </h3>
              <ul className="space-y-4">
                {QUALITY_STANDARDS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
                    <span className="font-body text-base text-foreground/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="section-depth absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              How It Works
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
          </div>

          <div className="space-y-4">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.number}
                className="surface-panel border border-foreground/5 rounded-sm p-8 flex flex-col sm:flex-row gap-6 sm:items-center"
              >
                <div className="font-display font-extrabold text-3xl text-amber shrink-0 sm:w-16">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-foreground/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* African data callout */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-graphite-deep rounded-sm p-10 lg:p-16 text-center">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Are you a researcher, university, or institution that needs{" "}
              <span className="text-amber-gradient">African-context data?</span>
            </h2>
            <p className="mt-6 font-body text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              We can curate it. From Nigerian grain samples to crop growth-stage imagery to
              food portion reference datasets, if the data does not exist, we build it from
              the ground up, with full documentation and a Zenodo-published, citable DOI.
            </p>
            <p className="mt-4 font-body text-sm text-amber italic">
              This is one of the highest-impact, most underserved research services in
              African AI. Ask us about it.
            </p>
            <a
              href="mailto:info@daintymindz.com"
              className="mt-8 inline-flex items-center gap-3 px-10 py-5 bg-amber text-graphite-deep font-display font-bold text-sm tracking-widest rounded-sm hover:bg-amber-light transition-colors duration-300"
            >
              ASK ABOUT DATA CURATION
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing + Contact */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="section-depth absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <div className="surface-panel border border-foreground/5 rounded-sm p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Pricing
              </h3>
              <p className="font-body text-sm text-foreground/55 mb-6">
                Scoped per project based on complexity, data volume, and turnaround time.
              </p>
              <ul className="space-y-3">
                {PRICING_OPTIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
                    <span className="font-body text-base text-foreground/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-panel border border-amber/20 rounded-sm p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="font-body text-sm text-foreground/55 mb-6">
                  Locations: USA · Nigeria · South Korea · Canada. Response time: within 48
                  hours.
                </p>
                <a
                  href="mailto:info@daintymindz.com"
                  className="font-display font-bold text-xl text-amber hover:text-amber-light transition-colors"
                >
                  info@daintymindz.com
                </a>
              </div>
              <p className="mt-8 font-body text-sm italic text-foreground/50 leading-relaxed border-t border-foreground/10 pt-6">
                &ldquo;If the data does not exist, we build it. If the model has never been
                trained for your context, we train it. If the tool has never been built for
                your community, we are the team to build it.&rdquo;
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:info@daintymindz.com"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-amber text-graphite-deep font-display font-bold text-lg tracking-widest rounded-sm hover:shadow-[0_0_60px_rgba(213,156,16,0.3)] transition-all duration-300"
            >
              <span>EMAIL THE LAB</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <p className="mt-6 font-body text-sm text-foreground/45">
              Or explore our{" "}
              <Link href="/projects" className="text-amber hover:text-amber-light transition-colors">
                completed projects
              </Link>{" "}
              and{" "}
              <Link href="/research" className="text-amber hover:text-amber-light transition-colors">
                research thrusts
              </Link>{" "}
              first.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
