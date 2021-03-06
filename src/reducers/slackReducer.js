import { FETCH_START, INSTALL_SUCCESS, FETCH_ERROR } from '../actions/slack';
import { SET_USER } from '../actions/auth';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  installSuccess: false,
  user: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case INSTALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        installSuccess: true,
        user: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        installSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
