import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import SidebarHeader from "../sidebar/SidebarHeader";
import NewChatButton from "../sidebar/NewChatButton";
import SearchBox from "../sidebar/SearchBox";
import UpgradeCard from "../sidebar/UpgradeCard";
import SidebarMenu from "../sidebar/SidebarMenu";
import RecentChats from "../sidebar/RecentChats";
import UserProfileCard from "../sidebar/UserProfileCard";
import { motion } from "framer-motion";
export default function Sidebar({
  onNewChat,
  onExplore,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#081224] text-white lg:hidden"
      >
        <FiMenu size={22} />
      </button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
  initial={{ x: -20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    duration: 0.35,
    ease: "easeOut",
  }}
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[280px]
          flex-col
          overflow-hidden
          border-r
          border-white/10
          bg-[#050816]/95
          backdrop-blur-2xl
          transition-all
          duration-300
          lg:sticky
          lg:top-0
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,.08),transparent_45%)]" />

        {/* Fixed Header */}
        <SidebarHeader setOpen={setOpen} />

        {/* Fixed New Chat */}
        <NewChatButton
          onNewChat={onNewChat}
          setOpen={setOpen}
        />

        {/* Scrollable Area */}
        <div className="sidebar-scroll flex-1 overflow-y-auto">

          <SearchBox />

          <UpgradeCard
            setOpen={setOpen}
          />

          <SidebarMenu
            onExplore={onExplore}
            setOpen={setOpen}
          />

          <RecentChats
            setOpen={setOpen}
          />

        </div>

        {/* Fixed Bottom */}
        <UserProfileCard
          setOpen={setOpen}
        />

      </motion.aside>
    </>
  );
}