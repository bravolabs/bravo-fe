import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Slack from '../components/Slack';
import Shoutout from '../views/SingleShoutout';
import UserProfileView from '../views/UserProfileView';

const AppRouter = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/slack" component={Slack} />
      <Route exact path="/shoutout" component={Shoutout} />
      <Route exact path="/user" component={UserProfileView} />
      <Route render={() => <h3>Heyo,This Route does not exist</h3>} />
    </Switch>
  </div>
);

export default AppRouter;
