import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {InitAuthDataType} from "../../redux/auth-reducer";

export function Header(props:InitAuthDataType){
 return(
     <header className={s.header}>
         <img src='https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png?size=2' alt={"logo"}/>
        <div className={s.login}>
            {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink>}
        </div>

     </header>
 )
}