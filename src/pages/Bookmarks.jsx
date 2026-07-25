import {
  FiBookmark,
  FiSearch,
  FiTrash2,
} from "react-icons/fi";

const Bookmarks = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            🔖 Bookmarks
          </h1>

          <p className="mt-2 text-gray-400">
            Access all your saved AI conversations in one place.
          </p>

        </div>

        {/* Search */}
        <div className="mb-8 relative">

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search bookmarks..."
            className="w-full rounded-xl bg-[#102542] py-3 pl-12 pr-4 outline-none border border-white/10 focus:border-cyan-500"
          />

        </div>

        {/* Empty State */}
        <div className="rounded-2xl bg-[#102542] border border-white/10 p-16 text-center">

          <FiBookmark
            size={60}
            className="mx-auto mb-6 text-cyan-400"
          />

          <h2 className="text-2xl font-semibold">
            No Bookmarks Yet
          </h2>

          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Save important AI responses and they'll appear here for quick access.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-600 transition">
            Start Chatting
          </button>

        </div>

      </div>

    </div>
  );
};

export default Bookmarks;