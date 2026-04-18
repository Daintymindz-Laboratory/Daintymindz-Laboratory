"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--mouse-x", `${x}%`);
      section.style.setProperty("--mouse-y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background:
            "radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), rgba(213,156,16,0.08), transparent 70%)",
        }}
      />

      <div className="absolute top-20 left-10 w-64 h-64 border border-amber/5 rotate-45 animate-rotate-slow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-amber/5 rotate-12 animate-rotate-slow-reverse" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber/30 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-amber/20 rounded-full animate-float delay-300" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(213,156,16,1) 1px, transparent 1px), linear-gradient(90deg, rgba(213,156,16,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto pt-24 md:pt-16 px-6 lg:px-12 text-center">
        <div className="animate-fade-up opacity-0 mb-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber/20 bg-amber/5">
            <div className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-amber">
              Global Research Institute
            </span>
          </div>
        </div>

        <h1 className="animate-fade-up opacity-0 delay-200 font-display font-extrabold leading-[0.92] tracking-tight text-foreground text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          Engineering
          <br />
          <span className="text-amber-gradient">Intelligent Futures.</span>
        </h1>

        <p className="animate-fade-up opacity-0 delay-400 mt-10 font-body text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-4xl mx-auto leading-relaxed font-light">
          Where precision meets innovation, engineering tomorrow&apos;s solutions
          with intellectual rigor and a global vision.
        </p>

        <div className="animate-fade-up opacity-0 delay-600 mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/research"
            className="group relative px-10 py-4 bg-amber text-graphite-deep font-display font-bold text-sm tracking-widest rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(213,156,16,0.3)]"
          >
            <span className="relative z-10">EXPLORE OUR RESEARCH</span>
            <div className="absolute inset-0 bg-amber-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link
            href="/internships"
            className="px-10 py-4 border border-foreground/20 text-foreground/70 font-display font-semibold text-sm tracking-widest rounded-sm hover:border-amber/50 hover:text-amber transition-all duration-300"
          >
            JOIN THE LAB
          </Link>
        </div>

        <div className="animate-fade-in opacity-0 delay-800 mt-20 flex flex-col items-center gap-2">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-foreground/30">
            Scroll to explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-amber/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
