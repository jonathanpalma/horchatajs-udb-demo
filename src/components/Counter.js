import React, { Component } from 'react';

export default class Counter extends Component {
  state = { counter: 0 };

  increment() {
    this.setState((prevState, props) => ({ // this.setState(function(prevState, props) {
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <br />
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}
