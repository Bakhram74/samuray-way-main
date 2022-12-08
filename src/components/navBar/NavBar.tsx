import React from "react";

import s from './NavBar.module.css';
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div><Link to='/profile' className={s.item}>Profile</Link></div>
                <div><Link to='/dialogs' className={s.item} >Messages</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
                <div><Link to={'/news'}>News</Link></div>
                <div><Link to={'/music'}>Music</Link></div>
                <div><Link to={'/settings'}>Settings</Link></div>
            </div>
        </nav>
    )
}

export const News = () => {
    return (
        <div>News</div>
    )
}
export const Music = () => {
    return (
        <div>Music</div>
    )
}
export const Settings = () => {
    return (
        <div>Settings</div>
    )
}