// Stand-in for a photograph slot until real black-and-white images are added.
// In production these become <Image> inside a `.grayscale-img` wrapper.
export default function ImagePlaceholder({
  ratio,
  label = "Image",
  className = "",
}: {
  ratio: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-divider bg-surface ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
        {label}
      </span>
    </div>
  );
}
