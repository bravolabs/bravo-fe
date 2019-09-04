import { FETCHING_TEAM, TEAM_FETCH_SUCCESS, TEAM_FETCH_FAIL } from '../actions/team';

const initialState = {
  isFetchingTeam: false,
  team: null,
  fetchingTeamError: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TEAM:
      return {
        ...state,
        isFetchingTeam: true,
        fetchingTeamError: '',
      };
    default:
      return state;
  }
};
