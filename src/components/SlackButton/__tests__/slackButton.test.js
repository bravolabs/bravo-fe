import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AddToSlack, SignInWithSlack } from '../index';

afterEach(rtl.cleanup);
describe('Slack Button', () => {
  it('render Add to Slack Button ', () => {
    const { getByAltText } = rtl.render(<AddToSlack />);
    const ButtonImage = getByAltText(/Add to Slack/i);
    expect(ButtonImage).toBeTruthy();
  });

  it('render Sign In with Slack Button', () => {
    const { getByAltText } = rtl.render(<SignInWithSlack />);
    const ButtonImage = getByAltText(/Sign in with Slack/i);
    expect(ButtonImage).toBeTruthy();
  });
});
