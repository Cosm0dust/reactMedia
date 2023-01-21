import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
            <div className={s.header}>
                <div className={s.header__logo}>
                    Own Social Media
                </div>
                <div className={s.header__themes}>
                    <span>White</span>
                    <span>Dark</span>
                    <span>Funny</span>
                </div>
            </div>
    );
};

export default Header;

