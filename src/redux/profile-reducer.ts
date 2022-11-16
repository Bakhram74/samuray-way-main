import {ActionType,} from "./store";

export type AddPostActionType = ReturnType<typeof AddPostCreator>
export const AddPostCreator = () => {
    return {type: "ADD-POST"} as const
}

export type UpdateNewPostActionType = ReturnType<typeof UpdateNewPostCreator>
export const UpdateNewPostCreator = (newActionText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newActionText: newActionText} as const
}
export type PostType = {
    id: number
    message: string
    likesCount: number

}
export type ProfilePageType = typeof profilePage
const profilePage = {
    post: [
        {id: 1, message: 'Hi how are you', likesCount: 12},
        {id: 2, message: 'Its my post', likesCount: 11}
    ] as PostType[],
        newText: "" as string
}

const profileReducer = (state:ProfilePageType=profilePage, action: ActionType):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":{
            return {...state,newText:'',
                post: [...state.post, {  id: 5, message: state.newText, likesCount: 0}]}
        }
        case "UPDATE-NEW-POST-TEXT":
            return {...state,newText:action.newActionText }
        default:
            return state;
    }

}


export default profileReducer