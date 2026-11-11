// Real content, migrated from the original portfolio. Case-study bodies are
// written from the project descriptions on the old site; project years are
// best-estimates and easy to adjust.

export const profile = {
  name: "Ryan Torrez",
  email: "ryantorrez60@gmail.com",
  phone: "(562) 787-4948",
  github: "https://github.com/ZeroUndergroun",
  linkedin: "https://www.linkedin.com/in/ryan-torrez-39530414a",
  resume: "/documents/resume_2026.1.pdf",
  location: "Los Angeles, CA",
};

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
    slug: "the-nest",
    num: "01",
    kicker: "Full stack · Next.js + FastAPI",
    title: "The Nest — a campus-only social platform",
    blurb:
      "A social platform for the Cal State LA community, gated behind campus email — feed, role-based search, DMs, and notifications, built solo.",
    client: "Solo build",
    year: "2025",
  },
  {
    slug: "civicai",
    num: "02",
    kicker: "AI · Hackathon",
    title: "CivicAI — facts against the noise",
    blurb:
      "A Google Cloud Looker Hackathon 2025 entry that grounds answers in public data using Python, Streamlit, and GPT-4o-mini. Open source.",
    client: "Hackathon",
    year: "2025",
  },
  {
    slug: "bp-mail",
    num: "03",
    kicker: "Networking · Capstone",
    title: "BP Mail — email across deep space",
    blurb:
      "Senior capstone with NASA JPL: end-to-end mail transmission over delay-tolerant networking, built by a team of 12 undergraduates.",
    client: "NASA JPL · CSULA",
    year: "2025",
  },
  {
    slug: "dragons-burden",
    num: "04",
    kicker: "Game · Unity",
    title: "Dragon's Burden — a playable first level",
    blurb:
      "A Unity game built with two other students; I handled level design and environmental mechanics. Level one is live on itch.io.",
    client: "Team of 3",
    year: "2024",
  },
  {
    slug: "astro-experience",
    num: "05",
    kicker: "VR · Unity",
    title: "Astro-Experience — a taste of launch",
    blurb:
      "A solo VR experience that simulates some of the sensations an astronaut feels before heading into space.",
    client: "Solo",
    year: "2024",
  },
  {
    slug: "alc-school-site",
    num: "06",
    kicker: "Web · Freelance",
    title: "ALC School Site — a school online",
    blurb:
      "A website for the Academy of Language and Culture in Matagalpa, Nicaragua, giving the school a home on the web.",
    client: "Freelance",
    year: "2023",
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 6, suffix: "", label: "Projects shipped" },
  { value: 10, suffix: "+", label: "Weekly QA tickets" },
  { value: 2025, suffix: "", label: "B.S. Computer Science" },
];

export const marqueeItems = [
  "Test automation",
  "Playwright · QASE",
  "Python · Java · C#",
  "FastAPI · Next.js · React",
  "Backend development",
  "SQaaS engagements",
  "PostgreSQL · Supabase",
  "Jira · Azure DevOps",
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
    title: "Backend development",
    body: "Python, Java, and .NET services, API design and implementation, and the glue code that takes the manual work out of a process.",
    tag: "Project",
  },
  {
    num: "02",
    title: "Automation & internal tools",
    body: "Automation scripts and internal tooling that streamline a workflow, plus dockerizing and deploying the result.",
    tag: "Project or retainer",
  },
  {
    num: "03",
    title: "QA & test automation",
    body: "Test case design and automation with Playwright, tracked in QASE — quality programs that keep releases honest.",
    tag: "Ongoing",
  },
  {
    num: "04",
    title: "Fixes & full-stack builds",
    body: "Bug fixes, refactoring, and maintenance on existing code, plus full-stack web builds when a project needs the whole thing.",
    tag: "Project",
  },
];

export const tools = [
  "Python", "Java", "JavaScript", "TypeScript", "C#", "C", "C++",
  "React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "Supabase",
  "PostgreSQL", "MySQL", "Playwright", "QASE", "Jira", "Azure DevOps",
  "Git", "AWS", ".NET", "Unix/Linux",
];

export type ExperienceRow = { years: string; role: string; org: string };

export const experience: ExperienceRow[] = [
  { years: "2026 — now", role: "Junior SQaaS Trainee", org: "SQA Squared" },
  { years: "2022 — 2023", role: "Brand Ambassador", org: "First Step Marketing" },
];

export const education = {
  years: "2025",
  school: "California State University, Los Angeles",
  degree: "B.S. Computer Science",
};

export type Award = { title: string; detail: string };

export const awards: Award[] = [
  { title: "Dean's List", detail: "2023, 2024" },
  {
    title: "Computer Science Founder Award",
    detail: "CSHM — at the recommendation of the CS Chair",
  },
  { title: "Employee of the Month", detail: "First Step Marketing" },
];

export type Metric = { value: string; label: string };
export type CaseLink = { label: string; href: string };

