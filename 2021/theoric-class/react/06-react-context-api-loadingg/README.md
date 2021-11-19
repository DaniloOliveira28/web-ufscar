# React Context API

- The simplest way to test Context API is through Hello World.
- This app uses context API to store an object of messages and a function to switch between messages.

## Creating Hello Context
- The context consists of an object called `message` and a function 'toggleMessage'.
```javascript
import React from 'react'

// An object called messages
export const messages = {
  message1: {
    firstWord: 'hello',
    secondWord: 'world'
  },
  message2: {
    firstWord: 'hi',
    secondWord: 'everyone'
  }
}

// The HelloContext itself
// - this needs to match the Consumer props
export const HelloContext = React.createContext({
  message: messages.message1, // Message Object
  toggleMessage: () => {},    // Empty Function
})
```

## The Consumer
- The consumer will be my Message component.
- The Message component will display a message and a button which changes the message.
```javascript
import React from 'react'
import { HelloContext } from '../contexts/hello-context';

const Message = () => {
  return (
    <HelloContext.Consumer>
      {
        ({message, toggleMessage}) => (
          <header className="App-header">
            <h1 className="App-title">{ message.firstWord + ' ' + message.secondWord }</h1>
            <button onClick={ toggleMessage }>Change Message</button>
          </header>
        )
      }
    </HelloContext.Consumer>
  )
}

export default Message
```

## The Provider
- The provider will be contained in my App component and its value will equal the `state`.
- My state will be initialised to:
  - message: The first message in my message object
  - toggleMessage: The function that will change the message from 'hello world' to 'hi everyone'
```javascript
import React, { Component } from 'react'
// import logo from '../assets/images/logo.svg'
import '../styles/App.css'

import { HelloContext, messages } from '../contexts/hello-context'
import Message from './Message'

class App extends Component {
  // This function strictly needs to be declared before initialising the state
  _toggleMessage = () => {
    console.log('Test')
    this.setState(prevState => ({
      message:
        prevState.message === messages.message1
          ? messages.message2
          : messages.message1
    }))
  }

  state = {
    message: messages.message1,
    toggleMessage: this._toggleMessage,
  }
  

  render() {
    return (
      <HelloContext.Provider value={ this.state }>
        <div className="App">
          <Message />
        </div>
      </HelloContext.Provider>
    )
  }
}

export default App
```


## Updates
- Added Button Context - Context that specifies the Title of a Button.
- Added Action Context - Context that provides sync and async actions to display the message as an alert.

---

This project was based on [Link](https://github.com/Gurenax/react-context-api).