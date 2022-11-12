import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {ProfilePropsType} from "../Profile";
import {AddPostCreator, UpdateNewPostCreator} from "../../../redux/profile-reducer";

export function MyPosts(props: ProfilePropsType) {
    let postsElements = props.profilePage.post.map((p) => {
        return (
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickHandler = () => {
            props.dispatch(AddPostCreator())
    }
    const onChangeHandler = () => {
        if (newPostElement.current) {
            props.dispatch(UpdateNewPostCreator(newPostElement.current.value))
        }
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onChangeHandler} ref={newPostElement} value={props.profilePage.newText}></textarea>
            </div>
            <div>
                <button onClick={onClickHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>


        </div>

    )
}