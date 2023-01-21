import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost(state, action){
            state.posts.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                subject: 'Love',
                date: Date.now(),
                likesCount: 0,
            })
        }
    }
})

export const {addPost} = postsSlice.actions

export default postsSlice.reducer