import React, { Component } from 'react';

const Greeting = (props) => { // function Greeting(props) {
  return (
    <div>
      Hi {props.name}
    </div>
  );
};

export default class PropsExample extends Component {
  render() {
    return (
      <Greeting name="Jonathan" />
    );
  }
}