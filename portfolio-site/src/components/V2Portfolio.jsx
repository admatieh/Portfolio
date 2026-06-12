import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Cpu,
  Github,
  Mail,
  MapPin,
  Radar,
  ShieldCheck,
  TerminalSquare,
  Zap,
} from "lucide-react";
import adamImage from "../assets/final.png";

const fragments = [
  "backend-first brain",
  "full-stack hands",
  "security-aware defaults",
  "automation over repetition",
  "dashboards that explain",
  "AI tools, human review",
  "Saida → remote teams",
  "ship practical systems",
];

const projects = [
  {
    code: "CASE_01",
    title: "Discord Activity Intelligence Bot",
    role: "Bot workflows / dashboard logic / reporting",
    note: "A community activity machine: voice sessions become attendance, analytics, reports, and fewer manual checks.",
    stack: ["Node.js", "Discord.js", "Next.js", "SQLite"],
    link: "https://github.com/admatieh/Discord-Activity-Intelligence-Bot",
    mood: "messy social data → readable proof",
  },
  {
    code: "CASE_02",
    title: "Smart Helmet Backend",
    role: "Telemetry / APIs / alert logic / AI support",
    note: "A safety backend that listens to real-world signals, stores events, and helps a mobile client react when risk appears.",
    stack: ["FastAPI", "WebSockets", "SQLAlchemy", "ONNX"],
    link: "https://github.com/admatieh/smart_helmet_backend",
    mood: "hardware noise → safety signal",
  },
  {
    code: "CASE_03",
    title: "FastAPI Authentication Project",
    role: "Auth architecture / protected routes / frontend integration",
    note: "A cleaner starting point for auth flows: JWT, user handling, protected APIs, and less fragile boilerplate.",
    stack: ["FastAPI", "React", "TypeScript", "JWT"],
    link: "https://github.com/admatieh/FastAPI-Authentication-Project",
    mood: "trust boundaries → working login",
  },
  {
    code: "CASE_04",
    title: "QueueBuddy",
    role: "Full-stack flow / queue logic / service UX",
    note: "A service-flow app for making waiting less chaotic and staff decisions easier to see.",
    stack: ["React", "Express", "MongoDB", "TypeScript"],
    link: "https://github.com/admatieh/Queue",
    mood: "crowded room → organized flow",
  },
];

const logs = [
  "[01] started with Python + backend logic",
  "[02] added frontend because users need to touch the system",
  "[03] learned security the hard way: validate, test, assume nothing",
  "[04] uses AI like a power tool, not a replacement brain",
  "[05] prefers weird interfaces when they still explain the work",
];

const capabilities = [
  { icon: Braces, label: "APIs", text: "FastAPI, Django, Express, auth flows, data modeling" },
  { icon: Radar, label: "Dashboards", text: "interfaces that turn messy signals into decisions" },
  { icon: Zap, label: "Automation", text: "bots, scripts, workflows, reports, repetitive-task killers" },
  { icon: ShieldCheck, label: "Security", text: "validation, JWT, XSS/injection basics, safer defaults" },
];

const ascii = String.raw`
      adam@portfolio-v2
   ┌──────────────────────┐
   │ backend  frontend    │
   │    \      /          │
   │   automation         │
   │      \  /            │
   │   useful systems     │
   └──────────────────────┘`;

