import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <div>
                <input type="text" placeholder={'login'}/>
            </div>
            <div>
                <input type="text" placeholder={'password'}/>
            </div>
            <div>
                <input type="checkbox"/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </div>
    );
};

export default Login;