import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const navigate = useNavigate() 
  const [users, setUsers] = useState([])  
  const [games, setGames] = useState([])
  

  // takes you from homepage to login page
  const handleLogBtnClick = () => {
    navigate('/login')
  } 

  // takes you from homepage to signup page
  const handleSignupClick = () => {
    navigate('/signup')
  }

  // takes you from login page to profile page
  const handleLogin = () => {
    navigate('/profilepage')
  }

  // takes you from signup page to profile page 
  const handleSignup = () => {
    navigate('/profilepage')
  }

  //get request for all users
  useEffect(() => {
    const requestUsers = async () => {
      let req = await fetch('http://localhost:3000/users')
      let res = await req.json()
      setUsers(res)
    }
    requestUsers()
  }, [])

  useEffect(() => {
    const requestGames = async () => {
      let req = await fetch('http://localhost:3000/games')
      let res = await req.json()  
      setGames(res)
    }
    requestGames()
  }, [])

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage handleLogBtnClick={handleLogBtnClick} handleSignupClick={handleSignupClick}/>} /> 
        <Route exact path='login' element={<Login handleLogin={handleLogin}/>} />
        <Route exact path='signup' element={<Signup handleSignup={handleSignup}/>} />
        <Route exact path='/profilepage' element={<ProfilePage games={games}/>} />
      </Routes>
    </div>
  )
}

export default App 
