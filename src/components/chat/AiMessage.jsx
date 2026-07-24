import { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";

export default function AIMessage({ message }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    setDisplayText("");

    const interval = setInterval(() => {
      index++;

      setDisplayText(message.slice(0, index));

      if (index >= message.length) {
        clearInterval(interval);
      }
    }, 8);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <MessageBubble
      role="assistant"
      message={displayText}
    />
  );
}