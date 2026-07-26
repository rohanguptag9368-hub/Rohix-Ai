export default function PricingCTA() {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-[#0b1220] via-[#081b33] to-[#0b1220]">

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.15),transparent_60%)]" />

          <div className="relative px-5 py-10 sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center">

            <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-[11px] sm:text-xs md:text-sm font-medium text-cyan-400">
              🚀 Upgrade Today
            </span>

            <h2 className="mt-6 text-2xl font-extrabold leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">

              Unlock the Full Power of

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                ROHIX AI
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
              Experience premium AI models, intelligent productivity tools,
              powerful research capabilities and enterprise-grade performance.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center">

              <button className="w-full rounded-xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600 sm:w-auto sm:px-10 sm:py-4 sm:text-base">
                Upgrade Now
              </button>

              <button className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-10 sm:py-4 sm:text-base">
                Start Free
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}