import { useChat } from "../../context/ChatContext";

export default function RecentChats({ setOpen }) {
  const { chats, loadChat } = useChat();

  return (
    <div className="h-full overflow-y-auto px-4 scrollbar-hide">
      <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-cyan-400">
        Recent Chats
      </h3>

      <div className="space-y-2">

        {chats.length === 0 ? (

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-xs text-gray-500">
            No chats yet
          </div>

        ) : (

          chats.map((chat) => (

            <button
              key={chat.id}
              onClick={() => {
                loadChat(chat);
                setOpen(false);
              }}
              className="w-full rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:border-cyan-500/20 hover:bg-cyan-500/10"
            >
              <p className="truncate font-medium">
                {chat.title}
              </p>

              <p className="mt-1 text-[11px] text-gray-500">
                {new Date(chat.createdAt).toLocaleDateString()}
              </p>
            </button>

          ))

        )}

      </div>

    </div>
  );
}