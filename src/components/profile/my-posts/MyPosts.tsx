import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.post.map((p) => {
        return (
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickHandler = () => {
            props.addPost()
    }
    const onChangeHandler = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
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