import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { projects, caseDetails } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.title} — Ryan Torrez`
      : "Case study — Ryan Torrez",
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const detail = caseDetails[slug];
  if (!project || !detail) notFound();

  // The "next case" wraps around to the first project.
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Role", value: detail.role },
    { label: "Stack", value: detail.stack },
  ];

  return (
    <main id="top">
      <article className="mx-auto max-w-container px-6 pt-8">
        <Link
          href="/#work"
          className="font-mono text-[13px] uppercase tracking-[0.08em] text-accent-700 no-underline"
        >
          ← All work
        </Link>

        {/* Header */}
        <header className="mt-8 border-b-2 border-divider pb-8">
          <p className="m-0 font-mono text-[12px] uppercase tracking-[0.16em] text-accent-700">
            {project.num} — {project.kicker}
          </p>
          <h1 className="mt-4 max-w-[24ch] text-[clamp(34px,5.4vw,74px)] font-bold leading-[0.97] tracking-[-0.02em]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[54ch] text-[19px] leading-[1.55] text-lead">
            {detail.lead}
          </p>
          {detail.links && detail.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {detail.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn no-underline ${
                    i === 0 ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Facts strip */}
        <div className="grid grid-cols-2 border-b-2 border-divider sm:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`px-6 py-6 text-center ${
                i < facts.length - 1 ? "sm:border-r sm:border-divider" : ""
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                {f.label}
              </div>
              <div className="mt-1.5 font-heading text-[15px] font-bold">
                {f.value}
              </div>
            </div>
          ))}
        </div>

        {/* Hero media — YouTube embed, real image, or placeholder */}
        <Reveal className="mt-10">
          {detail.heroVideo ? (
            <div className="relative aspect-video w-full overflow-hidden border-2 border-divider">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${detail.heroVideo}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ) : detail.heroImage ? (
            <div className="grayscale-img border-2 border-divider">
              <Image
                src={detail.heroImage}
                alt={detail.heroImageAlt ?? project.title}
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </div>
          ) : (
            <div className="grayscale-img border-2 border-divider">
              <ImagePlaceholder ratio="21 / 9" label="Hero image" />
            </div>
          )}
        </Reveal>

        {/* Metrics */}
        {detail.metrics && detail.metrics.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-0.5 bg-divider sm:grid-cols-3">
            {detail.metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={Math.min(i, 6) * 60}
                className="bg-surface px-[26px] py-[30px] text-center"
              >
                <div className="font-heading text-[clamp(28px,3.4vw,44px)] font-bold leading-none tracking-[-0.02em] text-accent-700">
                  {m.value}
                </div>
                <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                  {m.label}
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
          <div>
            <p className="m-0 font-mono text-[13px] uppercase tracking-[0.12em] text-accent-700">
              The problem
            </p>
            <p className="mt-3 text-[17px] leading-[1.6]">{detail.problem}</p>
            <p className="mt-8 font-mono text-[13px] uppercase tracking-[0.12em] text-accent-700">
              The outcome
            </p>
            <p className="mt-3 text-[17px] leading-[1.6]">{detail.outcome}</p>
          </div>

          {detail.did && detail.did.length > 0 && (
            <div>
              <p className="m-0 font-mono text-[13px] uppercase tracking-[0.12em] text-accent-700">
                What I did
              </p>
              <div className="mt-4 border-t-2 border-divider">
                {detail.did.map((item, i) => (
                  <div
                    key={item}
                    className="grid grid-cols-[32px_1fr] gap-3 border-b border-divider py-4"
                  >
                    <span className="font-mono text-[13px] text-accent-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pull quote */}
        {detail.quote && (
          <blockquote className="my-14 border-y-2 border-divider py-11">
            <p className="m-0 max-w-[34ch] font-heading text-[clamp(22px,2.8vw,36px)] font-bold leading-[1.15] tracking-[-0.02em]">
              “{detail.quote}”
            </p>
            {detail.quoteBy && (
              <cite className="mt-4 block font-mono text-[12px] uppercase not-italic tracking-[0.1em] text-muted">
                {detail.quoteBy}
              </cite>
            )}
          </blockquote>
        )}

        {!detail.quote && <div className="pb-14" />}
      </article>

      {/* Next case */}
      <Link
        href={`/work/${next.slug}`}
        className="full-bleed block border-y-2 border-divider bg-accent-700 text-bg no-underline"
      >
        <div className="mx-auto max-w-container px-6 py-[72px]">
          <p className="m-0 font-mono text-[12px] uppercase tracking-[0.16em] text-bg/80">
            Next case study →
          </p>
          <h2 className="mt-4 max-w-[24ch] text-[clamp(30px,4.6vw,62px)] font-bold leading-[0.98] tracking-[-0.02em] text-bg">
            {next.title}
          </h2>
        </div>
      </Link>
    </main>
  );
}
