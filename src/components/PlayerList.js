import React from 'react';
import { Consumer } from './context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {({ players }) => { //coming from context.players
        return (
          <React.Fragment>
            {players.map((player, index) =>
              <Player index={index} />
            )}
          </React.Fragment>);
      }}
    </Consumer>

  );
};

export default PlayerList;