import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import User from "./Name/User";
import Messages from "./Messages/Messages";
import {useSelector} from "react-redux";

const Dialogs = (props) => {
    const users = useSelector(state => state.messages.users);

    return (
        <div className={s.messages}>
            <div className={s.messages__name}>
                {
                    users.map(u=>
                    <User {...u} key = {u.id} />)
                }
            </div>
            <Messages/>
        </div>
    );
};

export default Dialogs;