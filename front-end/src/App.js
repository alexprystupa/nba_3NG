import {useState} from 'react'
import Header from './components/Header.js'
import Players from './components/Players.js'
import AddPlayer from './components/AddPlayer.js'
import { FaTasks } from 'react-icons/fa'
import Table from './components/Table.js'
import './Table.css'

function App() {
  const [players, setPlayers] = useState([
    {
        id: 1,
        name: 'Stephen Curry',
        year: '2020-21',
        viewStats: false,
    },

    {
        id: 2,
        name: 'Joel Embiid',
        year: '2020-21',
        viewStats: false,
    },

    {
        id: 3,
        name: 'Julius Randle',
        year: '2020-21',
        viewStats: false,
    },

    {
        id: 4,
        name: 'Immanuel Quickley',
        year: '2020-21',
        viewStats: false,
    },

    {
        id: 5,
        name: 'Andrew Wiggins',
        year: '2020-21',
        viewStats: false,
    },
]);

// Delete Player
const deletePlayer = (id) => {
  setPlayers(players.filter((player) =>  player.id !== id))
};

//Add Player
const AddPlayerData = (nbaPlayer) => {
  // making new idea to be unique by
  const id = Math.floor(Math.random() * 10000) + 1
  const newPlayer = {id, ...nbaPlayer}
  setPlayers([...players, newPlayer])
};

// Toggle Player Status
const togglePlayer = (id) => {
  // Setting so only 1 Player can be highlighted at a time
  setPlayers(players.map((player) => player.id !== id ? 
  {...player, viewStats: false} : {...player, viewStats: !player.viewStats}))
};

  return (
    <div>
      <div className="container">
        <Header />
        <AddPlayer onAddPlayerData = {AddPlayerData}/>
        {players.length > 0 ? (<Players nbaPlayers={players}
        onDelete={deletePlayer} onToggle = {togglePlayer} />) 
        : ('Add Players Please')} 
      </div>
      <Table />
    </div>
  );
}

export default App;
