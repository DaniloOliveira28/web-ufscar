import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [name, setName] = React.useState('')

  const alertName = () => {
    alert(name);
  };

  const handleNameInput = e => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <section className="App-header">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h3> This is a Functional Component </h3>
        </header>
        <div>
          <input
            type="text"
            onChange={handleNameInput}
            value={name}
            placeholder="Your name"
          />
          <button onClick={alertName}> Alert </button>
        </div>
      </section>
    </div>
  );
}

export default App;