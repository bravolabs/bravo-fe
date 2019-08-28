import * as types from '../actions/types';

const initialState = {
  singleShoutout: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SINGLE_SHOUTOUT:
      return { ...state, singleShoutout: action.payload };
    default:
      return state;
  }
};
