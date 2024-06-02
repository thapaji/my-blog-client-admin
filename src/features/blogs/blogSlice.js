import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        clickedBlog: {}
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        setClickedBlog: (state, action) => {
            state.clickedBlog = action.payload;
        }
    }
})

const { reducer, actions } = blogSlice;

export const { setBlogs, setClickedBlog } = actions;

export default reducer;