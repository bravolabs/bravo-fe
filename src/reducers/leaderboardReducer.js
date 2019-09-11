import {
  FETCHING_LEADERBOARD,
  LEADERBOARD_FETCH_FAIL,
  LEADERBOARD_FETCH_SUCCESS,
} from '../actions/leaderboard';

const initialState = {
  isFetching: false,
  leaderboard: [],
  success: false,
  error: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LEADERBOARD:
      return {
        ...state,
        isFetching: true,
        leaderboard: [],
        success: false,
        error: false,
        message: 'Fetching..',
      };
    case LEADERBOARD_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        leaderboard: action.payload,
        success: true,
        error: false,
        message: action.message,
      };
    case LEADERBOARD_FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        leaderboard: [],
        success: false,
        error: true,
        message: action.message,
      };
    default:
      return state;
  }
};
