import { createContext, useContext, useEffect, useState } from "react";


// Create Context
const ChatContext = createContext();



export const ChatProvider = ({ children }) => {


  // Current active chat messages
  const [messages, setMessages] = useState([]);


  // All chat history
  const [chats, setChats] = useState([]);



  // Load saved chats when app starts
  useEffect(() => {

    const savedChats = localStorage.getItem("rohix_chats");


    if (savedChats) {

      setChats(JSON.parse(savedChats));

    }

  }, []);




  // Automatically save chats
  useEffect(() => {

    localStorage.setItem(
      "rohix_chats",
      JSON.stringify(chats)
    );

  }, [chats]);





  // Add message
  const addMessage = (message) => {

    setMessages((prev) => [
      ...prev,
      message
    ]);

  };






  // Save current conversation
  const saveChat = () => {


    if (messages.length <= 1) return;



    const newChat = {

      id: Date.now(),


      title:
        messages.find(
          (msg) => msg.role === "user"
        )?.text?.slice(0, 30) || "New Chat",



      messages: messages,


      createdAt: new Date().toISOString()

    };



    setChats((prev) => [

      newChat,

      ...prev

    ]);

  };







  // Load selected chat
  const loadChat = (chat) => {

    setMessages(chat.messages);

  };







  // Delete chat
  const deleteChat = (chatId) => {

    setChats((prev) =>

      prev.filter(
        (chat) => chat.id !== chatId
      )

    );

  };







  // Clear current chat
  const clearChat = () => {

    setMessages([]);

  };






  return (

    <ChatContext.Provider

      value={{

        // Current chat

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