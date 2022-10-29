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
}
type sidebar = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: sidebar
}


export type StoreType = {
    _state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    _rerenderTree: () => void
    subscribe: (observer: () => void) => void
    getState:()=>RootStateType
}
const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi how are you', likesCount: 12},
                {id: 2, message: 'Its my post', likesCount: 11}
            ],
            newText: 'it-kamakaka'
        },
        dialogsPage: {
            dialogs: [
                {name: "Dimych", id: 1},
                {name: "Andrey", id: 2},
                {name: "Sasha", id: 3},
                {name: "Sveta", id: 4},
                {name: "Victor", id: 5},
                {name: "Valera", id: 6},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ]
        },
        sidebar: {}
    },
     addPost(){
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newText,
            likesCount: 0
        }
         this._state.profilePage.post.push(newPost)
        this._state.profilePage.newText = ''
        this._rerenderTree()
    },
    updateNewPostText(newText: string){
        this._state.profilePage.newText = newText
        this._rerenderTree()
    },
    _rerenderTree(){
        console.log('state changed')
    },
    subscribe(observer: () => void){
        this._rerenderTree = observer
    },
    getState(){
        return this._state
    }
}
export default store