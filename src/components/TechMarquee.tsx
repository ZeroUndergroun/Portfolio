import TechIcon from './TechIcons';

/**
 * Pure-CSS infinite marquee: no JS, so this stays a server component. Each row renders its
 * items twice and the track slides exactly -50%, putting the duplicate where the original
 * started. Hovering pauses; reduced-motion users get a static, manually scrollable row.
 */
function MarqueeRow({
  items,
  seconds,
  reverse = false,
}: {
  items: string[];
  seconds: number;
  reverse?: boolean;
}) {
  return (
    <div className="marquee overflow-hidden" aria-hidden>
      {/* No gap on the track itself: each copy carries its own trailing pr-4, so the track is
          exactly two copies wide and -50% lands seamlessly on the duplicate. */}
      <div
        className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}
        style={{ animationDuration: `${seconds}s` }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-4 pr-4">
            {items.map((label) => (
              <div
                key={label}
                className="flex w-32 shrink-0 flex-col items-center gap-2 rounded-lg border border-white/5 bg-navy-900/50 px-3 py-4"
              >
                <TechIcon label={label} className="h-8 w-8 text-gray-300" />
                <span className="text-center text-xs leading-tight text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee({ rows }: { rows: string[][] }) {
  return (
    <div className="relative -mx-8 [mask-image:linear-gradient(to_right,transparent,black_6rem,black_calc(100%-6rem),transparent)]">
      <div className="space-y-4">
        {rows.map((items, i) => (
          <MarqueeRow key={i} items={items} seconds={60 + i * 12} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
