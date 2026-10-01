import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROGRAM_INFO, TRACKS } from "../internship-data";

export const metadata: Metadata = {
  title: "Internships | DAINTYMINDZ LAB",
  description:
    "Explore the DAINTYMINDZ Internship Programme: four research tracks, four months, fully remote, and reusable for future cohorts.",
  alternates: {
    canonical: "https://daintymindz.com/internships",
  },
  openGraph: {
    title: "DAINTYMINDZ Internship Programme",
    description:
      "Explore four research tracks: Machine Learning, Software Engineering, Data Analytics, and Data Operations.",
    type: "website",
    url: "https://daintymindz.com/internships",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
        width: 1800,
        height: 1200,
        alt: "DAINTYMINDZ Internship Programme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DAINTYMINDZ Internship Programme",
    description:
      "Four-month remote programme across ML, Software Engineering, Data Analytics, and Data Ops.",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
    ],
  },
};

export default function InternshipsPage() {
  return (
    <>
      <div className="mt-10 mb-14">
        <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
          Internship Programme
        </p>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
          {PROGRAM_INFO.tagline.split("Future").map((part, i) =>
            i === 0 ? (
              <span key={i}>
                {part}Future{" "}
              </span>
            ) : (
              <span key={i} className="text-amber-gradient">
                {part}
              </span>
            )
          )}
        </h1>
        <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed max-w-3xl">
          The <strong>DAINTYMINDZ Internship Programme</strong> is a four-month,
          fully remote opportunity for undergraduate students to contribute to real research projects
          across four specialised tracks. Work alongside the Daintymindz global
          team and help engineer intelligent futures.
        </p>
      </div>

      <div className="mb-10 rounded-sm border border-amber/25 bg-amber/8 px-6 py-5">
        <p className="font-display text-lg font-bold text-foreground">No current openings</p>
        <p className="mt-2 font-body text-sm leading-6 text-foreground/60">
          Applications are currently closed. Future cohort dates and the official application form will be published on the Careers page.
        </p>
        <Link href="/careers" className="mt-4 inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-amber hover:text-amber-light">
          View Careers <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Hero image */}
      <div className="mb-14 surface-panel border border-foreground/5 rounded-sm overflow-hidden">
        <Image
          src={PROGRAM_INFO.heroImage}
          alt="DAINTYMINDZ Internship Programme"
          width={1200}
          height={800}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Programme overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {[
          { label: "Duration", value: "4 months" },
          { label: "Mode", value: PROGRAM_INFO.mode },
          { label: "Tracks", value: "4 Research Thrusts" },
          { label: "Eligibility", value: "Undergraduate Students" },
        ].map((item) => (
          <div
            key={item.label}
            className="surface-panel border border-foreground/5 rounded-sm p-6"
          >
            <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber mb-2">
              {item.label}
            </p>
            <p className="font-display font-bold text-lg text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Track cards */}
      <h2 className="font-display font-extrabold text-3xl text-foreground mb-8">
        Choose Your Track
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {TRACKS.map((track) => (
          <Link
            key={track.slug}
            href={`/${track.slug}`}
            className="group surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover transition-all"
          >
            <div className="aspect-video relative">
              <Image
                src={track.image}
                alt={track.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber mb-3">
                {track.subtitle}
              </p>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3 group-hover:text-amber transition-colors">
                {track.title}
              </h3>
              <p className="font-body text-base text-foreground/60 leading-relaxed mb-4">
                {track.description}
              </p>
              <div className="flex items-center gap-2 font-body text-sm text-amber">
                Explore this track
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Who should apply */}
      <div className="surface-panel border border-foreground/5 rounded-sm p-8 mb-10">
        <h2 className="font-display font-bold text-2xl text-foreground mb-4">
          Who Should Apply?
        </h2>
        <p className="font-body text-base text-foreground/60 leading-relaxed mb-4">
          {PROGRAM_INFO.eligibility}
        </p>
        <ul className="space-y-3">
          {[
            "Undergraduate students in STEM fields",
            // "Recent graduates looking for hands-on research experience",
            // "Early-career professionals pivoting into ML, software, data analytics, or data ops",
            "Self-motivated builders with a portfolio of relevant projects",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
              <span className="font-body text-base text-foreground/60">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="surface-panel border border-foreground/5 rounded-sm p-8">
        <h2 className="font-display font-bold text-2xl text-foreground mb-4">
          Questions?
        </h2>
        <p className="font-body text-base text-foreground/60 leading-relaxed">
          Reach out to us at{" "}
          <a
            className="text-amber hover:text-amber-light transition-colors"
            href={`mailto:${PROGRAM_INFO.email}`}
          >
            {PROGRAM_INFO.email}
          </a>
          , we would love to hear from you.
        </p>
      </div>
    </>
  );
}
