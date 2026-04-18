import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team } from "../data/team";

export const metadata: Metadata = {
  title: "Global Team | DAINTYMINDZ LAB",
  description:
    "Meet the DaintyMindz — a global team of specialists united by scientific rigor and the pursuit of intelligent, real-world solutions.",
};

export default function TeamPage() {
  return (
    <main className="gradient-mesh min-h-screen">
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="section-tint-vertical absolute inset-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber mb-4">
              Global Team
            </p>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Meet the minds behind the{" "}
              <span className="text-amber-gradient">lab</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto font-body text-lg text-foreground/60 leading-relaxed">
              We are a global team of specialists, the{" "}
              <strong>DaintyMindz</strong>, united by a commitment to scientific
              rigor and the pursuit of intelligent, real-world solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {team.map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover"
              >
                <div className="relative w-full aspect-[3/4] bg-foreground/5">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="font-display font-bold text-xl text-foreground group-hover:text-amber transition-colors">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-amber font-body text-sm tracking-[0.2em] uppercase">
                    {member.role}
                  </p>
                  <p className="mt-1 font-body text-xs text-foreground/40 tracking-wide">
                    Based in {member.location}
                  </p>
                  <p className="mt-4 font-body text-sm text-foreground/55 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
