import React from 'react';
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const Name = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.id}`} className={navData => navData.isActive? s.messages__name_exact_active : s.messages__name_exact}>{props.name}</NavLink>
        </div>
    );
};

export default Name;