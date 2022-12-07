import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import { createStore} from 'redux'
import usersReducer from "./users_reducer/users-reducers";



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    users: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


