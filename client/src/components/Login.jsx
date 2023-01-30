const Login = () => {
    return(
        <div>
            <form id='login-form'>
                <label>Email</label>
                <input id='email' name='email' required />
                <br/>
                <label>Password</label>
                <input id='password' name='password' required />
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login