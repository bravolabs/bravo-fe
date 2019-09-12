import React from 'react';
import { createStore } from 'redux';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testHelpers';
import SideNav from '../index';

afterEach(cleanup);
describe('Side Nav Component', () => {
  it('Should Have Bravo Logo', () => {
    const { getAllByRole, getByAltText } = renderWithRedux(<SideNav />);
    const links = getAllByRole('link');
    const logo = getByAltText('Bravo');
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0]).toContainElement(logo);
    expect(logo).toHaveAttribute('src', 'bravo-white.svg');
  });

  it('Should have avatar when user is not authenticated but installed app', () => {
    const reducer = {
      slack: {
        installSuccess: true,
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
