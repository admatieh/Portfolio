import React from "react";
import { Code2, MessagesSquare, SearchCheck, Sparkles } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Full-stack implementation",
    text: "I can move from UI to API to database and keep the system understandable as features grow.",
  },
  {
    icon: SearchCheck,
    title: "Debugging mindset",
    text: "I break problems down, check assumptions, read errors carefully, and learn the missing pieces quickly.",
  },
  {
    icon: Sparkles,
    title: "Responsible AI workflow",
    text: "I use AI to speed up research, planning, and debugging — but I still review, understand, and own the code.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    text: "I explain what I built, why it matters, and what tradeoffs were made in a way teams and users can follow.",
  },
];

const WhatIBring = () => {
  return (
    <section className="bg-[#070707] text-white grid-paper-dark">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[#F3F1EC] p-8 text-black sm:p-10 lg:p-12 grid-paper-light">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/55">WHAT I BRING TO A TEAM</p>
              <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-black">
                Practical systems, clear thinking, fast learning.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-black/65">
                My strongest value is connecting pieces: frontend, backend, APIs, automation, databases, and user needs — then explaining the result clearly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map(({ icon, title, text }) => (
                <article key={title} className="rounded-3xl border border-black/10 bg-white/45 p-6 shadow-sm backdrop-blur">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    {React.createElement(icon, { className: "h-5 w-5" })}
                  </div>
                  <h3 className="mt-5 text-lg font-black tracking-tight text-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBring;
