import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | DAINTYMINDZ Internships",
    default: "Internships | DAINTYMINDZ LAB",
  },
  description:
    "Join the DAINTYMINDZ Internship Programme 2026 — a four-month remote programme across Machine Learning, Software Systems, Data Analytics, and Data Operations.",
  alternates: {
    canonical: "https://daintymindz.com/internships",
  },
  openGraph: {
    title: "DAINTYMINDZ Internship Programme 2026",
    description:
      "Join a four-month remote programme across Machine Learning, Software Systems, Data Analytics, and Data Operations.",
    type: "website",
    url: "https://daintymindz.com/internships",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAINTYMINDZ Internship Programme 2026",
    description:
      "Join a four-month remote programme across Machine Learning, Software Systems, Data Analytics, and Data Operations.",
  },
};

export default function InternshipsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← Back to home
          </Link>

          {children}
        </div>
      </section>
    </main>
  );
}
