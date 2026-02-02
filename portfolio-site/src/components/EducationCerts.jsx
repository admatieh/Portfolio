
import cicsoIcon from "../assets/cisco.png";
import semicolonIcon from "../assets/Semicolon.png";
import udemyIcon from "../assets/udemy.webp";

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Lebanese International University",
  location: "Lebanon",
  year: "2024",
  // icon: capIcon, // optional later
};

const certs = [
  { title: "Introduction to CyberSecurity", issuer: "Cisco", icon: cicsoIcon },
  { title: "CCNA Routing & Switching (CCNA)", issuer: "Cisco", icon: cicsoIcon },
  { title: "CCNA Security", issuer: "Cisco", icon: cicsoIcon },
  { title: "Junior Cybersecurity Analyst Path", issuer: "Cisco", icon: cicsoIcon },
  { title: "Scientific Computing with Python", issuer: "Semicolon", icon: udemyIcon },
  { title: "Scientific Computing with Python", issuer: "Semicolon", icon: semicolonIcon },
  { title: "Scientific Computing with Python", issuer: "Semicolon", icon: semicolonIcon },
  { title: "Scientific Computing with Python", issuer: "Semicolon", icon: semicolonIcon },
];

const EducationCerts = () => {
  return (
    <section id="education" className="bg-[#070707] text-white">
      <div className="mx-auto w-full px-6 py-20">
        {/* Title */}
                                 <div className="overflow-visible border border-white/10 bg-[#F3F1EC] text-black py-8 px-2 rounded-r-[999px] w-[600px] items-start">
              <div
                className="
                  relative min-h-[340px] sm:min-h-[210px]
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                  bg-[size:48px_48px]
                "
              >

            <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-black/60">
                EDUCATION & CERTIFICATIONS
            </p>
            <div className="mt-4 flex items-end gap-6">
            <div className="h-14 w-2 bg-black" />
            <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-black">
                MY STUDIES
            </h2>
            </div>
          </div>
                  {/* Education row */}
        <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          {/* Icon slot */}
          <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#4C8DFF]/15 ring-1 ring-[#4C8DFF]/25">
            {/* Replace later with <img src={...} /> */}
            <span className="text-black text-3xl" aria-hidden>🎓</span>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">{education.degree}</h3>
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
