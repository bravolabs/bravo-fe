import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Slack from '../components/Slack';
import Welcome from '../components/Welcome';
import ProtectedRoute from '../components/ProtectedRoute';

import Shoutout from '../views/SingleShoutout';
import UserProfileView from '../views/UserProfileView';
import Team from '../components/Team';
