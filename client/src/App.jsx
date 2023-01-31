import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleLogBtnClick = () => {
    navigate('/login')
  } 

  const handleSignupClick = () => {
    navigate('/signup')
  }

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage handleLogBtnClick={handleLogBtnClick} handleSignupClick={handleSignupClick}/>} /> 
        <Route exact path='login' element={<Login/>} />
        <Route exact path='signup' element={<Signup/>} />
        <Route exact path='/profilepage' element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App
