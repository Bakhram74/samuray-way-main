import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field name={'login'} placeholder={'Login'} component="input" />
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component="input" />
            </div>
            <div>
                remember me<Field name={'rememberMe'} component="input"   type={'checkbox'}/>
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
   const submit = (formData:FormDataType)=>{
       console.log(formData)
   }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};

export default Login;



