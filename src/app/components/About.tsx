"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const footprints = [
  { label: "Global hubs", value: "4" },
  { label: "Research posture", value: "Applied" },
  { label: "Operating model", value: "Lab + Studio" },
  { label: "Focus", value: "Impact" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section id="lab" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-tint-vertical absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={`flex items-center gap-4 mb-16 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="geo-diamond" />
          <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
            The Lab
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          <div className={`${inView ? "animate-slide-left" : "opacity-0"}`}>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-[1.05] text-foreground">
              Beyond Innovation —
              <br />
              <span className="text-amber-gradient">Pioneering the Future of Intelligence</span>
            </h2>
            <div className="mt-8 w-24 h-1 bg-amber" />
          </div>

          <div className={`space-y-6 ${inView ? "animate-slide-right" : "opacity-0"}`}>
            <p className="font-body text-base sm:text-lg leading-relaxed text-foreground/70">
              DAINTYMINDZ LAB is a future-focused research institute and innovation
              studio dedicated to <strong>Intelligence Research for Impact</strong>. We operate at
              the intersection of academic depth and engineering boldness,
              building technologies that drive resilient, sustainable progress.
            </p>
            <p className="font-body text-base leading-relaxed text-foreground/55">
              From our hubs in the <strong>USA, Nigeria, South Korea, and Canada</strong>, we
              combine scientific precision with visionary thinking. Every project
              is grounded in deep research and an unwavering commitment to
              quality, ensuring our work doesn&apos;t just meet expectations, but
              redefines the 2030–2050 technological landscape.
            </p>
          </div>
        </div>

        <div
          className={`mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 ${
            inView ? "animate-fade-up delay-400" : "opacity-0"
          }`}
        >
          {footprints.map((item, i) => (
            <div
              key={item.label}
              className="text-center p-4 sm:p-6 border border-foreground/5 rounded-sm hover:border-amber/20 transition-colors duration-500"
              style={{ animationDelay: `${400 + i * 150}ms` }}
            >
              <div className="font-display font-extrabold text-xl sm:text-3xl lg:text-4xl text-amber">
                {item.value}
              </div>
              <div className="mt-2 font-body text-sm text-foreground/50 tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
