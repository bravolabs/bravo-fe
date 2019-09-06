import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import localstorage from '../utils/localstorage';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = localstorage.get();
  return (
    <Route
      {...props}
      render={() => {
        if (token) {
          return <Component />;
        } else {
          // Push the target route to local storage, to be accessed upon successful auth
          localStorage.setItem('target-route', props.location.pathname);
          return (
            <Redirect
              to={{
                pathname: '/slack-signin',
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
