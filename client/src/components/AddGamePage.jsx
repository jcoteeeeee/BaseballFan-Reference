import Header from './Header.jsx' 
import {useState} from 'react' 
import {useNavigate} from 'react-router-dom'

const AddGamePage = ( {currentUser} ) => { 
    const [userId, setUserId] = useState(currentUser.user_data)
    console.log(userId) 
    const navigate = useNavigate()
    const [date, setDate] = useState('')
    const [result, setResult] = useState('')
    const [score, setScore] = useState('')  
    const [opponent, setOpponent] = useState('')
    const [location, setLocation] = useState('')
    const [stPitcher, setStPitcher] = useState('') 
    const [note, setNote] = useState('')  

    console.log(date)
    console.log(result)  
    console.log(result) 
    console.log(score) 
    console.log(location) 
    console.log(stPitcher)
    console.log(note)

    
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

    return(
        <div>
            <Header/> 
            <div id='addgame-container' className='game-container'> 
            <form id='addgame-form' className='game-form' onSubmit={handleAddGameSubmit}>
                <label className='game-label'>Date</label>
                <input value={date} id='add-date' className='game-input' type='date' name='add_date' onChange={(e) => setDate(e.target.value)} /> {/* make required */}
                <br />
                <label className='game-label'>Result</label>
                <input value={result} id='add-result' className='game-input' type='text' name='add_result' placeholder='Win'onChange={(e) => setResult(e.target.value)} />
                <br />
                <label className='game-label'>Score</label>
                <input value={score} id='add-score' className='game-input' type='text' name='add_score' placeholder='10-5' onChange={(e) => setScore(e.target.value)} />
                <br />   
                <label className='game-label'>Opponent</label>
                <input value={opponent} id='add-opponent' className='game-input' type='text' name='add_opp' placeholder='Arizona Diamondbacks' onChange={(e) => setOpponent(e.target.value)} />
                <br/>
                <label className='game-label'>Location</label>
                <input value={location} id='add-location' className='game-input' type='text' name='add_location' placeholder='American Family Field' onChange={(e) => setLocation(e.target.value)} />
                <br />
                <label className='game-label'>Starting pitcher </label>  
                <input value={stPitcher} id='add-stp' className='game-input' type='text' name='add_stp' placeholder='Aaron Nola'onChange={(e) => setStPitcher(e.target.value)} />  
                <br/>
                <label className='game-label'>Note</label>
                <input value={note} id='add-note' className='game-input' type='text' name='add_note' placeholder='I was bored' onChange={(e) => setNote(e.target.value)} />
                <br />
                <button class='game-btn' type='submit'>Add game</button>
            </form>     
            </div>
        </div>  
    )
}  

export default AddGamePage 