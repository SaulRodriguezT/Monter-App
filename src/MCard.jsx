import { useEffect, useState } from "react";
import monsterImg from "./monsters"


function List() {


  const [monsters, setMonsters] = useState([]);

  const getMonters = async () => {
    let response = await fetch("https://mhw-db.com/monsters", {
      method: "GET",
    });
    let data = await response.json();
    setMonsters(data);
  };

  useEffect(() => {
    getMonters();
  }, []);

  return (
    <div className="container">
      {monsters.map((monster, index) => (
        <div key={monster.id} className="Card">
          <h1 className="title">
            {index} {monster.name}
          </h1>
          <img src={monsterImg[index]} alt="img" />
        </div>
      ))}
    </div>
  );
}

export default List;
