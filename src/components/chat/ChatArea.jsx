import EmptyState from "./EmptyState";
import ChatInput from "./ChatInput";

export default function ChatArea({
  messages,
  input,
  setInput,
  onSend,
}) {
  return (
    <section className="flex flex-col h-full bg-transparent">

      {/* Chat Body */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-5 lg:px-8 py-4">

        {messages.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mx-auto w-full max-w-5xl">
            {messages}
          </div>
        )}

      </div>

      {/* Bottom Input */}
      <div className="sticky bottom-0 border-t border-white/10 bg-[#050816]/80 backdrop-blur-2xl px-2 sm:px-4 lg:px-6 py-3">

        <div className="mx-auto w-full max-w-5xl">

          <ChatInput
            input={input}
            setInput={setInput}
            onSend={onSend}
          />

        </div>

      </div>

    </section>
  );
}