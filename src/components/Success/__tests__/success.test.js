import React from 'react';
import * as rtl from '@testing-library/react';

import Success from '../index';

afterEach(rtl.cleanup);
describe('Add App to workspace success message', () => {
  it('render Success message', () => {
    const { getByText } = rtl.render(<Success />);
    getByText('Successfully added app to Slack!');
  });
});
