import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";

export default function Message({ message }) {
  if (message.role === "user") {
    return <UserMessage message={message} />;
  }

  return <AIMessage message={message} />;
}