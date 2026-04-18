"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { useTheme } from "../hooks/useTheme";

const traits = [
  "A visionary engineer, scientist, or strategist who believes intelligence should be as precise as it is purposeful.",
  "A builder with a \"global-first\" mindset — whether creating applications, curating novel datasets, or designing predictive models.",
  "A member of a multidisciplinary community dedicated to engineering a future that is resilient, inclusive, and driven by high-impact research.",
  "At DMZ Lab, being a Daintymind is a commitment to technical excellence and ethical stewardship of the future.",
];

export default function Values() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);
  const { theme } = useTheme();

  const heroSrc =
    theme === "dark"
      ? "/images/daintymind/daintymind-hero-dark.png"
      : "/images/daintymind/daintymind-hero.png";

  return (
    <section id="daintymind" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-amber/3 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-amber/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div className={`${inView ? "animate-slide-left" : "opacity-0"}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="geo-diamond" />
              <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
                The Daintymind
              </span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-6xl leading-[1.05] text-foreground">
              Who is a <span className="text-amber-gradient">Daintymind?</span>
            </h2>

            <p className="mt-6 font-body text-base sm:text-lg text-foreground/60 leading-relaxed">
              A <strong>Daintymind</strong> is a visionary engineer, scientist, or strategist
              who believes that intelligence should be as precise as it is
              purposeful. We are a community of multidisciplinary problem-solvers
              dedicated to engineering a future that is resilient, inclusive, and
              driven by high-impact research.
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
              <Image
                src={heroSrc}
                alt="A Daintymind — the human element of innovation"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
