import axios from "axios"
import jsCookie from "js-cookie"

async function processLogin(user) {
    console.log(user)
    try {
        let response = await axios.post("/api/login", user)
        if (response.status === 200) return true
    } catch (err) {
        return false
    }
}

export default processLogin
