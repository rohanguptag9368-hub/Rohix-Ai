import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  // Current active chat messages
  const [messages, setMessages] = useState([]);

  // All chat history
  const [chats, setChats] = useState([]);

  // Load saved chats
  useEffect(() => {
    const savedChats = localStorage.getItem("rohix_chats");

    if (savedChats) {
      setChats(JSON.parse(savedChats));
    }
  }, []);

  // Auto Save
  useEffect(() => {
    localStorage.setItem(
      "rohix_chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  // Add Message
  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  // Save Current Chat
  const saveChat = (currentMessages) => {
    if (currentMessages.length <= 1) return;

    const newChat = {
      id: Date.now(),

      title:
        currentMessages.find(
          (msg) => msg.role === "user"
        )?.text?.slice(0, 30) || "New Chat",

     messages: currentMessages,

      createdAt: new Date().toISOString(),
    };

    setChats((prev) => [newChat, ...prev]);
  };

  // Load Chat
  const loadChat = (chat) => {
    setMessages(chat.messages);
  };

  // Delete Chat
  const deleteChat = (chatId) => {
    setChats((prev) =>
      prev.filter((chat) => chat.id !== chatId)
    );
  };

  // Clear Current Chat
  const clearChat = () => {
    setMessages([]);
  };

  return (
    <ChatContext.Provider
      value={{
        // Current Chat
        messages,
        setMessages,
        addMessage,
        clearChat,

        // History
        chats,
        saveChat,
        loadChat,
        deleteChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Custom Hook
export const useChat = () => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error(
      "useChat must be used inside ChatProvider"
    );
  }

  return context;
};