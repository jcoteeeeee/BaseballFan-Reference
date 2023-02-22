import Header from './Header.jsx'  
import {useState} from 'react' 
import {useNavigate} from 'react-router-dom'
import http from './axios/http'

const Signup = () => {
    const [loginData, setLoginData] = useState({
        first_name: '',
        last_name: '',
        fav_team: '',
        username: '',
        email: '',
        password: '',
    })
    console.log(loginData)

    const navigate = useNavigate()

    const handleSignup = (e) => {
        const { name, value } = e.target
        setLoginData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { data } = await http.post("/signup", loginData) 
        alert('Account created! Return to homepage and log in.') 
        navigate('/')
        console.log(data) 
        console.log(e)
    } 

    return(
        <div>
            <Header/> 
            <div id='signup-container'> 
                <form id='signup-form' onSubmit={handleSubmit}> 
                    <h2>Sign up</h2>
                    <label className='signup-label'>First name</label>
                    <input className='signup-input' name='first_name' onChange={handleSignup} required />
                    <br/>
                    <label className='signup-label'>Last name</label> 
                    <input className='signup-input' name='last_name' onChange={handleSignup} required /> 
                    <br/>
                    <label className='signup-label'>Favorite team</label>
                    <input className='signup-input' name='fav_team' onChange={handleSignup} required />
                    <br/>
                    <label className='signup-label'>Username</label> 
                    <input className='signup-input' name='username' onChange={handleSignup} required />
                    <br/>
                    <label className='signup-label'>Email</label>
                    <input id='signup-email' className='signup-input' name='email' type='email' onChange={handleSignup} required /> {/*make required later */}
                    <br />
                    <label className='signup-label'>Password</label>
                    <input id='signup-password' className='signup-input' name='password' type='password' onChange={handleSignup} required /> {/*make required later */}
                    <br />
                    <button id='signup-btn' type='submit'>Create account </button>
                </form>  
            </div>
        </div>
    )
}

export default Signup 