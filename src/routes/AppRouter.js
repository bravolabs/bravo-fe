import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


import SignInRedirect from '../components/SignInRedirect';
import Home from '../components/Home';
import Slack from '../components/Slack';
import Welcome from '../components/Welcome';
import ProtectedRoute from '../components/ProtectedRoute';

import Shoutout from '../views/SingleShoutout';
import UserProfileView from '../views/UserProfileView';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/slack" component={Slack} />
    <Route path="/slack-signin" component={SignInRedirect} />
    <ProtectedRoute path="/welcome" component={Welcome} />
    <ProtectedRoute path="/shoutout/:id" component={Shoutout} />
    <Route exact path="/user" component={UserProfileView} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default AppRouter;
