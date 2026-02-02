const ProofWall = () => {
  return (
    <section id="work" className="bg-[#070707] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="border border-white/10 p-10 sm:p-12">
          <h2 className="text-sm font-semibold tracking-wide text-white/80">
            THE PROOF WALL
          </h2>

          <div className="mt-8 grid gap-8">
            {/* Left rule + bullets */}
            <div className="border-l border-white/20 pl-6">
              <ul className="space-y-10 text-sm leading-relaxed text-white/85">
                <li>
                  <span className="font-semibold text-white">XRWorkout</span>
                  <span className="text-white/70">
                    : designed an AI-first marketing automation approach (Mautic + agentic workflows)
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">Digital Hub</span>
                  <span className="text-white/70">
                    : team-based MERN development with GitHub workflow + feature debugging
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">Network Admin</span>
                  <span className="text-white/70">
                    : Windows Server labs — Active Directory, DNS/DHCP, access control fundamentals
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">Checkout Redesign</span>
                  <span className="text-white/70">
                    : rebuilt a full checkout UI flow with modular components + improved UX
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">SportSense Analytics</span>
                  <span className="text-white/70">
                    : React app work — routing/components + fixing Vite import/build issues
                  </span>
                </li>
              </ul>
            </div>

            {/* Optional: subtle footnote */}
            <p className="text-xs text-white/50">
              (Next: each item will link to a repo/demo once you add them.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofWall;
