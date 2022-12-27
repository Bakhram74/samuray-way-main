import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {Forms} from "../../common/Forms/Forms";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer/auth-reducer";
import {AppStateType} from "../../store/redux-store";
import {Redirect} from "react-router-dom";
import s from './../../common/Forms/Forms.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Email'} type={'email'} component={Forms} validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} type={'password'} component={Forms}
                       validate={[required]}/>
            </div>
            <div>
                remember me<Field name={'rememberMe'} component={Forms} type={'checkbox'}/>
            </div>
            {props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>

        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
//golang2009
const Login = (props: LoginPropsType) => {
    const submit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);



