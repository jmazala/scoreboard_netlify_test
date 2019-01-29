import React from 'react';

export default class Stopwatch extends React.Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  handleStopwatch = () => {
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }

    this.setState(prevState => ({ isRunning: !prevState.isRunning }));
  };

  componentDidMount = () => {
    this.intervalID = setInterval(() => this.tick(), 100);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => (
        {
          previousTime: now,
          elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
        })
      );
    }
  };

  resetStopwatch = () => {
    this.setState({
      elapsedTime: 0,
    });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.resetStopwatch}>Reset</button>
      </div>
    );
  }
}