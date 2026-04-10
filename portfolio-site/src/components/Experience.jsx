import muscle from "../assets/backend.png";
import automation from "../assets/automation2.png";
import engineering from "../assets/bug.png";
import health from "../assets/full-stack.png";

const stickers = [
  { src: muscle, alt: "muscle", x: "30%", y: "18%", r: -8 },
  { src: automation, alt: "automation", x: "80%", y: "16%", r: 10 },
  { src: engineering, alt: "engineering", x: "20%", y: "72%", r: 6 },
  { src: health, alt: "health", x: "78%", y: "78%", r: -6 },
];

const items = [
  {
    role: "Full-Stack Developer Intern",
    type: "Internship",
    location: "Lebanon | Hybrid (The Digital Hub)",
    date: "Jan 2026 — Present",
    highlights: [
      "Build backend and frontend features using the MERN stack, focusing on APIs, authentication, and application logic.",
      "Develop web applications with React, Next.js, Express.js, Node.js, MongoDB, and TypeScript.",
      "Build scalable backend services and REST APIs using Python, Django, and FastAPI.",
      "Implement AI-powered features to improve automation, code structure, and product reliability.",
    ],
    tags: ["MERN", "Next.js", "TypeScript", "Python", "Django", "FastAPI", "AI Integration"],
  },
  {
    role: "Software & Operations Intern",
    type: "Internship",
    location: "Remote, XR-WORKOUT",
    date: "Nov 2025 — Feb 2026",
    highlights: [
      "Supported sprint planning, feature delivery, product demos, and internal documentation across team workflows.",
      "Used AI tools to streamline automation tasks, research workflows, and operational support activities.",
      "Contributed to website updates and content workflows using AI-assisted tools for faster execution.",
    ],
    tags: ["Remote", "AI Tools", "Automation", "Content Workflows", "Sprint Planning"],
  },
  {
    role: "Bug Bounty / Web Security Trainee",
    type: "Training",
    location: "Lebanon (Hybrid), Semicolon Security",
    date: "2025 — Present",
    highlights: [
      "Completed extensive PortSwigger Web Security Academy labs.",
      "Practiced finding and exploiting common web vulnerabilities (XSS, injection).",
      "Built small security scripts/tools for testing and automation (Python/Flask).",
    ],
    tags: ["Web Security", "PortSwigger", "XSS", "Injection", "Python", "Flask"],
  },
  {
    role: "Software Developer & Python Engineer",
    type: "Freelance",
    location: "Saida, Lebanon",
    date: "Sept 2024 — Present",
    highlights: [
      "Deliver full-stack business applications and backend services for POS, pharmacy, and digital menu systems.",
      "Build REST APIs and automation workflows using Python, Flask, SQLAlchemy, and Selenium.",
      "Automate repetitive tasks to reduce manual work and improve day-to-day operational efficiency.",
    ],
    tags: ["Python", "Flask", "SQLAlchemy", "REST APIs", "Automation", "Selenium"],
  },
  {
    role: "Software Engineering Intern",
    type: "Internship",
    location: "BassG — Austin, Texas",
    date: "Jun 2024 — Aug 2024",
    highlights: [
      "Developed Niagara 4 logic modules and monitoring dashboards for building-automation systems.",
      "Supported alarm automation, device integration, and field-sensor configuration.",
      "Worked with technical teams to improve system reliability and performance.",
    ],
    tags: ["Niagara 4", "Dashboards", "Automation", "Reliability"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#070707] text-white">
      <div className="mx-auto w-full px-6 py-20">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
              EXPERIENCE
            </p>
            <div className="mt-4 flex items-end gap-6">
              <div className="h-14 w-2 bg-[#E0E0E0]" />
              <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
                WHAT I'VE BUILT
              </h2>
            </div>
          </div>

          <div className="hidden md:block text-right text-xs text-white/55 max-w-[38ch]">
            Roles that shipped real work: automation, backend systems, and applied engineering.
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr]">
          {/* Left rail */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-md border border-white/10 bg-white/5 p-1">
                <div className="overflow-visible border border-white/10 bg-[#F3F1EC] text-black rounded-md">
                  <div
                    className="
                  relative min-h-[340px] sm:min-h-[210px]
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                  bg-[size:48px_48px]
                "
                  >

                    {/* Stickers */}
                    {stickers.map((s) => (
                      <img
                        key={s.alt}
                        src={s.src}
                        alt={s.alt}
                        className="
                      absolute z-20
                      h-14 w-14 sm:h-16 sm:w-16
                      drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]
                      select-none
                    "
                        style={{
                          left: s.x,
                          top: s.y,
                          transform: `translate(-50%, -50%) rotate(${s.r}deg)`,
                        }}
                      />
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: cards */}
          <div className="space-y-8">
            {items.map((it) => (
              <article
                key={it.role + it.date}
                className="relative overflow-hidden  border border-white/10 bg-black/40 p-8 sm:p-10 text-[#E0E0E0]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-white/15" />
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                        {it.type}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      <span className="text-xs text-white/60">{it.location}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight">
                      {it.role}
                    </h3>

                    <p className="mt-2 text-sm text-white/60">{it.date}</p>
                  </div>

                  {/* tags */}
                  <div className="flex flex-wrap gap-2 md:max-w-[360px] md:justify-end">
                    {it.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* highlights */}
                <ul className="mt-7 space-y-3 text-sm leading-relaxed text-white/80">
                  {it.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
