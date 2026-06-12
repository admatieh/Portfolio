const skillGroups = [
  {
    title: "Core Stack",
    level: "Strong",
    description: "Building full-stack features with modern frontend, backend APIs, and practical data handling.",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Python"],
  },
  {
    title: "Backend & Data",
    level: "Strong",
    description: "Designing APIs, auth flows, database models, automation scripts, and maintainable backend logic.",
    items: ["FastAPI", "Django", "Flask", "Express", "SQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools & Workflow",
    level: "Comfortable",
    description: "Working with Git, GitHub, Linux, API testing, AI-assisted planning, and debugging workflows.",
    items: ["Git / GitHub", "Linux", "Postman", "Selenium", "VS Code", "Figma", "AI Tools"],
  },
  {
    title: "Security Awareness",
    level: "Growing",
    description: "Applying safer defaults while learning through PortSwigger labs, validation, auth, and web security practice.",
    items: ["JWT", "Input Validation", "XSS Basics", "Injection Basics", "Burp Suite", "PortSwigger"],
  },
];

const chips = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "TypeScript",
  "Python",
  "Django",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "SQLite",
  "Tailwind",
  "Git / GitHub",
  "Linux",
  "Selenium",
  "Postman",
  "Burp Suite",
  "Active Directory",
  "Web Security",
  "Problem-solving",
  "Communication",
  "Teamwork",
  "Adaptability",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#070707] text-white grid-paper-dark">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
              SKILLS
            </p>
            <div className="mt-4 flex items-end gap-6">
              <div className="h-14 w-[3px] rounded-full bg-[#4C8DFF]" />
              <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
                HOW I BUILD
              </h2>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            Instead of random percentages, this section groups the tools I use by how they show up in real projects: interfaces, APIs, data, workflow, and security-aware development.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const light = index === 1;
            return (
              <article
                key={group.title}
                className={`rounded-[2rem] border p-6 ${light
                  ? "border-black/5 bg-[#F3F1EC] text-black grid-paper-light"
                  : "border-white/10 bg-white/[0.04] text-white"
                  }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-xl font-black tracking-tight ${light ? "text-black" : "text-[#E0E0E0]"}`}>{group.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest ${light ? "bg-black text-white" : "bg-[#4C8DFF]/15 text-[#8EB7FF] ring-1 ring-[#4C8DFF]/25"}`}>
                    {group.level}
                  </span>
                </div>
                <p className={`mt-5 text-sm leading-relaxed ${light ? "text-black/65" : "text-white/65"}`}>{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${light ? "border-black/10 bg-black/5 text-black/70" : "border-white/10 bg-white/5 text-white/70"}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 hover:text-white hover:border-white/20 transition"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
