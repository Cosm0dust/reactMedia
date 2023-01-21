import React from 'react';
import s from './Main.module.css'
import Content from "./Content/Content";
import Nav from "./Nav/Nav";


const Main = (props) => {

    return (
        <div className={s.main}>
            <Nav />
            <Content/>
        </div>

    );
};

export default Main;

