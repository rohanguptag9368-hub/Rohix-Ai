export default function MenuItem({
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