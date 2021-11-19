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