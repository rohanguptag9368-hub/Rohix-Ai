const Chat = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white flex flex-col">

      <div className="flex-1 p-10">

        <div className="max-w-3xl mx-auto">

          <div className="bg-[#102542] p-5 rounded-xl mb-5">
            👤 Hello Rohix
          </div>

          <div className="bg-cyan-600 p-5 rounded-xl">
            🤖 Hello! How can I help you today?
          </div>

        </div>

      </div>

      <div className="border-t border-cyan-700 p-5">

        <div className="max-w-3xl mx-auto flex gap-3">

          <input
            className="flex-1 p-4 rounded-xl bg-[#102542] outline-none"
            placeholder="Ask Rohix AI..."
          />

          <button className="bg-cyan-500 px-8 rounded-xl">
            Send
          </button>

        </div>

      </div>

    </div>
  );
};

export default Chat;