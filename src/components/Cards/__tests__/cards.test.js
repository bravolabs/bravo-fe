import React from 'react';
import { cleanup, render } from '@testing-library/react';

import HomeCards from '../HomeCards';

afterEach(cleanup);
describe('Cards Component', () => {
  it('Should render all cards on home', () => {
    const { getByText } = render(<HomeCards />);
    getByText('install bravo');
    getByText('send a shoutout');
    getByText('receive a shoutout');
  });
});
