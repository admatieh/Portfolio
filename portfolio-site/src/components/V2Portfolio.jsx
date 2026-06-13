import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Braces,
  Cpu,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Radar,
  ShieldCheck,
  TerminalSquare,
  Zap,
} from "lucide-react";
import adamImage from "../assets/final.png";
import resumePdf from "../assets/Adam-Atieh-CV.pdf";

const fragments = [
  "Lebanon / remote-ready",
  "FastAPI + Django + Express",
  "React / TypeScript / Next.js",
  "automation over repetition",
  "security-aware defaults",
  "dashboards that explain",
  "AI tools with human review",
  "28 public repos",
  "MERN + Python systems",
  "ship practical systems",
];

const stats = [
  ["28", "public GitHub repositories"],
  ["6", "featured proof projects"],
  ["4", "target lanes: backend, full-stack, automation, QA/security"],
  ["Remote", "Lebanon-based and available"],
];

const quickRead = [
  ["Target roles", "Full-stack, backend, automation, QA/security testing"],
  ["Core stack", "React, TypeScript, Node/Express, Python, FastAPI, Django, MongoDB, SQLite"],
  ["Best proof", "Discord instructor workspace, Smart Helmet telemetry backend, QueueBuddy, auth systems"],
  ["Work style", "Practical shipping, clear communication, AI-assisted research with human review"],
];

const projects = [
  {
    code: "CASE_01",
    category: "Featured / full-stack automation",
    featured: "Best product-system proof",
    title: "Discord Activity Intelligence Bot",
    role: "Full-stack bot system / instructor workspace / analytics",
    note: "Turns live Discord voice sessions into attendance records, reports, scheduled announcements, participant reviews, and a Next.js dashboard instead of raw command chaos.",
    proof: ["Discord.js runtime", "Express bot API", "SQLite persistence", "Next.js dashboard", "scheduler + reports"],
    stack: ["Node.js", "Discord.js", "Next.js", "SQLite", "Express"],
    link: "https://github.com/admatieh/Discord-Activity-Intelligence-Bot",
    mood: "voice chaos → instructor control room",
  },
  {
    code: "CASE_02",
    category: "Featured / backend + real-time",
    featured: "Best backend proof",
    title: "Smart Helmet Backend",
    role: "Real-time telemetry / risk pipeline / safety backend",
    note: "A FastAPI service that ingests GPS, IMU, heart-rate, and speed streams, writes them through a background queue worker, and broadcasts computed risk status to dashboards in real time.",
    proof: ["WebSocket ingestion", "Pydantic validation", "async SQLAlchemy", "risk state pipeline", "ONNX-ready inference flow"],
    stack: ["Python", "FastAPI", "WebSockets", "SQLAlchemy", "ONNX"],
    link: "https://github.com/admatieh/smart_helmet_backend",
    mood: "sensor noise → safety signal",
  },
  {
    code: "CASE_03",
    category: "Auth / admin workflow",
    featured: "Best security-aware flow",
    title: "FastAPI Authentication System",
    role: "Auth architecture / protected routes / admin workflow",
    note: "A full-stack authentication project with JWT login, role-based access, admin approval flows, user management, password changes, and a responsive React dashboard.",
    proof: ["JWT bearer auth", "admin/client roles", "approval workflow", "public stats dashboard", "mobile nav"],
    stack: ["FastAPI", "React", "TypeScript", "SQLite", "PyJWT"],
    link: "https://github.com/admatieh/FastAPI-Authentication-Project",
    mood: "trust boundaries → working product flow",
  },
  {
    code: "CASE_04",
    category: "Product UX / MERN",
    featured: "Best operations app",
    title: "QueueBuddy",
    role: "Full-stack venue flow / queue logic / service UX",
    note: "A real-time queue and seat-management platform for making waiting less chaotic, giving staff clearer decisions, and turning venue flow into a visible system.",
    proof: ["React interface", "Express backend", "MongoDB data model", "seat/queue logic", "cross-platform setup"],
    stack: ["React", "Express", "MongoDB", "TypeScript", "Node.js"],
    link: "https://github.com/admatieh/Queue",
    mood: "crowded room → organized flow",
  },
  {
    code: "CASE_05",
    category: "Commerce / Django REST",
    featured: "Best traditional full-stack",
    title: "Velora E-Commerce Platform",
    role: "Django REST / storefront / admin operations",
    note: "A production-style e-commerce build with product variants, persistent cart, JWT authentication, email verification, checkout logic, and an admin dashboard for store operations.",
    proof: ["Django REST Framework", "React storefront", "product variants", "cart + orders", "admin dashboard"],
    stack: ["Django", "DRF", "React", "TypeScript", "Tailwind"],
    link: "https://github.com/admatieh/Ecommerce-Django-Website",
    mood: "catalogue data → working commerce system",
  },
  {
    code: "CASE_06",
    category: "QA / security / scripts",
    featured: "Best automation habits",
    title: "Security + Automation Lab",
    role: "Python scripts / QA practice / security habits",
    note: "A collection of small practical tools: Selenium playground examples, password leak checking, password validation, scraping, image conversion, and experiments that show repetition becoming scripts.",
    proof: ["Selenium examples", "HIBP leak check", "BeautifulSoup scraping", "bulk conversion", "security validation"],
    stack: ["Python", "Selenium", "BeautifulSoup", "APIs", "QA"],
    link: "https://github.com/admatieh?tab=repositories",
    mood: "manual checks → repeatable tools",
  },
];

