import { toast } from "react-toastify";
import { fetchAllBlogs, fetchSingleBlog, deleteBlog } from "./blogAxios";
import { setBlogs, setClickedBlog } from "./blogSlice";

export const getAllBlogs = () => async (dispatch) => {
    const { status, blogs } = await fetchAllBlogs();
    /***** update store ****/
    dispatch(setBlogs(blogs))
}

export const getSingleBlog = (id) => async (dispatch) => {
    const { status, blog } = await fetchSingleBlog(id);
    dispatch(setClickedBlog(blog));
    getAllBlogs();
}

export const deleteBlogPost = (id) => async (dispatch) => {
    const { status, message } = await deleteBlog([id]);
    toast[status](message);
    dispatch(getAllBlogs());
}