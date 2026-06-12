import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "SMART HELMET BACKEND",
        type: "Final-Year / Backend + AI",
        problem: "A safety-focused helmet needed a backend layer to receive telemetry, store important events, and communicate with mobile clients.",
        solution: "Built backend APIs and real-time flows for telemetry, alerts, event storage, and AI-assisted safety detection support.",
        role: "Backend APIs, data flow, alert logic, AI/ML support",
        tech: ["FastAPI", "WebSockets", "SQLAlchemy", "ONNX"],
        link: "https://github.com/admatieh/smart_helmet_backend",
        accent: "Safety System"
    },
    {
        title: "DISCORD ACTIVITY INTELLIGENCE BOT",
        type: "Automation / Dashboard",
        problem: "Online communities needed a clearer way to track voice sessions, attendance, and participation without manual work.",
        solution: "Created a Discord bot and dashboard flow for scheduling sessions, tracking attendance, generating reports, and monitoring activity.",
        role: "Bot workflows, database logic, reporting, dashboard UX",
        tech: ["Node.js", "Discord.js", "Next.js", "SQLite"],
        link: "https://github.com/admatieh/Discord-Activity-Intelligence-Bot",
        accent: "Automation"
    },
    {
        title: "QUEUEBUDDY",
        type: "Full-Stack System",
        problem: "Service environments need better visibility into waiting states, flow, and customer handling.",
        solution: "Built a queue-management application for organizing service flow and improving the staff/customer experience.",
        role: "Full-stack structure, frontend flows, API/database planning",
        tech: ["React", "Express", "MongoDB", "TypeScript"],
        link: "https://github.com/admatieh/Queue",
        accent: "Operations"
    },
    {
        title: "FASTAPI AUTHENTICATION",
        type: "Security-Aware Template",
        problem: "Many apps need a clean starting point for authentication instead of rebuilding fragile auth flows each time.",
        solution: "Created a structured authentication template with JWT flows, user management, protected routes, and frontend/backend separation.",
        role: "Auth architecture, protected routes, API integration",
        tech: ["FastAPI", "React", "TypeScript", "JWT"],
        link: "https://github.com/admatieh/FastAPI-Authentication-Project",
        accent: "Auth"
    },
    {
        title: "AXIOM BUILDERS",
        type: "Frontend / Brand Site",
        problem: "Architecture and contracting businesses need a polished digital presence that communicates quality quickly.",
        solution: "Designed a premium website concept with smooth sections, responsive layout, and client-facing visual storytelling.",
        role: "UI direction, responsive sections, presentation polish",
        tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
        link: "https://github.com/admatieh/axiom-builders-site",
        accent: "UI"
    },
    {
        title: "MACHINE LEARNING HUB",
        type: "Data / ML Practice",
        problem: "ML practice needs structured experiments, data prep, training, and evaluation instead of scattered notebooks.",
        solution: "Built a practice hub covering data preparation, model training, evaluation, and analysis workflows with Python's data stack.",
        role: "Data preparation, model experimentation, evaluation",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        link: "https://github.com/admatieh/Machine-Learning-Project",
        accent: "ML"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="bg-[#070707] text-white overflow-hidden grid-paper-dark">
            <div className="mx-auto w-full max-w-7xl px-6 py-20">
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                            WORKS
                        </p>
                        <div className="mt-4 flex items-end gap-6">
                            <div className="h-14 w-[3px] rounded-full bg-[#4C8DFF]" />
                            <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
                                PROJECT CASES
                            </h2>
                        </div>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-white/70">
                        Each project is presented as a small case study: problem, solution, role, and stack — so the value is clear before opening the code.
                    </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    {projects.map((project, index) => {
                        const light = index === 1 || index === 4;
                        return (
                            <article
                                key={project.title}
                                className={`group relative overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 ${light
                                    ? 'border-black/5 bg-[#F3F1EC] text-black grid-paper-light'
                                    : 'border-white/10 bg-white/[0.04] text-white'
                                    }`}
                            >
                                <div className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl ${light ? 'bg-[#4C8DFF]/20' : 'bg-[#4C8DFF]/15'}`} />
                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <span className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest ${light ? 'bg-black text-white' : 'bg-[#4C8DFF]/15 text-[#8EB7FF] ring-1 ring-[#4C8DFF]/25'}`}>
                                            {project.type}
                                        </span>
                                        <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${light ? 'text-black/45' : 'text-white/40'}`}>
                                            0{index + 1} / {project.accent}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-3xl font-black uppercase leading-none tracking-tighter lg:text-5xl">
                                        {project.title}
                                    </h3>

                                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                                        <div>
                                            <p className={`text-[10px] font-black uppercase tracking-[0.25em] ${light ? 'text-black/45' : 'text-white/40'}`}>Problem</p>
                                            <p className={`mt-2 text-sm leading-relaxed ${light ? 'text-black/70' : 'text-white/70'}`}>{project.problem}</p>
                                        </div>
                                        <div>
                                            <p className={`text-[10px] font-black uppercase tracking-[0.25em] ${light ? 'text-black/45' : 'text-white/40'}`}>Solution</p>
                                            <p className={`mt-2 text-sm leading-relaxed ${light ? 'text-black/70' : 'text-white/70'}`}>{project.solution}</p>
                                        </div>
                                    </div>

                                    <div className={`mt-6 rounded-2xl border p-4 ${light ? 'border-black/10 bg-white/45' : 'border-white/10 bg-black/20'}`}>
                                        <p className={`text-[10px] font-black uppercase tracking-[0.25em] ${light ? 'text-black/45' : 'text-white/40'}`}>My Role</p>
                                        <p className={`mt-2 text-sm leading-relaxed ${light ? 'text-black/75' : 'text-white/75'}`}>{project.role}</p>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tech.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${light ? 'border-black/10 bg-black/5 text-black/75' : 'border-white/10 bg-white/5 text-white/75'}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all ${light ? 'bg-black text-white hover:bg-black/80' : 'bg-white text-black hover:bg-[#F3F1EC]'}`}
                                        >
                                            <Github className="h-4 w-4" /> View Source
                                        </a>
                                        <a
                                            href="#contact"
                                            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-all ${light ? 'border-black/15 text-black hover:bg-black/5' : 'border-white/15 text-white hover:bg-white/10'}`}
                                        >
                                            <ExternalLink className="h-4 w-4" /> Discuss Project
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
