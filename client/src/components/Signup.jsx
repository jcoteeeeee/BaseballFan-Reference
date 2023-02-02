import Header from './Header.jsx'  

const Signup = ( {handleSignupSubmit} ) => {
    return(
        <div>
            <Header/>
            <form id='signup-form' onSubmit={handleSignupSubmit}>
                <label>Username</label>
                <input id='signup-usr' name='signup-usr'/> {/*make required later */}
                <br/>
                <label>Email</label>
                <input id='signup-email' name='signup-email'/> {/*make required later */}
                <br/>
                <label>Password</label>
                <input id='signup-pass' name='signup-pass'/> {/*make required later */}
                <br/>
                <button type='submit'>Create account </button>
            </form>
        </div>
    )
}

export default Signup 