import {ActionType, PostType, ProfilePageType,} from "./store";

export type AddPostActionType = ReturnType<typeof AddPostCreator>
export const AddPostCreator = () => {
    return {type: "ADD-POST"} as const
}

export type UpdateNewPostActionType = ReturnType<typeof UpdateNewPostCreator>
export const UpdateNewPostCreator = (newActionText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newActionText: newActionText} as const
}
const profilePage = {
    post: [
        {id: 1, message: 'Hi how are you', likesCount: 12},
        {id: 2, message: 'Its my post', likesCount: 11}
    ],
        newText: ""
}
const profileReducer = (state=profilePage, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: 5,
                message: state.newText,
                likesCount: 0
            }
            state.post.push(newPost)
            state.newText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newText = action.newActionText
            return state;
        default:
            return state;
    }

}


export default profileReducer