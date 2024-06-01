import axios from "axios";
import { apiProcessor } from "../../helpers/axiosHelper";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const blogEp = rootAPI + "/blogs";

export const fetchAllBlogs = async () => {
    const axiosObj = { method: 'GET', url: blogEp, isPrivate: true }
    return await apiProcessor(axiosObj);
};

export const postNewBlog = async (blogObj) => {
    const axiosObj = { method: 'POST', url: blogEp, data: blogObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};

export const fetchSingleBlog = async (_id) => {
    const axiosObj = { method: 'GET', url: blogEp + _id, isPrivate: true }
    return await apiProcessor(axiosObj);
};

export const updateBlogPost = async (blogObj) => {
    const axiosObj = { method: 'PUT', url: blogEp, data: blogObj, isPrivate: true };
    return await apiProcessor(axiosObj);
};