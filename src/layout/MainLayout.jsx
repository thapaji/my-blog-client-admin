import React from "react";
import { MenuBar } from "../components/MenuBar";
import AddNew from "../pages/AddNew";
import { AuthComponent } from "../components/AuthComponent";

const MainLayout = ({ children, visible, setVisible }) => {
  return (
    <AuthComponent>
      {" "}
      <MenuBar visible={visible} setVisible={setVisible} />
      <div className="main">{children}</div>
      <AddNew visible={visible} setVisible={setVisible} />
    </AuthComponent>
  );
};

export default MainLayout;
