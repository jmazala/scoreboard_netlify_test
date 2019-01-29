import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';

class Scoreboard extends Component {
  render() {
    const { dispatch, players, highScore } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => {
      return <Player highScore={highScore} index={index} name={player.name} score={player.score} key={player.name}
        updatePlayerScore={updatePlayerScore} removePlayer={removePlayer} />
    })

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    players: state.players,
    highScore: state.highScore
  };
};

export default connect(mapStateToProps)(Scoreboard);