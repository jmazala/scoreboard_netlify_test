import React from 'react';

const AddPlayerForm = ( { addPlayer } ) => {
  let playerInput = React.createRef();

  let handleSubmit = (event) => {
    event.preventDefault();
    addPlayer(playerInput.current.value);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={playerInput} placeholder="Enter a Player's name" />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;