import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  border: solid;
  color: red;
`;

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  dividir = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2,
      n1: "",
      n2: ""
    });
  };

  multiplicar = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2,
      n1: "",
      n2: ""
    });
  };

  subtrair = () => {
    this.setState({
      result: this.state.n1 - this.state.n2,
      n1: "",
      n2: ""
    });
  };

  somar = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 + n2,
      n1: "",
      n2: ""
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  render() {
    return (
      <div>
        <H1>Calculadora da Débs</H1>
        <input
          type="number"
          value={this.state.n1}
          onChange={this.handleChange1}
        />
        <input
          type="number"
          value={this.state.n2}
          onChange={this.handleChange2}
        />
        <button onClick={this.dividir}>/</button>
        <button onClick={this.multiplicar}>*</button>
        <button onClick={this.subtrair}>-</button>
        <button onClick={this.somar}>+</button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
