import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi how are you'/>
                <Post message='Its my post'/>

            </div>


            </div>

    )
}