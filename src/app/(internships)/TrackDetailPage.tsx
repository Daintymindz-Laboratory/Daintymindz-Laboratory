import Image from "next/image";
import Link from "next/link";
import { type InternshipTrack, PROGRAM_INFO } from "./internship-data";

export default function TrackDetailPage({ track }: { track: InternshipTrack }) {
  const hasApplyUrl = Boolean(track.applyUrl) || Boolean(process.env.INTERNSHIP_APPLICATION_FORM_URL);

  return (
    <>
      <div className="mt-10 mb-14">
        <Link
          href="/internships"
          className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors mb-6"
        >
          ← All internships
        </Link>

        <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
          {track.subtitle}
        </p>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
          <span className="text-amber-gradient">{track.title}</span> Internship
        </h1>

        <div className="mt-6 flex flex-wrap gap-4">
          {[
            { label: "Duration", value: track.duration },
            { label: "Mode", value: track.mode },
            { label: "Programme", value: "June – December 2026" },
          ].map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 font-body text-sm text-foreground/50 surface-panel border border-foreground/5 rounded-sm px-4 py-2"
            >
              <span className="font-semibold text-foreground/70">{item.label}:</span>{" "}
              {item.value}
            </span>
          ))}
        </div>

        <p className="mt-8 font-body text-lg text-foreground/60 leading-relaxed max-w-3xl">
          {track.description}
        </p>
      </div>

      {/* Track image */}
      <div className="mb-10 surface-panel border border-foreground/5 rounded-sm overflow-hidden">
        <Image
          src={track.image}
          alt={`${track.title} — ${track.subtitle}`}
          width={1200}
          height={800}
          sizes="(min-width: 1024px) 960px, 100vw"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* What You'll Do */}
      <div className="surface-panel border border-foreground/5 rounded-sm p-8 mb-6">
        <h2 className="font-display font-bold text-2xl text-foreground mb-6">
          What You&apos;ll Do
        </h2>
        <ul className="space-y-4">
          {track.responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
              <span className="font-body text-base text-foreground/60 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="surface-panel border border-foreground/5 rounded-sm p-8 mb-6">
        <h2 className="font-display font-bold text-2xl text-foreground mb-6">
          Requirements
        </h2>
        <ul className="space-y-4">
          {track.requirements.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
              <span className="font-body text-base text-foreground/60 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Projects */}
      {track.relatedProjects.length > 0 && (
        <div className="surface-panel border border-foreground/5 rounded-sm p-8 mb-6">
          <h2 className="font-display font-bold text-2xl text-foreground mb-4">
            Projects You May Work On
          </h2>
          <div className="flex flex-wrap gap-3">
            {track.relatedProjects.map((project) => (
              <span
                key={project}
                className="font-body text-sm text-amber bg-amber/10 rounded-sm px-3 py-1.5"
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Apply CTA */}
      <div className="surface-panel border border-amber/20 rounded-sm p-8 text-center">
        <h2 className="font-display font-bold text-2xl text-foreground mb-4">
          Ready to Apply?
        </h2>
        <p className="font-body text-base text-foreground/60 leading-relaxed mb-6 max-w-2xl mx-auto">
          Submit your application for the <strong>{track.title}</strong> internship
          track. If you have questions, reach out to{" "}
          <a
            className="text-amber hover:text-amber-light transition-colors"
            href={`mailto:${PROGRAM_INFO.email}`}
          >
            {PROGRAM_INFO.email}
          </a>
          .
        </p>
        {hasApplyUrl ? (
          <a
            href={track.applyUrl || process.env.INTERNSHIP_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wider uppercase bg-amber text-graphite-deep px-8 py-3.5 rounded-sm hover:bg-amber-light transition-colors"
          >
            Apply Now
            <span>→</span>
          </a>
        ) : (
          <div className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wider uppercase bg-foreground/8 text-foreground/45 px-8 py-3.5 rounded-sm border border-foreground/10 cursor-not-allowed">
            Applications Open Soon
          </div>
        )}
      </div>
    </>
  );
}
