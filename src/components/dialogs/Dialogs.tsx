import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number
    name: string
}
type DialogItemType = {
    items: DialogType[]
}
const DialogItems = (props: DialogItemType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            {props.items.map(d => {
                return (
                    <NavLink className={s.block} to={'/dialogs/' + d.id}>{d.name}</NavLink>
                )
            })}
        </div>
    )
}
const persons = [
    {name: "Dimych", id: 1},
    {name: "Andrey", id: 2},
    {name: "Sasha", id: 3},
    {name: "Sveta", id: 4},
    {name: "Victor", id: 5},
    {name: "Valera", id: 6},
]


const Messages = (props:any)=>{
    return(
    <div className={s.message}>{props.massage}</div>
        )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItems items={persons}/>
            </div>
            <div className={s.messages}>
                <Messages massage={"Hi"}/>
                <Messages massage={"How are you"}/>
                <Messages massage={"Yo"}/>
                <Messages massage={"Yo"}/>
                <Messages massage={"Yo"}/>
            </div>
        </div>
    )
}