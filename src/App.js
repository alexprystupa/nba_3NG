import {useState} from 'react'
import Header from './components/Header.js'
import Players from './components/Players.js'
import AddPlayer from './components/AddPlayer.js'

function App() {
  const [players, setPlayers] = useState([
    {
        id: 1,
        name: 'Stephen Curry',
        year: '2020-21',
    },

    {
        id: 2,
        name: 'Joel Embiid',
        year: '2020-21',
    },

    {
        id: 3,
        name: 'Julius Randle',
        year: '2020-21',
    },

    {
        id: 4,
        name: 'Immanuel Quickley',
        year: '2020-21',
    },

    {
        id: 5,
        name: 'Andrew Wiggins',
        year: '2020-21',
    },
])

// Delete Player
const deletePlayer = (id) => {
  setPlayers(players.filter((player) =>  player.id !== id))
}

  return (
    <div className="container">
      <Header />
      <AddPlayer />
      <Players 
        nbaPlayers = {players}
        onDelete = {deletePlayer}
      />
    </div>
  );
}

export default App;
