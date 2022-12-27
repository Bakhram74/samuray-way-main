import {AppStateType} from "../../store/redux-store";
import {createSelector} from "reselect";

export const getUsersSelector=(state:AppStateType)=>{
    return state.users.users
}

export const getUsers= createSelector(getUsersSelector,(users)=>{
    return users
})


export const getUsersOnPage=(state:AppStateType)=>{
    return state.users.usersOnPage
}
export const getTotalUsersCount=(state:AppStateType)=>{
    return state.users.totalUsersCount
}
export const getCurrentPage=(state:AppStateType)=>{
    return state.users.currentPage
}
export const getIsFetching=(state:AppStateType)=>{
    return state.users.isFetching
}
export const getFollowingInProgress=(state:AppStateType)=>{
    return state.users.followingInProgress
}