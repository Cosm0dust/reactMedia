import {createSlice} from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        users: [
            {id:1, name:'Ivan'},
            {id:2, name:'Kolya'},
            {id:3, name:'Lada'},
            {id:4, name:'Alya'},
            {id:5, name:'Anya'}
        ],
    },

    reducers: {
        addMessage(state, action){
            state.messages.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        }
    }
})

export const {addMessage} = messagesSlice.actions

export default messagesSlice.reducer