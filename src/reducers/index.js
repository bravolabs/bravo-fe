import { combineReducers } from 'redux';

import slack from './slackReducer';
import shoutouts from './shoutoutReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  slack,
  shoutouts,
  users,
});

export default rootReducer;
