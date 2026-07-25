const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white">

 {/* ================= HERO ================= */}

<section className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.18),transparent_60%)]" />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">

    <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-400">
      💎 ROHIX AI PRICING
    </span>

    <h1 className="mt-7 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">

      Choose Your

      <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

        Perfect Plan

      </span>

    </h1>

    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">

      Upgrade your intelligence with premium AI models,
      advanced productivity tools and enterprise-grade
      features built for creators, developers, founders,
      students and businesses.

    </p>

    {/* Stats */}

    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          4
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Plans
        </p>

      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          50+
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          AI Features
        </p>

      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          24×7
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Support
        </p>

      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

        <h3 className="text-2xl font-bold text-cyan-400">
          ∞
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Possibilities
        </p>

      </div>

    </div>

  </div>

</section>

      

      {/* Pricing Cards */}

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 pb-20 sm:px-8 md:grid-cols-2 xl:grid-cols-4">

        {/* ================= FREE ================= */}

<div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(34,211,238,.15)] lg:p-8">

  <div>

    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-300">
      Free Plan
    </span>

    <h3 className="mt-5 text-2xl font-bold lg:text-3xl">
      Free
    </h3>

    <p className="mt-6 text-4xl font-extrabold lg:text-5xl">
      ₹0
    </p>

    <p className="mt-2 text-gray-400">
      Forever Free
    </p>

  </div>

  <ul className="mt-8 flex-1 space-y-3 text-gray-300">

    <li>✅ Standard AI Chat</li>

    <li>✅ Daily Messages</li>

    <li>✅ Basic Vault</li>

    <li>✅ 1 GB Storage</li>

    <li>✅ 20 Bookmarks</li>

    <li>✅ Explore</li>

    <li>✅ Community Support</li>

  </ul>

  <button className="mt-10 w-full rounded-xl border border-white/10 bg-white/10 py-3 font-semibold transition-all duration-300 hover:bg-cyan-500 hover:text-white">

    Start Free

  </button>

</div>
      {/* ================= PLUS ================= */}

