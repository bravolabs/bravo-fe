import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Nav from '../HomeNav';

afterEach(cleanup);
describe('Home Nav Component', () => {
  it('render Home Nav Bar', () => {
    const { getByText } = render(<Nav />);
    getByText('bravo');
  });
});
