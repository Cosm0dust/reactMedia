import React from 'react';
import s from './Nav.module.css'
import { NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to='/profile' className={navData => navData.isActive? s.nav__link_active : s.nav__link}>Profile</NavLink>
            <NavLink to='/messages' className={navData => navData.isActive? s.nav__link_active : s.nav__link}>Messages</NavLink>
            <NavLink to='/music' className={navData => navData.isActive? s.nav__link_active : s.nav__link}>Music</NavLink>
            <NavLink to='/photos' className={navData => navData.isActive? s.nav__link_active : s.nav__link}>Photos</NavLink>
            <NavLink to='/games' className={navData => navData.isActive? s.nav__link_active : s.nav__link}>Games</NavLink>
        </div>
    );
};

export default Nav;