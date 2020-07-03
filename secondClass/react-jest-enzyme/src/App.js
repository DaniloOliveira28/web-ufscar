import React, { Component } from 'react';
import './App.css';
import Add from './components/Add';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Add />
        </header>
      </div>
    );
  }
}

export default App;