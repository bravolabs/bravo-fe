import React from 'react';
import * as rtl from '@testing-library/react';

import Cards from '../index';

afterEach(rtl.cleanup);
describe('Cards Component', () => {
  it('Should render all cards on home', () => {
    const { getByText } = rtl.render(<Cards />);
    getByText('bravo slack bot');
    getByText('give a bravo');
    getByText('receive a bravo');
  });
});
