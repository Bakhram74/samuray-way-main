

import {AnyAction, Dispatch} from "redux";
import {authMe} from "../../api/api";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk/src/types";
import {authAPI} from "../auth_reducer/auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppDispatch, AppStateType} from "../../store/redux-store";


export type InitAppState = {
  initialized:boolean
}

const initAppData: InitAppState = {
    initialized:false
}

const appReducer = (state = initAppData, action: SetInitializedType): InitAppState => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized:true
            }
        default:
            return state
    }
}

export default appReducer

type SetInitializedType = {
    type: 'INITIALIZED-SUCCESS'
}
export const initializedAC = (): SetInitializedType => {
    return {
        type: 'INITIALIZED-SUCCESS'
    }
}

export const initializeTC = () => (dispatch:AppDispatch) => {
const result =  dispatch(authAPI())
    result.then(()=>{
        dispatch(initializedAC())
    })
}


