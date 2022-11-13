import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./dialogItems/DialogItems";
import Messages from "./messages/Messages";
import {
    ActionType,
    DialogsPageType,
} from "../../redux/store";
import {SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs-reducer";

type typeDialogs = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: typeDialogs) => {

    const dialogsElements = props.state.dialogs.map((d) => {

        return (
            <DialogItems key={d.id} id={d.id} name={d.name}/>
        )
    })
    const messagesElements = props.state.messages.map((m) => {
        return (
            <Messages key={m.id} id={m.id} message={m.message}/>
        )
    })
    const onSendMessageClick = () => {
        props.dispatch(SendMessageCreator())
    }

    const newMessageBody = props.state.newMessageBody
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(UpdateSendMessageCreator(e.currentTarget.value))
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