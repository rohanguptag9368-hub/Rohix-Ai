export default function PricingHero() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 md:py-18 lg:py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.18),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 text-center">

        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-[10px] font-semibold text-cyan-400 sm:px-4 sm:text-xs md:text-sm">
          💎 ROHIX AI PRICING
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-black leading-tight sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">

          Choose Your

          <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

            Perfect Plan

          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-7 text-gray-400 sm:mt-6 sm:px-0 sm:text-base md:text-lg">

          Upgrade your intelligence with premium AI models,
          advanced productivity tools and enterprise-grade
          features built for creators, developers, founders,
          students and businesses.

        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">

          <StatCard number="4" title="Plans" />

          <StatCard number="50+" title="AI Features" />

          <StatCard number="24×7" title="Support" />

          <StatCard number="∞" title="Possibilities" />

        </div>

      </div>

    </section>
  );
}

function StatCard({ number, title }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1">

      <h3 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
        {number}
      </h3>

      <p className="mt-2 text-xs text-gray-400 sm:text-sm">
        {title}
      </p>

    </div>
  );
}