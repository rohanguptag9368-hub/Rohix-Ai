import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import MessageBubble from "./MessageBubble";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useChat } from "../../context/ChatContext";

import {
  FiSend,
  FiPaperclip,
  FiGlobe,
  FiSliders,
  FiThumbsUp,
  FiThumbsDown,
  FiCopy,
} from "react-icons/fi";

import {
  BsLightningChargeFill,
  BsShieldCheck,
  BsRocketTakeoff,
} from "react-icons/bs";

import { askGemini } from "../../api/gemini";
import ExploreScreen from "./ExploreScreen";

export default function ChatWindow() {
  const {
    newChatTrigger,
    showExplore,
    setShowExplore,
  } = useOutletContext();

  const defaultMessages = [
    {
      role: "ai",
      text:
        "👋 Welcome to Rohix AI.\n\nI'm your intelligent AI assistant. Ask me anything.",
    },
  ];
const { 
  messages, 
  setMessages, 
  saveChat 
} = useChat();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const bottomRef = useRef(null);

  useEffect(() => {
    setMessages(defaultMessages);
    setInput("");
  }, [newChatTrigger]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const copyMessage = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  };
  const MarkdownComponents = {
  code({ inline, className, children }) {
    const match = /language-(\w+)/.exec(className || "");
    const code = String(children).replace(/\n$/, "");

    if (!inline && match) {
      return (
        <div className="my-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">
          <div className="flex items-center justify-between bg-[#161b22] px-4 py-2 border-b border-white/10">
            <span className="text-xs uppercase tracking-wider text-cyan-400">
              {match[1]}
            </span>

            <button
              onClick={() => navigator.clipboard.writeText(code)}
              className="rounded-lg bg-white/5 px-3 py-1 text-xs hover:bg-cyan-500 hover:text-white"
            >
              Copy
            </button>
          </div>

          <SyntaxHighlighter
            language={match[1]}
            style={oneDark}
            customStyle={{
              margin: 0,
              background: "#0d1117",
              padding: "18px",
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );
    }

    return (
      <code className="rounded bg-cyan-500/20 px-1 py-0.5 text-cyan-300">
        {children}
      </code>
    );
  },
};

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const prompt = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: prompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await askGemini(prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response,
        },
      ]);
      setTimeout(() => {
      saveChat();
      }, 300);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ " + error.message,
        },
      ]);
      setTimeout(() => {
      saveChat();
      }, 300);
    } finally {
      setLoading(false);
    }
  };

  const startExplore = async (prompt) => {
    setShowExplore(false);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: prompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setLoading(true);

    try {
      const response = await askGemini(prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ Failed to generate response.",
        },
      ]);
    }

    setLoading(false);
  };

  if (showExplore) {
    return (
      <ExploreScreen
        onSelect={startExplore}
        onBack={() => setShowExplore(false)}
      />
    );
  }

  return (
        <div className="flex h-full gap-4 lg:gap-6">

      {/* ================= CENTER ================= */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* Welcome */}

        {messages.length === 1 && (

          <>
            <div className="text-center mt-6 md:mt-10 lg:mt-12 mb-8">

              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl shadow-[0_0_40px_rgba(59,130,246,.4)]">
                🤖
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-6">
                Welcome to Rohix AI
              </h1>

              <p className="text-sm md:text-base text-gray-400 mt-3">
                Your Premium AI Assistant
              </p>

            </div>

            {/* Suggestions */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-8">

              {[
                "Build React Dashboard",
                "Create Portfolio Website",
                "Generate Node API",
                "Explain Quantum Computing",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => setInput(item)}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-cyan-500/10"
                >

                  <h3 className="text-white text-sm md:text-base font-semibold">
                    {item}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mt-2">
                    Click to ask Rohix AI
                  </p>

                </button>

              ))}

            </div>

          </>
        )}

        {/* ================= CHAT ================= */}

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
                    : "bg-[#081224] border border-white/10 text-gray-200"
                }`}
              >
<div className="prose prose-invert max-w-none break-words">
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeHighlight]}
     components={MarkdownComponents}
  >
    {msg.text}
  </ReactMarkdown>
</div>

                {msg.role === "ai" && (

                  <div className="flex items-center gap-3 mt-4 text-gray-400">

                    <button
                      onClick={() => copyMessage(msg.text)}
                      className="hover:text-cyan-400"
                    >
                      <FiCopy />
                    </button>

                    <button className="hover:text-cyan-400">
                      <FiThumbsUp />
                    </button>

                    <button className="hover:text-cyan-400">
                      <FiThumbsDown />
                    </button>

                  </div>

                )}

              </div>

            </div>

          ))}
                    {/* AI Thinking */}

          {loading && (
  <div className="flex items-start gap-4 mb-6">

    {/* AI Avatar */}
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-xl shadow-[0_0_25px_rgba(34,211,238,.35)] animate-pulse">
      🤖
    </div>

    {/* Thinking Card */}
    <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#081224] p-5 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-base font-semibold text-white">
            Rohix AI
          </h3>

          <p className="mt-1 text-xs text-cyan-400">
            Thinking...
          </p>

        </div>

        <div className="flex gap-1">

          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce"></div>
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]"></div>
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]"></div>

        </div>

      </div>

      {/* Status */}

      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3 text-sm text-gray-300">
          🧠
          <span>Analyzing your request...</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-300">
          ⚡
          <span>Searching knowledge...</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-300">
          ✍️
          <span>Generating the best response...</span>
        </div>

      </div>

      {/* Progress */}

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

      </div>

    </div>

  </div>
)}

          <div ref={bottomRef}></div>

        </div>

        {/* ================= INPUT ================= */}

        <div className="mt-5 md:mt-6 border-t border-white/10 pt-5">

          <div className="rounded-2xl border border-white/10 bg-[#081224] p-4 max-h-[180px] overflow-y-auto">

            <textarea
             ref={textareaRef}
              rows={1}
              value={input}
              onChange={(e) => {
              setInput(e.target.value);

              e.target.style.height = "auto";
              e.target.style.height = `${Math.min(e.target.scrollHeight, 180)}px`;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask Rohix AI anything..."
              className="w-full resize-none bg-transparent text-sm md:text-base text-white placeholder:text-gray-500 outline-none"
            />

            <div className="mt-4 flex items-center justify-between">

              <div className="flex gap-3 text-lg text-gray-400">

                <button className="hover:text-cyan-400">
                  <FiPaperclip />
                </button>

                <button className="hover:text-cyan-400">
                  <FiGlobe />
                </button>

                <button className="hover:text-cyan-400">
                  <FiSliders />
                </button>

              </div>

              <button
                disabled={loading}
                onClick={sendMessage}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 transition disabled:opacity-50"
              >
                <FiSend />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ================= RIGHT PANEL ================= */}

      <div className="hidden xl:block w-[300px]">

        <div className="rounded-3xl border border-white/10 bg-[#081224] p-7">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-5xl shadow-[0_0_35px_rgba(59,130,246,.45)]">
            🤖
          </div>

          <h2 className="mt-5 text-center text-2xl font-bold text-white">
            ROHIX AI
          </h2>

          <p className="mt-2 text-center text-sm text-gray-400">
            Powered by Groq AI
          </p>

        </div>

        <Info
          icon={<BsLightningChargeFill />}
          title="Smart Responses"
          desc="Fast and accurate answers powered by advanced AI."
        />

        <Info
          icon={<BsShieldCheck />}
          title="Private & Secure"
          desc="Your conversations stay protected."
        />

        <Info
          icon={<BsRocketTakeoff />}
          title="Lightning Fast"
          desc="Premium speed with high quality responses."
        />

      </div>

    </div>

  );

}

/* ================= INFO CARD ================= */

function Info({ icon, title, desc }) {

  return (

    <div className="mt-5 rounded-2xl border border-white/10 bg-[#081224] p-5 hover:border-cyan-500/30 transition-all">

      <div className="text-3xl text-cyan-400">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-400 leading-6">
        {desc}
      </p>

    </div>

  );

}