import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loader from '../index';

afterEach(cleanup);
describe('Render Component', () => {
  it('Should render Ring loader', () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toBeTruthy();
  });
});
