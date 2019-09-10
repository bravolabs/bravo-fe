import { types } from '../actions/shoutouts';

const initialState = {
  singleShoutout: null,
  profileShoutouts: null,
  userShoutouts: null,
  fetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SINGLE_SHOUTOUT:
      return {
        ...state,
        singleShoutout: action.payload,
        fetching: false,
        profileShoutouts: null,
        userShoutouts: null,
        error: null,
      };
    case types.SET_PROFILE_SHOUTOUTS:
      return {
        ...state,
        singleShoutout: null,
        fetching: false,
        profileShoutouts: action.payload,
        userShoutouts: null,
        error: null,
      };
    case types.FETCHING_SHOUTOUT:
      return {
        ...state,
        error: null,
        singleShoutout: null,
        profileShoutouts: null,
        userShoutouts: null,
        fetching: true,
      };
    case types.SHOUTOUT_ERROR:
      return {
        ...state,
        error: action.payload,
        singleShoutout: null,
        profileShoutouts: null,
        userShoutouts: null,
        fetching: false,
      };
    default:
      return state;
  }
};
