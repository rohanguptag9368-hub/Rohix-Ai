const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.18),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            💎 ROHIX AI PRICING
          </span>

          <h1 className="mt-8 text-6xl font-extrabold">
            Choose Your
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}Perfect Plan
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Upgrade your intelligence with premium AI models,
            advanced productivity tools and enterprise-grade features.
          </p>

        </div>

      </section>

      {/* Pricing Cards */}

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-4">

        {/* FREE */}
<div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:scale-105 hover:border-cyan-500/30">

  <h3 className="text-3xl font-bold">
    Free
  </h3>

  <p className="mt-5 text-5xl font-extrabold">
    ₹0
  </p>

  <p className="mt-2 text-gray-400">
    Forever Free
  </p>

  <ul className="mt-8 space-y-3 text-gray-300">

    <li>✅ Standard AI Chat</li>
    <li>✅ Daily Messages</li>
    <li>✅ Basic Vault</li>
    <li>✅ 1 GB Storage</li>
    <li>✅ 20 Bookmarks</li>
    <li>✅ Explore</li>
    <li>✅ Community Support</li>

  </ul>

  <button className="mt-8 w-full rounded-xl bg-white/10 py-3 font-semibold hover:bg-cyan-500 transition">
    Start Free
  </button>

</div>
       {/* PLUS */}

<div className="relative rounded-3xl border-2 border-cyan-400 bg-gradient-to-b from-cyan-500/15 to-cyan-500/5 p-8 backdrop-blur-xl transition duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]">

  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg">
    ⭐ MOST POPULAR
  </span>

  <h3 className="text-3xl font-bold">
    Plus
  </h3>

  <p className="mt-5 text-5xl font-extrabold">
    ₹1,599
  </p>

  <p className="mt-2 text-gray-400">
    per month
  </p>

  <ul className="mt-8 space-y-3 text-gray-300">

    <li>✅ Unlimited AI Chat</li>
    <li>✅ Faster AI Responses</li>
    <li>✅ Advanced AI Models</li>
    <li>✅ Extended Context Window</li>
    <li>✅ Smart AI Memory</li>
    <li>✅ PDF Analysis</li>
    <li>✅ DOCX Analysis</li>
    <li>✅ Image Understanding</li>
    <li>✅ Web Search</li>
    <li>✅ 100 GB Vault Storage</li>
    <li>✅ Unlimited Bookmarks</li>
    <li>✅ Chat Export</li>
    <li>✅ Priority Queue</li>
    <li>✅ Premium Themes</li>
    <li>✅ Email Support</li>

  </ul>

  <button className="mt-8 w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600">
    Upgrade to Plus
  </button>

</div>

       {/* PRO */}

<div className="relative rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-purple-500/15 to-purple-500/5 p-8 backdrop-blur-xl transition duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(168,85,247,.35)]">

  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-500 px-5 py-2 text-xs font-bold tracking-wider text-white shadow-lg">
    👑 PROFESSIONAL
  </span>

  <h3 className="text-3xl font-bold">
    Pro
  </h3>

  <p className="mt-5 text-5xl font-extrabold">
    ₹9,999
  </p>

  <p className="mt-2 text-gray-400">
    per month
  </p>

  <ul className="mt-8 space-y-3 text-gray-300">

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
    <li>✅ Priority Servers</li>
    <li>✅ Early Access Features</li>
    <li>✅ Premium Analytics</li>
    <li>✅ Priority Support</li>
    <li>✅ Advanced Security</li>

  </ul>

  <button className="mt-8 w-full rounded-xl bg-purple-500 py-3 font-semibold text-white transition hover:bg-purple-600">
    Upgrade to Pro
  </button>

</div>

       {/* ULTRA */}

<div className="relative rounded-3xl border-2 border-yellow-400 bg-gradient-to-b from-yellow-500/20 via-[#1b1b0d] to-[#0f0f08] p-8 backdrop-blur-xl transition duration-300 hover:scale-105 hover:shadow-[0_0_55px_rgba(250,204,21,.45)]">
  {/* Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,.15),transparent_65%)]" />

  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 px-5 py-2 text-xs font-bold tracking-wider text-black shadow-xl">
    🚀 ENTERPRISE
  </span>

  <div className="relative">

    <h3 className="text-3xl font-bold text-yellow-300">
      Ultra
    </h3>

    <p className="mt-5 text-5xl font-extrabold text-white">
      ₹19,999
    </p>

    <p className="mt-2 text-yellow-200/80">
      per month
    </p>

    <ul className="mt-8 space-y-3 text-gray-200">

      <li>✅ Everything in Pro</li>
      <li>✅ Maximum AI Performance</li>
      <li>✅ Highest Compute Priority</li>
      <li>✅ Unlimited AI Chat</li>
      <li>✅ Unlimited AI Memory</li>
      <li>✅ Unlimited Vault Storage</li>
      <li>✅ Unlimited File Analysis</li>
      <li>✅ Unlimited Context Window</li>
      <li>✅ Multi-AI Workspace</li>
      <li>✅ AI Agents</li>
      <li>✅ Team Workspace</li>
      <li>✅ Enterprise Dashboard</li>
      <li>✅ Advanced Automation</li>
      <li>✅ Dedicated AI Workflows</li>
      <li>✅ API Access <span className="text-yellow-400">(Coming Soon)</span></li>
      <li>✅ White Label <span className="text-yellow-400">(Coming Soon)</span></li>
      <li>✅ Enterprise Security</li>
      <li>✅ Dedicated Success Manager</li>
      <li>✅ 24×7 Premium Support</li>
      <li>✅ Priority Feature Access</li>

    </ul>

    <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 py-3 font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,204,21,.5)]">
      Get Ultra
    </button>

  </div>

</div>
</section>
      {/* ================= Feature Comparison ================= */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <h2 className="mb-10 text-center text-5xl font-bold">
    Compare Plans
  </h2>

  <div className="overflow-x-auto rounded-3xl border border-white/10">

    <table className="w-full text-left">

      <thead className="bg-white/5">

        <tr>

          <th className="px-6 py-5">Features</th>

          <th className="px-6 py-5 text-center">
            Free
          </th>

          <th className="px-6 py-5 text-center text-cyan-400">
            Plus
          </th>

          <th className="px-6 py-5 text-center text-purple-400">
            Pro
          </th>

          <th className="px-6 py-5 text-center text-yellow-400">
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
            className="border-t border-white/10 hover:bg-white/5 transition"
          >

            <td className="px-6 py-4 font-medium">
              {row[0]}
            </td>

            <td className="px-6 py-4 text-center">
              {row[1]}
            </td>

            <td className="px-6 py-4 text-center text-cyan-300">
              {row[2]}
            </td>

            <td className="px-6 py-4 text-center text-purple-300">
              {row[3]}
            </td>

            <td className="px-6 py-4 text-center text-yellow-300">
              {row[4]}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</section>
{/* ================= CTA ================= */}

<section className="mx-auto max-w-7xl px-6 pb-28">

  <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-[#0b1220] via-[#081b33] to-[#0b1220] p-14 text-center">

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,.15),transparent_60%)]" />

    <div className="relative">

      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
        🚀 Upgrade Today
      </span>

      <h2 className="mt-8 text-5xl font-extrabold">
        Unlock the Full Power of
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          {" "}ROHIX AI
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
        Experience premium AI models, intelligent productivity tools,
        powerful research capabilities and enterprise-grade performance.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:scale-105 hover:bg-cyan-600">
          Upgrade Now
        </button>

        <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10">
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