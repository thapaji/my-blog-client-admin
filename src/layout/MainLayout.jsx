import React from "react";
import { MenuBar } from "../components/MenuBar";
import AddNew from "../pages/AddNew";

const MainLayout = ({ children, visible, setVisible }) => {
  return (
    <>
      {" "}
      <MenuBar visible={visible} setVisible={setVisible} />
      <div className="main">{children}</div>
      <AddNew visible={visible} setVisible={setVisible} />
    </>
  );
};

export default MainLayout;
