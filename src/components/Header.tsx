import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";

const sections = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-[60] border-b-2 border-divider backdrop-blur-[10px]"
      style={{
        background: "color-mix(in srgb, var(--color-bg) 91%, transparent)",
      }}
    >
      <div className="mx-auto flex h-[68px] max-w-container items-center gap-7 px-6">
        <Link
          href="/"
          className="mr-auto whitespace-nowrap font-heading text-[17px] font-bold tracking-[-0.01em] text-ink no-underline"
        >
          RYAN TORREZ
        </Link>

        <nav className="flex flex-none items-center gap-[26px]">
          <span className="hidden items-center gap-[26px] min-[660px]:flex">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="font-mono text-[13px] uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:text-accent-700"
              >
                {s.label}
              </Link>
            ))}
          </span>

          <ThemeToggle />

          <a
            href="mailto:hello@ryantorrez.dev"
            className="btn btn-primary whitespace-nowrap no-underline"
          >
            Get in touch
          </a>
        </nav>
      </div>

      <ScrollProgress />
    </header>
  );
}
