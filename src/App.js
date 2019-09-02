import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import AppRouter from './routes/AppRouter';
import GlobalStyle from './styling/globalStyles';
import { loggedIn } from './actions/auth';
import localstorage from './utils/localstorage';

const App = ({ loggedIn }) => {
  useEffect(() => {
    const authUser = localstorage.get();
    if (authUser) loggedIn(authUser);
  }, [loggedIn]);

  return (
    <Router>
      <GlobalStyle />
      <AppRouter />
    </Router>
  );
};

const mapStateToProps = ({ slack }) => {
  return { slack };
};

export default connect(
  mapStateToProps,
  { loggedIn }
)(App);
