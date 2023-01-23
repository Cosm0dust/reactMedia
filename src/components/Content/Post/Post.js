import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
        <div className={s.post}>
            <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000" alt=""/>
            <div className={s.message}> {props.message}</div>
        </div>
            <div>
                <span>like</span><span>dislike</span>
            </div>
        </div>
    );
};

export default Post;