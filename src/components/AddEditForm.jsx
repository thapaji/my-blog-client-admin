import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  RiEdit2Line,
  RiRefreshLine,
  RiAddLine,
  RiSaveLine,
  RiCheckLine,
  RiPriceTag3Line,
  RiFolderLine,
  RiFileTextLine,
  RiCloseLine,
  RiDeleteBin6Line,
} from "react-icons/ri";
import { fetchSingleBlog, postNewBlog, updateBlogPost } from "../features/blogs/blogAxios";
import { deleteBlogPost, getAllBlogs } from "../features/blogs/blogAction";

export const AddEditForm = ({ add = true, id, setVisible }) => {
  const { register, reset, setValue, handleSubmit } = useForm({
    defaultValues: {},
  });
  const { clickedBlog } = useSelector((state) => state.blogPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    reset(add ? {} : clickedBlog || {});
  }, [add, clickedBlog, reset]);

  const onSubmit = async (data) => {
    const { status, message } = await (add
      ? postNewBlog(data)
      : updateBlogPost(clickedBlog._id, data));
    toast[status](message);
    setVisible(false);
    dispatch(getAllBlogs());
  };

  const handleResetAdd = () => {
    setValue("title", "");
    setValue("category", "");
    setValue("tags", "");
    setValue("content", "");
  };

  const handleResetEdit = () => {
    reset(clickedBlog || {});
  };

  const handleActivate = () => {
    setValue("isActive", !clickedBlog.isActive);
    handleSubmit(onSubmit)();
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      dispatch(deleteBlogPost(clickedBlog._id));
      setVisible(false);
    }
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
              onClick={handleResetAdd}
            />
          </div>
        ) : (
          <div className="flex justify-content-between gap-5">
            <Button type="submit" icon={<RiSaveLine />} label="Update" />
            <Button
              type="button"
              severity={clickedBlog.isActive ? "danger" : "success"}
              icon={clickedBlog.isActive ? <RiCloseLine /> : <RiCheckLine />}
              label={clickedBlog.isActive ? "Deactivate" : "Activate"}
              onClick={handleActivate}
            />
            <Button
              type="button"
              severity="danger"
              icon={<RiDeleteBin6Line />}
              label="Delete"
              onClick={handleDelete}
            />
            <Button
              type="button"
              severity="info"
              icon={<RiRefreshLine />}
              label="Reset"
              onClick={handleResetEdit}
            />
          </div>
        )}
      </form>
    </>
  );
};
