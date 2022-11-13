import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";

const reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sidebarReducer
})
const store: StoreType = createStore(reducers)


export default store
