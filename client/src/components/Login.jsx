import Header from './Header.jsx'

const Login = ( {handleLogin} ) => {
    return(
        <div>
            <Header/> 
            <form id='login-form' onSubmit={handleLogin}> 
                <h2>Login</h2>
                <label className='login-label'>Email</label>
                <input id='email' className='login-input' name='email' align='left'/> {/*make required later */}
                <br/>
                <label className='login-label'>Password</label>
                <input id='password' className='login-input' name='password' align='left'/> {/*make required later */}
                <br/> 
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login