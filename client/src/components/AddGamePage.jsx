import Header from './Header.jsx'

const AddGamePage = () => {
    return(
        <div>
            <Header/>
            <form id='addgame-form'>
                <label>Date</label>
                <input type='date' name='add_date' />
                <br />
                <label>Result</label>
                <input type='text' name='add_result' />
                <br />
                <label>Score</label>
                <input type='text' name='add_score' />
                <br />
                <label>Location</label>
                <input type='text' name='add_location' />
                <br />
                <label>Starting pitcher </label>  
                <input type='text' name='add_stp'/>
                <label>Note</label>
                <input type='text' name='add_note' />
                <br />
                <button type='submit'>Add game</button>
            </form>    
        </div>  
    )
}  

export default AddGamePage