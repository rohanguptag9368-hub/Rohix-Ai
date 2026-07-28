export default function WelcomeSection({ setInput }) {
  const suggestions = [
    "Build React Dashboard",
    "Create Portfolio Website",
    "Generate Node API",
    "Explain Quantum Computing",
  ];

  return (
    <>
      <div className="text-center mt-6 md:mt-10 lg:mt-12 mb-8">

        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl shadow-[0_0_40px_rgba(59,130,246,.4)]">
          🤖
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-6">
          Welcome to Rohix AI
        </h1>

        <p className="text-sm md:text-base text-gray-400 mt-3">
          Your Premium AI Assistant
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-8">

        {suggestions.map((item) => (

          <button
            key={item}
            onClick={() => setInput(item)}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10"
          >

            <h3 className="text-white text-sm md:text-base font-semibold">
              {item}
            </h3>

            <p className="text-gray-400 text-xs md:text-sm mt-2">
              Click to ask Rohix AI
            </p>

          </button>

        ))}

      </div>
    </>
  );
}