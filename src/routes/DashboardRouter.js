import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Slack from '../components/Slack';
import Welcome from '../components/Welcome';
import ProtectedRoute from '../components/ProtectedRoute';

import Shoutout from '../views/SingleShoutout';
import UserProfileView from '../views/UserProfileView';
import Team from '../components/Team';

const DashboardRouter = () => (
  <Switch>
    <Route path="/slack" component={Slack} />
    <ProtectedRoute path="/welcome" component={Welcome} />
    <ProtectedRoute path="/shoutout/:id" component={Shoutout} />
    <ProtectedRoute path="/team" component={Team} />
    <ProtectedRoute path="/profile" component={UserProfileView} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default DashboardRouter;
