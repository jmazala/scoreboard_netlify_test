import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends Component {
  render() {
    const { players } = this.props;
    return (<header>
      <Stats players={players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>);
  };
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(Header);