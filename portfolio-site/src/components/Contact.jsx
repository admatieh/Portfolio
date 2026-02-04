import { useState } from "react";
import { Mail, MapPin, Phone, Download, Linkedin, Github, Instagram } from "lucide-react";
import cvPdf from "../assets/Adam_Atieh_CV.pdf";

import muscle from "../assets/map.png";
import automation from "../assets/gmail.png";
import engineering from "../assets/phone.png";
import call from "../assets/removed.png";


const stickers = [
  { src: muscle, alt: "muscle", x: "80%",  y: "10%", r: -8 },
  { src: automation,  alt: "automation", x: "80%", y: "36%", r: 10 },
  { src: engineering,  alt: "engineering", x: "80%", y: "62%", r: 6 },
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
    "w-full rounded-sm border border-white/80  px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/10 focus:ring-2 focus:ring-white/20 ";

  return (
    <section id="contact" className="bg-[#070707] text-white">
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
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start ">
          {/* LEFT: info */}
          <div className=" border border-white/10 bg-white p-8 sm:p-10 relative min-h-[340px] sm:min-h-[210px]
                  bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
                  bg-[size:48px_48px] rounded-md">
            <div className="space-y-7 rounded-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 ring-1 ring-[#4C8DFF]/25">
                  <MapPin className="h-5 w-5 " />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Location</p>
                  <p className="mt-1 text-sm text-black/65">Lebanon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 ring-1 ring-[#4C8DFF]/25">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Email</p>
                  <a
                    href="mailto:admatieh@gmail.com"
                    className="mt-1 block text-sm text-black/65 hover:text-blue-800 "
                  >
                    admatieh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 ring-1 ring-[#4C8DFF]/25">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-black font-semibold">Phone</p>
                  <a
                    href="tel:+96170826037"
                    className="mt-1 block text-sm text-black/65 hover:text-blue-800"
                  >
                    +961 70826037
                  </a>
                </div>
              </div>
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

            {/* Download CV */}
            <div className="mt-10">
              <a
                href={cvPdf}
                download
                className="inline-flex items-center bg-blue-500 gap-2 rounded-md border border-white/80 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900 transition"
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
                className="rounded-full border border-white/10 bg-blue-500 p-3 text-white hover:text-white hover:border-white/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/AdamAtiehh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-blue-500 p-3 text-white hover:text-white hover:border-white/20 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/adam.atyeh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-blue-500 p-3 text-white hover:text-white hover:border-white/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT: form */}
          <form
            onSubmit={onSubmit}
            className="border border-white/10 bg-white/5 p-8 sm:p-10"
          >
            <div className="grid gap-4">
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
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="rounded-md border border-white/80 px-8 py-3 text-sm font-semibold text-[#E0E0E0] hover:bg-white/10 transition"
              >
                Send Message
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-white/45">
              This form opens your email client (mailto). If you want real submissions, we can hook up Formspree later.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
