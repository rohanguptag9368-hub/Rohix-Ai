import { askGemini } from "../api/gemini";

export default function useSendMessage({
  input,
  setInput,
  loading,
  setLoading,
  setMessages,
  saveChat,
  setShowExplore,
}) {
  // ================= SEND MESSAGE =================

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const prompt = input.trim();

    const userMessage = {
      role: "user",
      text: prompt,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const response = await askGemini(prompt);

      setMessages((prev) => {
        const updated = [
          ...prev,
          {
            role: "ai",
            text: response,
          },
        ];

        // Save updated conversation
        saveChat(updated);

        return updated;
      });
    } catch (error) {
      setMessages((prev) => {
        const updated = [
          ...prev,
          {
            role: "ai",
            text: "❌ " + error.message,
          },
        ];

        saveChat(updated);

        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  // ================= EXPLORE =================

  const startExplore = async (prompt) => {
    setShowExplore(false);

    const userMessage = {
      role: "user",
      text: prompt,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await askGemini(prompt);

      setMessages((prev) => {
        const updated = [
          ...prev,
          {
            role: "ai",
            text: response,
          },
        ];

        saveChat(updated);

        return updated;
      });
    } catch (error) {
      setMessages((prev) => {
        const updated = [
          ...prev,
          {
            role: "ai",
            text: "❌ " + error.message,
          },
        ];

        saveChat(updated);

        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    sendMessage,
    startExplore,
  };
}