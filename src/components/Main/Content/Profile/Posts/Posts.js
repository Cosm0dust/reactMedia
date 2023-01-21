import React from 'react';
import {useSelector} from "react-redux";
import Post from "./Post/Post";

const Posts = (props) => {
    const posts = useSelector(state => state.posts.posts)

    return (
        <div>
            {
                posts.map(p=>
                    <Post {...p} key={p.id}/>)
            }
        </div>
    );
};

export default Posts;