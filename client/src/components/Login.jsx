import Header from './Header.jsx'

const Login = ( {handleLogin} ) => {
    return(
        <div>
            <Header/> 
            <div id='login-container'>
                <form id='login-form' onSubmit={handleLogin}> 
                    <h2>Login</h2>
                    <label className='login-label'>Email</label>
                    <input id='email' className='login-input' name='email' align='left'/> {/*make required later */}
                    <br/>
                    <label className='login-label'>Password</label>
                    <input id='password' className='login-input' name='password' align='left'/> {/*make required later */}
                    <br/> 
                    <button id='login-btn' type='submit'>Login</button> 
                </form> 
            </div>
        </div>
    )
}

export default Login