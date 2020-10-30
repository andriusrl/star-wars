import React, { useState, useEffect } from "react";
import './App.css';
import Character from './components/Character';
import axios from "axios";

function App() {
  const getCharacters = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/`);
      setCharacters(
        response.data.results.sort((character1,character2)=>{
          return character1.name[0] > character2.name[0]
        })
      );
    } catch (error) {
      console.log(error);
    }
  };


  
  const [characters, setCharacters] = useState(undefined);
  console.log(characters)

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <Character eyeColor="green" name="Luke" />
    </div>
  );
}

export default App;
