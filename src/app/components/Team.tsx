"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { team } from "../data/team";

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="team" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-tint-vertical absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 mb-6 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber/30" />
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Global Team
            </span>
            <div className="geo-diamond" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber/30" />
          </div>

          <h2 className={`font-display font-extrabold text-2xl sm:text-4xl lg:text-6xl text-foreground ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Meet the minds behind the <span className="text-amber-gradient">lab</span>
          </h2>
          <p className={`mt-6 max-w-3xl mx-auto font-body text-base sm:text-lg italic text-foreground/60 leading-relaxed ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            We are a global team of specialists, the <strong>DaintyMindz</strong>, united by a commitment to scientific rigor and the pursuit of intelligent, real-world solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <Link
              key={member.name}
              href={`/team/${member.slug}`}
              className={`group surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
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
                <h3 className="font-display font-bold text-xl text-foreground">
                  {member.name}
                </h3>
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

        <div className="mt-12 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-foreground/15 text-foreground/70 font-display font-semibold text-sm tracking-widest rounded-sm hover:border-amber/50 hover:text-amber transition-all duration-300"
          >
            VIEW FULL TEAM
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
