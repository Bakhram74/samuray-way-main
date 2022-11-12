
import {combineReducers,createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
const reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sidebarReducer
})

const store = createStore(reducers)

export default store
