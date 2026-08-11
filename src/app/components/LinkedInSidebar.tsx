"use client";

import Script from "next/script";
import { useState } from "react";
import { linkedInWidget } from "../data/linkedin";

export default function LinkedInSidebar() {
  const [open, setOpen] = useState(false);

  if (!linkedInWidget) return null;

  return (
    <>
      <Script src={linkedInWidget.scriptSrc} strategy="lazyOnload" async />

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close LinkedIn feed" : "Open LinkedIn feed"}
        aria-expanded={open}
        className="no-print fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 px-3 py-4 bg-amber text-graphite-deep font-display font-bold text-xs tracking-widest rounded-l-sm shadow-lg hover:bg-amber-light transition-colors [writing-mode:vertical-rl]"
      >
        LINKEDIN
      </button>

      <div
        className={`no-print fixed inset-y-0 right-0 z-50 w-full sm:w-[380px] surface-panel border-l border-foreground/10 shadow-2xl transition-transform duration-500 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-foreground/5 sticky top-0 bg-inherit">
          <h2 className="font-display font-bold text-sm tracking-widest uppercase text-foreground">
            On LinkedIn
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close LinkedIn feed"
            className="font-body text-foreground/50 hover:text-amber transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div className="p-4">
          <div className={linkedInWidget.widgetClassName} data-elfsight-app-lazy />
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:hidden"
        />
      )}
    </>
  );
}
