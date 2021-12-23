import { useState } from 'react'

const AddPlayer = ({onAddPlayerData}) => {
    const [playerName, setPlayerName] = useState('')
    const [yearPlayed, setYearPlayed] = useState('')
    //const [Stats, setStats] = useState(false)

    //onSubmitPlayer Function
    const onSubmitPlayer = (e) => {
        e.preventDefault()

        if (!playerName) {
            alert('Add Player Name')
            return
        }

        //pass in data into onAddPlayerData
        onAddPlayerData({ name: playerName, year: yearPlayed})

        //Clear after submitted
        setPlayerName('')
        setYearPlayed('')
        //setStats(false)
    }
    return (
        <form className = 'form-control' onSubmit={onSubmitPlayer}>
            <div className = 'form-control'>
                <label>Player Name</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Player' 
                    value = {playerName}
                    onChange = {(e) => setPlayerName(e.target.value)}
                />
                <label>Year Played</label>
                <input 
                    type = 'text'
                    placeholder = 'Add Year'
                    value = {yearPlayed}
                    onChange = {(e) => setYearPlayed(e.target.value)}
                />
                <input 
                    type = 'submit' 
                    value = 'Add Player'
                    className = 'btn'
                />
            </div>
            
        </form>
    );
}

export default AddPlayer;
