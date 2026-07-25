import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../context/ChatContext";
import {
  FiMenu,
  FiX,
  FiPlus,
  FiMessageSquare,
  FiCompass,
  FiFolder,
  FiClock,
  FiBookmark,
  FiSettings,
  FiSearch,
} from "react-icons/fi";

const recentChats = [
  "Build a React Dashboard",
  "Create Portfolio Website",
  "Explain Quantum Computing",
  "Generate Node API",
];

export default function Sidebar({
  
  onNewChat,
  onExplore,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { chats, loadChat } = useChat();

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 h-11 w-11 rounded-xl border border-white/10 bg-[#081224] flex items-center justify-center text-white"
      >
        <FiMenu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          z-50
          h-screen
          w-[280px]
          bg-[#050816]/95
          backdrop-blur-2xl
          border-r border-white/10
          flex flex-col
          transition-all duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.08),transparent_45%)] pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-5 py-5 border-b border-white/10">

          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              ROHIX AI
            </h1>

            <p className="text-[11px] text-gray-400 mt-1">
              Next Generation AI Assistant
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-white"
          >
            <FiX size={24} />
          </button>

        </div>

        {/* New Chat */}
        <div className="px-4 pt-5">

          <button
            onClick={() => {
              onNewChat();
              setOpen(false);
            }}
            className="w-full h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
          >
            <FiPlus />
            New Chat
          </button>

        </div>

        {/* Search */}
        <div className="px-4 mt-4">

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 h-10">

            <FiSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search chats..."
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
            />

          </div>

        </div>

        {/* Menu */}
        <div className="px-4 mt-5 space-y-2">

          <Menu
            title="Chat"
            icon={<FiMessageSquare />}
            active
          />

          <Menu
            title="Explore"
            icon={<FiCompass />}
            onClick={() => {
              onExplore();
              setOpen(false);
            }}
          />

         <Menu
  title="Vault"
  icon={<FiFolder />}
  onClick={() => {
    navigate("/vault");
    setOpen(false);
  }}
/>
          <Menu
            title="History"
            icon={<FiClock />}
          />

          <Menu
  title="Bookmarks"
  icon={<FiBookmark />}
  onClick={() => {
    navigate("/bookmarks");
    setOpen(false);
  }}
/>

        </div>        {/* Recent Chats */}
        <div className="relative flex-1 mt-6 px-4 overflow-y-auto">

          <h3 className="text-[10px] uppercase tracking-[2px] text-cyan-400 font-semibold mb-3">
            Recent Chats
          </h3>

          <div className="space-y-2">

            {recentChats.map((item) => (

              <button
                key={item}
                className="w-full text-left rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-500/20 hover:translate-x-1"
                onClick={() => setOpen(false)}
              >
                <p className="truncate">{item}</p>
              </button>

            ))}

          </div>

        </div>

        {/* User */}
        <div className="border-t border-white/10 p-4">

          <div
  onClick={() => {
    navigate("/profile");
    setOpen(false);
  }}
  className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-cyan-500 hover:bg-cyan-500/10 transition"
>

            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold">
              R
            </div>

            <div className="flex-1 min-w-0">

              <h4 className="truncate text-sm font-semibold text-white">
                Rohan Gupta
              </h4>

              <p className="text-xs text-gray-400">
                Free Plan
              </p>

            </div>

            <button
            onClick={() => {
            navigate("/setting");
            setOpen(false);
            }}
            className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white transition"
            >
               <FiSettings size={16} />
            </button>

          </div>

        </div>

      </aside>
    </>
  );
}

function Menu({
  title,
  icon,
  active = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
        active
          ? "border border-cyan-500/20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
      )}

      <span className="text-lg">
        {icon}
      </span>

      <span className="truncate">
        {title}
      </span>
    </button>
  );
}