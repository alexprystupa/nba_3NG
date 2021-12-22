import Player from './Player'

const Players = ({nbaPlayers, onDelete}) => {
    return (
        <div>
            {nbaPlayers.map((player) => (
                <Player 
                    key = {player.id} 
                    nbaPlayer = {player}
                    onDelete = {onDelete}
                />
        ))}
        </div>
    )
}

export default Players
