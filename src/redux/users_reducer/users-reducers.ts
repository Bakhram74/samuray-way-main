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
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
const usersPage:UsersPageType = {
    users: [],
    pageSize:100,
    totalUsersCount:0,
    currentPage:1
}
type ActionUsersType =
     FollowACType |
    UnFollowACType |
    SetUsersType|
    SetCurrentPageAT|
    SetTotalUsersCountAT

const usersReducer = (state: UsersPageType = usersPage, action: ActionUsersType): UsersPageType => {
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
                ...state,users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE":{

            return {
                ...state,currentPage:action.currentPage
            }
        }
        case "SET-USERS-TOTAL-COUNT":{
            return {
                ...state,totalUsersCount:action.totalCount
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

export const setCurrentPageAC = (currentPage:number)=>{
    return{type:'SET-CURRENT-PAGE',currentPage} as const
}
export type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>

export const setTotalUsersCountAC = (totalCount:number)=>{
    return{type:'SET-USERS-TOTAL-COUNT',totalCount} as const
}
export type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>