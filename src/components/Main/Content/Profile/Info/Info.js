import React from 'react';
import s from "./Info.module.css";

const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.info__img}>
                <img className={s.info__img_ava} src="https://beauty-stars.com.ua/media/images/services/f31ea45329ecd91a1f5227b5c278be61dbbba372.jpg" alt="ava"/>
            </div>
            <div className={s.info__info}>
                <div>Name:</div>
                <div>Age:</div>
                <div>Height:</div>
                <div>Weight:</div>
                <div> Instagram:</div>
                <div> Twitter:</div>
                <div>Town:</div>
                <div>Special About:</div>
            </div>
        </div>
    );
};

export default Info;