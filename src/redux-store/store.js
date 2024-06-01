import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/users/userSlice';
import blogReducer from '../features/blogs/blogSlice';

export default configureStore({
    reducer: {
        /*********** Slices ************/
        userInfo: userReducer,
        blogPosts: blogReducer,
        /*********** Slices ************/
    },
})