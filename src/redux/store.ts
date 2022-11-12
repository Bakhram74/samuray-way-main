
import profileReducer, {AddPostActionType, UpdateNewPostActionType} from "./profile-reducer";
import dialogReducer, {SendMessageActionType, UpdateNewMessageActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number

}

export type ProfilePageType = {
    post: PostType[]
    newText: string
}
export type DialogsType = {
    name: string
    id: number
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}
export type sidebar = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebar
}

export type ActionType =
    AddPostActionType
    | UpdateNewPostActionType
    | UpdateNewMessageActionType
    | SendMessageActionType

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callBack: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}
const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi how are you', likesCount: 12},
                {id: 2, message: 'Its my post', likesCount: 11}
            ],
            newText: ""
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    subscribe(callBack: () => void) {
        this._onChange = callBack
    },
    getState() {
        return this._state
    },
    _onChange() {
        console.log('state changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)
        this._onChange()
    }
}
export default store