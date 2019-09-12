import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Slack from '../components/Slack';
import ProtectedRoute from '../components/ProtectedRoute';
import SignInRedirect from '../components/SignInRedirect';
import Shoutouts from '../components/Shoutouts';
import Shoutout from '../views/SingleShoutout';
import UserProfileView from '../views/UserProfileView';
import Team from '../components/Team';
import localstorage from '../utils/localstorage';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/slack" component={Slack} />
    <Route path="/slack-signin" component={SignInRedirect} />
    <ProtectedRoute exact path="/shoutouts" component={Shoutouts} />
    <ProtectedRoute path="/shoutouts/:id" component={Shoutout} />
    <ProtectedRoute path="/team" component={Team} />
    <ProtectedRoute path="/profile" component={UserProfileView} />
    <Route path="/logout" render={() => localstorage.clear()} />
    <ProtectedRoute path="/members/:id" component={UserProfileView} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default AppRouter;
