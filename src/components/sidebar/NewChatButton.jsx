import { FiPlus } from "react-icons/fi";
import { useChat } from "../../context/ChatContext";

export default function NewChatButton({
  onNewChat,
  setOpen,
}) {
  const { clearChat } = useChat();

  return (
    <div className="px-4 pt-5">
      <button
        onClick={() => {
          clearChat();
          onNewChat();
          setOpen(false);
        }}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white transition hover:scale-[1.02]"
      >
        <FiPlus />

        <span>New Chat</span>
      </button>
    </div>
  );
}