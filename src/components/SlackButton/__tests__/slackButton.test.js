import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AddToSlack, SignInWithSlack } from '../index';

afterEach(cleanup);
describe('Slack Button', () => {
  it('render Add to Slack Button ', () => {
    const { getByRole } = render(<AddToSlack />);
    const button = getByRole('link');
    expect(button).toBeVisible();
  });

  it('render Add to Slack Button ', () => {
    const { getByRole } = render(<SignInWithSlack />);
    const button = getByRole('link');
    expect(button).toBeVisible();
  });
});
