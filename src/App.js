import { useEffect, useState } from 'react';
import './App.css';
import monsterImg from "./monsters"

function App() {

  const [monsters, setMonsters] = useState([])

  const getMonters = async () => {
    let response = await fetch('https://mhw-db.com/monsters', {
      method: 'GET'
    } );
    let data = await response.json()
    setMonsters(data)
  }

  useEffect(() => {
    getMonters();
  },[])
  

  return (
    <div className="container">
      {monsters.map( (monster, index) => (
        <div key={index} className="Card">
        <h1 className='title'>
          {monster.name} 
        </h1>
        <p className='description'>
           Type: {monster.type}
          <br></br>
          Description: {monster.description}
        </p>
        <img src={monsterImg[index]} className="imgs"></img>
        </div>
      ) )}
    </div>
  );
}

export default App;
