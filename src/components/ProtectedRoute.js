import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import localstorage from '../utils/localstorage';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = localstorage.get();
  return (
    <Route
      {...props}
      render={props => {
        if (token) {
          return <Component {...props} />;
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
