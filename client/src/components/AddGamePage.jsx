import Header from './Header.jsx' 
import {useState} from 'react' 
import {useNavigate} from 'react-router-dom'

const AddGamePage = () => { 
    const navigate = useNavigate()
    const [date, setDate] = useState('')
    const [result, setResult] = useState('')
    const [score, setScore] = useState('')
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
        const addGame = async (e) => {
            let req = await fetch('http://localhost:3000/games', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user_id: 1, // needs to be changed later to variable. 1 is placeholder for now so post request works 
                    date: date, 
                    result: result,
                    score: score,
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
            <form id='addgame-form' onSubmit={handleAddGameSubmit}>
                <label>Date</label>
                <input value={date} id='add-date' type='date' name='date' onChange={(e) => setDate(e.target.value)}/> {/* make required */}
                <br />
                <label>Result</label>
                <input value={result} id='add-result' type='text' name='result' onChange={(e) => setResult(e.target.value)}/>
                <br />
                <label>Score</label>
                <input value={score} id='add-score' type='text' name='score' onChange={(e) => setScore(e.target.value)}/>
                <br />
                <label>Location</label>
                <input value={location} id='add-location' type='text' name='location' onChange={(e) => setLocation(e.target.value)}/>
                <br />
                <label>Starting pitcher </label>  
                <input value={stPitcher} id='add-stp' type='text' name='stPitcher' onChange={(e) => setStPitcher(e.target.value)}/>  
                <br/>
                <label>Note</label>
                <input value={note} id='add-note' type='text' name='note' onChange={(e) => setNote(e.target.value)}/>
                <br />
                <button type='submit'>Add game</button>
            </form>    
        </div>  
    )
}  

export default AddGamePage 