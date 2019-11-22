import React from "react";

export default class LikeCounter extends React.Component {
  state = {
    numLikes: 0
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  decrement = () => {
    this.setState({
      numLikes: this.state.numLikes - 1
    });
  };

  render() {
    return (
      <div>
        <p id='paragraph'>This pasta has <b>{ this.state.numLikes }</b> likes!</p>
        <button onClick={this.increment}>Like</button>
        <button id='dislike' onClick={this.decrement}>Dislike</button>
      </div>
      
  );
  }
}