import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import Login from './components/Login'
import Signup from'./components/Signup'   
import AddGamePage from './components/AddGamePage'  
// import EditGamePage from './components/EditGamePage'  
// import EditProfilePage from './components/EditProfilePage'  
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
  let game 
  const [userId, setUserId] = useState(currentUser.user_data)
  const [date, setDate] = useState('')
  const [result, setResult] = useState('')
  const [score, setScore] = useState('')
  const [opponent, setOpponent] = useState('')
  const [location, setLocation] = useState('')
  const [stPitcher, setStPitcher] = useState('')
  const [note, setNote] = useState('')
  

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

  //function to add a game 
  function handleAddGameSubmit(e) {
    e.preventDefault()
    console.log('submitted')
    navigate('/profilepage')
    const addGame = async (e, game) => {
      let req = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          date: date,
          result: result,
          score: score,
          opponent: opponent,
          location: location,
          st_pitcher: stPitcher,
          note: note
        })
      })

    }
    addGame()
  }

  //function to delete individual game 
  const handleDeleteGameClick = (game) => { //actually it's adding game here that makes it stop persisting 
    console.log('clicked') 
    const destroy = async (game) => {
      let req = await fetch(`http://localhost:3000/games/${game.id}`, {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json'}
     })
    }
    setGames((prevState) => {
      return [...prevState.filter((g) => g.id !== game.id)]
    })
    destroy(game) //adding game here is what makes it stop persisting. I guess it's both 
    // // issue solved. Function needed to be called within an arrow function when called 
  }    


  const handleSubmit = async (e) => {
    e.preventDefault()
  }

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
        <Route exact path='profilepage' element={<ProfilePage currentUser={currentUser} games={games} handleAddGameBtn={handleAddGameBtn} handleDeleteGameClick={handleDeleteGameClick} handleEditGameBtn={handleEditGameBtn} handleEditProfileBtn={handleEditProfileBtn} user={user} />} />
        <Route exact path='addgame' element={<AddGamePage currentUser={currentUser} handleAddGameSubmit={handleAddGameSubmit} userId={userId} date={date} result={result} score={score} opponent={opponent} location={location} stPitcher={stPitcher} note={note}/>} /> 
        {/* <Route exact path='editgame' element={<EditGamePage/>} />  */}
        {/* <Route exact path='editprofile' element={<EditProfilePage/>} />  */}
        <Route exact path='about' element={<AboutPage/>} />
      </Routes> 
    </div>
  )
}

export default App 
