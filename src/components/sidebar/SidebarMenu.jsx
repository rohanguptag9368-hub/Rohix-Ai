import {
  FiMessageSquare,
  FiCompass,
  FiFolder,
  FiClock,
  FiBookmark,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";

export default function SidebarMenu({
  onExplore,
  setOpen,
}) {
  const navigate = useNavigate();

  const menu = [
    {
      title: "Chat",
      icon: <FiMessageSquare />,
      active: true,
    },
    {
      title: "Explore",
      icon: <FiCompass />,
      onClick: () => onExplore(),
    },
    {
      title: "Vault",
      icon: <FiFolder />,
      onClick: () => navigate("/vault"),
    },
    {
      title: "History",
      icon: <FiClock />,
    },
    {
      title: "Bookmarks",
      icon: <FiBookmark />,
      onClick: () => navigate("/bookmarks"),
    },
  ];

  return (
    <div className="mt-5 space-y-2 px-4">
      {menu.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          active={item.active}
          onClick={() => {
            item.onClick?.();
            setOpen(false);
          }}
        />
      ))}
    </div>
  );
}