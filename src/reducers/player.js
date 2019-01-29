import * as PlayerActionTypes from '../actiontypes/player';
import { cloneDeep } from 'lodash';

const initialState = {
  players: [
    {
      name: 'Leonardo',
      id: 1,
      score: 0
    },
    {
      name: 'Rafael',
      id: 2,
      score: 0
    },
    {
      name: 'Donatello',
      id: 3,
      score: 0
    },
    {
      name: 'Michaelangelo',
      id: 4,
      score: 0
    }],
  highScore: 0
};

//preserve immutability.  don't modify objects always return a new array
const player = (state = initialState, action) => {
  let newState = cloneDeep(state);

  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      newState.players = [
        ...newState.players,
        {
          name: action.name,
          score: 0,
        }
      ];
      return newState;


    case PlayerActionTypes.REMOVE_PLAYER:
      newState.players = [
        ...newState.players.slice(0, action.index),
        ...newState.players.slice(action.index + 1)
      ];
      newState.highScore = Math.max(...newState.players.map(i => i.score));
      return newState;

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      newState.players = newState.players.map((player, index) => {
        if (index === action.index) {
          player.score += action.delta;
          newState.highScore = Math.max(newState.highScore, player.score);
        }

        return player;
      });

      return newState;

    default:
      return state;
  }
};

export default player;