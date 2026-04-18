"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "../hooks/useInView";

const team = [
  {
    name: "Dr. Judith Nkechinyere Njoku",
    role: "Founder & Director of Research",
    location: "USA",
    photo: "/images/team/judith.jpg",
    bio: "As the founding DaintyMind, Dr. Judith is a distinguished researcher and the visionary architect behind Daintymindz Laboratory. With a Ph.D. and advanced expertise in Electrical Engineering and Computer Science, she leads the lab\u2019s strategic expansion into Digital Twins, Deep Learning, and Autonomous Systems. She also serves as the Technical Advisor to the Machine Learning Department.",
  },
  {
    name: "Anthony",
    role: "Head of Software Engineering",
    location: "South Korea",
    photo: "/images/team/anthony.png",
    bio: "Operating as a senior DaintyMind from South Korea, Anthony is a Senior Full-Stack Engineer with over seven years of experience designing scalable web, mobile, and distributed systems. He leads the Software Development division, driving the architecture and delivery of robust, production-grade platforms that support the lab\u2019s research, AI, and data-driven initiatives.",
  },
  {
    name: "Gloria",
    role: "Researcher",
    location: "Nigeria",
    photo: "/images/team/gloria.jpg",
    bio: "Based in Nigeria, DaintyMind Gloria is a Food Technologist and research-driven innovator focused on transforming agricultural and food systems through data and intelligent technologies. She leads Ground Truth initiatives, designing and managing bio-agricultural data pipelines that enable the development of inclusive, real-world AI models.",
  },
  {
    name: "Cynthia",
    role: "Head of Data Analytics",
    location: "Canada",
    photo: "/images/team/cynthia.jpeg",
    bio: "Representing our Canadian hub as a strategic DaintyMind, Cynthia Osewemen is a data analytics and operations professional with over 10 years of experience spanning banking operations, customer service leadership, and data analysis. She leads the Data Analytics Division, overseeing analytical projects and establishing structured workflows.",
  },
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
            Meet the minds behind the <span className="text-amber-gradient">lab</span>
          </h2>
          <p className={`mt-6 max-w-3xl mx-auto font-body text-lg italic text-foreground/60 leading-relaxed ${inView ? "animate-fade-up delay-300" : "opacity-0"}`}>
            We are a global team of specialists, the <strong>DaintyMindz</strong>, united by a commitment to scientific rigor and the pursuit of intelligent, real-world solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <article
              key={member.name}
              className={`surface-panel border border-foreground/5 rounded-sm overflow-hidden card-hover ${
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
                <p className="mt-4 font-body text-sm text-foreground/55 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
