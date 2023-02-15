import Header from './Header.jsx'  
import {useState} from 'react' 
import {useNavigate} from 'react-router-dom'
import http from './axios/http'

const Signup = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    console.log(loginData)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        const { name, value } = e.target
        setLoginData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await http.post("/signup", loginData) 
        alert('Account created!') 
        navigate('/')
    } 
    
    // const navigate = useNavigate()
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [favTeam, setFavTeam] = useState('') 
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')  

    // console.log(username)

    // const handleSignupSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('submitted')
    //     navigate('/profilepage') // right now it's not going to profilepage
    //     const signup = async (e) => {
    //         let req = await fetch('http://localhost:3000/users', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 first_name: firstName,
    //                 last_name: lastName,   
    //                 fav_team: favTeam, 
    //                 username: username,
    //                 email: email,
    //                 password: password
    //             })
    //         })
    //     }
    //     signup()
    // } 

    return(
        <div>
            <Header/> 
            <div id='signup-container'> 
                <form id='signup-form' onSubmit={handleSubmit}> 
                    <h2>Sign up</h2>
                    <label className='login-label'>Email</label>
                    <input id='email' className='login-input' name='email' align='left' onChange={handleLogin} /> {/*make required later */}
                    <br />
                    <label className='login-label'>Password</label>
                    <input id='password' className='login-input' name='password' align='left' onChange={handleLogin} /> {/*make required later */}
                    <br />
                    <button id='signup-btn' type='submit'>Create account </button>
                </form>  
            </div>
        </div>
    )
}

export default Signup 