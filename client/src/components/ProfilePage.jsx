import Header from './Header.jsx'

const ProfilePage = ( {games} ) => {
    return(
        <div>
            <Header/> 
            <div id='game-table'>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Result</th>
                        <th>Score</th>
                        <th>Opponent</th>
                        <th>Location</th>
                        <th>Starting Pitcher</th>
                        <th>Cumulative Record</th>
                        <th>Note</th>
                    </tr>
                    {
                        games.map((game) => {
                            return(
                                <tr>
                                    {game.date}
                                </tr>
                            )
                        })
                    }
                </table>       
            </div>
        </div>
    )
}

export default ProfilePage