import { combineReducers } from 'redux';

import slack from './slackReducer';
import team from './teamReducer';
import shoutouts from './shoutoutReducer';
import users from './usersReducer';
import comments from './commentsReducer';
import leaderboard from './leaderboardReducer';

const rootReducer = combineReducers({
  slack,
  team,
  shoutouts,
  users,
  comments,
  leaderboard,
});

export default rootReducer;
