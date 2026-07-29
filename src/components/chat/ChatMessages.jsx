import MarkdownRenderer from "./MarkdownRenderer";
import MessageActions from "./MessageActions";
import { motion } from "framer-motion";

export default function ChatMessages({
  messages,
  copyMessage,
}) {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto scrollbar-hide px-6">

      {messages.map((msg, index) => (

      <motion.div
  key={index}
  initial={{
    opacity: 0,
    y: 20,
    scale: 0.98,
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.28,
  }}
  className={`mb-5 flex ${
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

            <MarkdownRenderer text={msg.text} />

            {msg.role === "ai" && (
              <MessageActions
                text={msg.text}
                onCopy={copyMessage}
              />
            )}

          </div>

</motion.div>
      ))}

    </div>
  );
}