import MarkdownRenderer from "./MarkdownRenderer";
import MessageActions from "./MessageActions";

export default function ChatMessages({
  messages,
  copyMessage,
}) {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hide px-6">

      {messages.map((msg, index) => (

        <div
          key={index}
          className={`flex ${
            msg.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-[95%] md:max-w-[80%] rounded-3xl px-5 py-4 ${
              msg.role === "user"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "border border-white/10 bg-[#081224] text-gray-200"
            }`}
          >

            <MarkdownRenderer
              text={msg.text}
            />

            {msg.role === "ai" && (
              <MessageActions
                text={msg.text}
                onCopy={copyMessage}
              />
            )}

          </div>

        </div>

      ))}

    </div>
  );
}