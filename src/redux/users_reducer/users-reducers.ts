
export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null
    photos: {
        small: string | null,
        large: string | null
    },
    followed: boolean,
    status: string | null,
}

export type InitUsersPageType = {
    users: Array<UserType>
    usersOnPage: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
const initUsersPage: InitUsersPageType = {
    users: [],
    usersOnPage: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:true
}
type ActionUsersType =
    FollowACType |
    UnFollowACType |
    SetUsersType |
    SetCurrentPageAT |
    SetTotalUsersCountAT|
    SetIsFetchingAT

const usersReducer = (state: InitUsersPageType = initUsersPage, action: ActionUsersType): InitUsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else return u
                })
            }
        case "SET_USERS": {
            return {
                ...state, users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE": {

            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET-USERS-TOTAL-COUNT": {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case "TOGGLE-IS-FETCHING":{
            return {
                ...state,isFetching:action.isFetching
            }
        }

        default:
            return state
    }
}
export default usersReducer

export const follow = (id: number) => {
    return {type: "FOLLOW", userId: id} as const
}
type FollowACType = ReturnType<typeof follow>

export const unFollow = (id: number) => {
    return {type: "UNFOLLOW", userId: id} as const
}
type UnFollowACType = ReturnType<typeof unFollow>

export const setUsers = (users: Array<UserType>) => {
    return {type: "SET_USERS", users: users} as const
}
type SetUsersType = ReturnType<typeof setUsers>

export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
 type SetCurrentPageAT = ReturnType<typeof setCurrentPage>

 export const setTotalUsersCount = (totalCount: number) => {
    return {type: 'SET-USERS-TOTAL-COUNT', totalCount} as const
}
 type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>

export const setIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}
type SetIsFetchingAT = ReturnType<typeof setIsFetching>