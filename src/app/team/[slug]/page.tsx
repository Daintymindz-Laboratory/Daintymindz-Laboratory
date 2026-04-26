import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team } from "../../data/team";

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
    return {
      title: `${member.name} | DAINTYMINDZ LAB`,
      description: `${member.role} — ${member.bio.slice(0, 160)}`,
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

  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-depth-soft absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/55 hover:text-amber transition-colors"
          >
            ← All team members
          </Link>

          <div className="mt-10 grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="surface-panel border border-foreground/5 rounded-sm overflow-hidden">
              <div className="relative w-full aspect-3/4 bg-foreground/5">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="280px"
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
              <p className="mt-1 font-body text-xs text-foreground/40 tracking-wide">
                Based in {member.location}
              </p>

              <div className="mt-8 surface-panel border border-foreground/5 rounded-sm p-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">
                  About
                </h2>
                <p className="font-body text-base leading-relaxed text-foreground/60">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
