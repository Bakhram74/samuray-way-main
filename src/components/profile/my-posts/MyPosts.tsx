import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validator";
import {Forms} from "../../../common/Forms/Forms";


export class MyPosts extends React.PureComponent<MyPostsPropsType> {

    // shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<{}>): boolean {
    //     return nextProps != this.props || nextState != this.state
    // }

    render() {
        console.log('my posts')
        let postsElements = this.props.profilePage.post.map((p) => {
            return (
                <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
            )
        })
        const addNewPost = (value: AddNewPostDataType) => {
            this.props.addPost(value.newPost)
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
}

type AddNewPostDataType={
    newPost:string
}
const maxLength10 = maxLength(10)

const AddNewPost = (props:InjectedFormProps<AddNewPostDataType>)=>{
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={"newPost"} component={Forms} type={"textarea"} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewReduxFormPost = reduxForm<AddNewPostDataType>({form:"addNewReduxPost"})
(AddNewPost)