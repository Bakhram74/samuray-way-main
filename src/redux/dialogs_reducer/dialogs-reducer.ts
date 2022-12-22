
export type SendMessageActionType = ReturnType<typeof SendMessageCreator>
export const SendMessageCreator = (value:string) => {
    return {type: "SEND-MESSAGE",value} as const
}

type ActionDialogsType =  SendMessageActionType

export type DialogsType = {
    name: string
    id: number
}
export type MessagesType = {
    id: number
    message: string
}
const dialogsPage = {
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

}
export type InitDialogsPageType = typeof dialogsPage

const dialogReducer = (state: InitDialogsPageType = dialogsPage, action: ActionDialogsType): InitDialogsPageType => {
    switch (action.type) {

        case "SEND-MESSAGE":
            const body = action.value
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}
export default dialogReducer