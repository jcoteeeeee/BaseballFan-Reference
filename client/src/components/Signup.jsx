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

    return(
        <div>
            <Header/> 
            <div id='signup-container'> 
                <form id='signup-form' onSubmit={handleSubmit}> 
                    <h2>Sign up</h2>
                    <label className='login-label'>Email</label>
                    <input id='email' className='login-input' name='email' type='email' onChange={handleLogin} /> {/*make required later */}
                    <br />
                    <label className='login-label'>Password</label>
                    <input id='password' className='login-input' name='password' type='password' onChange={handleLogin} /> {/*make required later */}
                    <br />
                    <button id='signup-btn' type='submit'>Create account </button>
                </form>  
            </div>
        </div>
    )
}

export default Signup 