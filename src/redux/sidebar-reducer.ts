import {ActionType} from "./store";
export type SideBarType = {}
let sidebar ={}
const sidebarReducer = (state = sidebar, action: ActionType)=>{
    return state;
}
export default sidebarReducer