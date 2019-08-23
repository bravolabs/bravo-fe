import React from 'react';
import * as rtl from '@testing-library/react';

import Nav from '../index';

afterEach(rtl.cleanup);
describe('Home Nav Component', () => {
  it('render Home Nav Bar', () => {
    const { getByText } = rtl.render(<Nav />);
    getByText('Bravo');
  });
});
