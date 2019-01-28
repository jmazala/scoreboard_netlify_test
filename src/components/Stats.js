import React from 'react';
import { Consumer } from './context';

const Stats = () => {
  return (
    <Consumer>
      {({ players }) => { //context.players
        return (
          <table className="stats">
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{players.length}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{players.reduce((total, player) => total + player.score, 0)}</td>
              </tr>
            </tbody>
          </table>
        );
      }}
    </Consumer>

  );
}

export default Stats;