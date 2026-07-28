import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="mt-4 px-4">
      <div className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3">

        <FiSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search chats..."
          className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
        />

      </div>
    </div>
  );
}