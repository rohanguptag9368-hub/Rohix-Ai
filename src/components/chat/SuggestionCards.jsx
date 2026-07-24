const suggestions = [
  {
    title: "Build React Dashboard",
    subtitle: "Modern Admin UI",
  },
  {
    title: "Generate Node API",
    subtitle: "Express + MongoDB",
  },
  {
    title: "Startup Pitch",
    subtitle: "Investor Ready",
  },
  {
    title: "Explain JavaScript",
    subtitle: "Beginner Friendly",
  },
];

export default function SuggestionCards({ onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">

      {suggestions.map((item) => (
        <button
          key={item.title}
          onClick={() => onSelect(item.title)}
          className="text-left p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-white font-semibold">
            {item.title}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            {item.subtitle}
          </p>

        </button>
      ))}

    </div>
  );
}