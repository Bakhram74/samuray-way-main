import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {InitAuthDataType} from "../../redux/auth_reducer/auth-reducer";

type HeaderPropsType = {
    userData:InitAuthDataType
    logOut:()=>void
}


export function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src='https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png?size=2'
                 alt={"logo"}/>
            <div className={s.login}>
                {props.userData.isAuth ?
                    <div>{props.userData.login}-- <button onClick={props.logOut}>Log out</button></div>
                    : <NavLink className={s.login} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
