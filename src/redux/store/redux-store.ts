import {combineReducers} from "redux";
import profileReducer from "../profile-reducer";
import dialogReducer from "../dialogs-reducer";
import { createStore} from 'redux'
import usersReducer from "../users_reducer/users-reducers";
import authReducer from "../auth-reducer";



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    users: usersReducer,
   auth :authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store


