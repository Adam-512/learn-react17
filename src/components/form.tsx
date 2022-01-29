import { useState } from "react"
import { useAuth } from "../context/auth-context"

export const TestForm = () => {
    const { login } = useAuth()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const doLogin = () => {
        login({
            username,
            password,
        }) 
    }
    return <div>
        <p>UserName: <input type="text" value={username} onChange={e => setUsername(e.target.value)} /></p>
        <p>Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)} /></p>
        <button onClick={e => doLogin()}>Login</button>
    </div>
}