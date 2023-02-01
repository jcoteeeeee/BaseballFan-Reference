import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

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

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage handleLogBtnClick={handleLogBtnClick} handleSignupClick={handleSignupClick}/>} /> 
        <Route exact path='login' element={<Login handleLogin={handleLogin}/>} />
        <Route exact path='signup' element={<Signup handleSignup={handleSignup}/>} />
        <Route exact path='/profilepage' element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App
