import React from "react";
import "../pages/Characters.css";

const CharactersUserForm = props => {
  return (
    <form className="search fadeIn" onSubmit={props.getCharacter}>
      <h1>Enter Character</h1>
      <input
        id="charInput"
        placeholder="Character"
        type="text"
        name="character"
        autoComplete="off"
      />
      <br />
      <button id="submit">Submit</button>
    </form>
  );
};

export default CharactersUserForm;
