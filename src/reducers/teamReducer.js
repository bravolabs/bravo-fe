import { FETCHING_TEAM, TEAM_FETCH_SUCCESS, TEAM_FETCH_FAIL } from '../actions/team';

const initialState = {
  isFetchingTeam: false,
  members: null,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TEAM:
      return {
        ...state,
        isFetchingTeam: true,
        errorMessage: '',
        members: null,
      };
    case TEAM_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingTeam: false,
        members: action.payload,
      };
    case TEAM_FETCH_FAIL:
      return {
        ...state,
        isFetchingTeam: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
