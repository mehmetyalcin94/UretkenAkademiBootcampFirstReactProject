import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      tempCelcius: 0,
      tempFahrenheit: 32,
      tempKelvin: 273.15,
    };
  }

  tempInc = () => {
    this.setState({ temp: this.state.temp + 1 });
    this.setState({ tempCelcius: this.state.tempCelcius + 1 });
    this.setState({ tempFahrenheit: ((this.state.temp + 1) * 9) / 5 + 32 });
    this.setState({ tempKelvin: this.state.tempKelvin + 1 });
  };

  tempDec = () => {
    this.setState({ temp: this.state.temp - 1 });
    this.setState({ tempCelcius: this.state.tempCelcius - 1 });
    this.setState({ tempFahrenheit: ((this.state.temp - 1) * 9) / 5 + 32 });
    this.setState({ tempKelvin: this.state.tempKelvin - 1 });
  };

  tempDefault = () => {
    this.setState({ temp: 0 });
    this.setState({ tempCelcius: 0 });
    this.setState({ tempFahrenheit: 32 });
    this.setState({ tempKelvin: 273.15 });
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Hava Nasıl</h1>
          <h5>Şu an sıcaklık: {this.state.temp} derece.</h5>
          <Button color="danger" onClick={this.tempInc}>
            Sıcaklık Artır
          </Button>
          <Button color="info" onClick={this.tempDec}>
            Sıcaklık Düşür
          </Button>
          <Button color="warning" onClick={this.tempDefault}>
            Sıcaklık Sıfırla
          </Button>
          <h5>3 Birimde Sıcaklık Ölçümü</h5>
          <Container>
            <Row>
              <Col>
                <Celcius temp={this.state.tempCelcius} />
              </Col>
              <Col>
                <Fahrenheit temp={this.state.tempFahrenheit} />
              </Col>
              <Col>
                <Kelvin temp={this.state.tempKelvin} />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
