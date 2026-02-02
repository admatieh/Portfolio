const programming = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "Java", level: 75 },
  { name: "SQL", level: 80 },
];

const frameworks = [
  { name: "React", level: 80 },
  { name: "Node.js / Express", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "Git / GitHub", level: 85 },
];

const chips = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Tailwind",
  "JavaScript",
  "Python",
  "Java",
  "Git",
  "Linux",
  "REST APIs",
  "CI/CD basics",
  "Security basics",
];

const Bar = ({ name, level }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-4">
        <span className="text-sm font-medium text-white/85">{name}</span>
        <span className="text-xs text-white/55">{level}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-white/90"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#070707] text-white">
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
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-sm border border-white/10 bg-white/5 p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-[#E0E0E0]">Programming</h3>
            <div className="mt-8 space-y-7">
              {programming.map((s) => (
                <Bar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/5 p-8 sm:p-10">
            <h3 className="text-xl font-semibold text-[#E0E0E0]">Frameworks / Tools</h3>
            <div className="mt-8 space-y-7">
              {frameworks.map((s) => (
                <Bar key={s.name} name={s.name} level={s.level} />
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
