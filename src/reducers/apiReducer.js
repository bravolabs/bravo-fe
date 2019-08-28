import * as types from '../actions/types';

const initialState = {
  error: null,
  fetching: false,
  posting: false,
  success: false,
  failure: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_API_ERROR:
      return { ...state, error: action.payload };
    case types.API_FETCHING:
      return { ...state, success: false, failure: false, posting: false, fetching: true };
    case types.API_POSTING:
      return { ...state, success: false, failure: false, posting: true, fetching: false };
    case types.API_SUCCESS:
      return { ...state, success: true, failure: false, posting: false, fetching: false };
    case types.API_FAILURE:
      return { ...state, success: false, failure: true, posting: false, fetching: false };
    default:
      return state;
  }
};
