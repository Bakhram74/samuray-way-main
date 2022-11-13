import React from "react";

import {MyPosts} from "./MyPosts";
import {AddPostCreator, UpdateNewPostCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>{(store)=> {
            const state = store.getState()
            const addPost = () => {
                store.dispatch(AddPostCreator())
            }
            const onPostChange = (text:string) => {
                store.dispatch(UpdateNewPostCreator(text))
            }
        return    <MyPosts updateNewPostText={onPostChange}
                           addPost={addPost}
                           post={state.profilePage.post}
                           newText={state.profilePage.newText} />
        }}

        </StoreContext.Consumer>
    )
}