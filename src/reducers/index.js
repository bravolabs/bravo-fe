import { combineReducers } from 'redux';

import slack from './slackReducer';
import team from './teamReducer';
import shoutouts from './shoutoutReducer';
import users from './usersReducer';
import leaderboard from './leaderboardReducer';

const rootReducer = combineReducers({
  slack,
  team,
  shoutouts,
  users,
  leaderboard,
});

export default rootReducer;
