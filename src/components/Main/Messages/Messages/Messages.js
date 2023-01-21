import React, {useState} from 'react';
import s from "../Dialogs.module.css";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import {useDispatch, useSelector} from "react-redux";
import Message from "./Message/Message";
import {addPost} from "../../../../redux/postSlice";
import {addMessage} from "../../../../redux/messageSlice";



const Messages = (props) => {
    const [text, setText] = useState([])

    const dispatch = useDispatch();

    const addMessages = () => {
        dispatch(addMessage({text}));
        setText('')
    }

    const messages = useSelector(state => state.messages.messages);

    return (
        <div className={s.messages__message}>

            <NewMessageForm text={text} handleInput={setText} handleSubmit={addMessages} />
            {
                messages.map(m=>
                    <Message  {...m}  key = {m.id} />)
            }
        </div>
    );
};

export default Messages;