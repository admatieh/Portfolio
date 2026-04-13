import { useState } from "react";
import { Mail, MapPin, Phone, Download, Linkedin, Github, Instagram } from "lucide-react";
import cvPdf from "../assets/Adam-Atieh-CV.pdf";

import muscle from "../assets/map.png";
import automation from "../assets/gmail.png";
import engineering from "../assets/phone.png";
import call from "../assets/removed.png";


const stickers = [
  { src: muscle, alt: "muscle", x: "80%", y: "10%", r: -8 },
  { src: automation, alt: "automation", x: "80%", y: "36%", r: 10 },
  { src: engineering, alt: "engineering", x: "80%", y: "62%", r: 6 },
];

const Field = ({ label, children }) => (
  <label className="block">
    <span className="sr-only">{label}</span>
    {children}
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  // For static sites: easiest “works everywhere” is mailto:
  const onSubmit = (e) => {
    e.preventDefault();

    const to = "admatieh@gmail.com";
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };



  const inputBase =
    "w-full rounded-sm border border-black/20 bg-white/40 px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition";

  return (
    <section id="contact" className="bg-[#070707] text-white grid-paper-dark">
      <div className="mx-auto max-w-7xl w-full px-6 py-20">
        {/* Title */}
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
            CONTACT
          </p>
          <div className="mt-4 flex items-end gap-6">
            <div className="h-14 w-2 bg-[#E0E0E0]" />
            <h2 className="uppercase font-black tracking-[-0.03em] leading-[0.9] text-[clamp(2.6rem,6vw,4.8rem)] text-[#E0E0E0]">
              GET IN TOUCH
            </h2>
          </div>
        </div>
        <div className="mt-14 grid gap-0 lg:grid-cols-2">
          {/* LEFT: info */}
          <div className="relative border-r border-white/12 p-10 sm:p-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">Location</p>
                  <p className="mt-1 text-sm text-white/60">Saida, Lebanon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">Email</p>
                  <a
                    href="mailto:admatieh@gmail.com"
                    className="mt-1 block text-sm text-white/60 hover:text-white transition"
                  >
                    admatieh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/90">Phone</p>
                  <a
                    href="tel:+96170826037"
                    className="mt-1 block text-sm text-white/60 hover:text-white transition"
                  >
                    +961 70826037
                  </a>
                </div>
              </div>
            </div>

            {/* Stickers Area (Left Panel) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {stickers.map((s) => (
                <img
                  key={s.alt}
                  src={s.src}
                  alt={s.alt}
                  className="
                      absolute z-20
                      h-14 w-14 sm:h-16 sm:w-16
                      drop-shadow-[0_10px_18px_rgba(0,0,0,0.25)]
                      select-none opacity-40
                    "
                  style={{
                    left: s.x,
                    top: s.y,
                    transform: `translate(-50%, -50%) rotate(${s.r}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Download CV */}
            <div className="mt-12">
              <a
                href={cvPdf}
                download
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/adam-abo-atyeh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 hover:text-white hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/admatieh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 hover:text-white hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/adamatyeh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/80 hover:text-white hover:bg-white/10 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="
            relative bg-[#F3F1EC] text-black border border-black/5 p-10 sm:p-12
            bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
            bg-[size:48px_48px]
            overflow-hidden rounded-b-[200px] lg:rounded-r-full lg:rounded-bl-none
          ">
            <form onSubmit={onSubmit} className="relative z-10 grid gap-4">
              <Field label="Your Name">
                <input
                  className={inputBase}
                  placeholder="Your Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                  required
                />
              </Field>

              <Field label="Your Email">
                <input
                  className={inputBase}
                  placeholder="Your Email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                  type="email"
                  required
                />
              </Field>

              <Field label="Your Phone Number">
                <input
                  className={inputBase}
                  placeholder="Your Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </Field>

              <Field label="Subject">
                <input
                  className={inputBase}
                  placeholder="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                />
              </Field>

              <Field label="Your Message">
                <textarea
                  className={`${inputBase} min-h-[160px] resize-none`}
                  placeholder="Your Message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </Field>

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-black/80 transition shadow-lg"
                >
                  Send Message
                </button>
              </div>

              <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-black/40">
                Email will open in your default client
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
