import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import { legacy_createStore as createStore} from 'redux'


const rootReducer = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogReducer,
    sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

 export const store = createStore(rootReducer)


