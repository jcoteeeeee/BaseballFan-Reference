import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'   
import AddGamePage from './components/AddGamePage'  
import EditGamePage from './components/EditGamePage'  
import EditProfilePage from './components/EditProfilePage'  
import AboutPage from './components/AboutPage'
import {Routes, Route, useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'  

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


  // takes you from profile page to addgamepage 
  const handleAddGameBtn = () => {
    navigate('/addgame')
  } 
  
  //takes you from profile page to editgamepage
  const handleEditGameBtn = () => {
    navigate('/editgame')
  } 

  const handleEditProfileBtn = () => {
    navigate('/editprofile')
  } 

  // _____________________________________________________________________
  //get request for all users 
  useEffect(() => { 
    const requestUsers = async () => {
      let req = await fetch('http://localhost:3000/users')
      let res = await req.json()
      setUsers(res)
    }
    requestUsers()
  }, [])
  // ______________________________________________________________________

  // ______________________________________________________________________
  // get request for all games 
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
        <Route exact path='signup' element={<Signup/>} />
        <Route exact path='profilepage' element={<ProfilePage games={games} handleAddGameBtn={handleAddGameBtn} handleEditGameBtn={handleEditGameBtn} handleEditProfileBtn={handleEditProfileBtn}/>} />
        <Route exact path='addgame' element={<AddGamePage/>} /> 
        <Route exact path='editgame' element={<EditGamePage/>} /> 
        {/* <Route exact path='editprofile' element={<EditProfilePage/>} />  */}
        <Route exact path='about' element={<AboutPage/>} />
      </Routes> 
    </div>
  )
}

export default App 
