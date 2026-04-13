import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070707] text-[#E0E0E0]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="block h-8 w-14 rounded-l-lg rounded-r-full bg-[#E0E0E0]" />
          <span className="flex">
            <span className="text-2xl text-[#E0E0E0] font-semibold tracking-tight">Adam.</span>
            <span className="text-2xl text-[#E0E0E0] font-semibold tracking-tight">Atieh</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a
            href="#about"
            className="group relative pb-1 text-white/80 transition-colors hover:text-white"
          >
            About
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#experience"
            className="group relative pb-1 text-white/80 transition-colors hover:text-white"
          >
            Work
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>

          <a
            href="#projects"
            className="group relative pb-1 text-white/80 transition-colors hover:text-white"
          >
            Projects
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>

          <a
            href="#skills"
            className="group relative pb-1 text-white/80 transition-colors hover:text-white"
          >
            Skills
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>

          <a
            href="#education"
            className="group relative pb-1 text-white/80 transition-colors hover:text-white"
          >
            Education
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="group relative pb-1 text-white/80 transition-colors hover:text-white"
          >
            Contact
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white transition-all duration-200 group-hover:w-full" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""
                }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </nav>

      {/* <div className="h-px w-full bg-white/15" /> */}

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <a href="#about" onClick={closeMenu} className="mobile-link">
                About
              </a>
              <a href="#experience" onClick={closeMenu} className="mobile-link">
                Work
              </a>
              <a href="#projects" onClick={closeMenu} className="mobile-link">
                Projects
              </a>
              <a href="#skills" onClick={closeMenu} className="mobile-link">
                Skills
              </a>
              <a href="#contact" onClick={closeMenu} className="mobile-link">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
