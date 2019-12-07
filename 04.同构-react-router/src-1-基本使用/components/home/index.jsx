import React, { Component } from "react";

export default class Home extends Component {
  handleClick = () => {
    console.log("戳我~~~~");
  };

  render() {
    return <button onClick={this.handleClick}>Home...</button>;
  }
}
