import Header from './Header.jsx'  

const EditGamePage = ( {handleEditGameSubmit} ) => {
    return(
        <div>
            <Header/>  
            <form id='editgame-form' onSubmit={() => {handleEditGameSubmit}}>
                <label>Date</label>
                <input type='date' name='edit_date' />
                <br />
                <label>Result</label>
                <input type='text' name='edit_result' />
                <br />
                <label>Score</label>
                <input type='text' name='edit_score' />
                <br />
                <label>Location</label>
                <input type='text' name='edit_location' />
                <label>Starting pitcher</label>
                <input type='text' name='edit_stp'/>
                <br />
                <label>Note</label>
                <input type='text' name='edit_note' />
                <br />
                <button type='submit'>Save changes</button>
            </form>    
        </div>
    )
}  

export default EditGamePage 