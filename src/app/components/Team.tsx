"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const team = [
  { name: "Dr. Judith Njoku", role: "Director", location: "USA" },
  { name: "Anthony", role: "Tech Lead", location: "South Korea" },
  { name: "Gloria", role: "Field Intelligence", location: "Nigeria" },
  { name: "Cynthia", role: "Strategy", location: "Canada" },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="team" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-tint-vertical absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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

          <h2 className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Intelligence shaped by a <span className="text-amber-gradient">global operating team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <article
              key={member.name}
              className={`surface-panel border border-foreground/5 rounded-sm p-8 card-hover ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-sm bg-amber/10 border border-amber/20 flex items-center justify-center font-display font-extrabold text-amber text-xl">
                {member.name.charAt(0)}
              </div>
              <h3 className="mt-6 font-display font-bold text-2xl text-foreground">
                {member.name}
              </h3>
              <p className="mt-2 text-amber font-body text-sm tracking-[0.2em] uppercase">
                {member.role}
              </p>
              <p className="mt-6 font-body text-sm text-foreground/55">
                Based in <span className="text-foreground/80">{member.location}</span>, bringing focused leadership to the lab&apos;s multidisciplinary work.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
