import { axiosWithAuth } from '../utils/axios';
import { TEAM_FETCH_FAIL } from './team';

export const FETCHING_LEADERBOARD = 'FETCHING_LEADERBOARD';
export const LEADERBOARD_FETCH_SUCCESS = 'LEADERBOARD_FETCH_SUCCESS';
export const LEADERBOARD_FETCH_FAIL = 'LEADERBOARD_FETCH_FAIL';

export const fetchLeaderBoard = () => async dispatch => {
  dispatch({ type: FETCHING_LEADERBOARD });
  try {

  } catch (error) {
    if (error.response) {
      dispatch({ tyoe: LEADERBOARD_FETCH_FAIL, message: error.response.data.message });
      return;
    }
    dispatch({ type: TEAM_FETCH_FAIL, message: error.message });
  } 
};
