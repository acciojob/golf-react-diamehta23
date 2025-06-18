import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBall: false,
      ballPosition: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39 && this.state.showBall) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ showBall: true });
  };

  renderChoice = () => {
    if (!this.state.showBall) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return (
        <div
          className="ball"
          style={{ left: this.state.ballPosition + 'px' }}
        ></div>
      );
    }
  };

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
