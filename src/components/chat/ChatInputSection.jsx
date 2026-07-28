import PromptInput from "./PromptInput";

export default function ChatInputSection({
  input,
  setInput,
  sendMessage,
  loading,
}) {
  return (
    <PromptInput
      input={input}
      setInput={setInput}
      onSend={sendMessage}
      loading={loading}
    />
  );
}