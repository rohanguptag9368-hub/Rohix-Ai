import {
  FiCode,
  FiCpu,
  FiGlobe,
  FiPenTool,
} from "react-icons/fi";

const suggestions = [
  {
    icon: <FiCode />,
    title: "Build a React Dashboard",
  },
  {
    icon: <FiCpu />,
    title: "Explain Quantum Computing",
  },
  {
    icon: <FiPenTool />,
    title: "Write a Professional Resume",
  },
  {
    icon: <FiGlobe />,
    title: "Latest AI News Today",
  },
];

export default function EmptyState() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-10 text-center">

      {/* AI Logo */}

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-5xl shadow-[0_0_40px_rgba(34,211,238,.35)]">

        🤖

      </div>

      {/* Heading */}

      <h1 className="mt-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">

        Welcome to Rohix AI

      </h1>

      {/* Subtitle */}

      <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">

        Your premium AI assistant. Ask questions, generate code,
        create content, solve problems, and explore ideas faster
        with advanced AI.

      </p>

      {/* Suggestion Cards */}

      <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">

        {suggestions.map((item) => (

          <button
            key={item.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
          >

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl text-cyan-400">

              {item.icon}

            </div>

            <h3 className="text-sm font-semibold text-white sm:text-base">

              {item.title}

            </h3>

            <p className="mt-2 text-xs text-gray-400 sm:text-sm">

              Click to start chatting with Rohix AI

            </p>

          </button>

        ))}

      </div>

      {/* Footer */}

      <p className="mt-10 text-xs text-gray-500">

        Powered by AI • Fast • Secure • Intelligent

      </p>

    </div>
  );
}