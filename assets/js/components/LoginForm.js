import React from "react"
import processLogin from "../utils/processLogin"

const LoginForm = ({ userCredential, setUserCredential }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get("email")
        const password = formData.get("password")
        const user = {
            username: email,
            password: password,
        }
        processLogin(user).then((res) => console.log(res))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" id="email" placeholder="email" />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
            />
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm
