import React from "react";

import {MyPosts} from "./MyPosts";
import {ProfilePropsType} from "../Profile";
import {AddPostCreator, UpdateNewPostCreator} from "../../../redux/profile-reducer";

export function MyPostsContainer(props: ProfilePropsType) {
const state = props.store.getState()
    const addPost = () => {
            props.store.dispatch(AddPostCreator())
    }
    const onPostChange = (text:string) => {
            props.store.dispatch(UpdateNewPostCreator(text))
        }

    return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost} post={state.profilePage.post} newText={state.profilePage.newText} />
    )
}