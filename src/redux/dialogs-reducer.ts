import {ActionType} from "./store";

export type UpdateNewMessageActionType = ReturnType<typeof UpdateSendMessageCreator>
export const UpdateSendMessageCreator = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body: body} as const
}
export type SendMessageActionType = ReturnType<typeof SendMessageCreator>
export const SendMessageCreator = () => {
    return {type: "SEND-MESSAGE"} as const
}
 export type DialogsType = {
    name: string
    id: number
}
export type MessagesType = {
    id: number
    message: string
}
const  dialogsPage = {
        dialogs: [
            {name: "Dmitriy", id: 1},
            {name: "Andrey", id: 2},
            {name: "Sasha", id: 3},
            {name: "Svetlana", id: 4},
            {name: "Victor", id: 5},
            {name: "Valera", id: 6},
        ] as DialogsType[],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ] as MessagesType[],
        newMessageBody: ""
    }
export type DialogsPageType = typeof dialogsPage

const dialogReducer = (state:DialogsPageType= dialogsPage, action: ActionType):DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":{
            return {...state, newMessageBody: action.body};
        }
        case "SEND-MESSAGE":
            const body = state.newMessageBody
            return {...state,
                newMessageBody:'',
                messages:[...state.messages,{id: 6, message: body}]}
        default:
            return state;
    }
}
export default dialogReducer