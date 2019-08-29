import React from 'react';
import { createStore } from 'redux';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testHelpers';
import Slack from '../index';

afterEach(cleanup);
describe('Add to Slack Component', () => {
  it('Should Render a bare screen when code is not given', () => {
    const { container } = renderWithRedux(<Slack location={{ search: '' }} />);
    expect(container.children.length).toBe(1);
  });

  it('Should render Loading screen', () => {
    const reducer = {
      slack: {
        loading: true,
      },
    };
    const store = createStore(() => reducer);
    const { container, getByText } = renderWithRedux(<Slack location={{ search: '' }} />, {
      store,
    });
    const loadScreen = container.firstChild;
    getByText('Loading your Profile');
    expect(container.children.length).toBe(2);
    expect(loadScreen).toBeVisible();
  });

  it('Should Render Success screen', () => {
    const reducer = {
      slack: {
        loading: false,
        user: {
          name: 'name example',
          avatar: 'user-avatar.jpg',
        },
        error: '',
      },
    };
    const store = createStore(() => reducer);
    const { container, getByText, getByAltText } = renderWithRedux(
      <Slack location={{ search: '' }} />,
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
        loading: false,
        user: null,
        error: 'Invalid_Code',
      },
    };
    const store = createStore(() => reducer);
    const { container, getByText, getByAltText } = renderWithRedux(
      <Slack location={{ search: '' }} />,
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
