import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const User = ({id, name, key}) => {

    return (
        <div key={key}>
            <NavLink to={`/messages/${id}`} className={navData => navData.isActive? s.messages__name_exact_active : s.messages__name_exact}>{name}</NavLink>
        </div>
    );
};

export default User;