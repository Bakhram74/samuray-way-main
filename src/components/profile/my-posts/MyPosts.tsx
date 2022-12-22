import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export function MyPosts(props: MyPostsPropsType) {
    let postsElements = props.profilePage.post.map((p) => {
        return (
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
        )
    })

    const addNewPost = (value:AddNewPostDataType)=>{
        props.addPost(value.newPost)
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
          <AddNewReduxFormPost onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>


        </div>

    )
}

type AddNewPostDataType={
    newPost:string
}

const AddNewPost = (props:InjectedFormProps<AddNewPostDataType>)=>{
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"addNewPost"} component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewReduxFormPost = reduxForm<AddNewPostDataType>({form:"addNewPost"})(AddNewPost)