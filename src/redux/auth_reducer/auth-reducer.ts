import {AnyAction, Dispatch} from "redux";
import {authMe} from "../../api/api";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk/src/types";


export type InitAuthDataType = {
    id: string,
    login: string | null,
    email: string | null
    isAuth: boolean
}

const initAuthData: InitAuthDataType = {
    id: "",
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
   return  authMe.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setUserDataAC({id, login, email, isAuth: true}))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<InitAuthDataType, {}, AnyAction>) => {
    authMe.login({email, password, rememberMe})
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(authAPI())
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const loginOut = () => (dispatch: Dispatch) => {
    authMe.loginOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                const payload = {
                    id: "",
                    login: null,
                    email: null,
                    isAuth: false
                }
                dispatch(setUserDataAC({...payload}))
            }
        })
}

