import { fetchAllBlogs } from "./blogAxios";
import { setBlogs } from "./blogSlice";

export const getAllBlogs = () => async (dispatch) => {
    const { status, blogs } = await fetchAllBlogs();
    /***** update store ****/
    dispatch(setBlogs(blogs))
}