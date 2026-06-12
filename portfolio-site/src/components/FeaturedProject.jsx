import React from "react";
import { ExternalLink, Github, ShieldCheck, Bot, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Bot,
    title: "Automation",
    text: "Tracks voice sessions, attendance, and participation without manual spreadsheets.",
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    text: "Turns Discord activity into reports and analytics that are easier to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Built as a small system: bot workflows, database records, health checks, and reporting.",
  },
];

const stack = ["Node.js", "Discord.js", "Next.js", "SQLite", "Automation", "Analytics"];

const MiniDashboard = () => (
  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-5 shadow-2xl">
    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4C8DFF]/20 blur-3xl" />
    <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#4C8DFF]">Activity Intelligence</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-white">Discord Sessions</h3>
      </div>
      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
        Live System
      </div>
    </div>

    <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-3">
      {["42 Sessions", "128 Members", "91% Attendance"].map((item) => (
        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="text-xl font-black text-white">{item.split(" ")[0]}</div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/45">{item.split(" ").slice(1).join(" ")}</div>
        </div>
      ))}
    </div>

    <div className="relative z-10 mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-white/80">Weekly participation</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40">Report</span>
        </div>
        <div className="flex h-32 items-end gap-3">
          {[42, 66, 58, 82, 76, 94, 72].map((height, index) => (
            <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-[#4C8DFF] to-white/80" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        {["Session scheduled", "Voice attendance saved", "Report generated", "Health check passed"].map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl bg-black/30 p-3 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#4C8DFF]" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FeaturedProject = () => {
  return (
    <section id="featured" className="bg-[#070707] text-white grid-paper-dark">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60">FEATURED CASE STUDY</p>
            <div className="mt-4 flex items-end gap-6">
              <div className="h-14 w-[3px] rounded-full bg-[#4C8DFF]" />
              <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
                DISCORD ACTIVITY BOT
              </h2>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            A full-stack activity intelligence system that turns Discord voice participation into useful attendance data, reports, and dashboard insights.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <MiniDashboard />

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#4C8DFF]">Problem → Solution → Proof</p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">More than a bot — a small decision system.</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              The project started from a real need: tracking online voice sessions, attendance, and participation without manually checking every member. I built the bot workflows, database logic, reporting flow, and dashboard experience around that problem.
            </p>

            <div className="mt-8 grid gap-4">
              {highlights.map(({ icon, title, text }) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4C8DFF]/15 text-[#4C8DFF] ring-1 ring-[#4C8DFF]/25">
                    {React.createElement(icon, { className: "h-5 w-5" })}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/75">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/admatieh/Discord-Activity-Intelligence-Bot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-[#F3F1EC]">
                <Github className="h-4 w-4" /> Source
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white/10">
                <ExternalLink className="h-4 w-4" /> More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
