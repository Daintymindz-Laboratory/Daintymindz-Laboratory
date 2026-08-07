import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team } from "../../data/team";
import { projects } from "../../data/projects";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const member = team.find((m) => m.slug === slug);
    if (!member) return { title: "Team Member Not Found" };
    const bioPreview = member.bio.replace(/\n/g, " ").slice(0, 160);
    return {
      title: `${member.name} | DAINTYMINDZ LAB`,
      description: `${member.role}, ${bioPreview}`,
      alternates: {
        canonical: `https://daintymindz.com/team/${slug}`,
      },
      openGraph: {
        title: member.name,
        description: `${member.role} at DAINTYMINDZ LAB`,
        type: "profile",
        url: `https://daintymindz.com/team/${slug}`,
        images: [
          {
            url: member.photo,
            width: 280,
            height: 373,
            alt: member.name,
          },
        ],
      },
      twitter: {
        card: "summary",
        title: member.name,
        description: `${member.role} at DAINTYMINDZ LAB`,
        images: [member.photo],
      },
    };
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const completedProjects = (member.projects ?? [])
    .map((projectSlug) => projects.find((p) => p.slug === projectSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← All team members
          </Link>

          <div className="mt-10 pb-10 border-b border-foreground/10 flex flex-col sm:flex-row gap-8 sm:items-center">
            <div className="surface-panel border border-foreground/5 rounded-full overflow-hidden shrink-0 w-52 h-52 sm:w-60 sm:h-60">
              <div className="relative w-full h-full bg-foreground/5">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
                {member.name}
              </h1>
              <p className="mt-3 text-amber font-body text-sm tracking-[0.2em] uppercase font-semibold">
                {member.role}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <p className="font-body text-xs text-foreground/40 tracking-wide">
                  Based in {member.location}
                </p>
                <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 border border-amber/20 text-amber/70 rounded-full">
                  {member.membershipType}
                </span>
              </div>

              {member.links && member.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {member.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-semibold tracking-wider uppercase px-4 py-2 border border-foreground/15 text-foreground/70 rounded-sm hover:border-amber/50 hover:text-amber transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {member.metrics && member.metrics.length > 0 && (
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {member.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="surface-panel border border-foreground/5 rounded-sm p-6 text-center"
                >
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber">
                    {metric.value}
                  </div>
                  <div className="mt-2 font-body text-xs text-foreground/50 tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div className="space-y-6">
              <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">
                  About
                </h2>
                <p className="font-body text-base leading-relaxed text-foreground/60 whitespace-pre-line">
                  {member.bio}
                </p>
              </div>

              {member.experience && member.experience.length > 0 && (
                <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Experience
                  </h2>
                  <ul className="space-y-5">
                    {member.experience.map((entry) => (
                      <li key={`${entry.title}-${entry.org}`}>
                        <p className="font-body font-semibold text-foreground/80">
                          {entry.title}
                        </p>
                        <p className="font-body text-sm text-foreground/50">
                          {entry.org}
                          {entry.period ? ` · ${entry.period}` : ""}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.publications && member.publications.length > 0 && (
                <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Recent Publications
                  </h2>
                  <ul className="space-y-5">
                    {member.publications.map((pub) => (
                      <li key={pub.title}>
                        <p className="font-body font-semibold text-foreground/80">
                          {pub.url ? (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-amber transition-colors"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            pub.title
                          )}
                        </p>
                        <p className="font-body text-sm text-foreground/50">
                          {pub.venue}, {pub.year}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {member.publicationsUrl && (
                    <a
                      href={member.publicationsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wider uppercase text-amber hover:text-amber-light transition-colors"
                    >
                      View all publications →
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-6">
              {member.education && member.education.length > 0 && (
                <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Education
                  </h2>
                  <ul className="space-y-3">
                    {member.education.map((entry) => (
                      <li key={entry} className="flex items-start gap-3">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-amber shrink-0" />
                        <span className="font-body text-base text-foreground/60">
                          {entry}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {member.skills && member.skills.length > 0 && (
                <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-body font-semibold tracking-wide border border-amber/15 text-amber/70 rounded-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {completedProjects.length > 0 && (
                <div className="surface-panel border border-foreground/5 rounded-sm p-8">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Work Completed
                  </h2>
                  <ul className="space-y-4">
                    {completedProjects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="font-body font-semibold text-foreground/80 hover:text-amber transition-colors"
                        >
                          {project.name}
                        </Link>
                        {project.venue && (
                          <p className="font-body text-sm text-foreground/50">{project.venue}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
