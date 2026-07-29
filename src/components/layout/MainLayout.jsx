import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import GlowBackground from "../ui/GlowBackground";

export default function MainLayout() {
  const [newChatTrigger, setNewChatTrigger] = useState(0);
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div
      className="
        relative
        flex
        h-screen
        overflow-hidden
        bg-[#030712]
        text-white
        antialiased
      "
    >
      {/* Background */}
      <GlowBackground />

      {/* Sidebar */}
      <Sidebar
        onNewChat={() => setNewChatTrigger((prev) => prev + 1)}
        onExplore={() => setShowExplore(true)}
      />

      {/* Main */}
      <div
        className="
          relative
          z-10
          flex
          min-w-0
          flex-1
          flex-col
          overflow-hidden
          transform-gpu
          transition-all
          duration-300
        "
      >
        <main
          className="
            flex-1
            overflow-hidden
            px-4
            py-4

            sm:px-6
            sm:py-5

            lg:px-8
            lg:py-6

            xl:px-10
          "
        >
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