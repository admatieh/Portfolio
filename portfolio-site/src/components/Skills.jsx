const programming = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "SQL", level: 80 },
  { name: "Java", level: 75 },
  { name: "PHP", level: 70 },
  { name: "HTML/CSS", level: 90 },
];

const frameworks = [
  { name: "React", level: 85 },
  { name: "Node.js / Express", level: 80 },
  { name: "Django / FastAPI / Flask", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PostgreSQL / MySQL / MongoDB", level: 80 },
  { name: "Next.js", level: 90 },
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
  "VS Code",
  "Figma",
  "Burp Suite",
  "Active Directory",
  "Web Security",
  "Problem-solving",
  "Communication",
  "Teamwork",
  "Adaptability",
];

const Bar = ({ name, level, light = false }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-4">
        <span className={`text-sm font-medium ${light ? 'text-black/85' : 'text-white/85'}`}>{name}</span>
        <span className={`text-xs ${light ? 'text-black/55' : 'text-white/55'}`}>{level}%</span>
      </div>

      <div className={`h-2 w-full rounded-full ${light ? 'bg-black/10' : 'bg-white/10'}`}>
        <div
          className={`h-2 rounded-full ${light ? 'bg-black/90' : 'bg-white/90'}`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#070707] text-white grid-paper-dark">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
            SkILLS
          </p>
          <div className="mt-4 flex items-end gap-6">
            <div className="h-14 w-2 bg-[#E0E0E0]" />
            <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
              WHAT I KNOW
            </h2>
          </div>
        </div>

        {/* 2 columns */}
        <div className="mt-14 grid gap-0 lg:grid-cols-2">
          {/* Left panel */}
          <div className="border-r border-white/12 p-10 sm:p-12">
            <h3 className="text-xl font-semibold text-[#E0E0E0]">Programming</h3>
            <div className="mt-8 space-y-7">
              {programming.map((s) => (
                <Bar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className="
            relative bg-[#F3F1EC] text-black border border-black/5 p-10 sm:p-12
            bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
            bg-[size:48px_48px]
            overflow-hidden rounded-b-[200px] lg:rounded-r-full lg:rounded-bl-none
          ">
            <h3 className="text-xl font-semibold text-black">Frameworks / Tools</h3>
            <div className="mt-8 space-y-7 relative z-10">
              {frameworks.map((s) => (
                <Bar key={s.name} name={s.name} level={s.level} light />
              ))}
            </div>
          </div>
        </div>

        {/* Chips */}
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
