import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {RelayEnvironmentProvider} from 'relay-hooks';
import modernEnvironment from "./relay/createRelayEnvironment";

ReactDOM.render(
  <RelayEnvironmentProvider environment={modernEnvironment}>
    <App />
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
