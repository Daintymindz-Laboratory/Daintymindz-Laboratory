import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DAINTYMINDZ LAB",
  description: "Privacy policy for DAINTYMINDZ LTD — outlining how we collect, use, and protect information across our global research initiatives.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information to drive our \"Intelligence Research for Impact\" mission. This includes: Professional Information (name, email address, and institutional affiliation); Field Research Data (Data Ops) such as environmental data, crop imagery, and infrastructure metadata — anonymized to protect individual privacy; and Technical Data (IP addresses, browser types, and usage patterns on our website and GitHub repositories).",
  },
  {
    title: "2. How We Use Your Data",
    body: "Daintymindz uses collected data for: Research & Development — to train and refine our Machine Learning models for seed viability, shelf-life prediction, and infrastructure diagnostics; Communication — to respond to inquiries, manage our \"Mentorship Mandate,\" and provide project updates; and Operational Integrity — to ensure the security of our software systems and digital ecosystems.",
  },
  {
    title: "3. Data Operations (Data Ops) & Ethics",
    body: "In accordance with our Core Philosophy, we prioritize Equitable and Sustainable data practices. All field data curated for our novel datasets is stripped of personally identifiable information (PII) before being used in ML model training. We ensure that field data acquisition in our Nigerian, South Korean, and North American hubs follows local ethical guidelines and participant consent protocols.",
  },
  {
    title: "4. Data Sharing & Global Transfers",
    body: "As a decentralized lab, data may be transferred between our hubs in the USA, Nigeria, Canada, and South Korea. We do not sell, rent, or trade your personal data to third parties. Data is only shared with academic partners or cloud service providers under strict confidentiality agreements (NDAs) to support our research thrusts.",
  },
  {
    title: "5. Your Rights",
    body: "Depending on your location (GDPR/NDPR), you have the right to: access the personal data we hold about you; request the correction or erasure of your data; and object to the processing of your data for research purposes.",
  },
  {
    title: "6. Security",
    body: "We implement industry-standard encryption and secure \"Edge-Computing\" protocols to protect our \"Daintymindz Mobile Vision Core\" and all internal databases from unauthorized access.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← Back to home
          </Link>

          <div className="mt-10 mb-14">
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
              Privacy Policy
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              <span className="text-amber-gradient">DAINTYMINDZ LTD</span> Privacy Policy
            </h1>
            <div className="mt-6 space-y-1 font-body text-sm text-foreground/50">
              <p><strong>Effective Date:</strong> March 31, 2026</p>
              <p><strong>Last Updated:</strong> March 31, 2026</p>
            </div>
            <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed">
              At <strong>Daintymindz Laboratory (DMZ Lab)</strong>, we are committed to the
              highest standards of data ethics and transparency. This Privacy
              Policy outlines how we collect, use, and protect information across
              our global research initiatives and digital platforms.
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
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">7. Contact Us</h2>
            <p className="font-body text-base leading-relaxed text-foreground/60">
              For questions regarding this policy or our data practices, please contact our Data Privacy Officer: <a className="text-amber hover:text-amber-light transition-colors" href="mailto:info@daintymindz.com">info@daintymindz.com</a>.
            </p>
            <p className="mt-4 font-body text-sm text-foreground/50">
              <strong>Global Reach:</strong> USA | Nigeria | South Korea | Canada
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
