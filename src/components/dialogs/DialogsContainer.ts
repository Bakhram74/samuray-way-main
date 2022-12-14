
import {Dispatch} from "redux"
import {Dialogs} from "./Dialogs";
import {InitDialogsPageType, SendMessageCreator, UpdateSendMessageCreator} from "../../redux/dialogs_reducer/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import {withAuthRedirect} from "../../hok/withAuthReducer";


type MapStateToPropsType = {
    dialogsPage: InitDialogsPageType
}
type MapDispatchToReducerType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
 export type  DialogsPropsType = MapStateToPropsType & MapDispatchToReducerType

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
let authRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)