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


const About = () => {
  return (
    <section id="about" className="bg-[#070707] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        {/* Small label */}
        <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
          ABOUT
        </p>

        {/* Big title */}
        <div className="mt-4 flex items-end gap-6">
          <div className="h-14 w-2 bg-[#E0E0E0]" />
          <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
            WHO AM I
          </h2>
        </div>

        {/* Two panels */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Left panel */}
          <div className="border border-white/12 p-10 sm:p-12">
            <h3 className="text-lg font-semibold tracking-tight text-[#E0E0E0]">SHORT BIO</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              I’m Adam — a Computer Science student focused on building clean, practical
              web applications. I work mainly with React and Node.js, and I care about
              structure, maintainability, and shipping things that work.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Recently, I’ve been combining full-stack development with automation and basic
              security testing through projects and internships.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl font-black tracking-tight text-[#E0E0E0]">2+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Years Learning
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl font-black tracking-tight text-[#E0E0E0]">10+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Projects
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl font-black tracking-tight text-[#E0E0E0]">3</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Internships / Training
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl font-black tracking-tight text-[#E0E0E0]">5+</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Tech Areas
                </div>
            </div>
            </div>

            
          </div>
          

          {/* Right panel */}
          <div className="border border-white p-10 sm:p-12">
            <h3 className="text-lg font-semibold tracking-tight text-[#E0E0E0]">WHAT I CARE ABOUT</h3>
            <p className="mt-6 text-sm leading-relaxed text-white/75">
              I like building systems that are easy to reason about: clear components,
              predictable data flow, and good defaults. I prefer solutions that stay stable
              as the project grows.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/75">
              <li>
                <span className="text-[#E0E0E0] font-semibold">Engineering:</span>{" "}
                clean architecture, maintainable code
              </li>
              <li>
                <span className="text-[#E0E0E0] font-semibold">Automation:</span>{" "}
                workflows that remove manual work
              </li>
              <li>
                <span className="text-[#E0E0E0] font-semibold">Security basics:</span>{" "}
                safer defaults, input validation, testing mindset
              </li>
            </ul>
            <br />
             <div className="overflow-visible border border-white/10 bg-[#F3F1EC] text-black ">
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
    </section>
  );
};

export default About;
