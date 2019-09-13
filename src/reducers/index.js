import { combineReducers } from 'redux';

import slack from './slackReducer';
import team from './teamReducer';
import shoutouts from './shoutoutReducer';
import users from './usersReducer';
import ui from './uiReducer';

const rootReducer = combineReducers({
  slack,
  team,
  shoutouts,
  users,
  ui,
});

export default rootReducer;
