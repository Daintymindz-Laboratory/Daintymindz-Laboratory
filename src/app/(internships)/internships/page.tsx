import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROGRAM_INFO, TRACKS } from "../internship-data";

export const metadata: Metadata = {
  title: "Internships | DAINTYMINDZ LAB",
  description:
    "Explore the DAINTYMINDZ Internship Programme 2026 — four research tracks, four months, fully remote, open to talent worldwide.",
};

export default function InternshipsPage() {
  return (
    <>
      <div className="mt-10 mb-14">
        <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
          Internship Programme 2026
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

      {/* Hero image */}
      <div className="mb-14 surface-panel border border-foreground/5 rounded-sm overflow-hidden">
        <Image
          src={PROGRAM_INFO.heroImage}
          alt="DAINTYMINDZ Internship Programme 2026"
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
                Learn more & apply
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
          </a>{" "}
          — we would love to hear from you.
        </p>
      </div>
    </>
  );
}
