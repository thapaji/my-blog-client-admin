import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";

export const AddEditForm = ({ add = true }) => {
  return (
    <>
      <form action="" className="p-fluid">
        <div className="p-field">
          <label htmlFor="title">Title</label>
          <InputText id="title" name="title" placeholder="Enter Blog Title" />
        </div>
        <div className="p-field">
          <label htmlFor="category">Category</label>
          <InputText id="category" name="category" placeholder="Enter Blog Category" />
        </div>
        <div className="p-field">
          <label htmlFor="tags">Tags</label>
          <InputText id="tags" name="tags" placeholder="Enter Blog Hash Tags separated by comma" />
        </div>
        <div className="p-field">
          <label htmlFor="POST">Post Content</label>
          <InputTextarea id="post" name="post" placeholder="Enter Blog Post " rows={15} />
        </div>
        <div className="flex justify-content-between gap-5">
          {" "}
          <Button type="submit" >Add</Button> <Button severity="info">Reset</Button>
        </div>
      </form>
    </>
  );
};
