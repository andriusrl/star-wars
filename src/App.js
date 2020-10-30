import React, { useState, useEffect } from "react";
import "./style.css";
import Character from './components/Character';
import axios from "axios";
import styled from "styled-components"
import backgroundImage from "./imgs/background.jpg"

const Main = styled.div`
  /* background-image: url("https://i.pinimg.com/originals/f9/a9/ce/f9a9ced6d988b9e55af1ae9c23a6fdbf.jpg"); */
`
const Characters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  position: absolute;
  width: 100%;
  @media (min-width: 768px) {
    align-items: center;
   };
`

function App() {
  const getCharacters = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/`);
      setCharacters(
        response.data.results.sort((character1, character2) => {
          return character1.name[0] > character2.name[0]
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [characters, setCharacters] = useState(undefined);

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
        <Characters>
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
        </Characters>
      );
    } else {
      return <p>Todos personagens removidos!</p>;
    }
  };

  return (
    <Main>
      {characters ? showCharacters() : "Carregando"}
      {/* <Background src={backgroundImage} /> */}
    </Main>
  );
}

export default App;
