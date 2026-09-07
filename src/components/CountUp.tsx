"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Target number to count to. */
  value: number;
  /** Non-numeric suffix preserved verbatim, e.g. "+" in "400+". */
  suffix?: string;
  className?: string;
  durationMs?: number;
};

// Counts 0 → value with a cubic ease-out the first time it scrolls into view.
// Respects prefers-reduced-motion by snapping straight to the final value.
export default function CountUp({
  value,
  suffix = "",
  className = "",
  durationMs = 900,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(Math.round(eased * value));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