const V2Portfolio = () => {
  const [noise, setNoise] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setNoise((n) => (n + 1) % 999), 1300);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="v2-shell">
      <div className="v2-noise" />
      <nav className="v2-nav" aria-label="Portfolio v2 navigation">
        <a href="#top" className="v2-brand">ADAM / V2</a>
        <div>
          <a href="#cases">cases</a>
          <a href="#stack">stack</a>
          <a href="#signal">signal</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <section id="top" className="v2-hero">
        <div className="v2-hero-copy">
          <p className="v2-kicker">portfolio experiment // not template-safe</p>
          <h1>
            I build useful systems from messy inputs.
            <span> backend, dashboards, automation, strange little machines.</span>
          </h1>
          <p className="v2-lede">
            My read on Adam: backend-first full-stack developer, practical builder, curious about AI and security, with a taste for interfaces that feel alive instead of corporate-clean.
          </p>
          <div className="v2-actions">
            <a href="#cases">open case files <ArrowUpRight size={16} /></a>
            <a href="mailto:admatieh@gmail.com">send signal <Mail size={16} /></a>
          </div>
        </div>

        <div className="v2-portrait-board" aria-label="Adam visual identity board">
          <div className="v2-coordinate">noise:{noise}</div>
          <div className="v2-photo-wrap">
            <img src={adamImage} alt="Adam Atieh" />
            <div className="v2-scanline" />
          </div>
          <pre>{ascii}</pre>
          <div className="v2-sticker v2-sticker-one">not generic</div>
          <div className="v2-sticker v2-sticker-two">ship it but understand it</div>
          <div className="v2-sticker v2-sticker-three">Lebanon / remote-ready</div>
        </div>
      </section>

      <section className="v2-strip" aria-label="identity fragments">
        {fragments.map((fragment) => (
          <span key={fragment}>{fragment}</span>
        ))}
      </section>

      <section id="signal" className="v2-signal-grid">
        <article className="v2-manifesto">
          <p className="v2-kicker">profile / decoded</p>
          <h2>Less “polished junior dev.” More: systems kid with fingerprints on the machine.</h2>
          <p>
            I would position you as someone who can connect code to real operations: Discord communities, safety hardware, queue systems, authentication, dashboards, and business workflows. Your edge is not pretending to be a senior architect — it is showing that you can learn fast, build practically, and keep your work explainable.
          </p>
        </article>

        <div className="v2-logbook">
          {logs.map((log) => (
            <div key={log}>{log}</div>
          ))}
        </div>
      </section>

      <section id="cases" className="v2-cases">
        <div className="v2-section-head">
          <p className="v2-kicker">case files</p>
          <h2>Projects should feel like evidence, not decoration.</h2>
        </div>
        <div className="v2-case-stack">
          {projects.map((project, index) => (
            <article className="v2-case-card" key={project.title} style={{ "--tilt": `${index % 2 ? -1.4 : 1.2}deg` }}>
              <div className="v2-case-meta">
                <span>{project.code}</span>
                <span>{project.mood}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="v2-role">{project.role}</p>
              <p>{project.note}</p>
              <div className="v2-tags">
                {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">view source <Github size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="v2-stack-room">
        <div className="v2-section-head">
          <p className="v2-kicker">stack room</p>
          <h2>Tools grouped by behavior, not by fake percentages.</h2>
        </div>
        <div className="v2-capabilities">
          {capabilities.map(({ icon, label, text }) => (
            <article key={label}>
              {React.createElement(icon, { size: 24 })}
              <h3>{label}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="v2-terminal-card">
          <div><TerminalSquare size={18} /> adam@machine:~/work</div>
          <code>
            npm run build-practical-system<br />
            python validate_inputs.py --paranoid<br />
            node automate_the_boring_part.js<br />
            git commit -m "make the mess understandable"
          </code>
        </div>
      </section>

      <section className="v2-chaos-map" aria-label="visual work map">
        <div className="v2-node node-a"><Cpu size={20} /> backend</div>
        <div className="v2-node node-b">UI that explains</div>
        <div className="v2-node node-c">security basics</div>
        <div className="v2-node node-d">AI reviewed by human</div>
        <div className="v2-node node-e">business workflow</div>
        <svg viewBox="0 0 900 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M80 220 C200 40 340 310 470 150 S710 80 830 260" />
          <path d="M120 90 C280 260 360 40 520 210 S740 320 810 80" />
          <path d="M180 300 L720 55" />
        </svg>
      </section>

      <section id="contact" className="v2-contact">
        <p className="v2-kicker">final signal</p>
        <h2>If this became the real V2, I’d keep it strange — then add real screenshots and demos.</h2>
        <div className="v2-contact-row">
          <a href="mailto:admatieh@gmail.com"><Mail size={18} /> admatieh@gmail.com</a>
          <a href="https://github.com/admatieh" target="_blank" rel="noreferrer"><Github size={18} /> github.com/admatieh</a>
          <span><MapPin size={18} /> Lebanon / Remote</span>
        </div>
      </section>
    </main>
  );
};

export default V2Portfolio;
