import {AnyAction, applyMiddleware, combineReducers} from "redux";
import profileReducer from "../redux/profile_reducer/profile-reducer";
import dialogReducer from "../redux/dialogs_reducer/dialogs-reducer";
import { createStore} from 'redux'
import usersReducer from "../redux/users_reducer/users-reducers";
import authReducer from "../redux/auth_reducer/auth-reducer";
import thunkMiddleWare ,{ ThunkAction } from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {ThunkDispatch} from "redux-thunk/src/types";
import appReducer from "../redux/app-reduser/app-reduser";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    users: usersReducer,
   auth :authReducer,
    form:formReducer,
    app:appReducer
})


export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>


export const store = createStore(rootReducer,applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.store = store


