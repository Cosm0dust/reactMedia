import React from 'react';
import s from "./Post.module.css";

const Post = ({id, text, subject, date}) => {
    return (
        <div key={id} className={s.post}>

            <div className={s.post__img}>
                <img src='https://beauty-stars.com.ua/media/images/services/f31ea45329ecd91a1f5227b5c278be61dbbba372.jpg' alt='' className={s.posts__img_img}></img>
            </div>
            <div className={s.post__text}>
                <div className={s.post__text_name}>
                    {subject}
                </div>
                <div className={s.post__text_text}>
                    {text}
                </div>
                <div className={s.post__text_date}>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default Post;