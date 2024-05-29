import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Menubar } from "primereact/menubar";
import { Fieldset } from "primereact/fieldset";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const menuItems = [
    {
      label: "New Post",
      icon: "pi pi-home",
    },
    {
      label: "Profile",
      icon: "pi pi-star",
    },
    {
      label: "Signout",
      icon: "pi pi-search",
    },
  ];

  return (
    <>
      <div className="p-menubar p-jc-between">
        <h3>Hello Sujan</h3>
        <Menubar model={menuItems} />
      </div>

      <div className="main">
        {" "}
        <Fieldset legend="Dashboard" className="p-d-flex p-p-4 p-shadow-2">
          <DataTable value={posts} paginator rows={10}>
            <Column field="title" header="Title" sortable />
            <Column field="author" header="Author" sortable />
            <Column field="createdAt" header="Date Created" sortable />
            <Column
              header="Actions"
              body={(rowData) => (
                <>
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-warning" />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" />
                </>
              )}
            />
          </DataTable>
          <Button label="Create New Post" icon="pi pi-plus" className="p-button-success" />
        </Fieldset>
      </div>
    </>
  );
};

export default Dashboard;
