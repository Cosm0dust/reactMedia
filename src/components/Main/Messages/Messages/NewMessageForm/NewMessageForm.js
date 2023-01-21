import React from 'react';
import s from "../../../Content/Profile/NewPostForm/NewPostForm.module.css";

const NewMessageForm = ({text, handleInput, handleSubmit}) => {


    return (
        <div className={s.newPost}>
            <input value={text} onChange={e => handleInput(e.currentTarget.value)} type="text"/>
            <button onClick={handleSubmit}>Create Post</button>
        </div>
    );
};

export default NewMessageForm;