import { FiMoon } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 px-6 flex items-center justify-between">

      <div>
        <h1 className="text-xl font-bold text-blue-400">
          Rohix AI
        </h1>

        <p className="text-xs text-slate-400">
          Quantum Blue Assistant
        </p>
      </div>

      <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
        <FiMoon size={20} />
      </button>

    </header>
  );
};

export default Navbar;