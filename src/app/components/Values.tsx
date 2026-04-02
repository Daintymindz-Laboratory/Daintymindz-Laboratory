"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const traits = [
  "Curious enough to question assumptions.",
  "Disciplined enough to test ideas rigorously.",
  "Bold enough to build what does not yet exist.",
  "Grounded enough to create intelligence with real impact.",
];

export default function Values() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="daintymind" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber/[0.05] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div className={`${inView ? "animate-slide-left" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="geo-diamond" />
              <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
                The Daintymind
              </span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Who is a <span className="text-amber-gradient">Daintymind?</span>
            </h2>

            <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed">
              A Daintymind is a builder-researcher with global awareness and
              uncompromising standards. It is the mindset that powers our lab:
              intellectually sharp, engineering-driven, ethically grounded, and
              committed to creating intelligence that matters.
            </p>

            <div className="mt-8 space-y-4">
              {traits.map((trait, i) => (
                <div
                  key={trait}
                  className={`flex items-start gap-4 ${inView ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${200 + i * 120}ms` }}
                >
                  <div className="mt-1 w-2.5 h-2.5 rounded-full bg-amber shrink-0" />
                  <p className="font-body text-base text-foreground/65">{trait}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${inView ? "animate-slide-right" : "opacity-0"}`}>
            <div className="surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover">
              <img
                src="/daintymind-placeholder.svg"
                alt="Placeholder illustration representing a Daintymind"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
