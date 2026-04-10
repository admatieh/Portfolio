import heroImg from "../assets/final.png";
import codingIcon from "../assets/coding-language.png";
import cyberIcon from "../assets/cyber-security.png";
import mysqlIcon from "../assets/mysql.png";
import pythonIcon from "../assets/python.png";
import passwordIcon from "../assets/password-cracking.png";
import structure from "../assets/structure.png";
import hacker from "../assets/hacker.png";
import deepLearning from "../assets/deep-learning.png";
import linux from "../assets/linux.png";


const stickers = [
  { src: codingIcon, alt: "Coding", x: "8%", y: "18%", r: -8 },
  { src: cyberIcon, alt: "Security", x: "72%", y: "16%", r: 10 },
  { src: mysqlIcon, alt: "MySQL", x: "10%", y: "72%", r: 6 },
  { src: pythonIcon, alt: "Python", x: "78%", y: "78%", r: -6 },
  { src: passwordIcon, alt: "Password", x: "92%", y: "58%", r: 14 },
  { src: structure, alt: "Structure", x: "32%", y: "80%", r: -10 },
  { src: hacker, alt: "Hacker", x: "80%", y: "40%", r: 0 },
  { src: deepLearning, alt: "Deep Learning", x: "25%", y: "20%", r: 12 },
  { src: linux, alt: "Linux", x: "20%", y: "50%", r: -14 },
];


const Hero = () => {
  return (
    <section id="top" className="bg-[#070707] text-[#E0E0E0]">
      <div className="mx-auto px-6 pt-5 pb-8">

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* HERO HEADER (reference-style) */}
            <div className="mx-auto w-full max-w-6xl space-y-8">
              <h1 className="uppercase font-black tracking-[0.01em] leading-[0.82] text-[clamp(3.5rem,9vw,7.5rem)]">
                FULL-STACK DEVELOPER
              </h1>

              <div className="grid gap-6 border-t border-white/15 pt-6 lg:grid-cols-[1fr_1fr_auto] lg:items-start">
                <p className="text-[13px] leading-relaxed text-white/70 max-w-[40ch]">
                  I build web apps with React + Python, focused on clean UI, solid architecture,
                  and maintainable code.
                </p>

                <p className="text-[13px] leading-relaxed text-white/70 max-w-[40ch]">
                  I like projects where performance, automation, and security basics matter — shipping
                  features without breaking fundamentals.
                </p>

                <div className="flex lg:justify-end">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[12px] font-semibold uppercase tracking-wide text-[#E0E0E0] hover:text-white hover:border-white transition"
                  >
                    GET IN TOUCH
                    <span className="translate-x-0 transition-transform group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            {/* LEFT: Image panel */}
            <div className="overflow-visible border border-white/10 bg-[#F3F1EC] text-black rounded-2xl lg:rounded-l-2xl lg:rounded-r-[999px]">
              <div
                className="
                  relative min-h-[340px] sm:min-h-[420px]
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                  bg-[size:48px_48px]
                "
              >
                {/* Image */}
                <img
                  src={heroImg}
                  alt="Adam"
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    h-[320px] sm:h-[380px] md:h-[420px]
                    object-contain
                    drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]
                  "
                />

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

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>

            {/* RIGHT: Proof  */}
            <aside className="border border-white/10 bg-[#070707] text-[#E0E0E0] rounded-md p-6">
              <h3 className="text-sm font-semibold tracking-wide text-[#E0E0E0]">
                THE PROOF WALL
              </h3>

              <div className="mt-6 border-l border-white/20 pl-4">
                <ul className="space-y-6 text-sm text-white/90">
                  <li>
                    <span className="font-semibold text-[#E0E0E0]">XRWorkout</span>
                    <span className="text-white/70">: Multiple AI integrations and vibe-coded websites with dynamic aesthetics</span>
                  </li>
                  <li>
                    <span className="font-semibold text-[#E0E0E0]">Network Admininstration</span>
                    <span className="text-white/70">: Active Directory, DNS/DHCP configuration and management + security</span>
                  </li>
                  <li>
                    <span className="font-semibold text-[#E0E0E0]">The Digital Hub</span>
                    <span className="text-white/70">: MERN full-stack (React/Node), PR workflow + code reviews</span>
                  </li>

                  <li>
                    <span className="font-semibold text-[#E0E0E0]">Semicolon Security</span>
                    <span className="text-white/70">: Bug bounty training — PortSwigger labs, XSS/injection practice</span>
                  </li>

                  <li>
                    <span className="font-semibold text-[#E0E0E0]">Freelance</span>
                    <span className="text-white/70">: Built POS/pharmacy systems, Java/MySQL/Node, workflow automation</span>
                  </li>

                  <li>
                    <span className="font-semibold text-[#E0E0E0]">Sibline</span>
                    <span className="text-white/70">: IT Trainee — networking & security basics (DNS/DHCP, firewalls)</span>
                  </li>

                </ul>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
