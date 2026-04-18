"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Internships", href: "/internships" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={theme === "dark" ? "/images/logo/logo-wordmark-dark.png" : "/images/logo/logo-wordmark-light.png"}
              alt="DAINTYMINDZ"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="golden-border relative font-body text-sm font-medium tracking-wide text-foreground/70 hover:text-amber transition-colors duration-300 pb-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Link
              href="/internships"
              className="px-6 py-2.5 bg-amber text-graphite-deep font-display font-bold text-sm tracking-wider rounded-sm hover:bg-amber-light transition-colors duration-300"
            >
              JOIN THE LAB
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay fixed inset-0 z-40 backdrop-blur-xl transition-opacity duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          <ThemeToggle theme={theme} onToggle={toggleTheme} compact />
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-bold tracking-wider text-foreground/80 hover:text-amber transition-colors duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/internships"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-10 py-4 bg-amber text-graphite-deep font-display font-bold text-lg tracking-wider rounded-sm"
          >
            JOIN THE LAB
          </Link>
        </div>
      </div>
    </>
  );
}
