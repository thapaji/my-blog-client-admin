import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React from "react";
import { useForm } from "react-hook-form";
import {
  RiEdit2Line,
  RiRefreshLine,
  RiAddLine,
  RiSaveLine,
  RiCheckLine,
  RiPriceTag3Line,
  RiFolderLine,
  RiFileTextLine,
} from "react-icons/ri";
import { postNewBlog } from "../features/blogs/blogAxios";

export const AddEditForm = ({ add = true }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { status, message } = (await add) ? postNewBlog(data) : updateBlogPost(data);
  };

  return (
    <>
      <form action="" className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-field">
          <label htmlFor="title">Title</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <RiEdit2Line />
            </span>
            <InputText
              id="title"
              name="title"
              placeholder="Enter Blog Title"
              {...register("title")}
            />
          </div>
        </div>
        <div className="p-field">
          <label htmlFor="category">Category</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <RiFolderLine />
            </span>
            <InputText
              id="category"
              name="category"
              placeholder="Enter Blog Category"
              {...register("category")}
            />
          </div>
        </div>
        <div className="p-field">
          <label htmlFor="tags">Tags</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <RiPriceTag3Line />
            </span>
            <InputText
              id="tags"
              name="tags"
              placeholder="Enter Blog Hash Tags separated by comma"
              {...register("tags")}
            />
          </div>
        </div>
        <div className="p-field">
          <label htmlFor="post">Post Content</label>
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <RiFileTextLine />
            </span>
            <InputTextarea
              id="post"
              name="post"
              placeholder="Enter Blog Post"
              rows={15}
              {...register("content")}
            />
          </div>
        </div>
        {add ? (
          <div className="flex justify-content-between gap-5">
            <Button type="submit" icon={<RiAddLine />} label="Add" />
            <Button
              type="button"
              severity="info"
              icon={<RiRefreshLine />}
              label="Reset"
              onClick={() => {}}
            />
          </div>
        ) : (
          <div className="flex justify-content-between gap-5">
            <Button type="submit" icon={<RiSaveLine />} label="Save" />
            <Button
              type="button"
              severity="success"
              icon={<RiCheckLine />}
              label="Activate"
              onClick={() => {}}
            />
            <Button
              type="button"
              severity="info"
              icon={<RiRefreshLine />}
              label="Reset"
              onClick={() => {}}
            />
          </div>
        )}
      </form>
    </>
  );
};
