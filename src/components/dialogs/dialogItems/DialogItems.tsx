import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

type DialogType = {
    id: number
    name: string
}

const DialogItems = (props: DialogType) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink className={s.block} to={path}>{props.name}</NavLink>
    )
}


export default DialogItems;