import Header from './Header.jsx'

const Login = ( {handleLogin} ) => {
    return(
        <div>
            <Header/> 
            <form id='login-form' onSubmit={handleLogin}>
                <label>Email</label>
                <input id='email' name='email'/> {/*make required later */}
                <br/>
                <label>Password</label>
                <input id='password' name='password'/> {/*make required later */}
                <br/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login