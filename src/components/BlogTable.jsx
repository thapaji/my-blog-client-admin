import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Fieldset } from "primereact/fieldset";
import React, { useState } from "react";

export const BlogTable = () => {
  const [posts, setPosts] = useState([]);

  return (
    <Fieldset legend="Dashboard" className="p-4 shadow-8">
      <DataTable value={posts} paginator rows={10}>
        <Column field="sn" header="S.N." sortable />
        <Column field="description" header="Description" sortable />
        <Column field="date" header="Date Created" sortable />
        <Column field="status" header="Status" sortable />
      </DataTable>
    </Fieldset>
  );
};
