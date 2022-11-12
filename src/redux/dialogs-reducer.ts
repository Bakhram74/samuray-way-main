import {ActionType,} from "./store";

export type UpdateNewMessageActionType = ReturnType<typeof UpdateSendMessageCreator>
export const UpdateSendMessageCreator = (body: string) => {
    return {type: "UPDATE-NEW-MESSAGE-BODY", body: body} as const
}
export type SendMessageActionType = ReturnType<typeof SendMessageCreator>
export const SendMessageCreator = () => {
    return {type: "SEND-MESSAGE"} as const
}
const  dialogsPage = {
        dialogs: [
            {name: "Dmitriy", id: 1},
            {name: "Andrey", id: 2},
            {name: "Sasha", id: 3},
            {name: "Svetlana", id: 4},
            {name: "Victor", id: 5},
            {name: "Valera", id: 6},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
        ],
        newMessageBody: ""
    }

const dialogReducer = (state= dialogsPage, action: ActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state;
        case "SEND-MESSAGE":
            const body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}
export default dialogReducer