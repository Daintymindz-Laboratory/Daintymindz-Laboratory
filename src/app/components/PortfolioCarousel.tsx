"use client";

import Image from "next/image";
import { useState } from "react";

export default function PortfolioCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const go = (delta: number) => {
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-video bg-foreground/5 print:aspect-auto">
      <Image
        src={images[index]}
        alt={`${alt} screenshot ${index + 1} of ${images.length}`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain p-6 print:hidden"
      />

      {hasMultiple && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous screenshot"
            className="print:hidden absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-graphite-deep/60 text-cream hover:bg-amber hover:text-graphite-deep transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next screenshot"
            className="print:hidden absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-graphite-deep/60 text-cream hover:bg-amber hover:text-graphite-deep transition-colors"
          >
            →
          </button>
          <div className="print:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-amber" : "bg-cream/40"
                }`}
              />
            ))}
          </div>
        </>
      )}

      <div className="hidden print:flex print:flex-col print:gap-4 print:relative">
        {images.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={img} src={img} alt={alt} className="w-full h-auto" />
        ))}
      </div>
    </div>
  );
}
