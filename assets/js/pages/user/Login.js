import React, { useState, useEffect } from "react"
import Navigation from "../../components/Navigation"
import LoginForm from "../../components/LoginForm"

const Login = () => {
    const [userCredential, setUserCredential] = useState({})

    useEffect(() => {
        return () => console.log(userCredential)
    }, [userCredential])
    return (
        <div>
            <Navigation />
            <h1>Login</h1>
            <LoginForm
                userCredential={userCredential}
                setUserCredential={setUserCredential}
            />
        </div>
    )
}

export default Login
