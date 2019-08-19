import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() => <h3>Route does not exist</h3>} />
    </Switch>
  </div>
);

export default App;
