import Homepage from './components/Homepage'
import ProfilePage from './components/ProfilePage'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/profilepage' element={<ProfilePage/>} />
      </Routes>
    </div>
  )
}

export default App
