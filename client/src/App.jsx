import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'   
import AddGamePage from './components/AddGamePage'  
import EditGamePage from './components/EditGamePage'  
import EditProfilePage from './components/EditProfilePage'  
import AboutPage from './components/AboutPage'
import {Routes, Route, useNavigate} from 'react-router-dom'
import {useEffect, useState, useRef} from 'react'  
import jwtDecode from 'jwt-decode'


let tokenData;
if (localStorage.token){
  const jwt = localStorage.getItem("token")
  tokenData = jwtDecode(jwt)}

function App() {
  const [currentUser, setCurrentUser] = useState(tokenData)
  console.log(currentUser)
  const navigate = useNavigate() 
  const [users, setUsers] = useState([])   
  const [games, setGames] = useState([])
  const [user, setUser] = useState(null) 
  const form = useRef() 
  

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

  // useEffect(() => {
  //   const loadUser = async () => {
  //     let req = await fetch("/me", {
  //       headers: { Authorization: Cookies.get('token') }
  //     })
  //     let res = await req.json()
  //     if (res.user) setUser(res.user)
  //   }
  //   if (Cookies.get('token')) loadUser()
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  //   let formData = new FormData(form.current)
  //   let req = await fetch("https://localhost:3000/login", {
  //     method: "POST",
  //     body: formData
  //   })
  //   let res = await req.json()
  //   console.log("Res", res)
  //   Cookies.set('token', res.token)
  //   setUser(res.user)
  // }
  const logOut = () => {
    // Cookies.remove('token')
    setUser(null)
  } 

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage handleLogBtnClick={handleLogBtnClick} handleSignupClick={handleSignupClick}/>} /> 
        <Route exact path='login' element={<Login />} />
        <Route exact path='signup' element={<Signup/>} />
        <Route exact path='profilepage' element={<ProfilePage currentUser={currentUser} games={games} handleAddGameBtn={handleAddGameBtn} handleEditGameBtn={handleEditGameBtn} handleEditProfileBtn={handleEditProfileBtn} user={user} />} />
        <Route exact path='addgame' element={<AddGamePage currentUser={currentUser} />} /> 
        <Route exact path='editgame' element={<EditGamePage/>} /> 
        {/* <Route exact path='editprofile' element={<EditProfilePage/>} />  */}
        <Route exact path='about' element={<AboutPage/>} />
      </Routes> 
    </div>
  )
}

export default App 
