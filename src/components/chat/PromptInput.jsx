import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FiSend,
  FiPaperclip,
  FiGlobe,
  FiSliders,
} from "react-icons/fi";

export default function PromptInput({
  input,
  setInput,
  onSend,
}) {
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(
      e.target.scrollHeight,
      220
    )}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (input.trim()) {
        onSend();
      }
    }
  };

  return (
    <motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.35,
    ease: "easeOut",
  }}
  className="sticky bottom-0 z-20 border-t border-white/10 bg-[#050816]/70 backdrop-blur-2xl px-3 sm:px-5 lg:px-6 py-4">
      <div className="rounded-[28px] border border-white/10 bg-[#081224]/90 shadow-[0_15px_45px_rgba(0,0,0,.25)] transition-all duration-300 focus-within:border-cyan-500/40 focus-within:shadow-[0_0_35px_rgba(34,211,238,.18)]">

        {/* Textarea */}

        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask Rohix AI anything..."
          className="
            w-full
            resize-none
            bg-transparent
            px-5
            pt-5
            text-sm
            sm:text-base
            text-white
            transition-all
            duration-300
            placeholder:text-gray-500
            outline-none
            max-h-[220px]
            overflow-y-auto
            scrollbar-hide
          "
        />

        {/* Bottom */}

        <div className="flex items-center justify-between px-4 py-3">

          {/* Left Buttons */}

          <div className="flex items-center gap-2">

            <button
              className="
                h-10
                w-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-gray-400
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-500/40
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <FiPaperclip size={18} />
            </button>

            <button
              className="
                h-10
                w-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-gray-400
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-500/40
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <FiGlobe size={18} />
            </button>

            <button
              className="
                h-10
                w-10
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-gray-400
                transition-all
                duration-300
                hover:scale-105
                hover:border-cyan-500/40
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <FiSliders size={18} />
            </button>

          </div>

          {/* Send Button */}

          <button
            onClick={onSend}
            disabled={!input.trim()}
            className={`
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              transition-all
              duration-300
              ${
                input.trim()
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-110 active:scale-95 shadow-[0_0_25px_rgba(34,211,238,.35)]"
                  : "cursor-not-allowed bg-[#111827]"
              }
            `}
          >
            <FiSend className="text-lg text-white" />
          </button>

        </div>

      </div>

      <p className="mt-3 text-center text-[11px] text-gray-500">
        Press <span className="text-cyan-400">Enter</span> to send •
        <span className="text-cyan-400">
          {" "}
          Shift + Enter
        </span>{" "}
        for new line
      </p>

    </motion.div>
  );
}