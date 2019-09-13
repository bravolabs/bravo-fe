import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import Home from '../index';
import { renderWithRedux } from '../../../utils/testHelpers';

afterEach(cleanup);
describe('Home Component', () => {
  it('Should render home component', () => {
    const { container, getByText, getByAltText } = renderWithRedux(<Home />);
    getByAltText('Bravo logo');
    getByText('when the job is done, say bravo');
    getByText('bravo enables team members to easily acknowledge each other with one slack command');
    getByText('install bravo');
    getByText('send a shoutout');
    getByText('receive a shoutout');
    expect(container.firstChild).toBeTruthy();
  });

  it('Should not render home component if LoggedIn', () => {
    const reducer = {
      slack: {
        isLoggedIn: true,
        user: {
          name: 'Example User',
        },
      },
    };
    const store = createStore(() => reducer);
    const { container } = renderWithRedux(<Home />, {
      store,
    });
    expect(container.firstChild).toBeTruthy();
  });
});
