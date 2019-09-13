import { types } from '../actions/comments';

const initialState = {
  comments: null,
  fetching: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        fetching: false,
        error: '',
      };
    case types.FETCHING_COMMENTS:
      return {
        ...state,
        error: '',
        comments: null,
        fetching: true,
      };
    case types.COMMENTS_ERROR:
      return {
        ...state,
        error: action.payload,
        comments: null,
        fetching: false,
      };
    default:
      return state;
  }
};
