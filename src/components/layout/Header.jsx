import {
  FiBell,
  FiMoon,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 lg:h-[72px] border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">

  <div className="flex h-full items-center justify-between px-4 lg:px-8">

    {/* MOBILE */}
    <div className="flex w-full items-center justify-between lg:hidden">

      {/* Left Space (Hamburger Sidebar se aayega) */}
      <div className="w-10"></div>

      {/* Logo */}
      <h1 className="font-bold text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
        Rohix AI
      </h1>

      {/* Bell */}
      <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">

        <FiBell className="text-white" />

        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

      </button>

    </div>

    {/* TABLET + DESKTOP */}
    <div className="hidden lg:flex w-full items-center justify-between">

      {/* Left */}
      <div>

        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Welcome Back 👋
        </h1>

        <p className="text-xs text-gray-400">
          Ask anything. Build anything.
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Search Desktop */}
        <div className="hidden xl:flex items-center gap-3 h-11 w-72 rounded-xl border border-white/10 bg-white/5 px-4">

          <FiSearch className="text-gray-400"/>

          <input
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
          />

        </div>

        <button className="h-11 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-sm font-semibold">
          ✨ Pro
        </button>

        <button className="h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
          <FiMoon className="text-white"/>
        </button>

        <button className="relative h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">

          <FiBell className="text-white"/>

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"/>

        </button>

        <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">

          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
            R
          </div>

          <div>

            <h3 className="text-sm font-semibold text-white">
              Rohan Gupta
            </h3>

            <p className="text-xs text-gray-400">
              Founder
            </p>

          </div>

          <FiChevronDown className="text-gray-400"/>

        </button>

      </div>

    </div>

  </div>

</header>
  );
}