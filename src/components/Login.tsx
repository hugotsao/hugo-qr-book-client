import { useState } from "react";

interface IProps {
    loginFunc(username:string, password:string): Promise<void>
}

const Login = ({ loginFunc }: IProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className="login form-signin" onSubmit={(e) => {
            e.preventDefault();
            loginFunc(username, password);
        }}>
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