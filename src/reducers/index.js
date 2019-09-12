import { combineReducers } from 'redux';

import slack from './slackReducer';
import team from './teamReducer';
import shoutouts from './shoutoutReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  slack,
  team,
  shoutouts,
  users,
});

export default rootReducer;
