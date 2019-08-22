import React from 'react';
import * as rtl from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Home from '../index';

afterEach(rtl.cleanup);
describe('Home Component', () => {
  it('Should render home component', () => {
    const { container } = rtl.render(<Home location={{ search: '' }} />);
    expect(container).toMatchSnapshot();
  });
});
