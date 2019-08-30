import { cleanup } from '@testing-library/react';
import slackReducer from '../slackReducer';
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, INSTALL_SUCCESS } from '../../actions/slack';
import { SET_USER } from '../../actions/auth';

const initialState = {
  isLoading: false,
  installSuccess: false,
  isLoggedIn: false,
  user: null,
  error: '',
};

afterEach(cleanup);
describe('Slack Reducer', () => {
  it('Should return initial State', () => {
    expect(slackReducer(undefined, {})).toEqual(initialState);
  });

  it('Should Toggle Loading state', () => {
    expect(slackReducer(initialState, { type: FETCH_START })).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('Should Toggle Loading state and set user payload', () => {
    const user = {
      name: 'Example name',
      avatar: 'avatar.png',
    };
    expect(slackReducer(initialState, { type: INSTALL_SUCCESS, payload: user })).toEqual({
      ...initialState,
      installSuccess: true,
      user,
    });
  });

  it('Should set user and loggedIn to state', () => {
    const user = {
      name: 'Example name',
      avatar: 'avatar.png',
    };
    expect(slackReducer(initialState, { type: SET_USER, payload: user })).toEqual({
      ...initialState,
      isLoggedIn: true,
      user,
    });
  });

  it('Should Toggle Loading state and set Error message', () => {
    const errorMessage = 'invalid_code';
    expect(slackReducer(initialState, { type: FETCH_ERROR, payload: errorMessage })).toEqual({
      ...initialState,
      error: errorMessage,
    });
  });
});