<div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-cyan-400 bg-gradient-to-b from-cyan-500/20 via-cyan-500/10 to-[#07182d] p-6 shadow-[0_0_25px_rgba(34,211,238,.15)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_55px_rgba(34,211,238,.45)] lg:p-8">

  {/* Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.18),transparent_65%)]" />

  {/* Badge */}
  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-[11px] font-bold uppercase tracking-[2px] text-white shadow-xl">

    ⭐ MOST POPULAR

  </span>

  <div className="relative">

    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">

      Best Value

    </span>

    <h3 className="mt-5 text-3xl font-bold">

      Plus

    </h3>

    <div className="mt-6 flex items-end gap-2">

      <span className="text-5xl font-black">

        ₹1,599

      </span>

      <span className="pb-2 text-gray-400">

        / month

      </span>

    </div>

    <p className="mt-4 text-sm leading-6 text-gray-300">

      Perfect for students, developers,
      creators and professionals who use AI
      every day.

    </p>

  </div>

  <ul className="relative mt-8 flex-1 space-y-3 text-gray-200">

    <li>✅ Unlimited AI Chat</li>

    <li>✅ Faster AI Responses</li>

    <li>✅ Advanced AI Models</li>

    <li>✅ Extended Context Window</li>

    <li>✅ Smart AI Memory</li>

    <li>✅ PDF Analysis</li>

    <li>✅ DOCX Analysis</li>

    <li>✅ Image Understanding</li>

    <li>✅ Web Search</li>

    <li>✅ 100 GB Vault</li>

    <li>✅ Unlimited Bookmarks</li>

    <li>✅ Chat Export</li>

    <li>✅ Premium Themes</li>

    <li>✅ Priority Queue</li>

    <li>✅ Email Support</li>

  </ul>

  <button className="relative mt-10 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(34,211,238,.6)]">

    Upgrade to Plus

  </button>

</div>
       {/* ================= PRO ================= */}

<div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-[#07182d] p-6 shadow-[0_0_25px_rgba(168,85,247,.18)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(168,85,247,.45)] lg:p-8">

  {/* Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,.18),transparent_65%)]" />

  {/* Badge */}
  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-600 px-5 py-2 text-[11px] font-bold uppercase tracking-[2px] text-white shadow-xl">

    👑 PROFESSIONAL

  </span>

  <div className="relative">

    <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">

      Power Users

    </span>

    <h3 className="mt-5 text-3xl font-bold">

      Pro

    </h3>

    <div className="mt-6 flex items-end gap-2">

      <span className="text-5xl font-black">

        ₹9,999

      </span>

      <span className="pb-2 text-gray-400">

        / month

      </span>

    </div>

    <p className="mt-4 text-sm leading-6 text-gray-300">

      Built for developers, founders,
      researchers and professionals who
      rely on AI every day.

    </p>

  </div>

  <ul className="relative mt-8 flex-1 space-y-3 text-gray-200">

    <li>✅ Everything in Plus</li>

    <li>✅ Premium AI Models</li>

    <li>✅ Highest AI Chat Limits</li>

    <li>✅ AI Coding Workspace</li>

    <li>✅ Advanced Research Assistant</li>

    <li>✅ Website Generator</li>

    <li>✅ App Generator</li>

    <li>✅ Unlimited Vault Storage</li>

    <li>✅ Unlimited Projects</li>

    <li>✅ Unlimited Bookmarks</li>

    <li>✅ Extended Context Window</li>

    <li>✅ AI Workflow Automation</li>

    <li>✅ Team Collaboration</li>

    <li>✅ Premium Analytics</li>

    <li>✅ Early Access Features</li>

    <li>✅ Priority Servers</li>

    <li>✅ Priority Support</li>

    <li>✅ Advanced Security</li>

  </ul>

  <button className="relative mt-10 w-full rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 py-3 font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,.55)]">

    Upgrade to Pro

  </button>

</div>
       {/* ================= ULTRA ================= */}

<div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-yellow-400 bg-gradient-to-b from-yellow-500/20 via-[#1b1b0d] to-[#07182d] p-6 shadow-[0_0_25px_rgba(250,204,21,.18)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_0_70px_rgba(250,204,21,.55)] lg:p-8">

  {/* Premium Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,.18),transparent_65%)]" />

  {/* Badge */}
  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-5 py-2 text-[11px] font-bold uppercase tracking-[2px] text-black shadow-xl">

    🚀 ENTERPRISE

  </span>

  <div className="relative">

    <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-300">

      Ultimate Experience

    </span>

    <h3 className="mt-5 text-3xl font-bold text-yellow-300">

      Ultra

    </h3>

    <div className="mt-6 flex items-end gap-2">

      <span className="text-5xl font-black text-white">

        ₹19,999

      </span>

      <span className="pb-2 text-yellow-200/80">

        / month

      </span>

    </div>

    <p className="mt-4 text-sm leading-6 text-gray-300">

      Designed for enterprises, large teams,
      agencies and businesses requiring the
      highest AI performance.

    </p>

  </div>

  <ul className="relative mt-8 flex-1 space-y-3 text-gray-200">

    <li>✅ Everything in Pro</li>
    <li>✅ Unlimited AI Chat</li>
    <li>✅ Unlimited Memory</li>
    <li>✅ Maximum AI Performance</li>
    <li>✅ Highest Compute Priority</li>
    <li>✅ Unlimited Vault Storage</li>
    <li>✅ Unlimited File Analysis</li>
    <li>✅ Multi AI Workspace</li>
    <li>✅ AI Agents</li>
    <li>✅ Enterprise Dashboard</li>
    <li>✅ Dedicated Workflows</li>
    <li>✅ Team Workspace</li>
    <li>✅ White Label (Coming Soon)</li>
    <li>✅ API Access (Coming Soon)</li>
    <li>✅ Enterprise Security</li>
    <li>✅ Dedicated Success Manager</li>
    <li>✅ 24×7 Premium Support</li>
    <li>✅ Priority Feature Access</li>

  </ul>

  <button className="relative mt-10 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 py-3 font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(250,204,21,.6)]">

    Get Ultra

  </button>

</div>


</section>
    {/* ================= Feature Comparison ================= */}

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">

  <h2 className="mb-8 text-center text-3xl sm:text-4xl lg:text-5xl font-bold">
    Compare Plans
  </h2>

  <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

    <table className="min-w-[850px] w-full text-left">

      <thead className="bg-white/5">

        <tr>

          <th className="px-4 sm:px-6 py-5 font-semibold">
            Features
          </th>

          <th className="px-4 sm:px-6 py-5 text-center">
            Free
          </th>

          <th className="px-4 sm:px-6 py-5 text-center text-cyan-400">
            Plus
          </th>

          <th className="px-4 sm:px-6 py-5 text-center text-purple-400">
            Pro
          </th>

          <th className="px-4 sm:px-6 py-5 text-center text-yellow-400">
            Ultra
          </th>

        </tr>

      </thead>

      <tbody>

        {[
          ["AI Chat","✓","✓","✓","✓"],
          ["Daily Messages","50","Unlimited","Unlimited","Unlimited"],
          ["Fast Responses","—","✓","✓","✓"],
          ["Advanced AI Models","—","✓","✓","✓"],
          ["Smart Memory","—","✓","✓","✓"],
          ["PDF Analysis","—","✓","✓","✓"],
          ["DOCX Analysis","—","✓","✓","✓"],
          ["Image Analysis","—","✓","✓","✓"],
          ["Web Search","Limited","✓","✓","✓"],
          ["Vault Storage","1 GB","100 GB","Unlimited","Unlimited"],
          ["Bookmarks","20","Unlimited","Unlimited","Unlimited"],
          ["Export Chats","—","✓","✓","✓"],
          ["AI Coding Assistant","—","—","✓","✓"],
          ["Research Workspace","—","—","✓","✓"],
          ["Website Generator","—","—","✓","✓"],
          ["App Generator","—","—","✓","✓"],
          ["AI Agents","—","—","—","✓"],
          ["Team Workspace","—","—","✓","Unlimited"],
          ["API Access","—","—","Coming Soon","Coming Soon"],
          ["Priority Support","Community","Priority","Premium","24×7"],
          ["Early Access","—","—","✓","✓"],
          ["Enterprise Security","—","—","—","✓"],
        ].map((row) => (

          <tr
            key={row[0]}
            className="border-t border-white/10 transition hover:bg-white/5"
          >

            <td className="px-4 sm:px-6 py-4 font-medium whitespace-nowrap">
              {row[0]}
            </td>

            <td className="px-4 sm:px-6 py-4 text-center">
              {row[1]}
            </td>

            <td className="px-4 sm:px-6 py-4 text-center text-cyan-300">
              {row[2]}
            </td>

            <td className="px-4 sm:px-6 py-4 text-center text-purple-300">
              {row[3]}
            </td>

            <td className="px-4 sm:px-6 py-4 text-center text-yellow-300">
              {row[4]}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">

  <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-[#0b1220] via-[#081b33] to-[#0b1220] p-8 sm:p-10 lg:p-14 text-center">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.15),transparent_60%)]" />

    <div className="relative">

      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm text-cyan-400">
        🚀 Upgrade Today
      </span>

      <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">

        Unlock the Full Power of

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

          {" "}ROHIX AI

        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-gray-400">

        Experience premium AI models, intelligent productivity tools,
        powerful research capabilities and enterprise-grade performance.

      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

        <button className="w-full sm:w-auto rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-cyan-600">

          Upgrade Now

        </button>

        <button className="w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">

          Start Free

        </button>

      </div>

    </div>

  </div>

</section>

</div>

  );
};

export default Pricing;