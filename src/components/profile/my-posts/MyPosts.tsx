import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {ProfilePage} from "../Profile";

type MyPostsPropsType = {
    state:ProfilePage
}
export function MyPosts(props:MyPostsPropsType) {

   let postsElements = props.state.post.map((p)=>{
       return(
           <Post message={p.message} likesCount={p.likesCount}/>
       )
   })
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>


            </div>

    )
}