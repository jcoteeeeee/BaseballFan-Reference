import Header from './Header.jsx'  

const Signup = () => {
    return(
        <div>
            <Header/>
            <form id='signup-form3'>
                <label>Username</label>
                <input id='signup-usr' name='signup-usr' required />
                <br/>
                <label>Email</label>
                <input id='signup-email' name='signup-email' required />
                <br/>
                <label>Password</label>
                <input id='signup-pass' name='signup-pass' required />  
                <br/>
                <button>Create account </button>
            </form>
        </div>
    )
}

export default Signup 