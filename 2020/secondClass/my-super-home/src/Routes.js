import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './screens/Home'
import {Search} from './screens/Search'
import {Admin} from './screens/Admin'

function Routes() {
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

export default Routes;
