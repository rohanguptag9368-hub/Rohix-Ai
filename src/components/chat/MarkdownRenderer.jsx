import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownRenderer({ text }) {

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

  return (
    <div className="prose prose-invert max-w-none break-words">

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={MarkdownComponents}
      >
        {text}
      </ReactMarkdown>

    </div>
  );
}