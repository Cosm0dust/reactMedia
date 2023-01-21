import React, {useState} from 'react';
import s from './NewPostForm.module.css'

const NewPostForm = ({text, handleSubmit, handleInput}) => {

    return (
        <div className={s.newPost}>
            <input value={text} onChange={e => handleInput(e.currentTarget.value)} type="text"/>
            <button onClick={handleSubmit}>Create Post</button>
        </div>
    );
};

export default NewPostForm;