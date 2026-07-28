import { FiX } from "react-icons/fi";

export default function SidebarHeader({
  setOpen,
}) {
  return (
    <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-5">

      <div>

        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-2xl font-extrabold text-transparent">
          ROHIX AI
        </h1>

        <p className="mt-1 text-[11px] text-gray-400">
          Next Generation AI Assistant
        </p>

      </div>

      <button
        onClick={() => setOpen(false)}
        className="text-white lg:hidden"
      >
        <FiX size={24} />
      </button>

    </div>
  );
}