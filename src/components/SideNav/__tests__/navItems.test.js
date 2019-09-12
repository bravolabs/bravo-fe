import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import NavItem from '../NavItem';
import { renderWithRedux } from '../../../utils/testHelpers';
import NavItems from '../NavItems';

const attr = {
  icon: 'image.png',
  link: '/test-link',
  label: 'test label',
  fn: () => 'clicked',
};

afterEach(cleanup);
describe('Nav Item Component', () => {
  it('Should Render Nav item with all props correctly', () => {
    const { container, getByRole } = renderWithRedux(
      <NavItem link={attr.link} icon={attr.icon} label={attr.label} />
    );
    const parent = container.firstChild;
    const icon = getByRole('img');
    expect(parent).toHaveAttribute('href', attr.link);
    expect(icon).toHaveAttribute('src', attr.icon);
    expect(icon).toHaveAttribute('alt', attr.link);
  });

});
