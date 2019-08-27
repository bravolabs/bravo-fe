import { combineReducers } from 'redux';

import slack from './slackReducer';

const rootReducer = combineReducers({
  slack,
});

export default rootReducer;
