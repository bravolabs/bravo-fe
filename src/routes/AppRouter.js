import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Landing/Home';

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() => <h3>Heyo, This Route does not exist</h3>} />
    </Switch>
  </div>
);

export default AppRouter;
