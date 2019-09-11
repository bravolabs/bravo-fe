import {
  FETCHING_LEADERBOARD,
  LEADERBOARD_FETCH_FAIL,
  LEADERBOARD_FETCH_SUCCESS,
} from '../actions/leaderboard';

const initialState = {
  isFetching: false,
  leaderboard: [],
  success: '',
  error: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LEADERBOARD:
      return {
        ...state,
        isFetching: true,
        leaderboard: [],
        success: '',
        error: '',
        message: 'fetching',
      };
  }
};
