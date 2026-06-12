import React, { useState } from 'react';

const projects = [
    {
        title: "SMART HELMET BACKEND",
        description: "Backend system for a safety-focused helmet project: telemetry ingestion, real-time event handling, alerts, mobile-client communication, and AI-assisted risk detection support.",
        tech: ["FastAPI", "WebSockets", "SQLAlchemy", "ONNX"],
        stats: { label: "Role", value: "Backend" },
        link: "https://github.com/admatieh/smart_helmet_backend"
    },
    {
        title: "AXIOM BUILDERS",
        description: "Premium architecture website concept focused on visual storytelling, smooth page sections, responsive layout, and a polished client-facing presentation.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
        stats: { label: "Focus", value: "UI" },
        link: "https://github.com/admatieh/axiom-builders-site"
    },
    {
        title: "QUEUEBUDDY",
        description: "Queue management application designed to organize service flow, track waiting states, and improve the experience for staff and customers.",
        tech: ["React", "Express", "MongoDB", "TypeScript"],
        stats: { label: "Type", value: "System" },
        link: "https://github.com/admatieh/Queue"
    },
    {
        title: "FASTAPI AUTHENTICATION",
        description: "Authentication template with JWT flows, user management, protected routes, and a clean full-stack structure for secure application foundations.",
        tech: ["FastAPI", "React", "TypeScript", "JWT"],
        stats: { label: "Focus", value: "Auth" },
        link: "https://github.com/admatieh/FastAPI-Authentication-Project"
    },
    {
        title: "MACHINE LEARNING HUB",
        description: "Machine-learning practice hub covering data preparation, model training, evaluation, and analysis workflows using Python's core data stack.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        stats: { label: "Focus", value: "ML" },
        link: "https://github.com/admatieh/Machine-Learning-Project"
    }
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="projects" className="bg-[#070707] text-white overflow-hidden grid-paper-dark">
            <div className="mx-auto w-full px-6 py-20">
                {/* Header Section */}
                <div className="mb-16">
                    <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
                        WORKS
                    </p>
                    <div className="mt-4 flex items-end gap-6">
                        <div className="h-14 w-[3px] rounded-full bg-[#4C8DFF]" />
                        <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
                            SELECTED PROJECTS
                        </h2>
                    </div>
                </div>

                {/* Container with extra right padding on desktop */}
                <div className="flex gap-0">
                    <div className="flex-1 pr-0 lg:pr-40">
                        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/70">
                            Click a project to expand it, then open the source. Each card highlights the problem, role, and stack behind the work.
                        </p>
                        {/* Stacked Panels Container */}
                        <div className="relative mt-12 min-h-[600px] lg:min-h-[750px]">
                            {projects.map((project, index) => {
                                const isBlack = index % 2 === 0;
                                const isActive = activeIndex === index;

                                // Vertical stacking offset
                                const offset = 75; // Peak amount
                                const basePos = index * offset;

                                // Interaction logic: Click to expand
                                let translateY = 0;
                                if (activeIndex !== null) {
                                    if (index > activeIndex) {
                                        translateY = 400; // Push down
                                    } else if (index === activeIndex) {
                                        translateY = -10; // Subtle lift
                                    }
                                }

                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                        className={`
                                            absolute left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                                            cursor-pointer border border-black/5
                                            rounded-r-full p-8 sm:p-12 lg:p-16
                                            ${isBlack ? 'bg-[#070707] text-white grid-paper-dark' : 'bg-[#F3F1EC] text-black grid-paper-light'}
                                        `}
                                        style={{
                                            top: `${basePos}px`,
                                            zIndex: index,
                                            transform: `translateY(${translateY}px)`,
                                            height: '550px',
                                            boxShadow: isActive
                                                ? '0 -20px 50px -10px rgba(0,0,0,0.6)'
                                                : '0 -10px 40px -10px rgba(0,0,0,0.4)',
                                        }}
                                    >
                                        <div className={`
                                            max-w-5xl transition-all duration-500
                                            ${activeIndex !== null && activeIndex !== index ? 'opacity-30' : 'opacity-100'}
                                            ${isActive ? 'scale-[1.01]' : 'scale-100'}
                                        `}>
                                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isBlack ? 'text-white/40' : 'text-black/40'}`}>
                                                            PROJECT 0{index + 1}
                                                        </span>
                                                        <div className={`h-[1px] w-12 ${isBlack ? 'bg-white/20' : 'bg-black/20'}`} />
                                                    </div>

                                                    <h3 className="text-3xl lg:text-6xl font-black tracking-tighter mb-6 leading-none">
                                                        {project.title}
                                                    </h3>

                                                    <p className={`text-sm lg:text-lg leading-relaxed mb-8 max-w-2xl ${isBlack ? 'text-white/70' : 'text-black/70'}`}>
                                                        {project.description}
                                                    </p>

                                                    <div className="flex flex-wrap items-center gap-4">
                                                        <div className="flex flex-wrap gap-2 lg:gap-3">
                                                            {project.tech.map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className={`px-3 py-1 lg:px-4 lg:py-1.5 text-[10px] lg:text-xs font-bold rounded-full border tracking-wide ${isBlack ? 'border-white/20 bg-white/5 text-white/80' : 'border-black/10 bg-black/5 text-black/80'
                                                                        }`}
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {isActive && (
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={`
                                                                    flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-all
                                                                    ${isBlack ? 'bg-white text-black hover:bg-[#F3F1EC]' : 'bg-black text-white hover:bg-black/80'}
                                                                `}
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                View Source
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className={`
                                                    hidden lg:flex flex-col items-center justify-center p-8 rounded-full border-2 w-40 h-40 shrink-0
                                                    ${isBlack ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}
                                                    ${isActive ? 'rotate-12 transition-transform duration-700 shadow-2xl' : ''}
                                                `}>
                                                    <div className="text-3xl font-black mb-1 italic">{project.stats.value}</div>
                                                    <div className={`text-[9px] uppercase font-bold tracking-widest ${isBlack ? 'text-white/40' : 'text-black/40'}`}>
                                                        {project.stats.label}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop-only right sidebar with text field */}
                    <div className="hidden lg:flex w-24 flex-col justify-center items-center border-l border-white/10 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] text-center">
                            <p className="rotate-90 text-[10px] font-black tracking-[0.6em] text-white/30 uppercase whitespace-nowrap">
                                ARCHIVED REPOSITORIES • 04 / 2026 • ADAM ATIEH PORTFOLIO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
