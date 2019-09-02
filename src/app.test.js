import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './utils/testHelpers';

describe('App Component', () => {
  it('should render without crashing', () => {
    const { container } = renderWithRedux(<App />);
    expect(container).toBeTruthy();
  });
});
