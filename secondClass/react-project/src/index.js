import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
