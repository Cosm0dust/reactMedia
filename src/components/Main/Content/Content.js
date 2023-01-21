import React from 'react';
import s from './Content.module.css'
import Info from "./Profile/Info/Info";
import Posts from "./Profile/Posts/Posts";
import Profile from "./Profile/Profile";
import Dialogs from "../Messages/Dialogs";
import {Routes, Route} from "react-router-dom";
import messages from "../Messages/Dialogs";



const Content = (props) => {
    return (
            <div className={s.content}>
                <Routes>
                        <Route path='/profile' element={<Profile />}/>} />
                        <Route path='/messages' element={<Dialogs />} />
                        <Route path='/messages/*' element={<Dialogs/>}/>} />
                </Routes>
            </div>
    );
};

export default Content;