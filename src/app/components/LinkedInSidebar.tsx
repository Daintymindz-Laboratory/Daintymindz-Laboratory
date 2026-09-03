"use client";

import Script from "next/script";
import { useState } from "react";
import { academyUrl, linkedInWidget, socialWidgets } from "../data/linkedin";

type PanelId = (typeof socialWidgets)[number]["id"] | "academy";

const panels = [
  ...socialWidgets.map(({ id, label }) => ({ id, label })),
  { id: "academy", label: "Academy" },
] as const;

export default function LinkedInSidebar() {
  const [open, setOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelId>("linkedin");

  if (!linkedInWidget) return null;

  return (
    <>
      <Script src={linkedInWidget.scriptSrc} strategy="lazyOnload" async />

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Connect panel" : "Open Connect panel"}
        aria-expanded={open}
        className="no-print fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 px-3 py-4 bg-amber text-graphite-deep font-display font-bold text-xs tracking-widest rounded-l-sm shadow-lg hover:bg-amber-light transition-colors [writing-mode:vertical-rl]"
      >
        CONNECT
      </button>

      <div
        className={`no-print fixed inset-y-0 right-0 z-50 w-full sm:w-[380px] surface-panel border-l border-foreground/10 shadow-2xl transition-transform duration-500 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-foreground/5 sticky top-0 bg-inherit">
          <h2 className="font-display font-bold text-sm tracking-widest uppercase text-foreground">
            Connect with us
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close Connect panel"
            className="font-body text-foreground/50 hover:text-amber transition-colors text-xl leading-none"
          >
            ×
          </button>
        </div>
        <div
          role="tablist"
          aria-label="DaintyMindz channels"
          className="sticky top-[65px] z-10 flex gap-2 overflow-x-auto border-b border-foreground/5 bg-inherit px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {panels.map((panel) => (
            <button
              key={panel.id}
              type="button"
              role="tab"
              aria-selected={activePanel === panel.id}
              onClick={() => setActivePanel(panel.id)}
              className={`shrink-0 rounded-full border px-4 py-2 font-body text-xs font-semibold transition-colors ${
                activePanel === panel.id
                  ? "border-amber bg-amber text-graphite-deep"
                  : "border-foreground/15 text-foreground/65 hover:border-amber/60 hover:text-amber"
              }`}
            >
              {panel.label}
            </button>
          ))}
        </div>

        <div className="p-4">
          {socialWidgets.map((widget) => (
            <div
              key={widget.id}
              role="tabpanel"
              aria-label={`${widget.label} feed`}
              hidden={activePanel !== widget.id}
            >
              <div className={widget.widgetClassName} data-elfsight-app-lazy />
            </div>
          ))}

          {activePanel === "academy" && (
            <div role="tabpanel" aria-label="DaintyMindz Academy" className="px-2 py-8">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-amber">
                Learn with DaintyMindz
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                DaintyMindz Academy
              </h3>
              <p className="mt-4 font-body text-sm leading-7 text-foreground/65">
                Explore practical learning opportunities, professional development, and programmes from DaintyMindz Laboratory.
              </p>
              <a
                href={academyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-amber px-5 py-3 font-display text-xs font-bold uppercase tracking-widest text-graphite-deep transition-colors hover:bg-amber-light"
              >
                Visit Academy <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
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
