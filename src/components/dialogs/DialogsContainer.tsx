import React from 'react'
import {Dialogs} from "./Dialogs";
import {SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{(store)=>{
            const state = store.getState()
            const onMessageChange = (text:string) => {
                store.dispatch(UpdateSendMessageCreator(text))
            }
            const onSendMessageClick = () => {
                store.dispatch(SendMessageCreator())
            }
       return     <Dialogs updateNewMessageBody={onMessageChange}
                     sendMessage={onSendMessageClick}
                     dialogsPage={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMessageBody={state.dialogsPage.newMessageBody}
            />
        }}
        </StoreContext.Consumer>

    )
}