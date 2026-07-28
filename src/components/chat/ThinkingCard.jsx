export default function ThinkingCard() {
  return (

    <div className="flex items-start gap-4 mb-6">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-xl shadow-[0_0_25px_rgba(34,211,238,.35)] animate-pulse">
        🤖
      </div>

      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#081224] p-5 backdrop-blur-xl">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-base font-semibold text-white">
              Rohix AI
            </h3>

            <p className="mt-1 text-xs text-cyan-400">
              Thinking...
            </p>

          </div>

          <div className="flex gap-1">

            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce"></div>

            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]"></div>

            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]"></div>

          </div>

        </div>

        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3 text-sm text-gray-300">
            🧠 <span>Analyzing your request...</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-300">
            ⚡ <span>Searching knowledge...</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-300">
            ✍️ <span>Generating the best response...</span>
          </div>

        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

        </div>

      </div>

    </div>

  );
}