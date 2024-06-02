import { fetchAllBlogs, fetchSingleBlog } from "./blogAxios";
import { setBlogs, setClickedBlog } from "./blogSlice";

export const getAllBlogs = () => async (dispatch) => {
    const { status, blogs } = await fetchAllBlogs();
    /***** update store ****/
    dispatch(setBlogs(blogs))
}

export const getSingleBlog = (id) => async (dispatch) => {
    const { status, blog } = await fetchSingleBlog(id);
    dispatch(setClickedBlog(blog))
}