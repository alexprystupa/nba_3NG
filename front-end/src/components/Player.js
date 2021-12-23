import { FaTimes } from 'react-icons/fa'

const Player = ({nbaPlayer, onDelete, onToggle}) => {
    return (
        <div 
            className = {`task ${nbaPlayer.viewStats ? 'reminder': ''}`}
            onDoubleClick = {() => onToggle(nbaPlayer.id)}
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
