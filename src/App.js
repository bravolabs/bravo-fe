import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routes/AppRouter';
import GlobalStyle from './styling/globalStyles';

const App = () => (
  <Router>
    <GlobalStyle />
    <AppRouter />
  </Router>
);

export default App;
