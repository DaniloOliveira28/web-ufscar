import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './screens/home';
import { Search } from './screens/search';
import { Admin } from './screens/admin';
import './styles/foundation/foundation.scss';

function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/admin' component={Admin} />
      </Switch>
    </Router>
  )
}

export default App;
