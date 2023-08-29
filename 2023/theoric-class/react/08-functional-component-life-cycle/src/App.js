import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle';

function App() {
  
  const [name, setName] = useState('hahaha')
  const [showLifecycleCompoent, setShowLifecycleCompoent] = useState(true)

  const handleNameInput = e => {
    setName(e.target.value );
  };

  // console.log('>>> kkkk')

  return (
    <div className="App">
    <section className="App-header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h3> Functional LifeCycle Exercise </h3>
      </header>
      <div>
        <input
            type="text"
            onChange={handleNameInput}
            value={name}
            placeholder="Your name"
          />
      </div>
      <div>
        <button type="button" onClick={() => {setShowLifecycleCompoent(!showLifecycleCompoent)} } >
          Esconder/mostar componente
        </button>

      </div>
      <div>
        {showLifecycleCompoent ? <LifeCycle name={name}/> : null}
        
      </div>
    </section>
  </div>
  );
}

export default App;
