import Header from './Header.jsx'  

const EditGamePage = () => {
    return(
        <div>
            <form>
                <Header/>  
                <label>Date</label>
                <input type='date' name='date' />
                <br />
                <label>Result</label>
                <input type='text' name='result' />
                <br />
                <label>Score</label>
                <input type='text' name='score' />
                <br />
                <label>Location</label>
                <input type='text' name='location' />
                <br />
                <label>Note</label>
                <input type='text' name='note' />
                <br />
                <button type='submit'>Save changes</button>
            </form>    
        </div>
    )
}  

export default EditGamePage 