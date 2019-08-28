import { combineReducers } from 'redux';

import slack from './slackReducer';
import shoutouts from './shoutoutReducer';

const rootReducer = combineReducers({
  slack,
  shoutouts,
});

export default rootReducer;
