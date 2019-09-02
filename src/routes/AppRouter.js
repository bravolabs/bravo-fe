import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Slack from '../components/Slack';
import SignInRedirect from '../components/SignInRedirect';
import Shoutout from '../views/SingleShoutout';
import { Redirect } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/slack" component={Slack} />
    <Route path="/slack-signin" component={SignInRedirect} />
    <ProtectedRoute path="/shoutout" component={Shoutout} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default AppRouter;
