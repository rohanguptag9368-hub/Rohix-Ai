import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import { useChat } from "../../context/ChatContext";

import WelcomeSection from "./WelcomeSection";
import ChatMessages from "./ChatMessages";
import ChatInputSection from "./ChatInputSection";
import ThinkingCard from "./ThinkingCard";
import RightPanel from "./RightPanel";
import ExploreScreen from "./ExploreScreen";

import useSendMessage from "../../hooks/useSendMessage";
import useCopyMessage from "../../hooks/useCopyMessage";

export default function ChatWindow() {
  const {
    newChatTrigger,
    showExplore,
    setShowExplore,
  } = useOutletContext();

  const {
    messages,
    setMessages,
    saveChat,
    clearChat,
  } = useChat();

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  const defaultMessages = [
    {
      role: "ai",
      text:
        "👋 Welcome to Rohix AI.\n\nI'm your intelligent AI assistant. Ask me anything.",
    },
  ];

  // New Chat
  useEffect(() => {
    clearChat();
    setMessages(defaultMessages);
    setInput("");
  }, [newChatTrigger]);

  // Auto Scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const copyMessage = useCopyMessage();

  const {
    sendMessage,
    startExplore,
  } = useSendMessage({
    input,
    setInput,
    loading,
    setLoading,
    setMessages,
    saveChat,
    setShowExplore,
  });

  if (showExplore) {
    return (
      <ExploreScreen
        onSelect={startExplore}
        onBack={() => setShowExplore(false)}
      />
    );
  }

  return (
    <div className="flex h-[calc(100vh-64px)] gap-4 lg:gap-6 overflow-hidden">
      <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden">
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

      <RightPanel />
    </div>
  );
}