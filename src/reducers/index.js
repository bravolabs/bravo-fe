import { combineReducers } from 'redux';

import slack from './slackReducer';
import shoutouts from './shoutoutReducer';
import api from './apiReducer';

const rootReducer = combineReducers({
  slack,
  shoutouts,
  api,
});

export default rootReducer;
