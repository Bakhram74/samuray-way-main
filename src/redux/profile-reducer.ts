import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type AddPostActionType = ReturnType<typeof AddPostCreator>
export const AddPostCreator = () => {
    return {type: "ADD-POST"} as const
}

export type UpdateNewPostActionType = ReturnType<typeof UpdateNewPostCreator>
export const UpdateNewPostCreator = (newActionText: string) => {
    return {type: "UPDATE-NEW-POST-TEXT", newActionText: newActionText} as const
}

type SetUserProfileAT = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}

export const getUserProfile = (userId:string) =>(dispatch:Dispatch)=> {
    usersAPI().getProfile(userId)
        .then(response=>{
            dispatch(setUserProfile(response.data))
        })
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const initProfilePage:InitProfileStateType  = {
    post: [
        {id: 1, message: 'Hi how are you', likesCount: 12},
        {id: 2, message: 'Its my post', likesCount: 11}
    ] ,
    profile: null,
    newText: ""
}
export type InitProfileStateType = {
    post: PostType[]
    profile: null|ProfileType
    newText:string
}

type ActionProfileType = AddPostActionType | UpdateNewPostActionType | SetUserProfileAT

const profileReducer = (state = initProfilePage, action: ActionProfileType): InitProfileStateType => {
    switch (action.type) {
        case "ADD-POST": {
            return {
                ...state, newText: '',
                post: [...state.post, {id: 5, message: state.newText, likesCount: 0}]
            }
        }
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newText: action.newActionText}
        case "SET-USER-PROFILE":
            return {...state,profile:action.profile}
        default:
            return state
    }

}


export default profileReducer