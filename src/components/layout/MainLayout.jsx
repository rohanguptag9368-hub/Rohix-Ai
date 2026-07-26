import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import GlowBackground from "../ui/GlowBackground";

export default function MainLayout() {
  const [newChatTrigger, setNewChatTrigger] = useState(0);
  const [showExplore, setShowExplore] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-[#030712] text-white">

      {/* Background */}
      <GlowBackground />

      {/* Sidebar */}
      <Sidebar
        onNewChat={() => setNewChatTrigger((prev) => prev + 1)}
        onExplore={() => setShowExplore(true)}
      />

      {/* Main Content */}
      <div className="relative z-10 flex min-w-0 flex-1 flex-col">

        {/* <Header /> */}

        <main
          className="
            flex-1
            min-w-0
            overflow-y-auto
            overflow-x-hidden

            px-4
            py-5

            sm:px-6
            sm:py-6

            lg:px-8
            lg:py-8

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