import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | DAINTYMINDZ LAB",
  description:
    "Reach out to DAINTYMINDZ LAB — connect with our global research institute spanning the USA, Nigeria, South Korea, and Canada.",
};

export default function ContactPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
              Contact
            </p>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
              Let&apos;s build something{" "}
              <span className="text-amber-gradient">together</span>
            </h1>
            <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re interested in collaborating on research,
              joining the lab, or learning more about our work — we&apos;d love
              to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-xl text-foreground mb-2">
                General Inquiries
              </h2>
              <p className="font-body text-sm text-foreground/55 mb-4">
                For partnerships, press, and general questions.
              </p>
              <a
                href="mailto:info@daintymindz.com"
                className="font-display font-bold text-amber hover:text-amber-light transition-colors text-sm tracking-[0.2em] uppercase"
              >
                info@daintymindz.com
              </a>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-xl text-foreground mb-2">
                Internships
              </h2>
              <p className="font-body text-sm text-foreground/55 mb-4">
                Join our next cohort — remote roles available globally.
              </p>
              <Link
                href="/internships"
                className="font-display font-bold text-amber hover:text-amber-light transition-colors text-sm tracking-[0.2em] uppercase"
              >
                View Open Tracks →
              </Link>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-xl text-foreground mb-2">
                Global Presence
              </h2>
              <p className="font-body text-sm text-foreground/55 leading-relaxed">
                USA · Nigeria · South Korea · Canada
              </p>
              <p className="mt-2 font-body text-xs text-foreground/40">
                Research institute & innovation studio
              </p>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8">
              <h2 className="font-display font-bold text-xl text-foreground mb-2">
                Office Hours
              </h2>
              <p className="font-body text-sm text-foreground/55 leading-relaxed">
                Monday – Friday: 9 AM – 5 PM WAT
              </p>
              <p className="mt-2 font-body text-xs text-foreground/40">
                Asynchronous collaboration across all time zones
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block px-10 py-5 border border-foreground/15 text-foreground/70 font-display font-semibold text-sm tracking-widest rounded-sm hover:border-amber/50 hover:text-amber transition-all duration-300"
            >
              VIEW OUR PROJECTS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
