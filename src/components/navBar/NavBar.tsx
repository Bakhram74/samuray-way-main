import React from "react";
// @ts-ignore
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div><NavLink to='/profile' className={s.item} activeClassName={s.active}>Profile</NavLink></div>
                <div><NavLink to='/dialogs' className={s.item} activeClassName={s.active}>Messages</NavLink></div>
                <div><NavLink to={'/news'}>News</NavLink></div>
                <div><NavLink to={'/music'}>Music</NavLink></div>
                <div><NavLink to={'/settings'}>Settings</NavLink></div>
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