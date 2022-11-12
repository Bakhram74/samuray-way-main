import {ActionType} from "./store";
type SideBarType = {}
let sidebar:SideBarType
const sidebarReducer = (state = sidebar, action: ActionType)=>{
    return state;
}
export default sidebarReducer