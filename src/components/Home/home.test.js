import React from 'react';
import renderer from 'react-test-renderer';

import Home from './index';

describe('Home', () => {
  it('snapshot renders', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
