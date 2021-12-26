// Table Component
import {useState, useEffect} from 'react'

const Table = () => {
    const [initialData, setInitialData] = useState([]);
    useEffect(() => {
        fetch('/api/nba').then(
          response => response.json()
        ).then(data => setInitialData(data))
      }, [])
    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Team Name</th>
                        <th>Quarter</th>
                        <th>Min. Remaining</th>
                        <th>Sec. Remaining</th>
                        <th>Event Type</th>
                        <th>Action Type</th>
                        <th>Shot Zone</th>
                        <th>Shot Area</th>
                        <th>Shot Range</th>
                        <th>Shot Distance</th>
                        <th>Shot Made</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                    </tr>
                </thead>
                <tbody>
                    {initialData.map((nba) => (
                        <tr>
                            <td>{nba.PLAYER_NAME}</td>
                            <td>{nba.TEAM_NAME}</td>
                            <td>{nba.PERIOD}</td>
                            <td>{nba.MINUTES_REMAINING}</td>
                            <td>{nba.SECONDS_REMAINING}</td>
                            <td>{nba.EVENT_TYPE}</td>
                            <td>{nba.ACTION_TYPE}</td>
                            <td>{nba.SHOT_ZONE_BASIC}</td>
                            <td>{nba.SHOT_ZONE_AREA}</td>
                            <td>{nba.SHOT_ZONE_RANGE}</td>
                            <td>{nba.SHOT_DISTANCE}</td>
                            <td>{nba.SHOT_MADE_FLAG}</td>
                            <td>{nba.HTM}</td>
                            <td>{nba.VTM}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
