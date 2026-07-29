import { motion } from "framer-motion";

export default function MenuItem({
  title,
  icon,
  active = false,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        x: 6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
        active
          ? "border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white shadow-[0_0_20px_rgba(34,211,238,.12)]"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {/* Active Indicator */}
      {active && (
        <motion.span
          layoutId="activeMenu"
          className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
        />
      )}

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/5 to-transparent" />

      {/* Icon */}
      <motion.span
        whileHover={{
          rotate: -8,
          scale: 1.15,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="relative z-10 text-lg"
      >
        {icon}
      </motion.span>

      {/* Title */}
      <span className="relative z-10 truncate">
        {title}
      </span>
    </motion.button>
  );
}