const logs = [
  "[profile] adam abo atieh — full-stack developer in Lebanon",
  "[signal] software engineer // automation & security testing // MERN + Python",
  "[pattern] builds when the workflow is messy: queues, telemetry, auth, dashboards, bots",
  "[taste] keeps interfaces alive, dark, strange, and practical — not corporate-clean",
  "[rule] AI can assist the workflow; humans still own judgment, privacy, and launch decisions",
];

const capabilities = [
  { icon: Braces, label: "Backend APIs", text: "FastAPI, Django REST, Express, auth flows, validation, data modeling, WebSockets, and service boundaries." },
  { icon: Radar, label: "Dashboards", text: "Interfaces that turn messy operational signals into filters, reports, status views, and decisions." },
  { icon: Zap, label: "Automation", text: "Bots, scheduled tasks, Python scripts, scrapers, reporting flows, and tools that reduce repeated manual work." },
  { icon: ShieldCheck, label: "Security & QA", text: "JWT, role-based access, validation, password safety tools, Selenium practice, and security-aware defaults." },
  { icon: Bot, label: "AI Workflow", text: "Agent-assisted research, internal knowledge, structured prompts, review loops, and practical AI tooling." },
  { icon: Database, label: "Data Layer", text: "SQLite, MongoDB, MySQL-ready services, SQLAlchemy, queue workers, telemetry records, and chartable data." },
];

const timeline = [
  ["01", "Python scripts", "Small automations, validators, scrapers, converters, and security checks."],
  ["02", "Full-stack products", "React, TypeScript, MERN, Django, FastAPI, and dashboards that users can actually touch."],
  ["03", "Real systems", "Discord instructor workspace, smart helmet telemetry, queue management, authentication, e-commerce."],
  ["04", "Current edge", "AI-assisted workflows, Arzware-style digital systems, and stronger proof-driven portfolio storytelling."],
];

