
import cicsoIcon from "../assets/cisco.png";
import semicolonIcon from "../assets/Semicolon.png";
import udemyIcon from "../assets/udemy.webp";

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Lebanese International University",
  location: "Saida, Lebanon",
  year: "Sept 2022 — Jan 2026",
};

const certs = [
  { title: "CCNA 1 & 2 / Net Security", issuer: "Cisco Networking Academy", icon: cicsoIcon },
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", icon: cicsoIcon },
  { title: "Python Scripting", issuer: "Udemy", icon: udemyIcon },
  { title: "Ethical Hacking 101", issuer: "Semicolon Academy", icon: semicolonIcon },
  { title: "Web Professional", issuer: "Semicolon Academy", icon: semicolonIcon },
  { title: "Cisco Networking / Firewalls", issuer: "Sibline IT Training", icon: null },
  { title: "Linux Administration", issuer: "Sibline IT Training", icon: null },
  { title: "MERN Full-Stack", issuer: "Udemy", icon: udemyIcon },
  { title: "Bug Bounty", issuer: "Semicolon Academy", icon: semicolonIcon }
];

const EducationCerts = () => {
  return (
    <section id="education" className="bg-[#070707] text-white">
      <div className="mx-auto w-full px-4 sm:px-6 py-12 sm:py-20">
        {/* Title */}
        <div
          className="
    overflow-visible border border-white/10 bg-[#F3F1EC] text-black
    py-6 sm:py-8 px-4 sm:px-6
    w-full sm:max-w-[600px]
    rounded-l-2xl rounded-r-[999px]
  "
        >
          <div
            className="
      relative min-h-[240px] sm:min-h-[210px]
      bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
      bg-[size:32px_32px] sm:bg-[size:48px_48px] 
    "
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-black/60">
              EDUCATION & CERTIFICATIONS
            </p>

            <div className="mt-4 flex items-end gap-4 sm:gap-6">
              <div className="h-10 sm:h-14 w-2 bg-black" />
              <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.0rem,7vw,4.8rem)] text-black">
                MY STUDIES
              </h2>
            </div>

            {/* Education row */}
            <div className="mt-8 sm:mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-black">{education.degree}</h3>
                <p className="mt-1 text-sm text-black/65">
                  {education.school} | {education.location} | {education.year}
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Certifications */}
        <h3 className="mt-14 text-2xl font-semibold tracking-tight">Certifications</h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((c) => (
            <article
              key={c.title}
              className="rounded-sm border border-white/10 bg-white/5 p-6 hover:border-white/20 transition"
            >
              <div className="flex items-start gap-4">
                {/* Icon slot (left) */}
                <div className="flex h-12 w-12 items-center justify-center bg-[#4C8DFF]/15 ring-1 ring-[#4C8DFF]/25 shrink-0">
                  {c.icon ? (
                    <img
                      src={c.icon}
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <span className="text-[#4C8DFF]" aria-hidden>✦</span>
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold leading-snug text-[#E0E0E0]">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-xs text-white/60">{c.issuer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCerts;
