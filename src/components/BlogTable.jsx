import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Fieldset } from "primereact/fieldset";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogAction";

export const BlogTable = () => {
  // const [posts, setPosts] = useState([]);
  const { blogs } = useSelector((state) => state.blogPosts);
  // console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const trimContent = (content, maxLength = 30) =>
    content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  const handleRowClick = (id) => {
    console.log(id);
  };

  return (
    <Fieldset legend="Dashboard" className="p-4 shadow-8">
      <DataTable
        value={blogs}
        paginator
        rows={10}
        className="clickable-row"
        onRowClick={(event) => handleRowClick(event.data._id)}
      >
        <Column header="#" body={(data, options) => options.rowIndex + 1}></Column>
        <Column field="title" header="Title" sortable />
        <Column field="category" header="Category" sortable />
        <Column field="content" header="Description" body={(data) => trimContent(data.content)} />
        <Column
          field="createdAt"
          header="Date Created"
          sortable
          body={(data) => formatDate(data.createdAt)}
        />
        <Column
          field="isActive"
          header="Status"
          sortable
          body={(data) => (
            <span className={data.isActive ? "active font-bold" : "inactive"}>
              {data.isActive ? "Active" : "Inactive"}
            </span>
          )}
        />
      </DataTable>
    </Fieldset>
  );
};
