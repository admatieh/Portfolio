import muscle from "../assets/muscle.png";
import automation from "../assets/automation.png";
import engineering from "../assets/engineering.png";
import health from "../assets/healthcare.png";
import solutions from "../assets/problem-solving.png";

const stickers = [
  { src: muscle, alt: "muscle", x: "30%",  y: "18%", r: -8 },
  { src: automation,  alt: "automation", x: "80%", y: "16%", r: 10 },
  { src: engineering,  alt: "engineering", x: "20%", y: "72%", r: 6 },
  { src: health, alt: "health", x: "78%", y: "78%", r: -6 },
  { src: solutions, alt: "solutions", x: "55%", y: "50%", r: 14 },
];

const items = [
  {
    role: "Full Stack Developer",
    type: "Internship",
    location: "Lebanon (On-site , The Digital Hub)",
    date: "Jan 2026 — Present",
    highlights: [
      "Built full-stack features using the MERN stack (React, Node.js, MongoDB).",
      "Integrated REST APIs with focus on authentication and error handling.",
      "Collaborated in team workflow: pull requests, code reviews, standups.",
    ],
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Git", "Teamwork"],
  },
  {
    role: "Bug Bounty / Web Security Trainee",
    type: "Training",
    location: "Lebanon (Hybrid)",
    date: "2025 — Present",
    highlights: [
      "Completed extensive PortSwigger Web Security Academy labs.",
      "Practiced finding and exploiting common web vulnerabilities (XSS, injection).",
      "Built small security scripts/tools for testing and automation (Python/Flask).",
    ],
    tags: ["Web Security", "PortSwigger", "XSS", "Injection", "Python", "Flask"],
  },
  {
    role: "Software Developer & Automation Engineer",
    type: "Freelance",
    location: "Saida, Lebanon",
    date: "Sept 2024 — Present",
    highlights: [
      "Built backend systems and APIs for POS, pharmacy, and menu apps (Python, PHP, SQL).",
      "Created automation tools (Selenium, scraping, data handling) to reduce manual workflows.",
      "Designed small dashboards and backend services for real-time data processing.",
    ],
    tags: ["Python", "PHP", "SQL", "APIs", "Automation", "Selenium"],
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

        {/* Timeline layout */}
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
                {/* subtle accent stripe */}
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
