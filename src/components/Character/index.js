import React from "react";
import "../../style.css";

export default function Character(props) {
  return (
    <div className="character">
      <font color={props.eyeColor}>
        <p className="name">{props.name}</p>
      </font>
      <button
        onClick={() => {
          props.removeCharacter(props.name);
        }}
      >
        REMOVER
      </button>
    </div>
  );
}