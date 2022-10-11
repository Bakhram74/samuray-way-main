import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";

export function MyPosts() {
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
                <Post message='Hi how are you'/>
                <Post message='Its my post'/>

            </div>


            </div>

    )
}