export type CaseDetail = {
  role: string;
  stack: string;
  lead: string;
  problem: string;
  outcome: string;
  metrics?: Metric[];
  did?: string[];
  quote?: string;
  quoteBy?: string;
  links?: CaseLink[];
  /** YouTube id — rendered in the hero slot when present. */
  heroVideo?: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export const caseDetails: Record<string, CaseDetail> = {
  "the-nest": {
    role: "Solo — full stack",
    stack: "Next.js · FastAPI · PostgreSQL",
    lead: "A social platform built exclusively for the Cal State LA community, with access gated behind .calstatela.edu email verification.",
    problem:
      "Current students, alumni, incoming students, and staff at Cal State LA had no shared space of their own — somewhere access is limited to the campus community.",
    outcome:
      "A full social platform I architected and built solo: a home feed, search that surfaces people by role, direct messaging, and notifications, all behind campus email verification. Open source under an MIT license.",
    metrics: [
      { value: "9", label: "Table schema" },
      { value: "5", label: "API router groups" },
      { value: "MIT", label: "Open source" },
    ],
    did: [
      "Built the Next.js + TypeScript + Tailwind frontend, deployed on Vercel.",
      "Built the FastAPI + SQLAlchemy backend, deployed on Railway.",
      "Modeled a 9-table PostgreSQL schema through Supabase.",
      "Hardened auth: bcrypt hashing, JWTs in httpOnly cookies, rate-limited routes, Pydantic validation, and ORM-only database access.",
    ],
    links: [
      { label: "View repo", href: "https://github.com/ZeroUndergroun/The-Nest" },
      { label: "Visit the site", href: "https://the-nest-phi.vercel.app" },
    ],
    heroImage: "/screenshots/nest_feed.PNG",
    heroImageAlt: "The Nest home feed",
  },
  civicai: {
    role: "Solo — hackathon",
    stack: "Python · Streamlit · Looker Studio · GPT-4o-mini",
    lead: "My submission for Google Cloud's Looker Hackathon 2025 — cutting through online misinformation with numbers drawn from public datasets.",
    problem:
      "Public conversation is full of misinformation. The facts often exist in public datasets, but they aren't easy to reach or read.",
    outcome:
      "A tool that grounds its answers in public data: a Python backend, a Streamlit frontend, Looker Studio for visualization, and GPT-4o-mini as the engine. Still early, but open source under an MIT license and open to contributions.",
    metrics: [
      { value: "2025", label: "Looker Hackathon" },
      { value: "MIT", label: "Open source" },
    ],
    did: [
      "Built the Python backend and the Streamlit frontend.",
      "Wired GPT-4o-mini in as the reasoning engine.",
      "Visualized public datasets through Looker Studio.",
    ],
    links: [
      { label: "View repo", href: "https://github.com/ZeroUndergroun/CivicAI" },
    ],
    heroVideo: "rEJTBHzLuAE",
  },
  "bp-mail": {
    role: "Team of 12 — with NASA JPL",
    stack: "DTN · Bundle Protocol · SMTP",
    lead: "My senior capstone, in collaboration with NASA JPL: end-to-end mail transmission across the harsh environment of space.",
    problem:
      "Delivering mail end-to-end through space means tolerating long delays and disruptions that ordinary internet protocols can't handle.",
    outcome:
      "A system for end-to-end mail transmission over delay-tolerant networking, built by a squad of 12 undergraduates under CSULA faculty and a liaison from NASA. There's a detailed wiki worth reading.",
    metrics: [
      { value: "12", label: "Person team" },
      { value: "NASA JPL", label: "Collaboration" },
    ],
    links: [
      { label: "Repo & wiki", href: "https://github.com/250MHz/bpmail/wiki" },
    ],
    heroImage: "/logos/nasa.png",
    heroImageAlt: "NASA / BP Mail",
  },
  "dragons-burden": {
    role: "Team of 3 — level design",
    stack: "Unity · C# · Git",
    lead: "A game made with two other CS undergraduates. I handled the level design and some of the environmental mechanics; the first level is live and playable on itch.io.",
    problem:
      "A course game project that had to become something actually worth playing — a real first level, not just a prototype.",
    outcome:
      "A finished, playable first level shipped on itch.io, built in Unity and C# with Git for version control across a three-person team.",
    links: [
      {
        label: "View repo",
        href: "https://github.com/dayva001/CS4555-Game-Programming/tree/main",
      },
      { label: "Play the game", href: "https://aerosaber.itch.io/dragons-burden" },
    ],
    heroVideo: "sU0ZaL9QTho",
  },
  "astro-experience": {
    role: "Solo",
    stack: "Unity · C# · Git",
    lead: "A solo VR experience that simulates some of the sensations an astronaut might feel before heading into space.",
    problem:
      "Conveying what launch feels like is hard to do on a screen — it wants to be felt, not watched.",
    outcome:
      "A Meta Quest VR experience built solo in Unity and C#. Trying it needs a headset and a quick message to me for setup instructions.",
    links: [
      {
        label: "View repo",
        href: "https://github.com/ZeroUndergroun/Astro-Experience-Repo",
      },
    ],
    heroVideo: "27hLl6K5D7g",
  },
  "alc-school-site": {
    role: "Solo — freelance",
    stack: "HTML · CSS · Python",
    lead: "A website for the Academy of Language and Culture, a school in Matagalpa, Nicaragua.",
    problem:
      "The school had no presence online and no easy way to share information with prospective students and their families.",
    outcome:
      "A simple, maintainable site built with HTML, CSS, and Python that gave the school a home on the web and a place to publish information.",
    links: [
      {
        label: "View repo",
        href: "https://github.com/ZeroUndergroun/ALC-School-Site",
      },
    ],
  },
};
