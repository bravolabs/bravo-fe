import { Axios } from '../utils/axios';

export const FETCHING_TEAM = 'FETCHING_TEAM';
export const TEAM_FETCH_SUCCESS = 'TEAM_FETCH_SUCCESS';
export const TEAM_FETCH_FAIL = 'TEAM_FETCH_FAIL';

export const fetchTeamInfo = organization => async dispatch => {
  dispatch({ type: FETCHING_TEAM });
  try {
    const { data } = await Axios().post(`/api/organizations/${organization}/users`);

    dispatch({ type: TEAM_FETCH_SUCCESS, payload: data.data || data });
  } catch (error) {
    if (error.response) {
      dispatch({ type: TEAM_FETCH_FAIL, payload: error.response.data.message });
      return;
    }
    dispatch({ type: TEAM_FETCH_FAIL, payload: error.message });
  }
};
