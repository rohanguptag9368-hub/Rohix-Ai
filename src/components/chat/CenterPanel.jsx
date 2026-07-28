import WelcomeSection from "./WelcomeSection";
import ChatMessages from "./ChatMessages";
import ThinkingCard from "./ThinkingCard";
import ChatInputSection from "./ChatInputSection";

export default function CenterPanel({
  messages,
  loading,
  input,
  setInput,
  sendMessage,
  copyMessage,
  bottomRef,
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">

      {messages.length === 1 && (
        <WelcomeSection setInput={setInput} />
      )}

      <ChatMessages
        messages={messages}
        copyMessage={copyMessage}
      />

      {loading && <ThinkingCard />}

      <div ref={bottomRef} />

      <ChatInputSection
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        loading={loading}
      />

    </div>
  );
}