import { FaTimes } from 'react-icons/fa'

const Player = ({nbaPlayer, onDelete}) => {
    return (
        <div 
            className = 'task'
            onDelete = {onDelete}
        >
            <h3>
                {nbaPlayer.name}
                <FaTimes 
                    style = {{color: 'red', cursor: 'pointer'}} 
                    onClick = {() => onDelete(nbaPlayer.id)}
                />
            </h3>
            <p>{nbaPlayer.year}</p>
        </div>
    )
}

export default Player
