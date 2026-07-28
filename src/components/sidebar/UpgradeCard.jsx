import { useNavigate } from "react-router-dom";

export default function UpgradeCard({ setOpen }) {
  const navigate = useNavigate();

  return (
    <div className="mx-4 mt-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-indigo-500/10 p-4 backdrop-blur-xl">

      <div className="flex items-center gap-2">

        <span className="text-xl">💎</span>

        <div>

          <h3 className="text-sm font-bold text-white">
            Upgrade to Pro
          </h3>

          <p className="text-xs text-gray-400">
            Unlock Premium AI Features
          </p>

        </div>

      </div>

      <div className="mt-4 space-y-2 text-xs text-gray-300">

        <p>⚡ Faster Responses</p>
        <p>🧠 Premium AI Models</p>
        <p>📁 Unlimited Vault</p>
        <p>🚀 Priority Access</p>

      </div>

      <button
        onClick={() => {
          navigate("/pricing");
          setOpen(false);
        }}
        className="mt-5 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(34,211,238,.4)]"
      >
        🚀 Upgrade Now
      </button>

    </div>
  );
}