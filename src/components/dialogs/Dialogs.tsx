import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./dialogItems/DialogItems";
import Messages from "./messages/Messages";
import {DialogsPageType} from "../../redux/state";

type typeDialogs = {
    state:DialogsPageType
}
export const Dialogs = (props: typeDialogs) => {
    let dialogsElements = props.state.dialogs.map((d) => {
        return (
            <DialogItems id={d.id} name={d.name}/>
        )
    })
    const messagesElements = props.state.messages.map((m) => {
        return (
            <Messages id={m.id} message={m.message}/>
        )
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>
    )
}