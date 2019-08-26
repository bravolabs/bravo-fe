import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AddToSlack } from '../index';

afterEach(rtl.cleanup);
describe('Slack Button', () => {
  it('render Add to Slack Button ', () => {
    const { getByRole } = rtl.render(<AddToSlack />);
    const button = getByRole('link');
    expect(button).toBeVisible();
  });
});
