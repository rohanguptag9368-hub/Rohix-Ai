import WelcomeSection from "./WelcomeSection";
import ChatMessages from "./ChatMessages";
import ThinkingCard from "./ThinkingCard";

export default function ChatContent({
  messages,
  loading,
  setInput,
  copyMessage,
  bottomRef,
}) {
  return (
    <>
      {messages.length === 1 && (
        <WelcomeSection
          setInput={setInput}
        />
      )}

      <ChatMessages
        messages={messages}
        copyMessage={copyMessage}
      />

      {loading && <ThinkingCard />}

      <div ref={bottomRef} />
    </>
  );
}