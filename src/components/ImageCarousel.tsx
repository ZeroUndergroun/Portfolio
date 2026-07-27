'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

export type CarouselImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export default function ImageCarousel({
  images,
  label,
}: {
  images: CarouselImage[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  );

  const close = useCallback(() => {
    setExpanded(false);
    frameRef.current?.focus();
  }, []);

  // While the lightbox is open it owns the keyboard and locks page scroll.
  useEffect(() => {
    if (!expanded) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    };

    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded, go, close]);

  const current = images[index];
  const arrow =
    'absolute top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-gray-100 transition-opacity hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-gray-400';

  return (
    <div className="w-full">
      <div
        ref={frameRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            go(-1);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            go(1);
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setExpanded(true);
          }
        }}
        /* 1.94 matches the cropped screenshots, so they fill the frame rather than letterbox. */
        className="group relative w-full aspect-[1.94] overflow-hidden rounded-lg bg-gray-950 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        {/* Arrows and counter are siblings of the track, so their clicks never reach it. */}
        <div
          onClick={() => setExpanded(true)}
          title="Click to enlarge"
          className="flex h-full cursor-zoom-in transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.src} className="relative h-full w-full flex-shrink-0">
              {/* Slides start outside the viewport and arrive via transform, which never
                  triggers the lazy-loading observer, so every slide loads eagerly. */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                loading="eager"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screenshot"
          className={`${arrow} left-2 opacity-0 focus:opacity-100 group-hover:opacity-100 max-md:opacity-100`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screenshot"
          className={`${arrow} right-2 opacity-0 focus:opacity-100 group-hover:opacity-100 max-md:opacity-100`}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[11px] tabular-nums text-gray-300">
          {index + 1}/{images.length}
        </div>
      </div>

      <p aria-live="polite" className="mt-2 text-center text-xs text-gray-400">
        {current.caption}
      </p>

      {expanded &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${label}, enlarged`}
            onClick={close}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 sm:p-8"
          >
            <div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="92vw"
                className="h-auto w-auto max-h-[80vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
              />
              <p className="mt-3 max-w-2xl text-center text-sm text-gray-300">{current.caption}</p>
              <p className="mt-1 text-xs tabular-nums text-gray-500">
                {index + 1}/{images.length}
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close enlarged view"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-gray-100 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous screenshot"
              className={`${arrow} left-2 sm:left-6`}
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next screenshot"
              className={`${arrow} right-2 sm:right-6`}
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
