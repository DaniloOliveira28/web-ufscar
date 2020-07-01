import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppLifeCycle from './AppLifeCycle';

class App extends Component {
  state = {
      name: 'hahaha',
      showLifecycleCompoent: true
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
          </div>
          <div>
            <button type="button" onClick={() => {this.setState({ showLifecycleCompoent: !this.state.showLifecycleCompoent });}}>
              Esconder/mostar componente
            </button>

          </div>
          <div>
            {this.state.showLifecycleCompoent ? <AppLifeCycle name={this.state.name}/> : null}
          </div>
        </section>
      </div>
    );
  }
}

export default App;