import React from "react";

import {MyPosts} from "./MyPosts";
import {AddPostCreator, InitProfileStateType} from "../../../redux/profile_reducer/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store/redux-store";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStateToPropsType & mapDispatchToReducerType

type MapStateToPropsType = {
    profilePage: InitProfileStateType
}
type mapDispatchToReducerType = {
    addPost:(value:string)=>void
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
   return {
       profilePage:state.profilePage
   }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToReducerType=>{
return{
    addPost:(value)=>{
        dispatch(AddPostCreator(value))
    }
}
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)