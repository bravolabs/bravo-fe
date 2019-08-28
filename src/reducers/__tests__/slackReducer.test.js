import React from 'react';
import { cleanup } from '@testing-library/react';
import slackReducer from '../slackReducer';
import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../../actions/slack';

const initialState = {
  loading: false,
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
      loading: true,
    });
  });

  it('Should Toggle Loading state and set user payload', () => {
    const user = {
      name: 'Example name',
      avatar: 'avatar.png',
    };
    expect(slackReducer(initialState, { type: FETCH_SUCCESS, payload: user })).toEqual({
      ...initialState,
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
