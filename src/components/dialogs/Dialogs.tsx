import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./dialogItems/DialogItems";
import Messages from "./messages/Messages";
import {DialogsType, MessagesType,} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageBody:(text:string)=>void
    sendMessage:()=>void
    dialogsPage:DialogsType[]
    messages:MessagesType[]
    newMessageBody:string
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.map((d) => {

        return (
            <DialogItems key={d.id} id={d.id} name={d.name}/>
        )
    })
    const messagesElements = props.messages.map((m) => {
        return (
            <Messages key={m.id} id={m.id} message={m.message}/>
        )
    })
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const newMessageBody = props.newMessageBody
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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