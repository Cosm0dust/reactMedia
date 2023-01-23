import React from 'react';
import styles from './Profile.module.css'
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div>
            <div className={styles.content}>
                <img src="https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"
                     alt="text"/>
            </div>
            <div className={styles.ava}>
                <img src="https://i.pinimg.com/originals/93/1b/4a/931b4af252790dca3a868768ac73d730.jpg" alt=""/>
                <div className={styles.status}>
                        Status
                </div>
                <div className={styles.persinform}>
                       Information
                </div>
            </div>
            <div className={styles.newpost}>
                <textarea name="" id="" cols="20" rows="3"></textarea>
                <button>Create Post</button>
                <button>Remove Post</button>
            </div>
            <Post  message = 'Hello)'/>
            <Post  message = 'Like your image)'/>
        </div>
    );
};

export default Profile;