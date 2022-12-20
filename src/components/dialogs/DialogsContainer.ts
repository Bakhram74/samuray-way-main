
import {compose, Dispatch} from "redux"
import {Dialogs} from "./Dialogs";
import {InitDialogsPageType, SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs_reducer/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import  { ComponentType} from "react";


export type  DialogsPropsType = MapStateToPropsType & MapDispatchToReducerType

type MapStateToPropsType = {
    dialogsPage: InitDialogsPageType
}
type MapDispatchToReducerType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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



const DialogsContainer =  compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps)
     // ,authRedirect
)(Dialogs)

export default DialogsContainer