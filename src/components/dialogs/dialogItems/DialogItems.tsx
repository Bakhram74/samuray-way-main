import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import {DialogsType} from "../../../redux/store";

const DialogItems = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink className={s.block} to={path}>{props.name}</NavLink>
    )
}


export default DialogItems;