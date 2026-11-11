import Image from "next/image"
import Link from "next/link"
import TechMarquee from "@/components/TechMarquee"
import SocialLinks from "@/components/SocialLinks"

// Split across two rows that scroll in opposite directions. Every entry here has an icon.
const marqueeRows = [
  [
    "Python", "Java", "JavaScript", "TypeScript", "C#", "C", "C++", "HTML", "CSS",
    "Next.js", "React", "Node.js", "FastAPI", "Tailwind CSS", "Supabase",
  ],
  [
    "PostgreSQL", "MySQL", "NoSQL", "Unix/Linux", "Git", "AWS", ".NET", "Jira",
    "Azure DevOps", "Playwright", "QASE", "Test Design", "Test Automation", "Agile",
    "TCP/IP", "Bundle Protocol", "DTN", "SMTP",
  ],
];

const skillGroups = [
  { label: "Languages", items: ["C#", "C", "C++", "HTML", "CSS"] },
  { label: "Frameworks & Platforms", items: ["FastAPI", "Tailwind CSS", "Supabase"] },
  { label: "Systems & Tools", items: ["Unix/Linux", "Git", "AWS", ".NET", "Jira", "Azure DevOps"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "NoSQL"] },
  { label: "Networking & Protocols", items: ["TCP/IP", "Bundle Protocol (BP)", "Delay Tolerant Networking (DTN)", "SMTP"] },
  {
    label: "Quality Assurance",
    items: ["Test Case Design & Execution", "Test Automation", "Playwright", "QASE", "Agile Development"],
  },
  { label: "Spoken Languages", items: ["English", "Spanish"] },
];

const experience = [
  {
    company: "SQA Squared",
    role: "Junior SQaaS Trainee",
    dates: "Jul 2026 – Present",
    bullets: [
      "Realize, identify, and execute test cases across business partners' software systems, personally handling 10+ tickets weekly on a team resolving 70+.",
      "Manage test cases and tickets through Jira and Azure DevOps, automate testing with Playwright, and track coverage in QASE.",
      "Write Python scripts to streamline testing processes, working within an Agile framework with daily standups.",
    ],
  },
  {
    company: "First Step Marketing, Long Beach",
    role: "Brand Ambassador",
    dates: "Nov 2022 – Jul 2023",
    bullets: [
      "Engaged with 50+ customers daily to promote brand awareness and managed multi-site booth logistics, applying data-driven reporting to improve outreach strategies.",
    ],
  },
];

const awards = [
  { title: "Dean's List", detail: "2023, 2024" },
  { title: "Computer Science Founder Award", detail: "CSHM, at the recommendation of the Computer Science Chair" },
  { title: "Employee of the Month", detail: "First Step Marketing" },
];

export default function About() {
  return (
    <main className="min-h-screen pt-24 px-8 pb-20">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Left: Text Section */}
          <div className="md:w-1/2">
            <h1 className="font-bold text-gray-50 text-[clamp(2.5rem,5vw,4.5rem)]">
              Hello, I&apos;m Ryan
            </h1>

            <div className="mt-6 space-y-6 text-xl text-gray-200 leading-relaxed">
              <p>
                I&apos;m a software engineer based in Los Angeles, with a penchant for video games and complex problems.
                I graduated from California State University of Los Angeles in August of 2025 with a Bachelor of Science
                in Computer Science.
              </p>
              <p>
                These days I work at SQA Squared as a Junior SQaaS Trainee, where I design and execute test cases across
                our partners&apos; systems, automate them with Playwright, and write Python to take the manual work out of
                testing. Spending my days in quality assurance has changed how I build things: I notice the edges now,
                the places where software quietly breaks.
              </p>
              <p>
                I love how quickly technology moves and I love chasing it. AI is interesting to me and I&apos;m looking
                forward to seeing my mastery over it grow. I also take on freelance work and am always interested in a
                challenge! Take a look at my{" "}
                <Link href="/projects" className="text-gray-50 underline underline-offset-4 hover:text-white">
                  projects
                </Link>{" "}
                to see the kind of work I do, then head to my{" "}
                <Link href="/contact" className="text-gray-50 underline underline-offset-4 hover:text-white">
                  contact page
                </Link>{" "}
                to reach out and connect.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/documents/RESUME_OFFICIAL(11.10.26).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-navy-900/75 px-5 py-3 text-gray-100 shadow-sm transition-colors hover:bg-navy-900"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>View my resume</span>
              </a>

              <SocialLinks />
            </div>
          </div>

          {/* Right: Sticky Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="sticky top-32">
              <Image
                src="/medium-shot.jpg"
                alt="Ryan Torrez Mid shot"
                width={500}
                height={500}
                className="rounded-full shadow-lg border-4 border-navy-800"
                priority
              />
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Where I&apos;ve worked</h2>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company} className="rounded-lg bg-navy-900/50 p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {job.company}{" "}
                    <span className="font-normal text-gray-400">— {job.role}</span>
                  </h3>
                  <p className="text-sm text-gray-400 sm:whitespace-nowrap">{job.dates}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300 leading-relaxed">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Education</h2>
          <div className="rounded-lg bg-navy-900/50 p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-gray-100">
                California State University of Los Angeles{" "}
                <span className="font-normal text-gray-400">— B.S. Computer Science</span>
              </h3>
              <p className="text-sm text-gray-400 sm:whitespace-nowrap">August 2025</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Here are some technologies I know:</h2>

          <TechMarquee rows={marqueeRows} />

          <dl className="mt-10 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="sm:flex sm:gap-6">
                <dt className="mb-2 shrink-0 text-sm font-semibold uppercase tracking-wide text-gray-400 sm:mb-0 sm:w-56 sm:pt-1">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-navy-900/60 px-3 py-1 text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Awards */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-6">Awards</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {awards.map((award) => (
              <li key={award.title} className="rounded-lg bg-navy-900/50 p-5">
                <p className="font-semibold text-gray-100">{award.title}</p>
                <p className="mt-1 text-sm text-gray-400">{award.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
