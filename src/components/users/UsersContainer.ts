import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersPageType, UserType} from "../../redux/users_reducer/users-reducers";


type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    follow: (id:number)=>void
    unFollow: (id:number)=>void
    setUsers:(users:Array<UserType>)=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>{
    return{
        usersPage: state.users
    }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
       follow: (id:number)=>{
           dispatch(followAC(id))
       },
        unFollow: (id:number)=>{
            dispatch(unFollowAC(id))
        },
        setUsers:(users:Array<UserType>)=>{
          dispatch( setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)