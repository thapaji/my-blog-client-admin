import { Menubar } from "primereact/menubar";
import React from "react";
import { RiAddLine, RiHomeLine, RiLogoutBoxLine, RiUserLine } from "react-icons/ri";

export const MenuBar = ({ visible, setVisible }) => {
  const handleNewPostClick = () => {
    setVisible(true);
  };

  const handleSignoutClick = () => {
    // Handle signout click
  };

  const menuItems = [
    {
      label: "New Post",
      icon: <RiAddLine />,
      command: handleNewPostClick,
    },
    {
      label: "Home",
      icon: <RiHomeLine />,
      url: "/dashboard",
    },
    {
      label: "Profile",
      icon: <RiUserLine />,
      url: "/profile",
    },
    {
      label: "Signout",
      icon: <RiLogoutBoxLine />,
      url: "/",
    },
  ];

  return (
    <div className="p-menubar justify-content-between px-5 shadow-8">
      <h3>Hello Sujan</h3>
      <Menubar model={menuItems} className="border-none" />
    </div>
  );
};
