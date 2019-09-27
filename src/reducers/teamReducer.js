import { FETCHING_TEAM, TEAM_FETCH_SUCCESS, TEAM_FETCH_FAIL } from '../actions/team';

import { TEAM_SEARCHING, TEAM_SEARCH_ERROR, TEAM_SEARCH_SUCCESS } from '../actions/search';

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
    case TEAM_SEARCHING:
      return {
        ...state,
        isFetchingTeam: true,
        errorMessage: '',
        searchItems: [],
      };
    case TEAM_SEARCH_SUCCESS:
      return {
        ...state,
        isFetchingTeam: false,
        searchItems: action.payload,
      };
    case TEAM_SEARCH_ERROR:
      return {
        ...state,
        isFetchingTeam: false,
        searchItems: [],
        errorMessage: action.message,
      };
    default:
      return state;
  }
};
