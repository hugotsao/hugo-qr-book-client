import { useState } from "react";

interface IProps {
    loginFun(formEvent: React.FormEvent): void
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const api = process.env.REACT_APP_API;
    const loginFunc = async (formEvent: React.FormEvent) :Promise<object> => {
        formEvent.preventDefault();
        console.log(`username is ${username} password is ${password}`)
        const res = await fetch(`${api}/authentication`, {
            method: "post",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {"Content-type": "application/json"}
        })
        const token = await res.json();
        console.log(`token is ${token.token}`);
        return token;
    }
    return (
        <form className="login form-signin" onSubmit={loginFunc}>
            <label htmlFor="username" className="sr-only">Username</label>
            <input type="username" id="username" className="form-control"
                placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" id="password" className="form-control"
                placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    )
}

export default Login