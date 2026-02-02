import { useState } from "react";
import { Mail, MapPin, Phone, Download, Linkedin, Github, Instagram } from "lucide-react";

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

    const to = "YOUR_EMAIL_HERE@gmail.com";
    const subject = encodeURIComponent(form.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const Field = ({ label, children }) => (
    <label className="block">
      <span className="sr-only">{label}</span>
      {children}
    </label>
  );

  const inputBase =
    "w-full rounded-sm border border-white/80  px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/10 focus:ring-2 focus:ring-white/20 ";

  return (
    <section id="contact" className="bg-[#070707] text-white">
      <div className="mx-auto w-full px-6 py-20">
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
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4C8DFF]/15 ring-1 ring-[#4C8DFF]/25">
                  <MapPin className="h-5 w-5 " />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#E0E0E0]">Location</p>
                  <p className="mt-1 text-sm text-white/65">Lebanon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4C8DFF]/15 ring-1 ring-[#4C8DFF]/25">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <a
                    href="mailto:YOUR_EMAIL_HERE@gmail.com"
                    className="mt-1 block text-sm text-white/65 hover:text-white text-[#E0E0E0]"
                  >
                    YOUR_EMAIL_HERE@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4C8DFF]/15 ring-1 ring-[#4C8DFF]/25">
                  <Phone className="h-5 w-5 " />
                </div>
                <div>
                  <p className="text-sm text-[#E0E0E0] font-semibold">Phone</p>
                  <a
                    href="tel:+96100000000"
                    className="mt-1 block text-sm text-white/65 hover:text-white"
                  >
                    +961 XX XXX XXX
                  </a>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="mt-10">
              <a
                href="/Adam_Atieh_CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md border border-white/80 px-6 py-3 text-sm font-semibold text-[#E0E0E0] hover:bg-white/10 transition"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <p className="mt-3 text-xs text-white/45">
                Put your PDF in <span className="text-white/70">/public</span> as <span className="text-white/70">Adam_Atieh_CV.pdf</span>.
              </p>
            </div>

            {/* Socials */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 hover:text-white hover:border-white/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 hover:text-white hover:border-white/20 transition"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white/70 hover:text-white hover:border-white/20 transition"
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
