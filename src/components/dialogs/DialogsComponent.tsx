import React from 'react'
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../redux/store";
import {SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs-reducer";

type DialogsComponentPropsType = {
    store:StoreType
}

export const DialogsComponent = (props:DialogsComponentPropsType) => {
const state = props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }

    const newMessageBody = state.dialogsPage.newMessageBody

    const onMessageChange = (text:string) => {
        props.store.dispatch(UpdateSendMessageCreator(text))
    }
    return (
     <Dialogs updateNewMessageBody={onMessageChange}
              sendMessage={onSendMessageClick}
              dialogsPage={state.dialogsPage.dialogs}
              messages={state.dialogsPage.messages}
              newMessageBody={newMessageBody}
     />
    )
}