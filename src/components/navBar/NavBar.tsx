import React from "react";
import s from './NavBar.module.css';
export function NavBar() {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
            </div>

        </nav>
    )
}