import {configureStore} from "@reduxjs/toolkit";
import postsReducer from './postSlice'
import messageSlice from "./messageSlice";

export default configureStore({
    reducer: {
        posts: postsReducer,
        messages: messageSlice,
    }
})