const Loader = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-[#070707] text-white">
      <div className="w-full max-w-sm px-6 text-center">
        <div className="text-xl font-black tracking-tight">Loading…</div>
        <p className="mt-2 text-sm text-white/60">Preparing assets</p>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-white transition-[width] duration-200"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>

        <div className="mt-2 text-xs text-white/50">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default Loader;
