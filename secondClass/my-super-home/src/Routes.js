import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={() => <div><h1>Home</h1></div>} />
        <Route exact path='/search' component={() => <div><h1>Search</h1></div>} />
        <Route exact path='/admin' component={() => <div><h1>Admin</h1></div>} />
      </Switch>
    </Router>
  )
}

export default Routes;
