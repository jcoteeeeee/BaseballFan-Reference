import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'   
import AddGamePage from './components/AddGamePage'  
import EditGamePage from './components/EditGamePage'  
import EditProfilePage from './components/EditProfilePage'
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

  // // takes you from signup page to profile page 
  // const handleSignup = () => {
  //   navigate('/profilepage')
  // } 

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
  // ______________________________________________________________________

  // ______________________________________________________________________
  // post request to create an account (for signup page)
  // function handleSignupSubmit(e) {
  //   e.preventDefault() 
  //   console.log('submitted')
  //   navigate('/profilepage') // right now it's not going to profilepage
  //   const signup = async (e) => {
  //     let req  = await fetch(`http://localhost:3000/users`, {
  //       method: 'POST', 
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         username: username,
  //         email: email,
  //         password: password
  //       })
  //     })
  //   }
  //   signup()
  // } 
  // _______________________________________________________________________ 

  // _______________________________________________________________________
  // for adding a new game 
  // const handleAddGameSubmit = (e) => {
  //   e.preventDefault()
  //   const addGame = async (e) => {
  //     let req = await fetch('http://localhost:3000/games', {
  //       method: 'POST', 
  //       headers: {'Content-Type': 'application/json'}, 
  //       body: JSON.stringify({
  //         date: e.target.add_date.value,
  //         result: e.target.add_result.value, 
  //         score: e.target.add_score.value, 
  //         location: e.taregt.add_location.value, 
  //         st_pitcher: e.target.add_stp.value, 
  //         note: e.target.add_note.value
  //       })
  //     })
  //   }
  //   addGame()
  // }
  // ________________________________________________________________________ 

  // ________________________________________________________________________ 
  // for editing game
  // const handleEditGameSubmit = (e) => {
  //   e.preventDefault()
  //   const updateGame = async (e, games) => {
  //     let req = await fetch(`http://localhost:3000/games/${games.id}`, {
  //       method: 'PATCH',
  //       headers: {'Content-Type': 'application/json'}, 
  //       body: JSON.stringify({
  //         date: e.target.add_date.value,
  //         result: e.target.add_result.value,
  //         score: e.target.add_score.value,
  //         location: e.taregt.add_location.value,
  //         st_pitcher: e.target.add_stp.value,
  //         note: e.target.add_note.value 
  //       })
  //     })
  //   }
  //   updateGame()
  // }   
  // ________________________________________________________________________ 

  // ________________________________________________________________________
  // for deleting game
  // const handleDeleteGameSubmit = (e) => {
  //   e.preventDefault()
  //   const deleteGame = async (e, games) => {
  //     let req = await fetch(`http://localhost:3000/games/${games.id}`, {
  //       method: 'DELETE'
  //     })
  //   }
  //   deleteGame()
  // }  
  // ________________________________________________________________________

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage handleLogBtnClick={handleLogBtnClick} handleSignupClick={handleSignupClick}/>} /> 
        <Route exact path='login' element={<Login handleLogin={handleLogin}/>} />
        <Route exact path='signup' element={<Signup/>} />
        <Route exact path='profilepage' element={<ProfilePage games={games} handleAddGameBtn={handleAddGameBtn} handleEditGameBtn={handleEditGameBtn} handleEditProfileBtn={handleEditProfileBtn}/>} />
        <Route exact path='addgame' element={<AddGamePage/>} /> 
        <Route exact path='editgame' element={<EditGamePage/>} /> 
        <Route exact path='editprofile' element={<EditProfilePage/>} />
      </Routes> 
    </div>
  )
}

export default App 
