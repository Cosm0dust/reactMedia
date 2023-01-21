import React, {useState} from 'react';
import Info from "./Info/Info";
import Posts from "./Posts/Posts";
import NewPostForm from "./NewPostForm/NewPostForm";
import {useDispatch} from "react-redux";
import {addPost} from "../../../../redux/postSlice";

const Profile = (props) => {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const addPosts = () => {
        dispatch(addPost({text}));
        setText('')
    }


    return (
        <div>
            <Info/>
            <NewPostForm text={text} handleInput={setText} handleSubmit={addPosts}/>
            <Posts />
        </div>
    );
};

export default Profile;