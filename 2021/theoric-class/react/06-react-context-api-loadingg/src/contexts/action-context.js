import React from 'react'

// Returns a function to be invoked later when button is clicked
export const fireAlertMessage = (message) => () => {
  alert(message)
}

// Return async function to be invoked later when button is clicked
export const fireAsyncAlertMessage = (message, duration) => async () => {
  const theMessage = await messagePromise(message, duration)
  alert(theMessage)
}

// Returns a promise containing a message
const messagePromise = (message, duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!!message) {
        resolve(message)
      }
      else {
        reject('Empty message found')
      }
    }, duration)
  })
}

// Action Context
export const ActionContext = React.createContext({
  alertMessage: fireAlertMessage,
  asyncAlertMessage: fireAsyncAlertMessage
})
