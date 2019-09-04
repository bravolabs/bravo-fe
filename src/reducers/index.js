import { combineReducers } from 'redux';

import slack from './slackReducer';
import team from './teamReducer';

const rootReducer = combineReducers({
  slack,
  team,
});

export default rootReducer;
