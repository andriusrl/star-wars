import React from "react";
import styled from "styled-components"

const CharacterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 19px;
  border-color: darkgrey;
  margin: 6px;
  width: 59%;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const Name = styled.div`
  margin-left: 9px;
`
const Button = styled.button`
  height: 39px;
  border-radius: 13px;
  border-color: darkgrey;
  background-color: #364049;
  margin-right: 6px;
  margin: 9px;
  color: #0A0A0A;
`

export default function Character(props) {
  return (
    <CharacterWrapper>
      <font color={props.eyeColor}>
        <Name>{props.name}</Name>
      </font>
      <Button
        onClick={() => {
          props.removeCharacter(props.name);
        }}
      >
        REMOVER
      </Button>
    </CharacterWrapper>
  );
}