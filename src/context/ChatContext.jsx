import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const [chats, setChats] = useState([]);

  const [currentChatId, setCurrentChatId] = useState(null);

  // ================= Load Chats =================

  useEffect(() => {
    const saved = localStorage.getItem("rohix_chats");

    if (saved) {
      setChats(JSON.parse(saved));
    }
  }, []);

  // ================= Save LocalStorage =================

  useEffect(() => {
    localStorage.setItem(
      "rohix_chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  // ================= Add Message =================

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  // ================= Save Chat =================

  const saveChat = (currentMessages) => {
    // Ignore only welcome message
    if (
      currentMessages.length === 1 &&
      currentMessages[0].role === "ai"
    ) {
      return;
    }

    // Existing chat → update
    if (currentChatId !== null) {
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === currentChatId
            ? {
                ...chat,
                messages: currentMessages,
              }
            : chat
        )
      );

      return;
    }

    // New chat
    const id = Date.now();

    const newChat = {
      id,
      title:
        currentMessages.find(
          (m) => m.role === "user"
        )?.text.slice(0, 30) || "New Chat",

      messages: currentMessages,

      createdAt: new Date().toISOString(),
    };

    setChats((prev) => [newChat, ...prev]);

    setCurrentChatId(id);
  };

  // ================= Load Chat =================

  const loadChat = (chat) => {
    setMessages(chat.messages);
    setCurrentChatId(chat.id);
  };

  // ================= Delete =================

  const deleteChat = (id) => {
    setChats((prev) =>
      prev.filter((chat) => chat.id !== id)
    );

    if (currentChatId === id) {
      setMessages([]);
      setCurrentChatId(null);
    }
  };

  // ================= New Chat =================

  const clearChat = () => {
    setCurrentChatId(null);

    setMessages([
      {
        role: "ai",
        text:
          "👋 Welcome to Rohix AI.\n\nI'm your intelligent AI assistant. Ask me anything.",
      },
    ]);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        addMessage,

        chats,
        saveChat,
        loadChat,
        deleteChat,

        clearChat,

        currentChatId,
        setCurrentChatId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider"
    );
  }

  return context;
};