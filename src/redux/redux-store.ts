import {combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";
import { legacy_createStore as createStore} from 'redux'
const reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogReducer,
    sidebarReducer
})
const store = createStore(reducers)as StoreType


export default store
