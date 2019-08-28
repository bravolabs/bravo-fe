import React from 'react';
import { createStore } from 'redux';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testHelpers';
import SideNav from '../index';

afterEach(cleanup);
describe('Side Nav Component', () => {
  it('Should render components in side nav properly', () => {
    const { getByRole, getByAltText } = renderWithRedux(<SideNav />);
    const logoLink = getByRole('link');
    const logo = getByAltText('Bravo');
    const avatar = getByAltText('user-avatar');
    expect(logoLink).toHaveAttribute('href', '/');
    expect(logoLink).toContainElement(logo);
    expect(logo).toHaveAttribute('src', 'bravo-white.svg');
    expect(avatar).toHaveAttribute('src', 'bravo-white.svg');
  });

  it('Should update avatar with user avatar from redux store', () => {
    const reducer = {
      slack: {
        user: {
          avatar: 'useravatar.jpg',
        },
      },
    };
    const store = createStore(() => reducer);
    const { getByAltText } = renderWithRedux(<SideNav />, {
      store,
    });
    const avatar = getByAltText('user-avatar');
    expect(avatar).toHaveAttribute('src', 'useravatar.jpg');
  });
});
