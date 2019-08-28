import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../index';

afterEach(rtl.cleanup);
describe('Home Component', () => {
  it('Should render home component', () => {
    const { container, getByText, getByAltText } = rtl.render(<Home />);
    getByAltText('Bravo logo');
    getByText('when the job is done, say bravo');
    getByText('bravo enables team members to easily acknowledge each other with one slack command');
    getByText('bravo slack bot');
    getByText('give a bravo');
    getByText('receive a bravo');
    expect(container.firstChild).toBeTruthy();
  });
});
