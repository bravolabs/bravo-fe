import { FETCHING_TEAM, TEAM_FETCH_SUCCESS, TEAM_FETCH_FAIL, TEAM_SEARCH } from '../actions/team';

const initialState = {
  isFetchingTeam: false,
  members: null,
  errorMessage: '',
  searchItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TEAM:
      return {
        ...state,
        isFetchingTeam: true,
        errorMessage: '',
        members: null,
        searchItems: [],
      };
    case TEAM_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingTeam: false,
        members: action.payload,
        searchItems: [],
      };
    case TEAM_FETCH_FAIL:
      return {
        ...state,
        isFetchingTeam: false,
        errorMessage: action.payload,
        searchItems: [],
      };
    case TEAM_SEARCH:
      return {
        ...state,
        i
      }
    default:
      return state;
  }
};
