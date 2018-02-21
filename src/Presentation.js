import React, { Component } from 'react';
import './App.css';

class Presentation extends Component {
  constructor(){
    super();

    this.state = {celsius: null, farenheit: null};

    this.setCelsius = this.setCelsius.bind(this);
    this.setFarenheit = this.setFarenheit.bind(this);
  }

  setCelsius(event){
    this.setState({celsius: event.target.value, farenheit: event.target.value * 1.8 + 32})
  }

  setFarenheit(event){
    this.setState({celsius: (event.target.value - 32) / 1.8, farenheit: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Kevin Presentation</h1>
        <label for="celsius">Celsius</label>
        <input type="text" onChange={this.setCelsius} value={this.state.celsius} />
        <label for="farenheit">Farenheit</label>
        <input type="text" onChange={this.setFarenheit} value={this.state.farenheit} />
      </div>
    );
  }
}

export default Presentation;
