import Header from './Header.jsx'  

const Signup = ( {handleSignupSubmit} ) => {
    return(
        <div>
            <Header/>
            <form id='signup-form' onSubmit={() => {handleSignupSubmit}}>
                <label>Username</label>
                <input id='signup-usr' type='text' name='signup_usr'/> {/*make required later */}
                <br/>
                <label>Email</label>
                <input id='signup-email' type='email' name='signup_email'/> {/*make required later */}
                <br/>
                <label>Password</label>
                <input id='signup-pass' type='password' name='signup_pass'/> {/*make required later */}
                <br/>
                <button type='submit'>Create account </button>
            </form>
        </div>
    )
}

export default Signup 