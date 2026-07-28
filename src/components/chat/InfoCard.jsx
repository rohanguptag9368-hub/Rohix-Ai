export default function InfoCard({
  icon,
  title,
  desc,
}) {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-[#081224] p-5 transition-all hover:border-cyan-500/30">
      <div className="text-3xl text-cyan-400">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">
        {desc}
      </p>
    </div>
  );
}