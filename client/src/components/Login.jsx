import Header from './Header.jsx'
import { React, useState, useEffect } from 'react'
import http from './axios/http'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = ( {currentUser}) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    console.log(loginData)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        const { name , value } = e.target
        setLoginData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()
        const {data} = await http.post("/login", loginData)
        localStorage.setItem('token', JSON.stringify(data))
        console.log(data)
        navigate('/profilepage') 
    } 
    
    return(
        <div>
            <Header/> 
            <div id='login-container'>
                <form id='login-form' onSubmit={handleSubmit}> 
                    <h2>Login</h2>
                    <label className='login-label'>Email</label>
                    <input id='email' className='login-input' name='email' type='email' onChange={handleLogin} required /> 
                    <br/>
                    <label className='login-label'>Password</label>
                    <input id='password' className='login-input' name='password' type='password' onChange={handleLogin} required /> 
                    <br/> 
                    <button id='login-btn' type='submit'>Login</button> 
                </form> 
            </div>
        </div>
    )
}

export default Login