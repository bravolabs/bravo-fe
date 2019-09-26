import { axiosWithAuth } from '../utils/axios';
import localstorage from '../utils/localstorage';

export const FETCHING_TEAM = 'FETCHING_TEAM';
export const TEAM_FETCH_SUCCESS = 'TEAM_FETCH_SUCCESS';
export const TEAM_FETCH_FAIL = 'TEAM_FETCH_FAIL';
export const TEAM_SEARCHING = 'TEAM_SEARCHING';
export const TEAM_SEARCH_SUCCESS = 'TEAM_SEARCH_SUCCESS';
export const TEAM_SEARCH_ERROR = 'TEAM_SEARCH_ERROR';

export const fetchTeamInfo = () => async dispatch => {
  dispatch({ type: FETCHING_TEAM });
  try {
    const { data } = await axiosWithAuth().get(
      `/api/organizations/${localstorage.get().org_id}/users`
    );
    dispatch({ type: TEAM_FETCH_SUCCESS, payload: data.data || data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: TEAM_FETCH_FAIL, payload: error.response.data.message });
      return;
    }
    dispatch({ type: TEAM_FETCH_FAIL, payload: error.message });
  }
};

export const searchTeam = (searchItem, searchList) => dispatch => {
  dispatch({ type: TEAM_SEARCHING });
  console.log(searchItem);
  console.log(searchList);
};
