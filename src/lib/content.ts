// Placeholder content for the redesign. Copy here is invented per the design
// handoff and gets swapped for Ryan's real material during "tweakage".

export type Project = {
  slug: string;
  num: string;
  kicker: string;
  title: string;
  blurb: string;
  client: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "regression-suite",
    num: "01",
    kicker: "Test automation · Playwright",
    title: "A regression suite that runs itself",
    blurb:
      "Replaced a fragile manual pass with a parallelized Playwright suite wired into CI, cutting release checks from a day to minutes.",
    client: "Fintech platform",
    year: "2025",
  },
  {
    slug: "sqaas",
    num: "02",
    kicker: "SQaaS · Quality on retainer",
    title: "Quality as a standing service",
    blurb:
      "Embedded quality practice for a product team: coverage tracking, ticket triage, and automation that keeps pace with the roadmap.",
    client: "SaaS startup",
    year: "2025",
  },
  {
    slug: "warehouse-tooling",
    num: "03",
    kicker: "Internal tooling · Python",
    title: "Internal tools for a warehouse floor",
    blurb:
      "Python services and a thin UI that took the manual paperwork out of receiving, cutting entry errors and freeing up the floor team.",
    client: "Logistics",
    year: "2024",
  },
  {
    slug: "contract-testing",
    num: "04",
    kicker: "API & contract testing",
    title: "Contracts that catch breakage early",
    blurb:
      "Contract tests between services so a breaking change fails in the pipeline instead of in production, with reports the whole team reads.",
    client: "Platform team",
    year: "2024",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 8, suffix: "", label: "Years shipping software" },
  { value: 400, suffix: "+", label: "Releases supported" },
  { value: 14, suffix: "", label: "Teams worked alongside" },
];

export const marqueeItems = [
  "Test automation",
  "Playwright · Selenium · Pytest",
  "CI/CD pipelines",
  "SQaaS engagements",
  "API & contract testing",
  "Internal tooling",
];

export type Service = {
  num: string;
  title: string;
  body: string;
  tag: string;
};

export const services: Service[] = [
  {
    num: "01",
    title: "Test automation build-out",
    body: "Stand up a maintainable automation suite — Playwright, Selenium, or Pytest — wired into your pipeline and owned by the team after handoff.",
    tag: "Project or retainer",
  },
  {
    num: "02",
    title: "SQaaS — quality on retainer",
    body: "An embedded quality practice: coverage tracking, ticket triage, and automation that keeps pace with the roadmap.",
    tag: "Ongoing",
  },
  {
    num: "03",
    title: "Pipeline & CI work",
    body: "Faster, more trustworthy pipelines — parallelized tests, sensible gates, and reporting the whole team actually reads.",
    tag: "Project",
  },
  {
    num: "04",
    title: "Software development",
    body: "Backend services, internal tooling, and the glue code that takes the manual work out of a process.",
    tag: "Project",
  },
];

export const tools = [
  "Python", "TypeScript", "C#", "Playwright", "Selenium", "Pytest", "Cypress",
  "Pact", "Postman", "FastAPI", "React", "Next.js", "Postgres", "Docker",
  "GitHub Actions", "Jenkins", "Azure DevOps", "Grafana",
];

export type Metric = { value: string; label: string };

export type CaseDetail = {
  role: string;
  stack: string;
  lead: string;
  problem: string;
  outcome: string;
  metrics: Metric[];
  did: string[];
  quote: string;
  quoteBy: string;
};

