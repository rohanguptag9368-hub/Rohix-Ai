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

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: prompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await askGemini(prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response,
        },
      ]);

      setTimeout(() => {
        saveChat();
      }, 300);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ " + error.message,
        },
      ]);

      setTimeout(() => {
        saveChat();
      }, 300);

    } finally {

      setLoading(false);

    }
  };

  // ================= EXPLORE =================

  const startExplore = async (prompt) => {

    setShowExplore(false);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: prompt,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setLoading(true);

    try {

      const response = await askGemini(prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response,
        },
      ]);

    } catch {

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ Failed to generate response.",
        },
      ]);

    } finally {

      setLoading(false);

    }
  };

  return {
    sendMessage,
    startExplore,
  };
}