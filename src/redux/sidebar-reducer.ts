import {ActionType} from "./store";
export type SideBarType = {}
let sidebar ={}
const sidebarReducer = (state:SideBarType = sidebar, action: ActionType):SideBarType=>{
    return state;
}
export default sidebarReducer