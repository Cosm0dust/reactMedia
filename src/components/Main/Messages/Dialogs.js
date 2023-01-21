import React from 'react';
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import User from "./Name/User";
import Message from "./Message/Message";
import {useSelector} from "react-redux";

const Messages = (props) => {

    const users = useSelector(state => state.messages.users)

    return (
        <div className={s.messages}>
            <div className={s.messages__name}>
                {
                    users.map(u=>
                    <User {...u} key = {u.id} />)
                }
            </div>
            <div className={s.messages__message}>
                {
                    props.messages.message.map(m=>
                        <Message message={m.message} id = {m.id} />)
                }
            </div>
        </div>
    );
};

export default Messages;