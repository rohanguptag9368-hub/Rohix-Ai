import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function UserProfileCard({ setOpen }) {
  const navigate = useNavigate();

  return (
    <div className="mt-auto border-t border-white/10 bg-[#050816] p-4">

      <div
        onClick={() => {
          navigate("/profile");
          setOpen(false);
        }}
        className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-500 hover:bg-cyan-500/10"
      >

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white">
          R
        </div>

        <div className="min-w-0 flex-1">

          <h4 className="truncate text-sm font-semibold text-white">
            Rohan Gupta
          </h4>

          <p className="text-xs text-gray-400">
            Free Plan
          </p>

        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/setting");
            setOpen(false);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-cyan-500 hover:text-white"
        >
          <FiSettings size={16} />
        </button>

      </div>

    </div>
  );
}