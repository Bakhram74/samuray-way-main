
import {Dispatch} from "redux"
import {Dialogs} from "./Dialogs";
import {InitDialogsPageType, SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs_reducer/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";


type MapStateToPropsType = {
    dialogsPage: InitDialogsPageType
    isAuth: boolean
}
type MapDispatchToReducerType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
 export type  DialogsPropsType = MapStateToPropsType & MapDispatchToReducerType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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