// Placeholder case-study bodies keyed by project slug. Real write-ups replace
// these during tweakage.
export const caseDetails: Record<string, CaseDetail> = {
  "regression-suite": {
    role: "Automation lead",
    stack: "Playwright · TypeScript · GitHub Actions",
    lead: "A release checklist that used to eat a full day now runs on every push in minutes — and the team trusts the green.",
    problem:
      "Every release depended on a manual regression pass: slow, inconsistent, and easy to skip under deadline. Bugs slipped through precisely when the team was moving fastest.",
    outcome:
      "A parallelized Playwright suite, wired into CI with sensible gates, that gives a trustworthy answer on every push. Manual checks dropped to a fraction, and confidence in shipping went up.",
    metrics: [
      { value: "1 day → 8 min", label: "Regression time" },
      { value: "320+", label: "Automated checks" },
      { value: "4×", label: "Releases per week" },
    ],
    did: [
      "Mapped the manual checklist into deterministic, parallelizable specs.",
      "Wired the suite into CI with retry and flake quarantine.",
      "Built reporting the whole team reads, not just QA.",
      "Handed off ownership with docs and a maintenance rhythm.",
    ],
    quote:
      "We stopped holding our breath on release day. The suite just tells us the truth.",
    quoteBy: "Eng lead · Fintech platform",
  },
  sqaas: {
    role: "Embedded QA consultant",
    stack: "Pytest · Postman · Grafana",
    lead: "Quality as a standing service — coverage, triage, and automation that keeps pace with the roadmap instead of trailing it.",
    problem:
      "A fast-moving product team had no dedicated quality practice. Coverage was invisible and regressions were found by customers.",
    outcome:
      "An embedded quality program with tracked coverage, triaged tickets, and automation that grows with the product.",
    metrics: [
      { value: "68% → 91%", label: "Critical-path coverage" },
      { value: "−54%", label: "Escaped defects" },
      { value: "Weekly", label: "Quality reporting" },
    ],
    did: [
      "Stood up coverage tracking against critical user paths.",
      "Set a triage rhythm the team could sustain.",
      "Automated the highest-value regressions first.",
      "Reported quality trends to product and leadership.",
    ],
    quote: "It feels like we finally have a quality function — on retainer.",
    quoteBy: "Product lead · SaaS startup",
  },
  "warehouse-tooling": {
    role: "Software developer",
    stack: "Python · FastAPI · Postgres",
    lead: "Internal tools that took the paperwork off the warehouse floor and the errors out of receiving.",
    problem:
      "Receiving ran on paper and manual data entry. Errors compounded downstream and the floor team lost hours to rework.",
    outcome:
      "Python services and a thin UI that captured receiving accurately at the source, cutting entry errors and freeing the team.",
    metrics: [
      { value: "−72%", label: "Entry errors" },
      { value: "3 hrs/day", label: "Time returned" },
      { value: "100%", label: "Digitized receiving" },
    ],
    did: [
      "Modeled the receiving workflow with the floor team.",
      "Built FastAPI services and a focused operator UI.",
      "Migrated historical records into Postgres.",
      "Rolled out with training and a feedback loop.",
    ],
    quote: "The floor runs calmer now. The tools just fit how we work.",
    quoteBy: "Operations manager · Logistics",
  },
  "contract-testing": {
    role: "Automation engineer",
    stack: "Pact · Pytest · GitHub Actions",
    lead: "Contract tests that catch a breaking change in the pipeline instead of in production.",
    problem:
      "Independent services drifted apart. A breaking change in one surfaced as a production incident in another, with slow, painful diagnosis.",
    outcome:
      "Consumer-driven contract tests that fail fast in CI when an interface breaks, with reports every team can read.",
    metrics: [
      { value: "0", label: "Contract incidents since" },
      { value: "12", label: "Services covered" },
      { value: "Minutes", label: "Time to detect" },
    ],
    did: [
      "Introduced consumer-driven contracts between services.",
      "Gated deploys on contract verification in CI.",
      "Built shared reporting across teams.",
      "Documented the pattern for new services.",
    ],
    quote: "Breakage fails the pipeline now, not the pager.",
    quoteBy: "Platform lead",
  },
};

export type ExperienceRow = { years: string; role: string; org: string };

export const experience: ExperienceRow[] = [
  { years: "2024 — now", role: "QA & Automation Consultant", org: "Independent / SQaaS" },
  { years: "2022 — 2024", role: "Software Developer", org: "Product team" },
  { years: "2020 — 2022", role: "Automation Engineer", org: "Platform team" },
  { years: "2018 — 2020", role: "Junior Developer", org: "Early-career role" },
];
