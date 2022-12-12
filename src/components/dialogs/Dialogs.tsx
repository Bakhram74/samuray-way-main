import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./dialogItems/DialogItems";
import Messages from "./messages/Messages";
import {DialogsPropsType,} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d) => {
        return (
            <DialogItems key={d.id} id={d.id} name={d.name}/>
        )
    })
    const messagesElements = props.dialogsPage.messages.map((m) => {
        return (
            <Messages key={m.id} id={m.id} message={m.message}/>
        )
    })
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const newMessageBody = props.dialogsPage.newMessageBody
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }
if (!props.isAuth){
    return <Redirect to={'/login'}/>
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea value={newMessageBody} onChange={onMessageChange}
                          placeholder={"enter your message"}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>

        </div>
    )
}