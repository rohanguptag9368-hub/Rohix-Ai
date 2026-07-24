import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import GlowBackground from "../ui/GlowBackground";

export default function MainLayout() {
  const [newChatTrigger, setNewChatTrigger] = useState(0);
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#030712] text-white">

      <GlowBackground />

      <Sidebar
        onNewChat={() => setNewChatTrigger((prev) => prev + 1)}
        onExplore={() => setShowExplore(true)}
      />

      <div className="relative z-10 flex flex-1 flex-col">

        <Header />

        <main className="flex-1 overflow-auto p-8">

          <Outlet
            context={{
              newChatTrigger,
              showExplore,
              setShowExplore,
            }}
          />

        </main>

      </div>

    </div>
  );
}