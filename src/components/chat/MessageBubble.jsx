import { useState } from "react";
import { FiUser, FiCopy, FiCheck } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MessageBubble({
  role,
  message,
}) {
  const isUser = role === "user";

  const [copied, setCopied] = useState("");

  const copyCode = async (text) => {
    await navigator.clipboard.writeText(text);

    setCopied(text);

    setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  return (
    <div
      className={`mb-6 flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 shadow-[0_0_20px_rgba(34,211,238,.35)]">
          <RiRobot2Line className="text-lg text-white" />
        </div>
      )}

      {/* Bubble */}
      <div
        className={`group relative max-w-[90%] sm:max-w-[80%] lg:max-w-4xl rounded-3xl px-4 py-3 sm:px-5 sm:py-4 transition-all duration-300 ${
          isUser
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-lg shadow-[0_0_20px_rgba(34,211,238,.25)]"
            : "border border-white/10 bg-white/5 text-gray-200 backdrop-blur-xl rounded-bl-lg hover:border-cyan-500/20 hover:bg-white/10"
        }`}
      >
        {/* Role */}
        <div
          className={`mb-2 text-[11px] font-semibold uppercase tracking-widest ${
            isUser ? "text-cyan-100" : "text-cyan-400"
          }`}
        >
          {isUser ? "You" : "Rohix AI"}
        </div>

        {/* Message */}
        <div className="prose prose-invert max-w-none break-words text-sm leading-7">
          <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  rehypePlugins={[rehypeHighlight]}
  components={{
    h1: ({ children }) => (
      <h1 className="mt-6 mb-3 text-3xl font-bold text-white">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-5 mb-3 text-2xl font-semibold text-white">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-4 mb-2 text-xl font-semibold text-white">
        {children}
      </h3>
    ),

    p: ({ children }) => (
      <p className="mb-4 leading-8 text-gray-200">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="text-gray-200">
        {children}
      </li>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-cyan-500 pl-4 italic text-gray-300">
        {children}
      </blockquote>
    ),

    code({ inline, className, children }) {
      const match = /language-(\w+)/.exec(className || "");
     const code = Array.isArray(children)
  ? children.join("")
  : String(children).replace(/\n$/, "");

      if (!inline && match) {
        return (
          <div className="my-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">
            <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-2">
              <span className="text-xs uppercase tracking-wider text-cyan-400">
                {match[1]}
              </span>

              <button
                onClick={() => copyCode(code)}
                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-xs text-gray-300 transition hover:bg-cyan-500 hover:text-white"
              >
                {copied === code ? (
                  <>
                    <FiCheck size={14} />
                    Copied
                  </>
                ) : (
                  <>
                    <FiCopy size={14} />
                    Copy
                  </>
                )}
              </button>
            </div>

            <SyntaxHighlighter
              language={match[1]}
              style={oneDark}
              customStyle={{
                margin: 0,
                padding: "18px",
                background: "#0d1117",
                fontSize: "14px",
                borderRadius: 0,
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      }

      return (
        <code className="rounded bg-cyan-500/20 px-1.5 py-1 text-cyan-300">
          {children}
        </code>
      );
    },
                      }}
                >
                  {message}
                </ReactMarkdown>
              </div>
            </div>

            {/* User Avatar */}
            {isUser && (
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(59,130,246,.35)]">
                <FiUser className="text-white" />
              </div>
            )}
          </div>
        );
      }
        