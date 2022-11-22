import {ActionType} from "../store";

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName:string|null
    photos:{
        small: string | null,
        large:string|null
    },
    followed: boolean,
    status: string|null,
}

export type UsersPageType = {
users: Array<UserType>
}
const usersPage:UsersPageType = {
    users: []
}


const usersReducer = (state: UsersPageType = usersPage, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }else return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }else return u
                })
            }
        case "SET_USERS":{
            return {
                ...state,users: [...state.users,...action.users]
            }
        }

        default:
            return state
    }


}
export default usersReducer

export const followAC = (id: number) => {
    return {type: "FOLLOW", userId: id} as const
}
export type FollowACType = ReturnType<typeof followAC>

export const unFollowAC = (id: number) => {
    return {type: "UNFOLLOW", userId: id} as const
}
export type UnFollowACType = ReturnType<typeof unFollowAC>

export const setUsersAC = (users:Array<UserType>) =>{
    return{type:"SET_USERS",users:users} as const
}
export type SetUsersType = ReturnType<typeof setUsersAC>