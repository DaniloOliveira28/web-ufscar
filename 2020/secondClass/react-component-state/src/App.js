import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              this.setState({
                date: new Date()
              });
            }}
          >
            Update
          </button>
          <h2>The component rendered on {this.state.date.toLocaleTimeString()}.</h2>

        </header>
      </div>
    );
  }

}

export default App;
