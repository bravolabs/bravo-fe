import { types } from '../actions/shoutouts/types';

const initialState = {
  singleShoutout: null,
  fetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SINGLE_SHOUTOUT:
      return { ...state, singleShoutout: action.payload, fetching: false, error: null };
    case types.FETCHING_SHOUTOUT:
      return { ...state, error: null, singleShoutout: null, fetching: true };
    case types.SHOUTOUT_ERROR:
      return { ...state, error: action.payload, singleShoutout: null, fetching: false };
    default:
      return state;
  }
};
