import React from 'react'
import {Dispatch} from "redux"
import {Dialogs} from "./Dialogs";
import {DialogsPageType, SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToReducerType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToReducerType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToReducerType => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(UpdateSendMessageCreator(text))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)