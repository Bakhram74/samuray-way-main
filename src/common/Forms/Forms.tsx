import React from 'react';
import s from './Forms.module.css'
import {WrappedFieldProps} from "redux-form";


type inputType ={
    type:string
}


export const Forms = ({input, meta: {touched, error},...restProps}:WrappedFieldProps & inputType) => {

    const hasError = touched && error
    return (
        <div className={s.formControl +' ' + (hasError? s.error : "")}>
            {restProps.type === "textarea" ? <textarea {...input} {...restProps} ></textarea>
            : <input {...input} {...restProps} />}
            <div className={s.formControl + ' ' + s.error}>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    );
};



