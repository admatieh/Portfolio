import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-transparent">
      {/* EXACT wrapper you requested */}
      <div className="overflow-visible border border-white/10 bg-[#F3F1EC] text-black rounded-md">
        <div
          className="
            relative
            bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        >
          <div className="mx-auto w-full max-w-[1400px] px-6 py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Brand */}
              <a href="#top" className="text-xl font-black tracking-tight">
                Adam<span className="text-violet-500">Atieh</span>
              </a>

              {/* Links */}
              <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-black/70">
                <a href="#top" className="hover:text-black transition">
                  Home
                </a>
                <a href="#about" className="hover:text-black transition">
                  About
                </a>
                <a href="#experience" className="hover:text-black transition">
                  Work
                </a>
                <a href="#skills" className="hover:text-black transition">
                  Skills
                </a>
                <a href="#education" className="hover:text-black transition">
                  Education
                </a>
                <a href="#contact" className="hover:text-black transition">
                  Contact
                </a>
              </nav>

              {/* Socials */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://github.com/AdamAtiehh/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-black/5 p-3 text-black/70 hover:text-black hover:border-black/20 transition"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/adam-abo-atyeh/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-black/5 p-3 text-black/70 hover:text-black hover:border-black/20 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/adam.atyeh/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-black/5 p-3 text-black/70 hover:text-black hover:border-black/20 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-sm text-black/70">
              © {year} Adam Atieh. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg hover:brightness-110 transition"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
};

export default Footer;
