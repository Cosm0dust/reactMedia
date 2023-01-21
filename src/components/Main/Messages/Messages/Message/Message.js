import React from 'react';
import s from "../../../Content/Profile/NewPostForm/NewPostForm.module.css";

const Message = ({key, text}) => {
    return (
        <div key={key}>
            {text}
        </div>
    );
};

export default Message;