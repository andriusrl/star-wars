import React from "react";

export default function Character(props) {
  return (
    <div>
      <font color={props.eyeColor}>
        <p>{props.name}</p>
      </font>
    </div>
  );
}