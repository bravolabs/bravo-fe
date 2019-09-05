import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import localstorage from '../utils/localstorage';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = localstorage.get();
  return (
    <Route
      {...props}
      render={props => {
        if (token) {
          return (
            <Dashboard>
              <Component {...props} />
            </Dashboard>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
