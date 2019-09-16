import React from 'react';
import { createStore } from 'redux';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testHelpers';
import SideNav from '../index';
import Logo from '../../../styling/atoms/SVGs/Logo';
import UIColors from '../../../styling/variables/UIColors';

afterEach(cleanup);
describe('Side Nav Component', () => {
  it('Should Have Bravo Logo', () => {
    const reducer = {
      slack: {
        installSuccess: true,
        user: {
          avatar: 'useravatar.jpg',
        },
      },
      ui: {
        sideNavActive: false,
      },
    };
    const store = createStore(() => reducer);
    const { getAllByRole } = renderWithRedux(<SideNav />, {
      store,
    });
    const links = getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[0].firstChild).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    //expect(logo).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
  });

  it('Should have avatar when user is not authenticated but installed app', () => {
    const reducer = {
      slack: {
        installSuccess: true,
        user: {
          avatar: 'useravatar.jpg',
        },
      },
      ui: {
        sideNavActive: false,
      },
    };
    const store = createStore(() => reducer);
    const { getByAltText } = renderWithRedux(<SideNav />, {
      store,
    });
    const avatar = getByAltText('user-avatar');
    expect(avatar).toHaveAttribute('src', 'useravatar.jpg');
  });

  it('Should have logout button instead of avatar when user is authenticated', () => {
    const reducer = {
      slack: {
        isLoggedIn: true,
      },
      ui: {
        sideNavActive: false,
      },
    };
    const store = createStore(() => reducer);
    const { getByText, getAllByRole } = renderWithRedux(<SideNav />, {
      store,
    });
    getByText('Logout');
    const links = getAllByRole('link');
    expect(links[5]).toHaveAttribute('href', '/logout');
  });
});
