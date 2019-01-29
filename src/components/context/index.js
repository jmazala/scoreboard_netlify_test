import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
  state = {
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
      }
    ]
  };

  lastPlayerId = 4;
  highScore = 0;

  handleScoreChange = (id, delta) => {
    this.setState(prevState => {
      const players = prevState.players.map(player => {
        if (player.id === id) {
          const newScore = player.score += delta;
          this.highScore = Math.max(this.highScore, newScore);
          player.score = newScore;
        }

        return player;
      });

      return { players };
    });
  };

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const newPlayer = {
        name,
        score: 0,
        id: ++this.lastPlayerId
      };

      return { players: prevState.players.concat(newPlayer) };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      const remainingPlayers = prevState.players.filter(p => p.id !== id);
      if (!remainingPlayers.some(p => p.score === this.highScore)) {
        this.highScore = 0;
        remainingPlayers.forEach(player => {
          this.highScore = Math.max(this.highScore, player.score);
        });
      }

      return {
        players: remainingPlayers
      };
    });
  }

  render() {
    return (
      <ScoreboardContext.Provider value={
        {
          players: this.state.players,
          highScore: this.highScore,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer
          }
        }
      }>
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
};

export const Consumer = ScoreboardContext.Consumer;
