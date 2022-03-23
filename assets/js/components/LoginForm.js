import React from 'react';

const LoginForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        this.props.onChange(this.state)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder='email' />
            <input type="password" name="password" id="password" placeholder='password' />
            <input type="submit" value="Login" />
        </form>
    );
};

export default LoginForm;