const ascii = String.raw`
      adam@portfolio-v2
   ┌────────────────────────────┐
   │  backend  →  dashboard     │
   │     ↓          ↑           │
   │ automation → security      │
   │     ↓          ↑           │
   │   useful human systems     │
   └────────────────────────────┘`;

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
          <a href="#signal">signal</a>
          <a href="#cases">case files</a>
          <a href="#stack">stack</a>
          <a href="#timeline">timeline</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <section id="top" className="v2-hero">
        <div className="v2-hero-copy">
          <p className="v2-kicker">real portfolio // weird system edition</p>
          <h1>
            I turn messy workflows into software that behaves.
            <span> backend APIs, dashboards, automation, security-aware full-stack systems.</span>
          </h1>
          <p className="v2-lede">
            I’m Adam Abo Atieh, a Lebanon-based full-stack developer focused on MERN, Python, FastAPI, Django, automation, QA/security testing, and AI-assisted workflows. My best projects are not decoration — they are systems that listen, store, report, alert, and make work easier to understand.
          </p>
          <div className="v2-actions">
            <a href="#cases">view real case files <ArrowUpRight size={16} /></a>
            <a href="mailto:admatieh@gmail.com">contact me <Mail size={16} /></a>
            <a href="https://www.linkedin.com/in/adam-abo-atyeh/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16} /></a>
            <a href={resumePdf} target="_blank" rel="noreferrer">CV / resume <FileText size={16} /></a>
          </div>
          <div className="v2-hero-proof" aria-label="quick facts">
            {stats.map(([number, label]) => (
              <div key={label}><strong>{number}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>

        <div className="v2-portrait-board" aria-label="Adam visual identity board">
          <div className="v2-coordinate">build-noise:{String(noise).padStart(3, "0")}</div>
          <div className="v2-photo-wrap">
            <img src={adamImage} alt="Adam Abo Atieh" />
            <div className="v2-scanline" />
          </div>
          <pre>{ascii}</pre>
          <div className="v2-sticker v2-sticker-one">hireable / remote</div>
          <div className="v2-sticker v2-sticker-two">security-aware builder</div>
          <div className="v2-sticker v2-sticker-three">systems & automation</div>
        </div>
      </section>

      <section className="v2-strip" aria-label="identity fragments">
        <div className="v2-strip-track">
          {[...fragments, ...fragments].map((fragment, index) => (
            <span key={`${fragment}-${index}`}>{fragment}</span>
          ))}
        </div>
      </section>

      <section className="v2-recruiter-read" aria-label="Recruiter quick read">
        <div>
          <p className="v2-kicker">recruiter quick read</p>
          <h2>Open the page, understand the fit in ten seconds.</h2>
        </div>
        <div className="v2-read-grid">
          {quickRead.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="signal" className="v2-signal-grid">
        <article className="v2-manifesto">
          <p className="v2-kicker">profile / decoded</p>
          <h2>Not just “junior dev.” A builder who keeps finding the system under the mess.</h2>
          <p>
            The through-line is clear: Discord activity becomes an instructor workspace; helmet telemetry becomes a safety backend; venue waiting becomes QueueBuddy; auth becomes a full admin/client workflow; e-commerce becomes catalogue, cart, checkout, and admin operations. I like code that proves it can survive real workflows.
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
          <p className="v2-kicker">case files / real repositories</p>
          <h2>Projects with a problem, a system, and proof.</h2>
        </div>
        <div className="v2-case-stack">
          {projects.map((project, index) => (
            <article className="v2-case-card" key={project.title} style={{ "--tilt": `${index % 2 ? -1.1 : 1.05}deg` }}>
              <div className="v2-case-meta">
                <span>{project.code}</span>
                <span>{project.category}</span>
              </div>
              <div className="v2-mini-preview" aria-hidden="true">
                <span>{project.featured}</span>
                <i />
                <i />
                <i />
              </div>
              <span className="v2-featured-pill">{project.featured}</span>
              <h3>{project.title}</h3>
              <p className="v2-role">{project.role}</p>
              <p>{project.note}</p>
              <p className="v2-impact-line">Impact: {project.mood}; replaces a loose/manual workflow with a clearer working system.</p>
              <ul className="v2-proof-list">
                {project.proof.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="v2-tags">
                {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="v2-card-actions">
                <a href={project.link} target="_blank" rel="noreferrer">source <Github size={15} /></a>
                <a href={`mailto:admatieh@gmail.com?subject=Project walkthrough: ${project.title}`}>walkthrough <Mail size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="v2-stack-room">
        <div className="v2-section-head">
          <p className="v2-kicker">stack room / capability map</p>
          <h2>Tools grouped by behavior, not fake percentages.</h2>
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
            git clone messy-reality<br />
            python validate_inputs.py --paranoid<br />
            npm run build-dashboard-that-explains<br />
            uvicorn app.main:app --reload --trust-but-verify<br />
            git commit -m "make the system understandable"
          </code>
        </div>
      </section>

      <section id="timeline" className="v2-timeline">
        <div className="v2-section-head">
          <p className="v2-kicker">timeline / build trail</p>
          <h2>The portfolio is now a map of how I build.</h2>
        </div>
        <div className="v2-timeline-grid">
          {timeline.map(([num, title, text]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-chaos-map" aria-label="visual work map">
        <div className="v2-node node-a"><Cpu size={20} /> backend</div>
        <div className="v2-node node-b">dashboard</div>
        <div className="v2-node node-c">security testing</div>
        <div className="v2-node node-d">AI-assisted workflow</div>
        <div className="v2-node node-e">business system</div>
        <div className="v2-node node-f">real users</div>
        <svg viewBox="0 0 900 360" preserveAspectRatio="none" aria-hidden="true">
          <path d="M80 220 C200 40 340 310 470 150 S710 80 830 260" />
          <path d="M120 90 C280 260 360 40 520 210 S740 320 810 80" />
          <path d="M180 300 L720 55" />
          <path d="M70 40 C250 130 610 120 850 50" />
        </svg>
      </section>

      <section id="contact" className="v2-contact">
        <p className="v2-kicker">final signal</p>
        <h2>If you need someone who can build the API, the UI, the workflow, and the weird glue between them — send the signal.</h2>
        <p>
          I’m open to full-stack, backend, automation, QA/security testing, and AI-assisted workflow roles. Best fit: teams that care about practical shipping, clean communication, and systems that make messy work easier to run.
        </p>
        <div className="v2-contact-row">
          <a href="mailto:admatieh@gmail.com"><Mail size={18} /> admatieh@gmail.com</a>
          <a href="https://github.com/admatieh" target="_blank" rel="noreferrer"><Github size={18} /> github.com/admatieh</a>
          <a href="https://www.linkedin.com/in/adam-abo-atyeh/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={resumePdf} target="_blank" rel="noreferrer"><FileText size={18} /> CV / Resume</a>
          <span><MapPin size={18} /> Lebanon / Remote</span>
        </div>
      </section>
    </main>
  );
};

export default V2Portfolio;
