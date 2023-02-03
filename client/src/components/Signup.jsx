import Header from './Header.jsx'  
import {useState} from 'react' 
import {useNavigate} from 'react-router-dom'

const Signup = ({ handleSignupSubmit } ) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(username)

    function handleSignupSubmit(e) {
        e.preventDefault()
        console.log('submitted')
        navigate('/profilepage') // right now it's not going to profilepage
        const signup = async (e) => {
            let req = await fetch(`http://localhost:3000/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })
        }
        signup()
    } 

    return(
        <div>
            <Header/>
            <form id='signup-form' onSubmit={handleSignupSubmit}>
                <label>Username</label>
                <input value={username} id='signup-usr' type='text' name='signup_usr' onChange={(e) => setUsername(e.target.value)}/> {/*make required later */}
                <br/>
                <label>Email</label>
                <input value={email} id='signup-email' type='email' name='signup_email' onChange={(e) => setEmail(e.target.value)}/> {/*make required later */}
                <br/>
                <label>Password</label>
                <input value={password} id='signup-pass' type='password' name='signup_pass' onChange={(e) => setPassword(e.target.value)}/> {/*make required later */}
                <br/>
                <button type='submit'>Create account </button>
            </form>
        </div>
    )
}

export default Signup 