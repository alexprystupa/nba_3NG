import Player from './Player'

const Players = ({nbaPlayers, onDelete, onToggle}) => {
    return (
        <div>
            {nbaPlayers.map((player) => (
                <Player 
                    key = {player.id} 
                    nbaPlayer = {player}
                    onDelete = {onDelete}
                    onToggle = {onToggle}
                />
        ))}
        </div>
    )
}

export default Players
