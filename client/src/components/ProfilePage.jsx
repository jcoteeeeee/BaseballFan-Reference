import Header from './Header.jsx' 
import { useState, useRef, useEffect, react } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProfilePage = ( {games, handleAddGameBtn, handleEditGameBtn, handleEditProfileBtn, currentUser } ) => {
    const [user, setUser] = useState(currentUser)
    const navigate = useNavigate()

 const logginOut = () => {
    localStorage.removeItem('token')
    navigate('/')
 }
    
    return(
        <div>
            <Header/> 
            <div id='bio'>  
                <>
                    <h3></h3>
                </>
                <p>@profilename:</p>
                <p>Favorite team: </p>
                <button onClick={()=>{logginOut()}}>Log out</button>
                {/* <p>First game attended: </p>
                <p>Total games attended: </p>  */}
                {/* <button id='edit-profile-btn' onClick={handleEditProfileBtn}>Edit profile</button>  */}
            </div>
            {/* <div>
                <h3>Record</h3>
                <h3>percentage </h3>
            </div>  */}
            <button id='addgame' onClick={handleAddGameBtn}>
                Add game
                </button>
            <div id='game-table'>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Result</th>
                        <th>Score</th>
                        <th>Opponent</th>
                        <th>Location</th>
                        <th>Starting Pitcher</th>
                        <th>Note</th>
                    </tr>
                    {
                        games.map((game) => {
                            return(
                                <tr>
                                    <th>
                                        {game.date}
                                    </th>
                                    <th>
                                        {game.result}
                                    </th>
                                    <th>
                                        {game.score}
                                    </th> 
                                    <th>
                                        {game.opponent}
                                    </th>
                                    <th>
                                        {game.location}
                                    </th>
                                    <th>
                                        {game.st_pitcher}
                                    </th>
                                    <th>
                                        {game.note}
                                    </th>
                                </tr> 
                            )
                        })
                    }
                </table>   
            </div>  
            <button id='editgame' onClick={handleEditGameBtn}>Edit game</button> 
            <br/>
            <button onSubmit={() => {handleDeleteGameSubmit}}>Delete game</button>
        </div>
    )
}

export default ProfilePage  