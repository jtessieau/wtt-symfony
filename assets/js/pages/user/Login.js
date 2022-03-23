import React from 'react'
import Navigation from '../../components/Navigation';
import LoginForm from '../../components/LoginForm';

const Login = () => {
    const fndex = (state) => { console.log(state) }
    return (
        <div>
            <Navigation />
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default Login;

rc