import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
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
import { fetchSingleBlog, postNewBlog, updateBlogPost } from "../features/blogs/blogAxios";
import { toast } from "react-toastify";

export const AddEditForm = ({ add = true, id }) => {
  const { register, reset, handleSubmit } = useForm();
  const { clickedBlog } = useSelector((state) => state.blogPosts);

  useEffect(() => {
    reset(clickedBlog || {});
  }, [clickedBlog, reset]);

  const onSubmit = async (data) => {
    const { status, message } = await (add
      ? postNewBlog(data)
      : updateBlogPost(clickedBlog._id, data));
    toast[status](message);
    //close the modal
  };

  return (
    <>
      <form action="" className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
        {/* Title Field */}
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
              // defaultValue={clickedBlog?.title || ""}
              {...register("title")}
            />
          </div>
        </div>

        {/* Category Field */}
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
              // defaultValue={clickedBlog?.category || ""}
              {...register("category")}
            />
          </div>
        </div>

        {/* Tags Field */}
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
              // defaultValue={clickedBlog?.tags || ""}
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
              // defaultValue={clickedBlog?.content || ""}
              {...register("content")}
            />
          </div>
        </div>

        {/* Buttons based on add state */}
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
            <Button type="submit" icon={<RiSaveLine />} label="Update" />
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
