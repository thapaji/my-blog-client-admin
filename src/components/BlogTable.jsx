import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Fieldset } from "primereact/fieldset";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs, getSingleBlog } from "../features/blogs/blogAction";
import EditBlog from "../pages/EditBlog";

export const BlogTable = () => {
  const [showEdit, setShowEdit] = useState(false);
  const { blogs } = useSelector((state) => state.blogPosts);
  const [id, setId] = useState("");
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

  const handleRowClick = (clickedId) => {
    setId(clickedId);
    dispatch(getSingleBlog(clickedId));
    setShowEdit(true);
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
      <EditBlog showEdit={showEdit} setShowEdit={setShowEdit} id={id} />
    </Fieldset>
  );
};
