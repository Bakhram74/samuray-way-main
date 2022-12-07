import React from "react";

import {MyPosts} from "./MyPosts";
import {AddPostCreator, InitStateType, UpdateNewPostCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStateToPropsType & mapDispatchToReducerType

type MapStateToPropsType = {
    profilePage: InitStateType
}
type mapDispatchToReducerType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType=>{
   return {
       profilePage:state.profilePage
   }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToReducerType=>{
return{
    updateNewPostText:(text:string)=>{
        dispatch(UpdateNewPostCreator(text))
    },
    addPost:()=>{
        dispatch(AddPostCreator())
    }
}
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)