import { types } from '../actions/users';

const initialState = {
  users: {},
  fetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER_INFO:
      return {
        ...state,
        users: { ...state.users, ...action.payload },
        fetching: false,
        error: null,
      };
    case types.FETCHING_USER:
      return { ...state, error: null, fetching: true };
    case types.USER_ERROR:
      return { ...state, error: action.payload, fetching: false };
    default:
      return state;
  }
};
