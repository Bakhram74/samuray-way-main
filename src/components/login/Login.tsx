import React from 'react';
import {Field, InjectedFormProps, reduxForm, } from "redux-form";

type FormDataType = ({
    login: string
    password: string
    rememberMe: boolean
})

const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={'login'} name={'login'} component={"input"}/>
                </div>
                <div>
                    <Field type="text" placeholder={'password'} name={'password'} component={"input"}/>
                </div>
                <div>
                    remember me<Field type="checkbox" name={"rememberMe"} component={"input"}/>
                </div>
                <div>
                    <button>login</button>
                </div>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})
(LoginForm)



const Login = () => {
    const onSubmit = (formData: {}) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default Login;