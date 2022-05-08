import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
      <div>
        <h5>Celcius: {this.props.temp}°C</h5>
      </div>
    );
  }
}
