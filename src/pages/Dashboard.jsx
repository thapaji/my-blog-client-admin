import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Menubar } from "primereact/menubar";
import { Fieldset } from "primereact/fieldset";
import AddNew from "./AddNew";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(false);
  // const clickAddNew = () => {}

  const menuItems = [
    {
      label: "New Post",
      icon: "pi pi-home",
      className: "hover:text-white hover:bg-gray-500",
      command: (e) => {
        setVisible(true);
      },
    },
    {
      label: "Profile",
      icon: "pi pi-star",
      className: "hover:text-white hover:bg-gray-500",
      url: "/profile",
    },
    {
      label: "Signout",
      icon: "pi pi-search",
      className: "hover:text-white hover:bg-gray-500",
      url: "./",
    },
  ];

  return (
    <>
      <div className="p-menubar justify-content-between px-5 shadow-8">
        <h3>Hello Sujan</h3>
        <Menubar model={menuItems} className="border-none" />
      </div>

      <div className="main">
        {" "}
        <Fieldset legend="Dashboard" className="p-4 shadow-8">
          <DataTable value={posts} paginator rows={10}>
            <Column field="sn" header="S.N." sortable />
            <Column field="description" header="Description" sortable />
            <Column field="date" header="Date Created" sortable />
            <Column field="status" header="Status" sortable />
          </DataTable>
        </Fieldset>
      </div>
      <AddNew visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Dashboard;
