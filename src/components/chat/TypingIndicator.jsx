export default function TypingIndicator() {
  return (
    <div className="flex gap-2 py-5">

      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>

      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-100"></div>

      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-200"></div>

    </div>
  );
}