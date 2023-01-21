import React, {useState} from 'react';
import s from './NewPost.module.css'

const NewPost = ({text, handleSubmit, handleInput}) => {

    return (
        <div className={s.newPost}>
            <input value={text} onChange={e => handleInput(e.currentTarget.value)} type="text"/>
            <button onClick={handleSubmit}>Create Post</button>
        </div>
    );
};

export default NewPost;