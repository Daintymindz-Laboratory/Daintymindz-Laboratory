import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | DAINTYMINDZ LAB",
  description: "Privacy policy for DAINTYMINDZ LAB.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect information you voluntarily provide through direct communication, partnership enquiries, internship applications, and website interactions. This can include your name, email address, organisation, and the context of your message.",
  },
  {
    title: "How We Use Information",
    body: "We use submitted information to respond to enquiries, evaluate collaboration opportunities, review applications, improve our website, and support research and operational communication across the lab.",
  },
  {
    title: "Data Handling",
    body: "We handle information with reasonable administrative and technical safeguards and only retain it for as long as necessary to support legitimate communication, legal, and operational needs.",
  },
  {
    title: "Third-Party Services",
    body: "Our website and communication workflows may rely on trusted third-party tools for hosting, analytics, email, or professional networking. Those services operate under their own privacy terms.",
  },
  {
    title: "Your Choices",
    body: "You may contact us at info@daintymindz.com to request access, correction, or deletion of information you have shared with us, subject to applicable legal and operational requirements.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← Back to home
          </a>

          <div className="mt-10 mb-14">
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
              Privacy Policy
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Responsible handling for a <span className="text-amber-gradient">global research lab</span>
            </h1>
            <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed">
              This policy explains, at a high level, how DAINTYMINDZ LAB collects,
              uses, and protects information shared through this website and our
              communication channels.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <article key={section.title} className="surface-panel border border-foreground/5 rounded-sm p-8">
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="font-body text-base leading-relaxed text-foreground/60">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 surface-panel border border-foreground/5 rounded-sm p-8">
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">Contact</h2>
            <p className="font-body text-base leading-relaxed text-foreground/60">
              For privacy-related questions, contact <a className="text-amber hover:text-amber-light transition-colors" href="mailto:info@daintymindz.com">info@daintymindz.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
