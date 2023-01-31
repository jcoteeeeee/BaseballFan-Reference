import Header from './Header.jsx'

const ProfilePage = () => {
    return(
        <div>
            <Header/> 
            <div id='game-table'>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Result</th>
                        <th>Score</th>
                        <th>Opponnent</th>
                        <th>Location</th>
                        <th>Starting Pitcher</th>
                        <th>Cumulative Record</th>
                        <th>Note</th>
                    </tr>
                </table>       
            </div>
        </div>
    )
}

export default ProfilePage