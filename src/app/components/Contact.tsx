"use client";

import Link from "next/link";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const locations = ["USA", "Nigeria", "South Korea", "Canada"];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.15);

  return (
    <section id="contact" ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="section-depth-soft absolute inset-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <div
            className={`flex items-center justify-center gap-4 mb-8 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber/30" />
            <div className="geo-diamond" />
            <span className="font-body text-xs font-semibold tracking-[0.4em] uppercase text-amber">
              Contact
            </span>
            <div className="geo-diamond" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber/30" />
          </div>

          <h2 className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-foreground ${inView ? "animate-fade-up delay-200" : "opacity-0"}`}>
            Ready to build something
            <br />
            <span className="text-amber-gradient">bold?</span>
          </h2>

          <p className={`mt-8 font-body text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            Whether you have a challenge to solve or a vision to realize, we are
            ready to listen. Let’s create something extraordinary.
          </p>

          <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 ${inView ? "animate-fade-up delay-400" : "opacity-0"}`}>
            <a
              href="mailto:info@daintymindz.com"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-amber text-graphite-deep font-display font-bold text-base tracking-widest rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(213,156,16,0.3)] animate-pulse-glow"
            >
              <span className="relative z-10">EMAIL THE LAB</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              <div className="absolute inset-0 bg-amber-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <Link
              href="/projects"
              className="px-10 py-5 border border-foreground/15 text-foreground/70 font-display font-semibold text-sm tracking-widest rounded-sm hover:border-amber/50 hover:text-amber transition-all duration-300"
            >
              VIEW PROJECTS
            </Link>
          </div>

          <div className={`mt-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 text-left ${inView ? "animate-fade-up delay-500" : "opacity-0"}`}>
            <div className="surface-panel border border-foreground/5 rounded-sm p-8 lg:p-10">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Reach the network
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-amber/70 mb-2">Email</p>
                  <a href="mailto:info@daintymindz.com" className="font-body text-lg text-foreground/75 hover:text-amber transition-colors">
                    info@daintymindz.com
                  </a>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-amber/70 mb-3">Locations</p>
                  <div className="flex flex-wrap gap-3">
                    {locations.map((location) => (
                      <span key={location} className="px-4 py-2 border border-foreground/10 rounded-full font-body text-sm text-foreground/60">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-amber/70 mb-2">Hours</p>
                  <p className="font-body text-sm text-foreground/60">Mon – Fri (Global Timezones Supported)</p>
                </div>
              </div>
            </div>

            <div className="surface-panel border border-foreground/5 rounded-sm p-8 lg:p-10">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-amber/70 mb-3">Join the Lab</p>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Are you a future Daintymind?
              </h3>
              <p className="font-body text-sm leading-relaxed text-foreground/55 mb-6">
                We are always looking for visionary interns and researchers in ML,
                Software Systems, and Data Ops.
              </p>
              <Link href="/internships" className="font-display font-bold text-sm tracking-[0.24em] uppercase text-amber hover:text-amber-light transition-colors">
                Apply for our Next Cohort →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
