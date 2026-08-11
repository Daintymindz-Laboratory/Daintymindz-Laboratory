"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";
import { useTheme } from "../hooks/useTheme";

const coreValues = [
  { letter: "D", word: "Discipline", description: "Do the right thing, even when nobody is watching." },
  { letter: "A", word: "Accountability", description: "Own your work, your mistakes, and the fix." },
  { letter: "I", word: "Integrity", description: "Tell the truth about results, limits, and failures." },
  { letter: "N", word: "Novel Thinking", description: "Build what does not exist yet, for this context." },
  { letter: "T", word: "Teamwork", description: "Nobody succeeds alone, across any time zone." },
  { letter: "Y", word: "You", description: "We invest in the person, not just the output." },
  { letter: "M", word: "Mastery", description: "Never stop learning, the field moves too fast to coast." },
  { letter: "I", word: "Impact", description: "Every piece of work must answer: who is better off?" },
  { letter: "N", word: "Nurture", description: "Every senior Daintymind invests in someone junior." },
  { letter: "D", word: "Data-Driven", description: "Evidence first, always, no claims without data." },
  { letter: "Z", word: "Zero Compromise", description: "On quality, on ethics, on standards, no exceptions." },
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
              A <strong>Daintymind</strong> is more than an employee or an intern; they are a
              visionary practitioner who believes that technical intelligence must be as
              precise as it is purposeful. Whether building groundbreaking applications,
              developing decision-centric dashboards, curating novel datasets, or designing
              predictive models, being a Daintymind means moving beyond the code to focus on
              the impact.
            </p>

            <p className="mt-6 font-body text-base text-foreground/55 leading-relaxed">
              At Daintymindz, being a Daintymind is a commitment to technical excellence and
              ethical stewardship of the future.
            </p>
          </div>

          <div className={`${inView ? "animate-slide-right" : "opacity-0"}`}>
            <div className="surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover">
              <Image
                src={heroSrc}
                alt="A Daintymind, the human element of innovation"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className={`mt-24 ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-10">
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Our Core Values
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
          </div>

          <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-foreground mb-10">
            Eleven letters. <span className="text-amber-gradient">One standard.</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {coreValues.map((value, i) => (
              <div
                key={`${value.letter}-${value.word}`}
                className={`surface-panel border border-foreground/5 rounded-sm p-6 card-hover ${
                  inView ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${350 + i * 60}ms` }}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-extrabold text-3xl text-amber">
                    {value.letter}
                  </span>
                  <h4 className="font-display font-bold text-base text-foreground">
                    {value.word}
                  </h4>
                </div>
                <p className="font-body text-sm text-foreground/55 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
