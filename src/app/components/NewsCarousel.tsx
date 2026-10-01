"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

export default function NewsCarousel({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);

  const move = (direction: number) => {
    setActive((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div className="border-b border-foreground/5 bg-black">
      <div className="relative aspect-square w-full overflow-hidden sm:aspect-[4/3]">
        {images.map((image, index) => (
          <div
            key={image.src}
            aria-hidden={active !== index}
            className={`absolute inset-0 transition-all duration-500 ${
              active === index
                ? "translate-x-0 opacity-100"
                : index < active
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className={image.fit === "contain" ? "object-contain" : "object-cover"}
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent px-5 pb-5 pt-12">
              <p className="font-body text-xs leading-5 text-white/85">{image.caption}</p>
            </div>
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous conference image"
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-xl text-white backdrop-blur transition-colors hover:bg-amber hover:text-graphite-deep"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next conference image"
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-xl text-white backdrop-blur transition-colors hover:bg-amber hover:text-graphite-deep"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3" aria-label="Conference image slides">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all ${
                active === index ? "w-7 bg-amber" : "w-1.5 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
