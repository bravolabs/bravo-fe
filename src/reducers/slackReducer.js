import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions/slack';

const initialState = {
  loading: false,
  user: null,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: '' };
    case FETCH_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
