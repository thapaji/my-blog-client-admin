import { Menubar } from "primereact/menubar";
import React from "react";
import { RiAddLine, RiHomeLine, RiLogoutBoxLine, RiUserLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/users/userSlice";
import { useDispatch } from "react-redux";

export const MenuBar = ({ visible, setVisible }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNewPostClick = () => {
    setVisible(true);
  };

  const handleSignoutClick = () => {
    dispatch(setUser({}));
    navigate("/");
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
      command: () => navigate("/dashboard"),
    },
    {
      label: "Profile",
      icon: <RiUserLine />,
      command: () => navigate("/profile"),
    },
    {
      label: "Signout",
      icon: <RiLogoutBoxLine />,
      command: handleSignoutClick,
    },
  ];

  return (
    <div className="p-menubar justify-content-between px-5 shadow-8">
      <h3>Hello Sujan</h3>
      <Menubar model={menuItems} className="border-none" />
    </div>
  );
};
