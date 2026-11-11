import Link from "next/link";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Tetris from "@/components/Tetris";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  profile,
  projects,
  stats,
  marqueeItems,
  services,
  tools,
  experience,
  education,
  awards,
} from "@/lib/content";

export default function Home() {
  return (
    <main id="top">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 items-center gap-10 pb-14 pt-[72px] lg:grid-cols-2">
          <div>
            <p className="m-0 mb-5 font-mono text-[12px] uppercase tracking-[0.16em] text-accent-700">
              Software developer · Automation · QA consulting
            </p>
            <h1 className="m-0 mb-6 text-[clamp(42px,6.4vw,88px)] font-bold leading-[0.94] tracking-[-0.02em] [text-wrap:balance]">
              I make software
              <br />
              prove itself.
            </h1>
            <p className="m-0 mb-7 max-w-[46ch] text-[17px] leading-[1.6] text-lead">
              Hi, I&apos;m Ryan — a software engineer in Los Angeles. I write the
              software, then I write the software that keeps it honest. Backend
              development, automation, and quality work for teams that would
              rather ship on Friday without holding their breath.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary no-underline" href="#work">
                See selected work
              </a>
              <a
                className="btn btn-secondary no-underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
          </div>

          <Tetris />
        </div>

        {/* Stat rule row */}
        <div className="grid grid-cols-1 border-y-2 border-divider sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={Math.min(i, 6) * 60}
              className="border-divider px-6 py-6 text-center sm:border-r sm:last:border-r-0"
            >
              <div className="font-heading text-[clamp(34px,4vw,52px)] font-bold leading-none tracking-[-0.02em]">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2.5 font-mono text-[12px] uppercase tracking-[0.1em] text-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Marquee band ─────────────────────────────────────────────── */}
      <section className="full-bleed mt-[72px] overflow-hidden border-y-2 border-divider bg-accent-700 text-bg">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center gap-10 whitespace-nowrap px-5 py-3.5 font-mono text-[15px] uppercase tracking-[0.12em]"
            >
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center gap-10">
                  <span>{item}</span>
                  <span>—</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected work ────────────────────────────────────────────── */}
      <section
        id="work"
        className="mx-auto max-w-container scroll-mt-20 px-6 pt-[88px]"
      >
        <div className="flex items-baseline justify-between gap-6 border-b-2 border-divider pb-4">
          <h2 className="m-0 text-[clamp(28px,3.4vw,44px)] tracking-[-0.02em]">
            Selected work
          </h2>
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-caption">
            01 — Four case studies
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0.5 bg-divider sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 6) * 60}>
              <Link
                href={`/work/${p.slug}`}
                className="group block h-full bg-bg px-[26px] pb-[30px] pt-[26px] text-ink no-underline transition-[background,transform] duration-300 hover:-translate-y-1 hover:bg-surface"
              >
                <div className="grayscale-img">
                  <ImagePlaceholder ratio="4 / 3" label={`Fig. ${p.num}`} />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <span className="font-mono text-[13px] font-medium text-accent-700">
                    {p.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-caption">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="mt-3 max-w-[24ch] text-[25px] leading-[1.14]">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-[42ch] text-[14px] leading-[1.6] text-lead">
                  {p.blurb}
                </p>
                <div className="mt-5 h-0.5 w-8 bg-accent-700 transition-[width] duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:w-full" />
                <div className="mt-4 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.08em]">
                  <span className="text-caption">
                    {p.client} · {p.year}
                  </span>
                  <span className="text-accent-700 transition-transform duration-300 group-hover:translate-x-1.5">
                    Read case →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How I help ───────────────────────────────────────────────── */}
      <section
        id="services"
        className="mx-auto max-w-container scroll-mt-20 px-6 pt-[88px]"
      >
        <div className="flex items-baseline justify-between gap-6 border-b-2 border-divider pb-4">
          <h2 className="m-0 text-[clamp(28px,3.4vw,44px)] tracking-[-0.02em]">
            How I help
          </h2>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-caption">
              02 — Services
            </span>
            {/* 3D lattice placeholder */}
            <div className="flex h-16 w-16 flex-none items-center justify-center border border-divider bg-surface">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                3D
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.num}
              delay={Math.min(i, 6) * 60}
              className="border-b border-divider py-8 pb-9 pr-7 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(even)]:pl-7"
            >
              <div className="font-mono text-[13px] font-medium text-accent-700">
                {s.num}
              </div>
              <h4 className="mt-2 text-[20px]">{s.title}</h4>
              <p className="mt-2 text-[14px] leading-[1.6] text-lead">
                {s.body}
              </p>
              <span className="tag tag-outline mt-4 font-mono uppercase tracking-[0.06em]">
                {s.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto max-w-container scroll-mt-20 px-6 pt-[88px]"
      >
        <div className="flex items-baseline justify-between gap-6 border-b-2 border-divider pb-4">
          <h2 className="m-0 text-[clamp(28px,3.4vw,44px)] tracking-[-0.02em]">
            About
          </h2>
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-caption">
            03 — Ryan Torrez
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <div className="grayscale-img border-2 border-divider">
              <ImagePlaceholder ratio="4 / 5" label="Portrait" />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <p className="m-0 text-[19px] leading-[1.55]">
              I&apos;m a software engineer based in Los Angeles, with a penchant
              for video games and complex problems.
            </p>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-[1.6] text-lead">
              I graduated from California State University, Los Angeles in August
              2025 with a B.S. in Computer Science. These days I work at SQA
              Squared as a Junior SQaaS Trainee, where I design and execute test
              cases across our partners&apos; systems, automate them with
              Playwright, and write Python to take the manual work out of testing.
              Spending my days in quality assurance changed how I build things: I
              notice the edges now, the places where software quietly breaks.
            </p>
            <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.6] text-lead">
              I love how quickly technology moves and I love chasing it. I also
              take on freelance work and am always interested in a challenge.
            </p>

            <hr className="hr" />
            <p className="m-0 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
              Tools I reach for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="tag tag-outline font-mono uppercase tracking-[0.04em]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <p className="m-0 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            Experience
          </p>
          <div className="border-t-2 border-divider">
            {experience.map((row, i) => (
              <Reveal
                key={row.years}
                delay={Math.min(i, 6) * 60}
                className="grid grid-cols-[110px_1fr] gap-4 border-b border-divider py-5 sm:grid-cols-[110px_1.2fr_1fr]"
              >
                <span className="font-mono text-[13px] uppercase tracking-[0.06em] text-accent-700">
                  {row.years}
                </span>
                <span className="font-heading text-[17px] font-bold">
                  {row.role}
                </span>
                <span className="text-[14px] text-muted">{row.org}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <p className="m-0 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            Education
          </p>
          <Reveal className="grid grid-cols-[110px_1fr] gap-4 border-y-2 border-divider py-5 sm:grid-cols-[110px_1.2fr_1fr]">
            <span className="font-mono text-[13px] uppercase tracking-[0.06em] text-accent-700">
              {education.years}
            </span>
            <span className="font-heading text-[17px] font-bold">
              {education.degree}
            </span>
            <span className="text-[14px] text-muted">{education.school}</span>
          </Reveal>
        </div>

        {/* Awards */}
        <div className="mt-16">
          <p className="m-0 mb-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
            Awards
          </p>
          <div className="grid grid-cols-1 gap-0.5 bg-divider sm:grid-cols-3">
            {awards.map((award, i) => (
              <Reveal
                key={award.title}
                delay={Math.min(i, 6) * 60}
                className="bg-bg p-5"
              >
                <p className="m-0 font-heading text-[16px] font-bold">
                  {award.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-muted">
                  {award.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact poster ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="full-bleed mt-[88px] scroll-mt-20 border-y-2 border-divider bg-accent-700 text-bg"
      >
        <div className="mx-auto max-w-container px-6 py-[88px]">
          <p className="m-0 font-mono text-[12px] uppercase tracking-[0.16em] text-bg/80">
            04 — Contact
          </p>
          <h2 className="mt-4 max-w-[22ch] text-[clamp(38px,7vw,96px)] font-bold leading-[0.94] tracking-[-0.02em] text-bg">
            Have something to build, or to prove? Let&apos;s talk.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[18px] leading-[1.6] text-bg/90">
            Tell me what you&apos;re working on and where it hurts. Freelance
            projects, quality work, or just a hard problem — I&apos;m interested.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block text-[clamp(20px,2.6vw,32px)] font-bold text-bg underline decoration-2 underline-offset-[6px]"
          >
            {profile.email}
          </a>
          <p className="mt-3 font-mono text-[14px] tracking-[0.04em] text-bg/90">
            {profile.phone}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 font-mono text-[13px] uppercase tracking-[0.08em]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg underline decoration-bg/55 underline-offset-4"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg underline decoration-bg/55 underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg underline decoration-bg/55 underline-offset-4"
            >
              Résumé (PDF)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
