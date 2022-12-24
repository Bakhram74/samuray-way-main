import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./dialogItems/DialogItems";
import Messages from "./messages/Messages";
import {DialogsPropsType,} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Forms,} from "../../common/Forms/Forms";
import {maxLength, required} from "../../utils/validators/validator";


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

const maxLength50 = maxLength(50)

const DialogsForm = (props: InjectedFormProps<DialogsFormType>) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'dialogsForm'} component={Forms} validate={[required, maxLength50]}
                       type="textarea"   placeholder={"enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>

        </form>

    )
}
const DialogsReduxForm = reduxForm<DialogsFormType>({form:'dialogsForm'})(DialogsForm)
