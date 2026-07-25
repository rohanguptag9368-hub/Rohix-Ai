import {
  FiUser,
  FiMail,
  FiStar,
  FiMessageSquare,
  FiFolder,
  FiBookmark,
  FiLogOut,
  FiArrowUpRight,
} from "react-icons/fi";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="rounded-3xl border border-white/10 bg-[#102542] p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="h-28 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-5xl font-bold">
              R
            </div>

            <div className="flex-1">

              <h1 className="text-3xl font-bold">
                Rohan Gupta
              </h1>

              <p className="mt-2 text-gray-400 flex items-center gap-2">
                <FiMail />
                rohan@example.com
              </p>

              <div className="mt-4 inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-300">
                💎 Free Plan
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <StatCard
            icon={<FiMessageSquare />}
            title="Chats"
            value="0"
          />

          <StatCard
            icon={<FiFolder />}
            title="Vault Files"
            value="0"
          />

          <StatCard
            icon={<FiBookmark />}
            title="Bookmarks"
            value="0"
          />

        </div>

        {/* Upgrade */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8">

          <h2 className="text-2xl font-bold">
            Upgrade to Rohix Pro
          </h2>

          <p className="mt-3 text-white/80">
            Unlock faster AI models, larger context, image generation,
            file analysis and premium features.
          </p>

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-black flex items-center gap-2 hover:scale-105 transition">

            Upgrade Now
            <FiArrowUpRight />

          </button>

        </div>

        {/* Logout */}
        <div className="mt-8">

          <button className="w-full rounded-2xl border border-red-500/20 bg-red-500/10 py-4 text-red-400 font-semibold hover:bg-red-500/20 transition flex items-center justify-center gap-2">

            <FiLogOut />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
};

function StatCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#102542] p-6">

      <div className="text-cyan-400 text-3xl">
        {icon}
      </div>

      <h3 className="mt-4 text-gray-400">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}

export default Profile;