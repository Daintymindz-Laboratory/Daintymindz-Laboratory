"use client";

import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const thrusts = [
  {
    title: "Machine Learning | Autonomous & Predictive Intelligence",
    description:
      "We design deep learning architectures that learn and adapt in real-time. Our focus is on perception under uncertainty and human-AI alignment to build the \"predictive brains\" of future systems.",
    tags: ["AI", "Deep Learning", "Autonomy"],
  },
  {
    title: "Software Systems | Immersive Engineering & Applications",
    description:
      "We transform research into functional tools. From high-fidelity Digital Twins to immersive VR/AR simulations, we build groundbreaking applications to solve urban and rural challenges.",
    tags: ["Digital Twins", "VR/AR", "Systems Design"],
  },
  {
    title: "Data Analytics | Decisional Intelligence & Visualization",
    description:
      "Turning complex data into actionable foresight. We develop advanced dashboards and analytical models that help industries navigate climate change and energy transitions.",
    tags: ["Analytics", "Dashboards", "Foresight"],
  },
  {
    title: "Data Operations (Data Ops) | Novel Curation & Field Intelligence",
    description:
      "Solving problems with \"Ground Truth.\" Our global field teams capture and curate unique, high-quality datasets missing from traditional archives, ensuring our AI is inclusive and unbiased.",
    tags: ["DataOps", "Ground Truth", "Field Curation"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.1);

  return (
    <section id="research-thrusts" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-depth absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`flex items-center gap-4 mb-6 ${
            inView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="geo-diamond" />
          <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
            Research Thrusts
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber/30 to-transparent" />
        </div>

        <div
          className={`max-w-3xl mb-20 ${
            inView ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Research systems built for <span className="text-amber-gradient">real-world intelligence</span>
          </h2>
          <p className="mt-6 font-body text-lg text-foreground/60 leading-relaxed">
            Our core thrusts connect academic inquiry, product engineering, and
            field execution to produce resilient, deployable intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {thrusts.map((thrust, i) => (
            <div
              key={thrust.title}
              className={`surface-panel group relative p-8 lg:p-10 border border-foreground/5 rounded-sm card-hover ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />

              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 flex items-center justify-center border border-amber/20 rounded-sm text-amber font-display font-extrabold text-xl">
                  0{i + 1}
                </div>

                <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-amber transition-colors duration-300 mb-4">
                  {thrust.title}
                </h3>

                <p className="font-body text-sm leading-relaxed text-foreground/50 mb-6">
                  {thrust.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {thrust.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase border border-amber/15 text-amber/50 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
