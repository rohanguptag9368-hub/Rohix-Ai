import {
  FiCode,
  FiCpu,
  FiBriefcase,
  FiTrendingUp,
  FiBookOpen,
  FiPenTool,
  FiDatabase,
  FiTerminal,
} from "react-icons/fi";

export default function ExploreScreen({ onSelect, onBack }) {
  const features = [
    {
      icon: <FiCode size={28} />,
      title: "React Development",
      prompt: "Build a React Dashboard with Tailwind CSS",
    },
    {
      icon: <FiCpu size={28} />,
      title: "Artificial Intelligence",
      prompt: "Explain Artificial Intelligence in simple language",
    },
    {
      icon: <FiBriefcase size={28} />,
      title: "Resume Builder",
      prompt: "Create a professional software engineer resume",
    },
    {
      icon: <FiTrendingUp size={28} />,
      title: "Startup Ideas",
      prompt: "Give me 10 profitable AI startup ideas",
    },
    {
      icon: <FiBookOpen size={28} />,
      title: "Learn Programming",
      prompt: "Create a JavaScript roadmap from beginner to advanced",
    },
    {
      icon: <FiPenTool size={28} />,
      title: "UI Design",
      prompt: "Design a premium futuristic dashboard UI",
    },
    {
      icon: <FiDatabase size={28} />,
      title: "Data Analysis",
      prompt: "Explain data analysis with examples",
    },
    {
      icon: <FiTerminal size={28} />,
      title: "Debug Code",
      prompt: "Help me debug my React application",
    },
  ];

  return (
    <div className="h-full overflow-y-auto">

      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-5xl font-bold text-white">
            Explore AI
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Choose what you want Rohix AI to help you with.
          </p>
        </div>

        <button
          onClick={onBack}
          className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          Back
        </button>

      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

        {features.map((item) => (

          <button
            key={item.title}
            onClick={() => onSelect(item.prompt)}
            className="group rounded-3xl border border-white/10 bg-white/5 p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
          >

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white">

              {item.icon}

            </div>

            <h2 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300">

              {item.title}

            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">

              {item.prompt}

            </p>

          </button>

        ))}

      </div>

    </div>
  );
}