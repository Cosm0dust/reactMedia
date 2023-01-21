import React from 'react';
import s from './Posts.module.css'
import NewPost from "../NewPost";
import {useSelector} from "react-redux";

const Posts = (props) => {
    const posts = useSelector(state => state.posts.posts)

    return (
        <div>
            {
                posts.map(p=>
                    <Posts id={p.id} subject = {p.subject} text = {p.text} date={p.date} likes = {p.likesCount}/>)
            }
        </div>
    );
};

export default Posts;