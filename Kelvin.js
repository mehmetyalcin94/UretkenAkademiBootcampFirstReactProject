import React, { Component } from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h5>Kelvin: {this.props.temp}°K</h5>
      </div>
    );
  }
}
