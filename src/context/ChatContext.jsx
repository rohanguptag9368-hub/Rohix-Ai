import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  // Current active messages
  const [messages, setMessages] = useState([]);

  // Chat history
  const [chats, setChats] = useState([]);

  // Current opened chat
  const [currentChatId, setCurrentChatId] = useState(null);

  // ================= Load Chats =================

  useEffect(() => {
    const savedChats = localStorage.getItem("rohix_chats");

    if (savedChats) {
      setChats(JSON.parse(savedChats));
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

  // ================= Save / Update Chat =================

  const saveChat = (currentMessages) => {
    if (currentMessages.length <= 1) return;

    if (currentChatId === null) {
      const chatId = Date.now();

      const newChat = {
        id: chatId,

        title:
          currentMessages.find(
            (msg) => msg.role === "user"
          )?.text?.slice(0, 30) || "New Chat",

        messages: currentMessages,

        createdAt: new Date().toISOString(),
      };

      setChats((prev) => [newChat, ...prev]);

      setCurrentChatId(chatId);

    } else {
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
    }
  };

  // ================= Load Chat =================

  const loadChat = (chat) => {
    setMessages(chat.messages);
    setCurrentChatId(chat.id);
  };

  // ================= Delete Chat =================

  const deleteChat = (chatId) => {
    setChats((prev) =>
      prev.filter((chat) => chat.id !== chatId)
    );

    if (chatId === currentChatId) {
      setMessages([]);
      setCurrentChatId(null);
    }
  };

  // ================= New Chat =================

  const clearChat = () => {
    setMessages([]);
    setCurrentChatId(null);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        addMessage,
        clearChat,

        chats,
        saveChat,
        loadChat,
        deleteChat,

        currentChatId,
        setCurrentChatId,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// ================= Hook =================

export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider"
    );
  }

  return context;
};