"use client";

import { useState } from "react";

export default function CitationCopyButton({ citation }: { citation: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyCitation}
      className="shrink-0 px-4 py-2 border border-amber/25 text-amber/80 font-display font-semibold text-xs tracking-wider uppercase rounded-sm hover:border-amber/60 hover:text-amber transition-colors"
      aria-live="polite"
    >
      {copied ? "Copied" : "Copy citation"}
    </button>
  );
}
