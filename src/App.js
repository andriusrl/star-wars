import React, { useState, useEffect } from "react";
import "./style.css";
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

  const removeCharacter = name => {
    setCharacters(
      characters.filter(character => {
        return character.name !== name;
      })
    );
  };

  const showCharacters = () => {
    if (characters.length > 0) {
      return (
        <div>
          <div className="main">
            <div>
              {characters.map(character => {
                return (
                  <Character
                    key={character.name}
                    name={character.name}
                    eyeColor={character.eye_color}
                    removeCharacter={name => {
                      removeCharacter(name);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Todos personagens removidos!</p>;
    }
  };

  return (
    <div className="global">
      {characters ? showCharacters() : "Carregando"}
    </div>
  );
}

export default App;
