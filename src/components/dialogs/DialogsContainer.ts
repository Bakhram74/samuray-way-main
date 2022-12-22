
import {compose, Dispatch} from "redux"
import {Dialogs, DialogsFormType} from "./Dialogs";
import {InitDialogsPageType, SendMessageCreator} from "../../redux/dialogs_reducer/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";
import  { ComponentType} from "react";
import {authRedirect} from "../../common/hok/AuthRedirect";


export type  DialogsPropsType = MapStateToPropsType & MapDispatchToReducerType

type MapStateToPropsType = {
    dialogsPage: InitDialogsPageType
}
type MapDispatchToReducerType = {
    sendMessage: (value:string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToReducerType => {
    return {
        sendMessage: (value:string) => {
            dispatch(SendMessageCreator(value))
        }
    }
}



const DialogsContainer =  compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps)
     ,authRedirect
)(Dialogs)

export default DialogsContainer