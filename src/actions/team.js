export const FETCHING_TEAM = 'FETCHING_TEAM';
export const TEAM_FETCH_SUCCESS = 'TEAM_FETCH_SUCCESS';
export const TEAM_FETCH_FAIL = 'TEAM_FETCH_FAIL';

export const fetchTeamInfo = organization => async dispatch => {
  dispatch({ type: FETCHING_TEAM });
  try {
  } catch (error) {}
};
