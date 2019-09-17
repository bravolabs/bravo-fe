import React from 'react';
import { createStore } from 'redux';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testHelpers';
import Slack from '../index';

afterEach(cleanup);
describe('Add to Slack Component', () => {
  it('Should not render if state is not provided', () => {
    const { container } = renderWithRedux(<Slack location={{ search: '' }} />);
    expect(container.children.length).toBe(0);
  });

  it('Should render Loading screen', () => {
    const reducer = {
      slack: {
        isLoading: true,
      },
      ui: {
        sideNavActive: false,
      },
    };
    const store = createStore(() => reducer);
    const { container, getByText } = renderWithRedux(
      <Slack location={{ search: 'state=test' }} />,
      {
        store,
      }
    );

    const loadScreen = container.firstChild;
    getByText('When the work is done, say bravo...');
    expect(container.children.length).toBe(2);
    expect(loadScreen).toBeVisible();
  });

  it('Should Render Success screen', () => {
    const reducer = {
      slack: {
        installSuccess: true,
        user: {
          name: 'name example',
          avatar: 'user-avatar.jpg',
        },
        error: '',
      },
      ui: {
        sideNavActive: false,
      },
    };
    const store = createStore(() => reducer);
    const { container, getByText, getByAltText } = renderWithRedux(
      <Slack location={{ search: 'state=test' }} />,
      {
        store,
      }
    );
    const successScreen = container.firstChild;
    getByAltText('bravo party');
    getByText('You have successfully installed bravo slack app');
    expect(container.children.length).toBe(2);
    expect(successScreen).toBeVisible();
  });

  it('Should render error screen with error message', () => {
    const reducer = {
      slack: {
        isLoading: false,
        user: null,
        error: 'Invalid_Code',
      },
      ui: {
        sideNavActive: false,
      },
    };
    const store = createStore(() => reducer);
    const { container, getByText, getByAltText } = renderWithRedux(
      <Slack location={{ search: 'state=test' }} />,
      {
        store,
      }
    );
    const errorScreen = container.firstChild;
    getByAltText('bravo party');
    getByText('Invalid_Code');
    expect(container.children.length).toBe(2);
    expect(errorScreen).toBeVisible();
  });
});
