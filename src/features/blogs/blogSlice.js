import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: []
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs.push(action.payload);
        }
    }
})

const { reducer, actions } = blogSlice;

export const { setBlogs } = actions;

export default reducer;