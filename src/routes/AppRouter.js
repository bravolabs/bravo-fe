import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Slack from '../components/Slack';

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/slack" component={Slack} />
      <Route render={() => <h3>Heyo,This Route does not exist</h3>} />
    </Switch>
  </div>
);

export default AppRouter;
