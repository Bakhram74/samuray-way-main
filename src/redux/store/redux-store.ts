import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "../profile_reducer/profile-reducer";
import dialogReducer from "../dialogs_reducer/dialogs-reducer";
import { createStore} from 'redux'
import usersReducer from "../users_reducer/users-reducers";
import authReducer from "../auth_reducer/auth-reducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    users: usersReducer,
   auth :authReducer,
    form:formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store


