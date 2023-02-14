import Header from './Header.jsx'  
import {useState} from 'react' 
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [favTeam, setFavTeam] = useState('') 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    console.log(username)

    const handleSignupSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        navigate('/profilepage') // right now it's not going to profilepage
        const signup = async (e) => {
            let req = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,   
                    fav_team: favTeam, 
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
            <div id='signup-container'> 
                <form id='signup-form' onSubmit={handleSignupSubmit}> 
                    <h2>Sign up</h2>
                    <label className='signup-label'>First name</label>
                    <input value={firstName} id='signup-fn' className='signup-input' type='text' name='signup_fn' onChange={(e) => setFirstName(e.target.value)} /> 
                    <br/>
                    <label className='signup-label'>Last name</label>
                    <input value={lastName} id='signup-ln' className='signup-input' type='text' name='signup_ln' onChange={(e) => setLastName(e.target.value)} /> 
                    <br/>   
                    <label className='signup-label'>Favorite team</label>
                    <input value={favTeam} id='fav-team' className='signup-input' type='text' name='favTeam' onChange={(e) => setFavTeam(e.target.value)}/>  
                    <br/>
                    <label className='signup-label'>Username</label>
                    <input value={username} id='signup-usr' className='signup-input' type='text' name='signup_usr' onChange={(e) => setUsername(e.target.value)}/> {/*make required later */}
                    <br/>
                    <label className='signup-label'>Email</label>
                    <input value={email} id='signup-email' className='signup-input' type='email' name='signup_email' onChange={(e) => setEmail(e.target.value)}/> {/*make required later */}
                    <br/>
                    <label className='signup-label'>Password</label>
                    <input value={password} id='signup-pass' className='signup-input' type='password' name='signup_pass' onChange={(e) => setPassword(e.target.value)}/> {/*make required later */}
                    <br/>  
                    <button id='signup-btn' type='submit'>Create account </button>
                </form>  
            </div>
        </div>
    )
}

export default Signup 