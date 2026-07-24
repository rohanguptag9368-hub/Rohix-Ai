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
    e.target.style.height = `${Math.min(e.target.scrollHeight, 220)}px`;
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
    <div className="border-t border-white/10 bg-[#050816]/80 backdrop-blur-xl px-3 sm:px-5 lg:px-6 py-3 sm:py-4">

      <div className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(34,211,238,.05)] transition-all duration-300 focus-within:border-cyan-500/40 focus-within:shadow-[0_0_35px_rgba(34,211,238,.18)]">

        {/* Text Area */}

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
            placeholder:text-gray-500
            outline-none
            max-h-[220px]
            overflow-y-auto
          "
        />

        {/* Bottom */}

        <div className="flex items-center justify-between px-4 py-3">

          {/* Left */}

          <div className="flex items-center gap-2">

            <button className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400">

              <FiPaperclip size={18} />

            </button>

            <button className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400">

              <FiGlobe size={18} />

            </button>

            <button className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400">

              <FiSliders size={18} />

            </button>

          </div>

          {/* Right */}

          <button
            onClick={onSend}
            disabled={!input.trim()}
            className={`
              h-12
              w-12
              rounded-2xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              ${
                input.trim()
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 shadow-[0_0_25px_rgba(34,211,238,.35)]"
                  : "bg-white/10 cursor-not-allowed"
              }
            `}
          >

            <FiSend className="text-white text-lg" />

          </button>

        </div>

      </div>

      {/* Hint */}

      <p className="mt-3 text-center text-[11px] text-gray-500">

        Press <span className="text-cyan-400">Enter</span> to send •
        <span className="text-cyan-400"> Shift + Enter</span> for new line

      </p>

    </div>
  );
}