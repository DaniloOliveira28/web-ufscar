import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      name: ''
  }

  alertName = () => {
    alert(this.state.name);
  };

  handleNameInput = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h3> This is a Class Component </h3>
          </header>
          <div>
            <input
              type="text"
              onChange={this.handleNameInput}
              value={this.state.name}
              placeholder="Your name"
            />
            <button onClick={this.alertName}> Alert </button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;