import { setBlogs } from "./blogSlice";

export const getAllBlogs = () => async (dispatch) => {
    const { status, blogs } = await fetchUserInfo();

    /***** update store ****/
    dispatch(setBlogs(blogs))
}