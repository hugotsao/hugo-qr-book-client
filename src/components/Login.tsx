const Login = () => {
    return (
        <form className="login form-signin ">
            <label htmlFor="inputUsername" className="sr-only">Username</label>
            <input type="username" id="inputUsername" className="form-control" placeholder="Username" required />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    )
}

export default Login