import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./dialogItems/DialogItems";
import Messages from "./messages/Messages";
import {DialogsPropsType,} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


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
    // const onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    //
    // const newMessageBody = props.dialogsPage.newMessageBody
    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewMessageBody(e.currentTarget.value)
    // }
const sendMessage = (value:DialogsFormType)=>{
        props.sendMessage(value.dialogsForm)
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={sendMessage}/>
        </div>
    )
}

export type DialogsFormType ={
    dialogsForm:string
}

const DialogsForm = (props: InjectedFormProps<DialogsFormType>) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'dialogsForm'} component="textarea"
                        placeholder={"enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>

        </form>

    )
}
const DialogsReduxForm = reduxForm<DialogsFormType>({form:'dialogsForm'})(DialogsForm)
