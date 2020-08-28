import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css'
   
function App() {
   
    const [games, setGames] = useState([])
    useEffect(() =>{
        getGames()
    }, [])
    const getGames = async () => {
        let url = 'http://localhost:3001/'

        const response = await axios.get(url)
        console.log('response', response)
        setGames(response.data)
    }
    
    const renderHeader = () => {
        let headerElement = ['id', 'winner', 'loser', 'winning score', 'losing score','game date','dub']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return games && games.map(({ id, winner, loser, winning_score,losing_score,game_date,dub}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{winner}</td>
                    <td>{loser}</td>
                    <td>{winning_score}</td>
                    <td>{losing_score}</td>
                    <td>{game_date}</td>   
                    <td>{dub}</td>               
                </tr>
            )
        })
    }



    // function createGame() {
    //   let name = prompt('Enter game name');
    //   let email = prompt('Enter game email');
    //   fetch('http://localhost:3001/games', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({name, email}),
    //   })
    //     .then(response => {
    //       return response.text();
    //     })
    //     .then(data => {
    //       alert(data);
    //       getGame();
    //     });
    // }
    // function deleteGame() {
    //   let id = prompt('Enter game id');
    //   fetch(`http://localhost:3001/games/${id}`, {
    //     method: 'DELETE',
    //   })
    //     .then(response => {
    //       return response.text();
    //     })
    //     .then(data => {
    //       alert(data);
    //       getGame();
    //     });
    // }



return (
    <div>
        <h1 id='title'>Madden 21 Games </h1>
        <table id='games'>
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    </div>
)
}

  
  export default App;
  
  