import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h5>Fahrenheit: {this.props.temp}°F</h5>
      </div>
    );
  }
}
