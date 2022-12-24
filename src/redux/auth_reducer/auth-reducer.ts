import {Dispatch} from "redux";
import {authMe} from "../../api/api";

export type InitAuthDataType = {
    id: number | null,
    login: string | null,
    email: string | null
    isAuth: boolean
}

const initAuthData: InitAuthDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initAuthData, action: SetUserDataType): InitAuthDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload}
        }
        default:
            return state
    }
}

export default authReducer

type SetUserDataType = {
    type: 'SET-USER-DATA'
    payload: InitAuthDataType
}
export const setUserDataAC = (payload: InitAuthDataType): SetUserDataType => {
    return {
        type: 'SET-USER-DATA',
        payload
    }
}

export const authAPI = () => (dispatch: Dispatch) => {
    authMe.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const { id,login,email,isAuth} = response.data.data
                dispatch(setUserDataAC({id,login,email,isAuth:true}))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) =>  (dispatch: Dispatch) => {
    authMe.login({email,password,rememberMe})
        .then(response => {
            if (response.data.resultCode === 0) {
                authMe.me()
                    .then(response => {
                        if (response.data.resultCode === 0) {
                            const { id,login,email,isAuth} = response.data.data
                            dispatch(setUserDataAC({id,login,email,isAuth:true}))
                        }
                    })

            }
        })
}
export const loginOut = () => (dispatch: Dispatch) => {
    authMe.loginOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                            const payload = {
                                id: null,
                                login: null,
                                email: null,
                                isAuth: false
                            }
                            dispatch(setUserDataAC({...payload}))

            }
        })
}