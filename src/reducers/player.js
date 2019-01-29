import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
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
  }
];

//preserve immutability.  don't modify objects always return a new array
export default player = (state = initialState, action) => {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return state.concat({ name: action.name, score: 0 });

    case PlayerActionTypes.REMOVE_PLAYER:
      return state.filter((_, index) => index !== action.index);

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        if (index === action.index) {
          player.score += action.delta;
        }

        return player;
      });

    default:
      return state;
  }
};